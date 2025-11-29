const express = require('express')
const app = express()
const port = 3000

//allows users to see this public file
app.use(express.static('public'))


// app.get app.put,app.post and app.delete(path.handler)
app.get('/', (req, res) => {
  res.send('Hello World!!!')
}) 

app.get('/about', (req, res) => {
  res.send('Abbput uss')
}
)
app.get('/contact', (req, res) => {
  res.send('contact uss')
})

app.get('/blog', (req, res) => {
  res.send('hello blog')
})

app.get('/blog/:slug', (req, res) => {
  res.send(`introduction to ${req.params.slug}`)
})


// app.get('/blog/:intro-to-js', (req, res) => {
//   res.send('hello js')
// })

// app.get('/blog/intro-to-py', (req, res) => {
//   res.send('hello py')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
