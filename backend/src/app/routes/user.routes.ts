import { Router } from 'express'

const router = Router()

const users = [
  {
    username: 'ashewolfy',
    age: 28
  },
  {
    username: 'raidenwolfy',
    age: 28
  },
  {
    username: 'aurunemaru',
    age: 27
  }
]

router.get('/users', async (request, response) => {
  return response.json(users)
})

export default router
