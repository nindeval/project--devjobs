const Router = require('express').Router;
const pageRouter = Router()
const fs = require('fs-extra')

pageRouter
  .get('/', (request, response)=>{
    fs.readFile(`${__dirname}/../views/home.html`, 'utf-8')
      .then((htmlData)=>{
        response.send(htmlData)
      })
  })

  module.exports = pageRouter
