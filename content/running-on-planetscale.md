# Running on PlanetScale

[PlanetScale](https://planetscale.com/) is a MySQL-compatible serverless database platform. PlanetScale uses [Vitess](https://vitess.io/) which doesn't support foreign keys and therefore we have to modify `schema.mysql.sql` as explained below.

## Setup

1. Fork the [https://github.com/mikecao/umami](https://github.com/mikecao/umami) project to your GitHub account.
2. Create a database on PlanetScale called `umami-db` and get its connection string (Hint: select "Prisma" from the "Connect with" menu). It should look something like this: `mysql://username:password@host/umami-db?sslaccept=strict`
3. Add `DATABASE_URL` and `HASH_SALT` (any random string) to you `.env` file:
```
DATABASE_URL=mysql://username:password@host/umami-db?sslaccept=strict
HASH_SALT=any-random-string
```
4. Open `schema.mysql.sql` and delete all lines starting with `foreign key` and make sure to delete the dangling commas.
5. Download the [PlanetScale CLI](https://github.com/planetscale/cli/releases) and authenticate with `pscale auth login`.
6. Create the tables by running the following command on the root of the project: `pscale shell umami-db main < sql/schema.mysql.sql`.
7. You should now be able to build and start Umami (`npm run build` followed by `npm start`).
6. Follow the **Getting started** guide starting from the [Login](/docs/login) step and be sure to change the default password.

## Troubleshooting

If are getting an error like the following example:

```
PrismaClientInitializationError: Can't reach database server at `host.aws-region.psdb.cloud`:`3306`
```

You can try add a connection timeout query parameter on your `DATABASE_URL`:

```
DATABASE_URL=mysql://username:password@host/umami-db?sslaccept=strict&connect_timeout=300
```

