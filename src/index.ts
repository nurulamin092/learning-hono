import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { products } from './data/products.js'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})


app.get('/products', (c) => {
  return c.json(products)
})

app.get('/products/:id', (c) => {
  const { id } = c.req.param()
  const product = products.find((p) => p.id === id)
  if (!product) {
    return c.json({ error: 'Product not found' }, 404)
  }
  return c.json(product)
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
