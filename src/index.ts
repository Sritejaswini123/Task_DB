import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/users', (c) => {
  return c.json([{ id: 1,
     name: 'John' }])
  
}
)
app.get('/html', (c) => {
  return c.html('<h1>this is tejaswini</h1>')
 
})
app.get('/website', (c) => {
  return c.redirect('https://www.google.com')
})

app.get('/notfound' , (c) => {
  return c.json({ message: 'Not Found' }, 404)
})
serve({
  fetch: app.fetch,
  port: 8080
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
