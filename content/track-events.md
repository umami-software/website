# Track events

Besides pageviews, Umami is also able to track events that occur on your website. There are two ways to record
events in Umami, using **CSS classes** or **programatically**.

## Using CSS classes

To enable events, simply add a
special CSS class to the element you want to track.

For example, you might have a button with the following code:

```
<button id="signup-button" class="button">Sign up</button>
```

Add a class with the following format:

```
umami--<event>--<event-name>
```

So your button element would now look like this:

```
<button id="signup-button" class="button umami--click--signup-button">Sign up</button>
```

When the user clicks on this button, Umami will record an event called `signup-button`.

The event can be any [Javascript event](https://developer.mozilla.org/en-US/docs/Web/Events) that can be 
applied to an element.

Note: be careful not to attach to any events that fire continuously like `scroll` and `drag`. 

## Programatically

You can also record events manually using the `window.umami` method. To accomplish the same thing as the above
CSS method, you can do:

```
const button = document.getElementById('signup-button');

button.onclick = () => umami('Signup button click');
```


## View events

Once your events are recorded, they will be available on your website **Details** page.

<img src="/events.png" />