var { EventEmitter } = require('events')
var tape = require('tape')
var withinify = require('./index')

tape('onwithin', function (t) {
  var emitter = new EventEmitter()
  emitter = withinify(emitter)
  var count = 0
  emitter.onwithin('data', Date.now() + 500, function (chunk) {
    count++
    t.ok(Buffer.isBuffer(chunk), 'got buffer')
  })
  emitter.emit('data', Buffer.from('fraud'))
  emitter.emit('data', Buffer.from('ACAB'))
  setTimeout(function () {
    emitter.emit('data', Buffer.from('too late'))
    t.is(count, 2, 'count should be 2')
    t.end()
  }, 550)
})

tape('oncewithin', function (t) {
  var emitter = new EventEmitter()
  emitter = withinify(emitter)
  var count = 0
  emitter.oncewithin('data', Date.now() + 500, function (chunk) {
    count++
    t.ok(Buffer.isBuffer(chunk), 'got buffer')
  })
  emitter.emit('data', Buffer.from('fraud'))
  emitter.emit('data', Buffer.from('ACAB'))
  setTimeout(function () {
    emitter.emit('data', Buffer.from('too late'))
    t.is(count, 1, 'count should be 1')
    t.end()
  }, 550)
})
