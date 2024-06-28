import { NextApiRequest, NextApiResponse } from 'next';
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
const handler = async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'GET') {
        const query = req.query;
        const { uuid } = query;
        const user = await getUserByUUID(uuid as string, true) as UserData;
        res.status(200).json({
            user,
        });
    } else {
        res.status(405).end()
    }
}



const schema = Joi.object({
    uuid: Joi.string().min(4).max(100),
});
export default validate({ query: schema }, handler);