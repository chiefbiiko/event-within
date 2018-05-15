var withinify = require('./index')
var stdwithin = withinify(process.stdin)

stdwithin.onwithin('data', Date.now() + 15000, function (chunk) {
  console.log('within::', chunk.toString())
})
