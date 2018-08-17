const express = require('express')
const ejs = require('ejs')

const pageRouter = require(`./src/routes/pageRouter.js`)
const apiRouter = require(`./src/routes/apiRouter.js`)

const app = express()
const PORT = 3000

//step B1
app.use( express.static( `${__dirname}/public` ) )

app.engine( 'ejs', ejs.renderFile )
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)

app.use('/api', apiRouter)
app.use('/', pageRouter)

app.use((request, response)=>{
  response.send('<h1>404 - PAGE NOT FOUND</h1>')
})

app.listen(PORT, ()=>{
  console.log(`App listening on localhost:${PORT}`);
})
