# Running on Supabase

[Supabase](https://supabase.com/) is a open source Firebase alternative built on the Postgres database.

## Setup

1. Create a project on Supabase with a given name in a region close to where you will be hosting your Umami project.
2. Get the database connection string from the **Settings > Database** page, then scroll to the bottom for the **Connection Pooling** section and copy the **Connection string**. It should look something like this: `postgres://postgres:[YOUR-PASSWORD]@host:6543/postgres`
3. Add `DATABASE_URL` and `HASH_SALT` (any random string) to you `.env` file:

```
DATABASE_URL=postgres://postgres:[YOUR-PASSWORD]@host:6543/postgres
HASH_SALT=any-random-string
```

5. You can create the tables by using pgsql or by copying and pasting the content of the `sql/schema.postgresql.sql` file into the Supabase Dashboard SQL editor.

```sh
# pgsql
pgsql -h hostname -U postgres -d postgres -f sql/schema.postgresql.sql
```

6. You should now be able to build and start Umami (`npm run build` followed by `npm start`). 
7. Follow the **Getting started** guide starting from the [Login](/docs/login) step and be sure to change the default password.
