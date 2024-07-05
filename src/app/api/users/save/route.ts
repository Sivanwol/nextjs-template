import { NextRequest, NextResponse } from "next/server";
import Joi from "joi";
import { getUser, insertUser } from "@app/models/users";

type ResponseData = {
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

const schema = Joi.object({
  uuid: Joi.string().required(),
  userName: Joi.string().min(4).max(100).required(),
  title: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().max(550).required(),
  name: Joi.string().min(4).max(100).required(),
  phone: Joi.string().max(20).required(),
  country: Joi.string().min(2).max(50).required(),
  city: Joi.string().max(100).required(),
  address: Joi.string().max(200).required(),
  thumbnail: Joi.string().max(500).required(),
  gender: Joi.string().max(10).required(),
});
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log(data);
    await schema.validateAsync(data);
    const resultId = await insertUser(data);
    const user = (await getUser(resultId, true)) as ResponseData;
    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
