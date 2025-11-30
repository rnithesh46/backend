const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let sitename = "adidas"
    let searchtext = "search now"
  res.render("index", {sitename:sitename,searchtext:searchtext})
})

app.get('/blog/:slug', (req, res) => {
    let blogtitle = "adidas when and why?"
    let blogcontent = "its an amazing brand"
  res.render("blogpost.html", {blogtitle: blogtitle,blogcontent:blogcontent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
