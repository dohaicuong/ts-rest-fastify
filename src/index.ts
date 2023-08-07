import { app } from './app'

app
  .listen({
    host: '0.0.0.0',
    port: 3000
  })
  .then(url => {
    console.log(`Server started at ${url}`)
  })
  .catch(error => {
    app.log.error(error)
    process.exit(1)
  })
