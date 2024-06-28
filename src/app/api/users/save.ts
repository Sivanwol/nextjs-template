import { NextApiRequest, NextApiResponse } from 'next';
import Joi from "joi";
import validate from '@app/lib/middlewares/validation';
import { getUser, insertUser } from '@app/models/users';

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
const handler = async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'POST') {
        const resultId  = await insertUser(req.body);
        const user = await getUser(resultId, true) as ResponseData;
        res.status(200).json(user);
    } else {
        res.status(405).end()
    }
}
const schema = Joi.object({
    userName: Joi.string().min(4).max(100).required(),
    email: Joi.string().email().max(550).required(),
    name: Joi.string().min(4).max(100).required(),
    password: Joi.string().min(6).max(30).required(),
    phone: Joi.string().max(20).required(),
    country: Joi.string().max(50).required(),
    city: Joi.string().max(100).required(),
    address: Joi.string().max(200).required(),
    thumbnail: Joi.string().max(500).required(),
    gender: Joi.string().max(10).required(),
  });
export default validate({ body: schema }, handler);