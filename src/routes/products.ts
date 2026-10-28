import { Hono } from "hono";
import { products } from "../data/products.js";

const app = new Hono()


app.get('/', (c) => {
  return c.json(products)
})

app.get('/:id', (c) => {
  const { id } = c.req.param()
  const product = products.find((p) => p.id === id)
  if (!product) {
    return c.json({ error: 'Product not found' }, 404)
  }
  return c.json(product)
})


export default app