# Hosting

There are many ways you can get Umami up and running.
All you need is a database (either [MySQL](https://www.mysql.com/) or [Postgresql](https://www.postgresql.org/)) 
and server that can run [Node.js](https://nodejs.org/) (10.13 or newer).

## Single server

In this setup you would have the database and web server running on the same machine. You can optionally run Umami behind
a dedicated web server like [Nginx](https://www.nginx.com/) or [Apache](https://httpd.apache.org/) and proxy requests to Umami.

## Separate database and web server

In this setup you have a database running on it's own machine that allows remote connections. Your web server is running on a different
machine with Umami installed and connects to the database remotely to store and retrieve data.

## App hosting

Here are a couple app hosting providers that are fully capable of running Umami. You will still need a database running elsewhere. Vercel and Netlify both have a free tier available.

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Render](https://render.com/)

## Managed databases

A managed database is where the host provides you with a running database that you don't have to install or maintain. Here are some
providers for managed databases.

- [DigitalOcean](https://www.digitalocean.com/products/managed-databases/)
- [Hetzner (EU)](https://www.hetzner.com/cloud)
- [Scaleway (EU)](https://www.scaleway.com/en/database/)
- [Amazon Web Services](https://aws.amazon.com/products/databases/)
- [Google Cloud SQL](https://cloud.google.com/sql/)
- [Microsoft Azure](https://azure.microsoft.com/en-us/services/#databases)
- [Render](https://render.com/pricing#databases)

## Resources

Here a couple helpful resources for getting started.

### Web servers

- [How to install Nginx on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04)
- [How to install Apache Web Server on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-18-04)
- [Understanding Nginx HTTP Proxying, Load Balancing, Buffering, and Caching](https://www.digitalocean.com/community/tutorials/understanding-nginx-http-proxying-load-balancing-buffering-and-caching)

### Databases

- [How to install Postgresql on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)
- [How to install MySQL on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04)