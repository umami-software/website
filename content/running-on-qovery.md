# Running on Qovery

[Qovery](https://qovery.com) is a fully-managed cloud platform that runs on your AWS, GCP, Azure and Digital Ocean account where you can host static sites, backend APIs, databases, cron jobs, and all your other apps in one place.

Qovery include the following features:

- Continuous, automatic builds & deploys from GitHub, Bitbucket, and GitLab.
- Automatic SSL certificates through [Let's Encrypt](https://letsencrypt.org).
- Free managed PostgreSQL instance.
- Free SSD storage.
- Unlimited collaborators.
- Unlimited [custom domains](https://docs.qovery.com/guides/getting-started/setting-custom-domain/).

## Setup

Follow the procedure below to set up a Umami on Qovery:

### 1. Create a Qovery account.

Visit the [Qovery dashboard](https://console.qovery.com) to create an account if you don't already have one.

### 2. Create a project

Click on "Create a new project" and give a name to your project. 

Click on "Next".

### 3. Add an application

Click on "Create an application" then choose "I have an application" and select your GitHub or GitLab repository where your Hugo site is located.

Click on "Next".

Skip adding services for static website.

### 4. Add a PostgreSQL database

Select "PostgreSQL" among the services.

Select the version.

Give a name to your PostgreSQL databse.

Click on "Next".

### 5. Add a storage

Select "Storage" among the services.

Give a name to your storage.

Select the storage type between Slow HDD, HDD, SSD, and Fast SSD. (SSD is recommended).

Select the size.

Give a mount point.

### 6. Deploy

Click on "Deploy".

Your app should be deployed: you can see the status in real time by clicking on deployment logs.

## Custom domains

Add your own domains to your site easily using Qovery's [custom domains](https://docs.qovery.com/guides/getting-started/setting-custom-domain/) guide.

## Support

Chat with Qovery developers on [Discord](https://discord.qovery.com) if you need help.
