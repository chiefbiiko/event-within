# event-within

[![build status](http://img.shields.io/travis/chiefbiiko/event-within.svg?style=flat)](http://travis-ci.org/chiefbiiko/event-within) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/chiefbiiko/event-within?branch=master&svg=true)](https://ci.appveyor.com/project/chiefbiiko/event-within)

***

Register event handlers for a certain time frame.

***

## Get it!

```
npm install --save event-within
```

***

## Usage

`node usage` and type sth:

``` js
var withinify = require('event-within')
var stdwithin = withinify(process.stdin)

stdwithin.onwithin('data', Date.now() + 15000, function (chunk) {
  console.log('within::', chunk.toString())
})

```

***

## API

### `emitter = withinify(emitter)`

Add two custom event registration functions on your emitter.

### `emitter.onwithin(event[, start], end, handler)`

Register an event handler for a certain time. `start` and `end` must be timestamps. `start` is optional and defaults to `Date.now()`.

### `emitter.oncewithin(event[, start], end, handler)`

Register an one-time event handler for a certain time. `start` and `end` must be timestamps. `start` is optional and defaults to `Date.now()`.

***

## License

[MIT](./license.md)
