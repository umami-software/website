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

Setup of [CapRover Umami](https://github.com/tschannik/caprover-umami) is fairly easy. Follow the steps below to set up a Umami on CapRover:

### 1. Visit your CapRover Dashboard

Login to your existing capcover instance account at `captain.your-sub-domain.your-domain.xx`

If you don't have an existing CapRover instance check out their docs at [CapRover - Get Started](https://caprover.com/docs/get-started.html)

### 2. Create app from template

Click on the "Apps" section of your CapRover instance.
Now select "One-Click Apps/Databases" and search for Umami and select it.

### 3. Setup Umami

After selecting Umami from the CapRover One-Click Apps you'll be prompted with a setup page where you can specify some env variables. Notice how most of them are already configured.

- `App Name` is the display name for your Umami instance in CapRover
- `PostgreSQL Version` can be any PostgreSQL version available on [PostgreSQL - Docker Hub](https://hub.docker.com/_/postgres). The default value has successfully been tested to work with Umami.
- `CapRover Umami Version` refers to the CapRover Umami package found on [Github](https://github.com/tschannik/caprover-umami). CapRover Umami ensures the correct setup of Umami on CapRover by pulling a PostgreSQL build of Umami and some checks to prevent whiping your data on restart or updates. Please have a look at the supported versions.
- `Potgress Database password` provides the used password for your PostgreSQL database. There will always be a default value ready for you.
- Optional: `Arguments for 'PostgreSQL initdb'` you can also provide arguments for PostgreSQL initdb like for example `--data-checksums`

Now just click on "Deploy" to start the setup of your CapRover Umami instance.
Please do not leave the page until it's done.

### 4. Final checkouts

You're now able to login to your Umami deployment at `app-name.your-sub-domain.your-domain.xx` as described in the [Login](/docs/login) section. Please immediately change your password on the profile page.

## Support

Chat with the CapRover Umami developers on [Github](https://github.com/tschannik/caprover-umami) if you need help or want to request a new version. We try to regularly update them ourselves.
