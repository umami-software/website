# Running on Vercel

[Vercel](https://vercel.com/) is the company behind the framework [Next.js](https://nextjs.org/) which is used by Umami.
They also provide a free hosting service which is ideal for Next.js applications.

In this setup, you already have a database server running and accepting remote connections. You can follow the
[Running on DigitalOcean](/docs/running-on-digitalocean) guide up to the installing Umami step to get a database up and running,
or you can check out the **Managed databases** section under the [Hosting](/docs/hosting) section.

## Setup

1. Create an account on [Vercel](https://vercel.com/).
1. From the dashboard page click **Import Project**.
1. Enter [https://github.com/mikecao/umami](https://github.com/mikecao/umami) as the Git repository.
This will fork the project on your Github account.
1. Add the required environment variables `DATABASE_URL` and `HASH_SALT`. These should be the same values in your
`.env` configuration file.
1. Deploy and visit your application at `<deploy-id>.vercel.app`.
1. Follow the **Getting started** guide starting from [Login](/docs/login).