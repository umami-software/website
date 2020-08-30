# Running on Vercel

[Vercel](https://vercel.com/) is the company behind the framework [Next.js](https://nextjs.org/) which is used by Umami.
They also provide a free hosting service which is ideal for Next.js applications.

In this setup, you already have a database server running and accepting remote connections. If you don't already have a
database can follow the [Running on DigitalOcean](/docs/running-on-digitalocean) guide to get a database up and running. You
can also check out the **Managed databases** section under [Hosting](/docs/hosting).

## Setup

1. Create an account on [Vercel](https://vercel.com/).
1. From the dashboard page click **Import Project**.
1. Enter [https://github.com/mikecao/umami](https://github.com/mikecao/umami) as the Git repository.
This will fork the project on your Github account.
1. Add the required environment variables `DATABASE_URL` and `HASH_SALT`. These should be the same values as your
`.env` configuration file.
1. Deploy and visit your application at `<deploy-id>.vercel.app`.
1. Follow the **Getting started** guide starting from [Login](/docs/login).