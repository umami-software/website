# Running on CapRover

[CapRover](https://caprover.com) is an extremely easy to use app/database deployment & web server manager for your NodeJS, Python, PHP, ASP.NET, Ruby, MySQL, MongoDB, PostgreSQL, WordPress (and etc...) applications!
It's blazingly fast and very robust as it uses Docker, nginx, LetsEncrypt and NetData under the hood behind its simple-to-use interface.

- CLI for automation and scripting
- Web GUI for ease of access and convenience
- No lock-in! Remove CapRover and your apps keep working!
- Docker Swarm under the hood for containerization and clustering
- Nginx (fully customizable template) under the hood for load-balancing
- Let's Encrypt under the hood for free SSL (HTTPS)

## Setup

Setup of CapRover Umami is fairly easy. Follow the steps below to set up a Umami on CapRover:

### 1. Visit your CapRover Dashboard

Login to your existing capcover instance account at `captain.your-sub-domain.your-domain.xx`

If you don't have an existing CapRover instance check out their docs at [CapRover - Get Started](https://caprover.com/docs/get-started.html)

### 2. Create app from template

Click on the "Apps" section of your CapRover instance.
Now select "One-Click Apps/Databases" and search for Umami you will find 3 option (`umami_postgresql`|`umami_mysql`|`umami_only`).

`umami_postgresql` will create umami with postgresql database.

`umami_mysql` will create umami with mysql database.

and `umami_only` will create umami alone and you need run your database infrastructure on your own and provide the database credentials in the setup.

### 3. Setup Umami with database

After selecting `umami_postgresql` or `umami_mysql` from the CapRover One-Click Apps you'll be prompted with a setup page where you can specify some env variables. Notice how most of them are already configured.

- `App Name` is the display name for your Umami instance in CapRover
- `PostgreSQL or MYSQL Version` can be any PostgreSQL OR MYSQL version available on [PostgreSQL - Docker Hub](https://hub.docker.com/_/postgres) or [MYSQL - Docker Hub](https://hub.docker.com/_/mysql). The default value has successfully been tested to work with Umami.
- `CapRover Umami Version` refers to the CapRover Umami latest release found on [umami release page](https://github.com/mikecao/umami/releases). Caprover Umami will use the official docker image that been released for specific database that you chose. instead of using the version number like `v.1.33.x` you can use `latest` to build using the latest version of umami.
- `Database password` provides the used password for your database. There will always be a default value ready for you.
- Optional: `Arguments for 'PostgreSQL initdb'` you can also provide arguments for PostgreSQL initdb like for example `--data-checksums` this option only available in `umami_postgresql`

Now just click on "Deploy" to start the setup of your CapRover Umami instance with Database service.
Please do not leave the page until it's done.

### 4. Setup Umami without database services

in some scenarios you may need to manage your database service on your own or use a remote database service for your umami application for doing that you can use `umami_only` CapRover app.

before setting up this application you need create a database service using MYSQL or PostgreSQL.

after you settings your database click on `umami_only` in CapRover and fill the variables in the Setup :

- `App Name` is the display name for your Umami instance in CapRover
- `CapRover Umami Version` refers to the CapRover Umami latest release found on [umami release page](https://github.com/mikecao/umami/releases). Caprover Umami will use the official docker image that been released for specific database that you chose. instead of using the version number like `v.1.33.x` you can use `latest` to build using the latest version of umami.
- `Database Type` set to `postgresql` or `mysql` according to your database service.
- `Database Remote URL` your database service remote url that umami can use to connect to the database. if your database is in your CapRover network use `srv-captain--appName` 
- `Databse User` your database user
- `Database Table` the table that you created for your umami application
- `Database Password` your database password

Now just click on "Deploy" to start the setup of your CapRover Umami instance.

Please do not leave the page until it's done.

### 4. Final checkouts

You're now able to login to your Umami deployment at `app-name.your-sub-domain.your-domain.xx` as described in the [Login](/docs/login) section. Please immediately change your password on the profile page.

### 5. Updating existing umami instance

first make a backup from your database before doing the update.

after you make a backup from your database for updating your existing umami instance just go to the CapRover panel and select your umami app.

go to `Deployment` tab and scroll down to `Deploy via ImageName` and deploy the desired version from (umami Docker Registery)[https://github.com/mikecao/umami/pkgs/container/umami]

NOTE: do not forget to select the right docker image according to your database. usually the mysql images prefixed with `mysql_` and postgresql images prefixed with `postgresql_`.


## Support

create an issue on [Github](https://github.com/caprover/one-click-apps/issues) .
