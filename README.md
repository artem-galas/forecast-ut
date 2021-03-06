# Forecast

Simple application for university.

## Development

Application is written on [Fastify](https://www.fastify.io/docs/latest/).

1. Install dependencies

```bash
$ npm i
```

2. Run service in development mode with live-reload

```bash
$ npm run dev
```

Run the test cases.

```bash
$ npm run test
```

## API

Locally application is running on `http://127.0.0.1:3000`

### `GET /forecast/:city`
  
URL Params: `city: string` -> any city name

✅ 200 - Returns random forecast
```json
  {
    "success":true,
    "data": {
      "city":"Tartu",
      "temperature":3,
      "wind":2,
      "precipitation":"🌦️"
    }
  }
```
  
❌400 - Bad request - 30% of requests will be failed with this error
```json
  {
    "success":false,
    "data":null,
    "error":"Something went wrong. Please try again"
  }
```

### `POST /forecast`
  
BODY Params: `city: string` -> allowed city name
  
✅ 200 - Returns random forecast for city
```json
  {
    "success":true,
    "data": {
      "city":"Tartu",
      "temperature":3,
      "wind":2,
      "precipitation":"🌦️"
    }
  }
 ```
  
❌404 - Not Found - if provided city not found
```json
  {
      "success": false,
      "data": null,
      "error": "City not found in the list. Allowed cities are: Tartu, Tallinn, Berlin, Barcelona, Paris, Copenhagen, Helsinki, Riga"
  }
```

### WebSocket `/magnitude/:city`

**NOTE:**
- Response is **stringified** JSON

✅ 200 - Returns random magnitude for city, every 2000ms
```json
  {
    "city": "Tartu",
    "magnitude": 4.6
  }
```
