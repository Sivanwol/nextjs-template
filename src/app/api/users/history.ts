import { NextApiRequest, NextApiResponse } from 'next';
import Joi from "joi";
import validate from '@app/lib/middlewares/validation';
import { getUsers } from '@app/models/users';
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
    users: UserData[],
    newOffset: number | null
}
const handler = async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'GET') {
        const query = req.query;
        const { name, offset } = query;
        const data = await getUsers(name as string, parseInt(offset as string) || 0);
        const users = data.users.map(u => {
            u.password = 'hidden';
            return u as UserData;
        });
        res.status(200).json({
            users,
            newOffset: data.newOffset,
        });
    } else {
        res.status(405).end()
    }
}
const schema = Joi.object({
    name: Joi.string().min(4).max(100),
    offset: Joi.number().min(0).required(),
});
export default validate({ query: schema }, handler);