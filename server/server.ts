import app from './app'
import config from './config/config'
const port = 4000
app.listen(port, () => {
  console.log(`App listening at http://localhost:${config.port}`)
})
