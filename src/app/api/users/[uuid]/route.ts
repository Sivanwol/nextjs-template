import { NextRequest, NextResponse } from "next/server";
import Joi from "joi";
import validate from '@app/lib/middlewares/validation';
import { getUserByUUID } from '@app/models/users';
type UserData = {
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
type ResponseData = {
    user: UserData
}
export async function GET(request: NextRequest,
    { params }: { params: { uuid: string } }) {
    const user = await getUserByUUID(params.uuid, true) as UserData;
    return NextResponse.json({
        user,
    });
}