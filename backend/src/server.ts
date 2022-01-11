import App from './app'

const port = Number(process.env.PORT || '3333')

const app = App()

app.get('/users', (request, response) => {
  return response.json([
    'Raiden',
    'Auru',
    'Diego',
    'Moi',
    'Killke'
  ])
})

app.listen(port, () => {
  console.log(`====================================`)
  console.log(`🚀 Process running at port ${port}!`)
  console.log(`====================================`)
})