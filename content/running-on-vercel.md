# Running on Vercel

[Vercel](https://vercel.com/) is the company behind the framework [Next.js](https://nextjs.org/) which is used by Umami.
They also provide a free hosting service which is ideal for Next.js applications.

In this setup, you already have a database server running and accepting remote connections. If you don't already have a
database can follow the [Running on DigitalOcean](/docs/running-on-digitalocean) guide to get a database up and running. You
can also check out the **Managed databases** section under [Hosting](/docs/hosting).

## Setup
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fmikecao%2Fumami&env=DATABASE_URL,HASH_SALT&envDescription=These%20values%20are%20defined%20in%20the%20configure%20Umami%20step%20from%20Install&envLink=https%3A%2F%2Fumami.is%2Fdocs%2Finstall&project-name=umami&repo-name=umami)

Use the button above to set up Umami with Vercel. After going through the instructions and setting up on Vercel, follow the Getting started guide starting from the [Login](https://github.com/saharsh/umami.is/blob/master/docs/login) step and be sure to change the default password.
