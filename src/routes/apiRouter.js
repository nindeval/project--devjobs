const Router = require('express').Router;
const Company = require('../models/Company.js')
const Job = require('../models/Job.js')

const apiRouter = Router()

const showRouteListings = (request, response)=>{
  response.json({
    'api/jobs' : 'Show jobs',
    'api/companies' : 'Show companies'
  })
}
const fetchCompanies = (request, response)=>{    //response.json(companyDataRows)
  const db = request.app.locals.db

  db.select('*').from('companies')
    .then((records)=>{
      response.json(records)
    })
}
const fetchOneCompany = (request, response)=>{
  const db = request.app.locals.db
  // console.log(db);
  const idInRoute = request.params._id
  //console.log(idInRoute);

  db.select('*').from('companies')
  .where('id', '=', idInRoute)
  .then((records)=>{
    response.json(records[0])
  })

}
const createOneCompany = ( request, response)=>{
  console.log(request.body);
  Company
    .query()
    .insert(request.body)
    .then((newRecord)=>{
      response.status(200).json(newRecord)
    })
}
const editOneCompany = ( request, response )=> {
  Company
    .query()
    .updateAndFetchById(request.params._id, request.body)
    .then((updateRecord)=>{
      response.status(200).json(updateRecord)
    })
}

const fetchJobs = (request, response)=> {
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
const fetchOneJob = (request, response)=> {
  const db = request.app.locals.db
  // console.log(db);
  const idInRoute = request.params._id
  //console.log(idInRoute);

  db.select('*').from('jobs')
  .where('id', '=', idInRoute)
  .then((records)=>{
    response.json(records[0])
  })

}
const createOneJob = (request, response)=> {
  Job
    .query()
    .insert(request.body)
    .then((newRecord)=>{
      response.status(200).json(newRecord)
    })
}
const editOneJob = ( request, response)=> {
  Job
    .query()
    .updateAndFetchById(request.params._id, request.body)
    .then((updateRecord)=>{
      response.status(200).json(updateRecord)
    })
}
const deleteOneJob = ( request, response)=> {
  Job
    . query()
    .deleteById(request.params._id)
    .then((dbResponse)=>{
      response.status(200).json(dbResponse)
    })
}

apiRouter
  .get('/', showRouteListings)

apiRouter
  .get('/companies', fetchCompanies)
  .get('/companies/:_id', fetchOneCompany)
  .post('/companies',  createOneCompany)
  .put('/companies/:_id', editOneCompany )

apiRouter
  .get('/jobs', fetchJobs)
  .get('/jobs/:_id', fetchOneJob)
  .post('/jobs', createOneJob )
  .put('/jobs/:_id', editOneJob )
  .delete('/jobs/:_id', deleteOneJob )


module.exports = apiRouter
