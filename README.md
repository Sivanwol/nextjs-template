This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Well have few commands will talk in point of yarn CMD but can do same in npm run CMD

* build - will build the project under .next folder
* start - will run PROD file
* generate - any change to file called `src/lib/schema.ts` will need generate the sql for the system
* migrate - will run the changes on db
* lint - need say more?
* dev - local dev server
## ENV PARAMS
what important here as follow:

this params u need setup based you local db
POSTGRES_URL=postgres://postgres:postgres@127.0.0.1:5432/postgres
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=
----
this need setup local address of the API route for fetching data from the backend (i saw there is better way but don't have time to check it out with this framework)

NEXT_PUBLIC_API_URL=http://localhost:3000/api
## Cloud as the setup

### Vercel
easiest i hook up this to my github on vercel and setup db for it and that it only need setup the local param

### AWS
same on service of amplify just connect the github setup the ENV params and you done ho also setup RDS.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



