var xtend = require('xtend')
var fetchConfig = require('zero-config')
var config = fetchConfig(__dirname, { dcValue: 'us-east-1'})
var http = require('http')

var HttpHashRouter = require('http-hash-router')
var ServeBrowserify = require("serve-browserify")

var st = require('st')(config.get('st'))

var router = HttpHashRouter()

router.set('/js/*', ServeBrowserify(xtend(
  {},
  config.get('browserify'),
  {root: __dirname + '/src'}
)))

router.set('/', st)

var server = http.createServer((req, res) => {
  router(req, res, {}, err => {
    console.log(err.message)
    res.statusCode = 500
    res.end(err.message)
  })
})

server.listen(process.env.PORT || config.get('PORT'))
