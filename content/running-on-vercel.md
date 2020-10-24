# Running on Vercel

[Vercel](https://vercel.com/) is the company behind the framework [Next.js](https://nextjs.org/) which is used by Umami.
They also provide a free hosting service which is ideal for Next.js applications.

In this setup, you already have a database server running and accepting remote connections. If you don't already have a
database can follow the [Running on DigitalOcean](/docs/running-on-digitalocean) guide to get a database up and running. You
can also check out the **Managed databases** section under [Hosting](/docs/hosting).

## Setup [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fmikecao%2Fumami&env=DATABASE_URL,HASH_SALT&envDescription=These%20values%20are%20defined%20in%20the%20configure%20Umami%20step%20from%20Install&envLink=https%3A%2F%2Fumami.is%2Fdocs%2Finstall&project-name=umami&repo-name=umami)
Automate steps 1-5 using the button above

1. Fork the [https://github.com/mikecao/umami](https://github.com/mikecao/umami) project to your GitHub account.
2. Create an account on [Vercel](https://vercel.com/). 
3. From the dashboard page click **Import Project** then specify the URL to your fork of the project on GitHub.
4. Add the required environment variables `DATABASE_URL` and `HASH_SALT`. These values are defined in the
**Configure umami** step from [Install](/docs/install).
5. Deploy and visit your application at `<deploy-id>.vercel.app`.
6. Follow the **Getting started** guide starting from the [Login](/docs/login) step and be sure to change the default password.
