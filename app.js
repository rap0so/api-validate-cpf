const app = require('express')()
const bodyParser = require('body-parser')
const routes = require('./routes')
const connectDb = require('./models/config')
const PORT = 5003

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

routes.forEach(route => {
  app.use('/' + route.path, route.controller)
})

connectDb.then(() =>
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
)

module.exports = app
