# API

Umami allows you to pull data directly by calling the API endpoints.
The endpoints are available at `http://<your-umami>/api`.
All data is returned as JSON.

## Authentication

## `POST /api/auth/login`

First you need to get a _token_ in order to make API requests. You need to make a
`POST` request to the `/api/auth/login` endpoint with the following data:

```json
{
  "username": "your-username",
  "password": "your-password"
}
```

If successful you should get a response like the following:

```json
{
  "token": "eyTMjU2IiwiY...4Q0JDLUhWxnIjoiUE_A"
}
```

Save the token value and pass it as a _cookie_ with all your data requests.
The cookie name is `umami.auth`. Your request header should look something like this:

```
Cookie: umami.auth=eyTMjU2IiwiY...4Q0JDLUhWxnIjoiUE_A
```

## Getting stats

There are several endpoints your can call to get stats for your website. All the
stats endpoints require sending a `GET` request with the `umami.auth` authentication cookie.


## `GET /api/website/{id}/stats`

Gets summarized website statistics.

**Parameters**

- `start_at`: Timestamp of starting date
- `end_at`: Timestamp of end date

**Sample response**

```
{
    bounces: 23
    pageviews: 113
    totaltime: 2087
    uniques: 36
}
```

## `GET /api/website/{id}/pageviews`

Gets pageviews within a given time range.

**Parameters**

- `start_at`: Timestamp of starting date
- `end_at`: Timestamp of end date
- `unit`: Time unit (year | month | hour | day)
- `tz`: Timezone (ex. America/Los_Angeles)

**Sample response**

```
{
    pageviews: [
        {t: "2020-04-20 01:00:00", y: 3},
        {t: "2020-04-20 02:00:00", y: 7}
    ],
    sessions: [
        {t: "2020-04-20 01:00:00", y: 2},
        {t: "2020-04-20 02:00:00", y: 4}
    ]
}
```

## `GET /api/website/{id}/events`

Gets events within a given time range.

**Parameters**

- `start_at`: Timestamp of starting date
- `end_at`: Timestamp of end date
- `unit`: Time unit (year | month | hour | day)
- `tz`: Timezone (ex. America/Los_Angeles)

**Sample response**

```
[
    {x: "download-button", t: "2020-04-20 02:00:00", y: 2},
    {x: "signup-button", t: "2020-04-20 02:00:00", y: 1}
]
```

## `GET /api/website/{id}/metrics`

Gets metrics for a given time range.

**Parameters**

- `start_at`: Timestamp of starting date
- `end_at`: Timestamp of end date
- `type`: Metrics type (url | referrer | browser | os | device | country | event)

**Sample response**

```
[
    {x: "/", y: 46}
    {x: "/docs", y: 17}
    {x: "/download", y: 14}
]
```

## Sending stats

## `POST /api/collect`

To register a `pageview` or `event`, you need to send a `POST` to `/api/collect` with
the following data:

```
{
    payload: {
        website: "your-website-id",
        url: "/",
        referrer: "",
        hostname: "your-hostname",
        language: "en-US",
        screen: "1920x1080",
    },
    type: "pageview"
}
```

For events you would send:

```
{
    payload: {
        website: "your-website-id",
        url: "/",
        event_type: "click",
        event_value: "signup-button",
        hostname: "your-hostname",
        language: "en-US",
        screen: "1920x1080"
    },
    type: "event"
}
```

Note, for `/api/collect` requests you do not need to send the `umami.auth`
authentication cookie.