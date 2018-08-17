const Router = require('express').Router;
const fs = require('fs-extra')
const pageRouter = Router()
// const fs = require('fs-extra')

pageRouter
  .get('/', (request, response)=>{
    // fs.readFile(`${__dirname}/../views/home.html`, 'utf-8')
    //   .then((htmlData)=>{
    //     response.send(htmlData)
    //   })
    response.render('home.ejs')
  })

pageRouter
  .get('/about', (request, response)=>{
    // fs.readFile(`${__dirname}/../views/about.html`, 'utf-8')
    //   .then((htmlData)=>{
    //       response.send(htmlData)
    //   })
    response.render('about.ejs')
  })


module.exports = pageRouter
