import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import routesRoot from './app/routesRoot'
import * as Sentry from '@sentry/node'

function init () {
  const app = express()
  dotenv.config()

  Sentry.init({
    dsn: 'https://dc21ad777e7141c1a77919f583dd0709@sentry.io/1529577'
  })

  app.use(Sentry.Handlers.requestHandler())

  app.use(morgan('dev'))
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  routesRoot.forEach(router => router(app))

  app.use(Sentry.Handlers.errorHandler())

  app.listen(process.env.PORT || 3333)
}
init()

/*
class Server {
  constructor () {
    this.express = express()
    this.routesRoot = routesRoot
    this.sentry = Sentry
    this.dotenv = dotenv
  }

  init () {
    this.sentryInit()
    this.dotenvInit()
    this.middlewaresBeforeRoutes()
    this.routes()
    this.middlewaresAfterRoutes()
    this.listenServer()
  }

  dotenvInit () {
    this.dotenv.config()
  }

  sentryInit () {
    this.sentry.init({
      dsn: 'https://dc21ad777e7141c1a77919f583dd0709@sentry.io/1529577'
    })
  }

  middlewaresBeforeRoutes () {
    this.express.use(this.sentry.Handlers.requestHandler())
    this.express.use(morgan('dev'))
    this.express.use(cors())
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
  }

  middlewaresAfterRoutes () {
    this.express.use(this.sentry.Handlers.errorHandler())
  }

  routes () {
    this.routesRoot.forEach(router => router(this.express))
  }

  listenServer () {
    this.express.listen(process.ENV || 3333, () =>
      console.log(`On Server ${process.ENV || 3333}`)
    )
  }
}

const app = new Server()
app.init()
*/
