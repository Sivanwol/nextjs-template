import { NextRequest, NextResponse } from "next/server";
import { getUsers } from "@app/models/users";
type UserData = {
  externalId: string;
  email: string;
  fullName: string;
  username: string;
  gender: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  thumbnail: string;
};
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name") || "";
  const offset = searchParams.get("offset") || "0";
  try {
    const data = await getUsers(name, parseInt(offset));
    const users = data.users.map((u) => {
      u.password = "hidden";
      return u as UserData;
    });
    return NextResponse.json({
      users,
      newOffset: data.newOffset,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
