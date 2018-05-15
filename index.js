function onwithin (event, start, end, handler) {
  if (typeof end === 'function') {
    handler = end
    end = start
    start = Date.now()
  }
  this.on(event, function proxy (...args) {
    var now = Date.now()
    if (now >= start && now <= end) handler.call(this, ...args)
    else this.removeListener(event, proxy)
  })
}

function oncewithin (event, start, end, handler) {
  if (typeof end === 'function') {
    handler = end
    end = start
    start = Date.now()
  }
  this.on(event, function proxy (...args) {
    var now = Date.now()
    if (now >= start && now <= end) {
      this.removeListener(event, proxy)
      handler.call(this, ...args)
    }
  })
}

function withinify (emitter) {
  if (!emitter.on) throw new TypeError('emitter does not have an .on method')
  emitter.onwithin = onwithin
  emitter.oncewithin = oncewithin
  return emitter
}

module.exports = withinify
