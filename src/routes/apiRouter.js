const Router = require('express').Router;
const Company = require('../models/Company.js')
const Job = require('../models/Job.js')

const apiRouter = Router()

const fetchCompanies = (request, response)=>{    //response.json(companyDataRows)
  const db = request.app.locals.db

  db.select('*').from('companies')
    .then((records)=>{
      response.json(records)
    })
}
const fetchJobs = (request, response)=>{
  Job.query()
    .eager('theJobCompany')
    .then((recordsWithJobs)=> {
      response.status(200).json(recordsWithJobs)
    })
    .catch((err)=>{
      console.log("f******ck!");
      var errorMessage = err.toString()
      response.status(500).send(errorMessage)
    })
}

apiRouter
  .get('/', (request, response)=>{
    response.json({
      'api/jobs' : 'Show jobs',
      'api/companies' : 'Show companies'
    })
  })

apiRouter
  .get('/companies', fetchCompanies)
  .get('/jobs', fetchJobs)


module.exports = apiRouter
