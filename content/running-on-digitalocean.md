# Running on DigitalOcean

[DigitalOcean](https://m.do.co/c/c9ebc1c0928d) is an affordable cloud hosting provider that will let you host
your own Umami setup. In this setup guide we are going to install
[Ubuntu](https://ubuntu.com/), a [Postgresql](https://www.postgresql.org/) or [MySQL](https://www.mysql.com/) database,
an [Nginx](https://www.nginx.com/) webserver, [Node.js](https://nodejs.org/) and Umami.
DigitalOcean also has a NodeJS Droplet template that comes with Node.js, Ubuntu and Nginx which can get you started quicker. 

For personal use, you can start with a single $5 a month cloud server 
and scale up as needed. You can use this [link](https://m.do.co/c/c9ebc1c0928d)
to get a $100 credit for the first 60 days.

Note, these steps can be repeated on any cloud hosting provider that offers Ubuntu.

## Install Ubuntu

- [Initial server setup with Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04)

## Install Your Preferred Database Engine (Postgresql or MySQL)

- [How to install Postgresql on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)
- [How to install MySQL on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04)

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
pm2 save
```

## Proxying with Nginx

With Umami now running, you can proxy requests to a domain or subdomain from Nginx to Umami.

The following config will send all requests from `umami.yourdomain.com` to your local Umami instance.

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

## Adding an SSL certificate

[Let's Encrypt](https://letsencrypt.org/) is a recognized CA providing free certificates. It also has an automated tool to install, configure and renew certificates.   

Note: before you begin this step, make sure your Droplet is publicly routable on the Internet. DigitalOcean is not a DNS registrar so you will have to register and point your DNS to your Droplet instance.

Certbot's [website](https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx) provides instructions for different platforms and webservers, but to install on Ubuntu 20 and Nginx: 

```
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo certbot --nginx
```

After these steps your site should be accessible over HTTPS. Certbot also adds a cron to auto-renew your certificates which you can test with

```
sudo certbot renew --dry-run
```

The task can be seen in the system timers

```
systemctl list-timers
```

## Finish

That's it! You're now self-hosting Umami on your own server.