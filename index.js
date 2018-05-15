function onwithin (once, event, start, end, handler) {
  if (typeof end === 'function') {
    handler = end
    end = start
    start = Date.now()
  }
  this.on(event, function proxy (...args) {
    var now = Date.now()
    if (now >= start && now <= end) {
      if (once) this.removeListener(event, proxy)
      handler.call(this, ...args)
    } else if (now > end) {
      this.removeListener(event, proxy)
    }
  })
}

function withinify (emitter) {
  if (!emitter.on) throw new TypeError('emitter does not have an .on method')
  emitter.onwithin = onwithin.bind(emitter, false)
  emitter.oncewithin = onwithin.bind(emitter, true)
  return emitter
}

module.exports = withinify
