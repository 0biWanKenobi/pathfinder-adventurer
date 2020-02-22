
import { api, json } from '../api.js'

export default app => {
  app.use(json())
  app.use('/api', api)
}