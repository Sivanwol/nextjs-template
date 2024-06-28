import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { eq, ilike, and } from "drizzle-orm";
import { db } from "@app/lib/db";
import { users } from "@app/lib/schema";
import crypto from "crypto";
import { User } from "@app/lib/schema/user";

const SALT_ROUNDS = 10;
const generatePasswordHash = (password: string) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');

    return hash;
}
export type SelectUser = typeof users.$inferSelect;

export async function getUsers(
    search: string,
    offset: number
): Promise<{
    users: SelectUser[];
    newOffset: number | null;
}> {
    // Always search the full table, not per page
    if (search) {
        return {
            users: await db
                .select()
                .from(users)
                .where(ilike(users.fullName, `%${search}%`))
                .limit(1000),
            newOffset: null,
        };
    }

    if (offset === null) {
        return { users: [], newOffset: null };
    }

    const moreUsers = await db.select().from(users).limit(20).offset(offset);
    const newOffset = moreUsers.length >= 20 ? offset + 20 : null;
    return { users: moreUsers, newOffset };
}

export async function deleteUserById(id: number) {
    await db.delete(users).where(eq(users.id, id));
}
export async function getUser(id: number, isOutput: boolean = false) {
    const res = await db.select().from(users).where(eq(users.id, id)).limit(1);
    if (res.length === 0) {
        return null;
    }
    if (isOutput) {
        res[0].password = null;
    }
    return res[0];
}
export async function getUserByUUID(id: string, isOutput: boolean = false) {
    const res = await db.select().from(users).where(eq(users.externalId, id)).limit(1);
    if (res.length === 0) {
        return null;
    }
    if (isOutput) {
        res[0].password = null;
    }
    return res[0];
}
export async function updateUser(userId: string, user:any) {
    console.log(user);
    await db.update(users).set({
        title: user.title,
        fullName: user.name,
    }).where(eq(users.externalId, userId));
}
export async function insertUser(user: any) {
    console.log(user);
    const { resultId } = (await db.insert(users).values({
        externalId: user.uuid,
        email: user.email,
        title: user.title,
        fullName: user.name,
        username: user.userName,
        password:  generatePasswordHash(`${user.username}_1234`),
        gender: user.gender,
        phone: user.phone,
        country: user.country,
        city: user.city,
        address: user.address,
        thumbnail: user.thumbnail
    }).returning({ resultId: users.id}))[0];
    return resultId;
}

export async function hasUserWithEmail(email: string) {
    if (!email) {
        return false;
    }
    const user = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        .limit(1);
    if (user.length > 0) {
        return true;
    }
    return false;
}

export async function authenticateUser(email: string, password: string) {
    if (!email && !password) {
        return null;
    }
    const hashPassword = generatePasswordHash(password);
    const user = await db
        .select()
        .from(users)
        .where(and(
            eq(users.email, email),
            eq(users.password, hashPassword)
        ))
        .limit(1);
    if (user.length > 0) {
        user[0].password = 'hidden';
        return user[0];
    }
    return null;
}