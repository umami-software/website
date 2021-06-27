# Running on Railway

[Railway](https://railway.app/) is attempting to build software development infrastructure for humans. It's founded with the core ideology that building software should be "Take what you need, leave what you don't" and that the current iteration of tools for software development is far too complicated for current generations of developers, let alone the ones that come next. As a result, Railway handles your builds, deployments, scaling, and management of infrastructure; from development to production!

Railway provides a free hosting services which allows you to deploy Umami and set up a PostgreSQL database so you can have your self-hosted version at the click of a button.

## Setup

### Website and Database

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2Frailwayapp-starters%2Fumami&plugins=postgresql&envs=HASH_SALT&HASH_SALTDesc=Any+random+string+used+to+generate+unique+values+for+your+installation)

Click the button above to deploy your self-hosted version of the Umami website along with an automagically provisioned PostgreSQL database.

You will be asked to add the `HASH_SALT` enviroment variable which is a random string used to generate unique values for your installation.

### Create database tables

- Once you've deployed your project, clone it locally using Git.
- Use the [Railway CLI](https://docs.railway.app/cli/quick-start) to link your local setup to your Railway project by running `railway link`.
- Use `railway run psql -h hostname -U username -d databasename -f sql/schema.postgresql.sql`
  - You can view your `hostname`, `username`, and `databasename` using `railway variables` or from your project dashboard
  - This command installs all the tables with the required scripts and creates a login account with the username `admin` and password `umami`
- You should now be able to visit your Umami dashboard and set up sites that you want to track analytics for
  - You can find the URL in your project dashboard which you can visit by running `railway open`

### Notes

- Make sure you [change your password](https://umami.is/docs/login) after you log in for the first time
- Read more about [adding a website](https://umami.is/docs/add-a-website) and [collecting data](https://umami.is/docs/collect-data) here
- [Here](https://umami-0ce3be-production.up.railway.app/share/QFjN7Inl/LTV) is a link to a shared dashboard hosted on Railway

## Running on Railway from a forked repository

The previously described method is the quickest and easiest way to get Umami up and running on Railway. However, this creates a new repository with a single commit under your Github account. You may want to use a forked repository instead to be able to conveniently receive updates from (or contribute pull requests to) the Umami source respository via github

### Set up Railway project

- Fork the [Umami repository](https://github.com/mikecao/umami).
- Create an account on [Railway](https://railway.app/) connected to Github.
- If you wish, you can give Railway permission only to your Umami fork repository when linking your Github account.
- From the dashboard page click **New Project > Deploy from repo**.
- Choose your forked Umami repository and select the **master** branch, click **Deploy**.

This initial deploy will succeed, but attempting to open the app will show "Bad Gateway" until you follow the rest of these steps.

### Database and Deploy

- Click **Add Plugin** and select **Add PostgreSQL Plugin**
- Click **Variables** and add `HASH_SALT`, set its value to a random string (this is a random string used to generate unique values for your installation). Click **Add**.
- Add a second variable called `PORT`, set its value to a valid port number (eg: `3000`). Click **Add**.

Adding the variables should trigger a re-deploy, and clicking the app link should get you to the login page of your Umami instance. 

Follow the remaining instructions above from [Create database tables](#create-database-tables) to finish setting up your Umami instance on Railway.
