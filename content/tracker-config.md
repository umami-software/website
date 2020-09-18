# Tracker configuration

The Umami tracker provides several properties that allow you to configure its behavior.

## data-host-url

By default, Umami will send data to wherever the script is located. You can override this to send data
to another location.

Usage:
```
<script async defer
  src="http://mywebsite/umami.js"
  data-website-id="94db1cb1-74f4-4a40-ad6c-962362670409"
  data-host-url="http://stats.mywebsite.com"
></script>
```

## data-auto-track

By default, Umami tracks all pageviews and events for you automatically. You can disable this behavior and
track events yourself using the [tracker functions](/docs/tracker-functions).

Usage:
```
<script async defer
  src="http://mywebsite/umami.js"
  data-website-id="94db1cb1-74f4-4a40-ad6c-962362670409"
  data-auto-track="false"
></script>
```

## data-do-not-track

A visitor can indicate they don't want to be tracked by changing a setting in their browser. You can configure
Umami to respect the visitor's **Do Not Track** setting. 


Usage:
```
<script async defer
  src="http://mywebsite/umami.js"
  data-website-id="94db1cb1-74f4-4a40-ad6c-962362670409"
  data-do-not-track="true"
></script>
```