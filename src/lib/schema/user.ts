export type User = {
    id: string;
    username: string;
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        street: string;
        country: string;
        city: string;
        state: string;
        postcode: string;
    };
    email: string;
    phone: string;
    cell: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}


export type UserColumnDef = {
    id: string,
    thumbnail: string,
    title: string,
    name: string,
    email: string,
    phone: string,
    country: string,
    actions: any
}