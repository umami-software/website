# Installation

## Installing from source

### Requirements

- A server with Node.js version 12 or newer
- A database. Umami supports [MySQL](https://www.mysql.com/) and [Postgresql](https://www.postgresql.org/) databases.

### Install Yarn

```
npm install -g yarn
```

### Get the source code and install packages

```
git clone https://github.com/mikecao/umami.git
cd umami
yarn install
```

### Configure umami

Create an `.env` file with the following

```
DATABASE_URL=(connection url)
```

The connection url is in the following format:
```
postgresql://username:mypassword@localhost:5432/mydb

mysql://username:mypassword@localhost:3306/mydb
```

### Build the application

```bash
yarn build
```

### Create database tables

```bash
yarn update-db
```

This will also create a login account with username **admin** and password **umami**.

### Start the application

```bash
yarn start
```

By default this will launch the application on `http://localhost:3000`. You will need to either
[proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/) requests from your web server
or change the [port](https://nextjs.org/docs/api-reference/cli#production) to serve the application directly.

## Running Umami

You can simply run `yarn start` to start Umami, but it's highly recommended you use a process manager like [PM2](https://pm2.keymetrics.io/) which will handle restarts for you.

To run with PM2:

```
yarn global add pm2
cd umami
pm2 start yarn --name umami -- start 
pm2 startup
pm2 save
```

## Installing with Docker

To build the umami container and start up a Postgres database, run:

```bash
docker-compose up
```

Alternatively, to pull just the Umami Docker image with PostgreSQL support:

```bash
docker pull ghcr.io/mikecao/umami:postgresql-latest
```

Or with MySQL support:

```bash
docker pull ghcr.io/mikecao/umami:mysql-latest
```
