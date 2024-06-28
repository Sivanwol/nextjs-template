import { NextRequest, NextResponse } from "next/server";
import { deleteUserById, getUserByUUID, updateUser } from '@app/models/users';
import Joi from "joi";
type UserData = {
    externalId: string,
    email: string,
    fullName: string,
    title: string,
    username: string,
    gender: string,
    phone: string,
    country: string,
    city: string,
    address: string,
    thumbnail: string
}
type ResponseData = {
    externalId: string,
    email: string,
    fullName: string,
    username: string,
    gender: string,
    phone: string,
    country: string,
    city: string,
    address: string,
    thumbnail: string
}

const schema = Joi.object({
    title: Joi.string().min(2).max(100).required(),
    name: Joi.string().min(4).max(100).required(),
});
export async function GET(request: NextRequest,
    { params }: { params: { uuid: string } }) {
    const user = await getUserByUUID(params.uuid, true) as UserData;
    return NextResponse.json({
        user,
    });
}

export async function POST(request: NextRequest,
    { params }: { params: { uuid: string } }) {
    try {
        const user = await getUserByUUID(params.uuid, true) as UserData;
        await schema.validateAsync(user);
        if (user === null) {
            return NextResponse.json({ menubar: 'User not found' }, { status: 404 });
        }
        await updateUser(params.uuid, user);
        return NextResponse.json({
            user,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: error }, { status: 400 });
    }
}
export async function DELETE(request: NextRequest,
    { params }: { params: { uuid: string } }) {
    const user = await getUserByUUID(params.uuid);
    if (user === null) {
        return NextResponse.json({ menubar: 'User not found' }, { status: 404 });
    }
    await deleteUserById(user.id);
    return NextResponse.json({ menubar: 'User deleted' }, { status: 200 });
}