# Track events

Besides pageviews, Umami is also able to track events that occur on your website. To enable events, simply add a
special CSS class to the element you want to track.

For example, you might have a button with the following code:

```
<button class="button">Sign up</button>
```

Add a class with the following format:

```
umami--<event>--<event-name>
```

So your button element would now look like this:

```
<button class="button umami--click--signup-button">Sign up</button>
```

When the user clicks on this button, Umami will record an event called `signup-button`.

The event can be any [Javascript event](https://developer.mozilla.org/en-US/docs/Web/Events) that can be 
applied to an element.

Note: be careful not to attach to any events that fire continuously like `scroll` and `drag`. 

Once your events are recorded, they will be available on your website **Details** page.

<img src="/events.png" />