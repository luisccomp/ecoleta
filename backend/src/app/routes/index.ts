import { Express } from 'express'

import userRouter from './user.routes'

export default function registerRoutes(app: Express) {
  app.use(userRouter)
}