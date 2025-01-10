import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { productRouter } from './routes/product'
import { cors } from 'hono/cors'
const app = new Hono<{
 
}>()
app.use('/*', cors())
app.route('/api/v1/user',userRouter)
app.route('/api/v1/product',productRouter)
app.get('/', (c) => {
  return c.text('Hello Hono!')
})





export default app
