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

you can also run umami as Systemd service in Ubuntu

```
cd /etc/systemd/system
sudo nano umami.service
```

Replace `<user>` with the name of your user who will own this directory or if simply run as root then remove the line `User=<user>`

```
[Unit]
Description=Start umami - Umami is a simple, fast, website analytics alternative to Google Analytics
Requires=network.target
After=network.target

[Service]
Type=simple
User=<user>
WorkingDirectory=/var/www/umami
ExecStart=/bin/bash /var/www/umami/start.sh
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
```

- `CTRL + X` & Enter to save the Service file Configuration
- Create a Bash file for start the App this bash script for systemd service start

```
cd /var/www/ummai
touch start.sh
```

```
#!/bin/bash

npm start
```

- Start the Systemd service and Run the App forever

```
sudo systemctl daemon-reload
sudo systemctl enable umami
sudo systemctl start umami
```

- Check the service status

```
sudo systemctl status umami
```

## Proxying with Nginx

With Umami now running, you can proxy requests to a domain or subdomain from Nginx to Umami.

The follow config will send all requests from `umami.yourdomain.com` to your local Umami instance.

```
server {

  listen 80;
  listen [::]:80;
  listen 443 ssl http2;
  listen [::]:443 ssl http2;

  server_name umami.yourdomain.com;

    if ($scheme = http) {
       return 301 https://$server_name$request_uri;
   }

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Host $http_host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_hide_header X-powered-by;
  }

  client_max_body_size 70m;

  ## install SSL via Certbot - https://certbot.eff.org/

  ssl_certificate /etc/letsencrypt/live/umami.yourdomain.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/umami.yourdomain.com/privkey.pem;
  include /etc/letsencrypt/options-ssl-nginx.conf;
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
  add_header Strict-Transport-Security max-age=63072000;
  add_header X-XSS-Protection "1; mode=block";

}
```

## Finish

That's it! You're now self-hosting Umami on your own server.
