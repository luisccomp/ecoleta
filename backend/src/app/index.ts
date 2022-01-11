import express from 'express'

import registerMiddlewares from './middlewares'
import registerRoutes from './routes'

type Express = express.Express

export default function App(): Express {
  const app = express()

  registerRoutes(app)
  registerMiddlewares(app)

  return app
}