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
export async function insertUser(user: User) {
    const { resultId } = (await db.insert(users).values({
        externalId: user.id,
        email: user.email,
        fullName: user.name.first +'' + user.name.last,
        username: user.username,
        password:  generatePasswordHash(`${user.username}_1234`),
        gender: user.gender,
        phone: user.phone,
        country: user.location.country,
        city: user.location.city,
        address: user.location.street,
        thumbnail: user.picture.thumbnail
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