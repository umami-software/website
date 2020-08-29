# Running on DigitalOcean

[DigitalOcean](https://m.do.co/c/c9ebc1c0928d) is an affordable cloud hosting provider that will let you host
your own Umami setup. In this setup we are going to install
[Ubuntu](https://ubuntu.com/), a [Postgresql](https://www.postgresql.org/) database,
an [Nginx](https://www.nginx.com/) webserver, [Node.js](https://nodejs.org/) and Umami.

For personal use, you can start with a single $5 a month cloud server 
and scale up as needed. You can use this [link](https://m.do.co/c/c9ebc1c0928d)
to get a $100 credit for the first 60 days.

## Install Ubuntu

- [Initial server setup with Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04)

## Install a database

- [How to install Postgresql on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)

## Install Nginx

- [How to install Nginx on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04)

## Install Node.js

- [How to install Node.js on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04)

## Install Umami

- See [Install](/docs/install) under **Getting started**

## Running Umami

You can simply run `npm start` to start Umami, but it's highly recommended you use a process manager like [PM2](https://pm2.keymetrics.io/) which will handle restarts for you.

To run with PM2:

```
npm install pm2 -g
cd umami
pm2 start npm --name umami -- start 
```

## Proxying with Nginx

With Umami now running, you can proxy requests to a domain or subdomain from Nginx to Umami.

The follow config will send all requests from `umami.yourdomain.com` to your local Umami instance.

```
server {
  server_name umami.yourdomain.com;

  location / {
    proxy_pass http://localhost:3000;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
```

## Finish

That's it! You're now self-hosting Umami on your own server.