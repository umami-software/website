# Tracker functions

The Umami tracker exposes some functions that you can call on your website if you want
more control over your tracking.

## umami(*event_value*)

Sends an event with an event type of `custom`.

Usage:
```
umami('Signup button click');
```

## umami.trackEvent(*event_value*, *event_type*, [*url*], [*website_id*])

Tracks an event with a custom event type.

Usage:
```
umami.trackEvent('Signup button click', 'signup', '/home', '94db1cb1-74f4-4a40-ad6c-962362670409');
```

The **url** and **website_id** values are optional. They will default to the page url and `data-website-id`
defined by the script.

## umami.trackView(*url*, [*referrer*], [*website_id*])

Tracks a page view.

Usage:
```
umami.trackView('/home', 'https://www.google.com', '94db1cb1-74f4-4a40-ad6c-962362670409');
```

The **referrer** and **website_id** values are optional. They will default to the page referrer and `data-website-id`
defined by the script.