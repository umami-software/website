# Environment variables

Besides the required `DATABASE_URL` and `HASH_SALT` variables in your `.env` file, 
you can configure Umami with some additional variables.

### IGNORE_IP = &lt;ip addresses&gt;

You can provide a comma-delimited list of IP address to exclude from data collection.

### FORCE_SSL = 1

This will redirect all requests from `http` to `https` in the Umami application. Note, this does not apply to the tracking script.

### LOG_QUERY = 1

If you are running in development mode, this will log database queries to the console for debugging.

### HOSTNAME = &lt;hostname&gt;
### PORT = &lt;port number&gt;

If you are running on an environment which requires you to bind to a specific hostname or port, such as Heroku, you can add
these variables and start your app with `npm run start-env` instead of `npm start`.

### BASE_PATH = &lt;path&gt;

If you want to host Umami under a subdirectory of domain. 

### CLIENT_IP_HEADER = &lt;header name&gt;

HTTP header to check for the client's IP address. This is useful when you're
behind a proxy that uses non-standard headers.

### DISABLE_LOGIN = 1

Disables the login page for the application.

### REMOVE_TRAILING_SLASH = 1

Removes the trailing slash from all incoming urls.

### TRACKER_SCRIPT_NAME = &lt;scipt name&gt;

Allow you to assign a custom name to the tracker script. The default is `umami`. If you update this, be sure to update the tracking code on your website to the new name.
