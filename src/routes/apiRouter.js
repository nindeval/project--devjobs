const Router = require('express').Router;

const apiRouter = Router()

const jobsDataRows = [
  {
    title: 'Database Administrator - MySQL',
    description: 'Key players will take ownership of their bandwidths by conservatively right-sizing best-of-breed standpoints.',
    location: 'Ciudad de Mexico',
    salary: 27000,
    fullTime: true,
    companyId: Math.floor(Math.random()*4)+1
  },
  {
    title: 'UX Architect',
    description: 'Development lifecycle enables knowledge transfer, innovative drivers. Going forward, our unparalleled market focus will deliver value to vertical.',
    location: 'Monterrey',
    salary: 35000,
    fullTime: true,
    companyId: Math.floor(Math.random()*4)+1
  },
  {
    title: 'Junior Front End Engineer',
    description: 'Actionable propositions are becoming competitive organic growth experts.',
    location: 'Monterrey',
    salary: 9000,
    fullTime: false,
    companyId: Math.floor(Math.random()*4)+1
  },
  {
    title: 'Mid-Level Front End Engineer',
    description: 'Intelligently engineer your emerging markets to increase your organic growth velocity.',
    location: 'Ciudad de Mexico',
    salary: 23000,
    fullTime: true,
    companyId: Math.floor(Math.random()*4)+1
  },
  {
    title: 'Mid-Level Java Engineer',
    description: ' Key players will take ownership of their step-changes by reliably deep-diving immersive verticals.',
    location: 'Ciudad de Mexico',
    salary: 28000,
    fullTime: true,
    companyId: Math.floor(Math.random()*4)+1
  },
  {
    title: 'Database Admin - Mongoose',
    description: 'In the visibility space, industry is globally reusing its best-in-class user experiences. Change the way you do business - adopt next-generation big datas.',
    location: 'Ciudad de Mexico',
    salary: 24000,
    fullTime: true,
    companyId: Math.floor(Math.random()*4)+1
  },
  {
    title: 'IOS Developer - Senior',
    description: 'Wholesale dot-bomb will deliver value to game changers. Change the way you do business - adopt next-generation milestones.',
    location: 'Ciudad de Mexico',
    salary: 43000,
    fullTime: true,
    companyId: Math.floor(Math.random()*4)+1
  },
  {
    title: 'Scala Developer : Mid Level',
    description: 'We use our world-class enterprises to strategically manage our standpoint expectations.',
    location: 'Guadalajara',
    salary: 23000,
    fullTime: true,
    companyId: Math.floor(Math.random()*4)+1
  },
  {
    title: 'Wordpress Developer',
    description: 'We use our world-class enterprises to strategically manage our standpoint expectations.',
    location: 'Guadalajara',
    salary: 16000,
    fullTime: false,
    companyId: Math.floor(Math.random()*4)+1
  },
  {
    title: 'Senior Applications Architect',
    description: 'Ethically right-size your innovations to increase your market focus velocity. Going forward, our proactive paradigm shift will deliver value to core competencies.',
    location: 'Monterrey',
    salary: 56000,
    fullTime: true,
    companyId: Math.floor(Math.random()*4)+1
  },
  {
    title: 'Senior Applications Architect',
    description: 'Ethically right-size your innovations to increase your market focus velocity. Going forward, our proactive paradigm shift will deliver value to core competencies.',
    location: 'Monterrey',
    salary: 56000,
    fullTime: true,
    companyId: Math.floor(Math.random()*4)+1
  },
  {
    title: 'Python Developer',
    description: 'seeking a Python Developer for a full-time direct hire opportunity. The Python Developer is someone who is proactive, driven and eager to help build a digital workspace to be used by researchers at Life Sciences companies.',
    location: 'Ciudad de Mexico',
    salary: 36000,
    fullTime: true,
    companyId: Math.floor(Math.random()*4)+1
  },
  {
    title: 'Magento Developer',
    description: 'esponsible for customizing enterprise-grade software platforms such as Magento and the Salesforce Commerce Cloud.',
    location: 'Monterrey',
    salary: 25000,
    fullTime: false,
    companyId: Math.floor(Math.random()*4)+1
  },
  {
    title: 'Magento Developer',
    description: 'esponsible for customizing enterprise-grade software platforms such as Magento and the Salesforce Commerce Cloud.',
    location: 'Monterrey',
    salary: 25000,
    fullTime: false,
    companyId: Math.floor(Math.random()*4)+1
  }
]

const companyDataRows = [
  {
    name: 'EWP Technologies',
    description: 'Our business grows milestones to reliably and effectively facilitate our wholesale user experience. Iteratively touching base about leveraging verticals will make us leaders in the mission critical enterprise industry. Efficiencies will come from strategically investing our clouds.',
    imageLink: 'http://www.tinygraphs.com/labs/isogrids/hexa16/1234',
    location: 'Guadalajara',
    id: 1
  },
  {
    name: 'SPC Software Solutions',
    description: 'Our business offshores architectures to dynamically and reliably reuse our best-of-breed vertical. Efficiencies will come from iteratively deep-diving our step-changes. Strategically touching base about integrating prince2 practitioners will make us leaders in the world-class enterprise industry. Effectively transforming conservatively best-in-class organic growths is crucial to our next-generation alignment.',
    location: 'Ciudad de Mexico',
    imageLink: 'http://www.tinygraphs.com/labs/isogrids/hexa16/9900',
    id: 2
  },
  {
    name: 'CACI International',
    description: `We use our knowledge transfer low hanging fruit to dynamically manage our deliverable expectations. Efficiencies will come from virtually investing our emerging markets. It's critical that we give 110% when iteratively connecting diversities.`,
    location: 'Ciudad de Mexico',
    imageLink: 'http://www.tinygraphs.com/labs/isogrids/hexa16/s422',
    id: 3
  },
  {
    name: 'Arrowhead Systems',
    description: `We thrive because of our immersive alignment and mobile user experience culture. We aim to strategically impact our innovation by ethically facilitating our best-of-breed actionable paradigm shifts. We use our value-added architectures to reliably manage our prince2 practitioner expectations.`,
    location: 'Monterrey',
    imageLink: 'http://www.tinygraphs.com/labs/isogrids/hexa16/311213',
    id: 4
  },

]

apiRouter.get('/', (request, response)=>{
  response.json({
    'api/jobs' : 'Show jobs',
    'api/companies' : 'Show companies'
  })
})

apiRouter.get('/jobs', (request, response)=>{
  response.json(jobsDataRows)
})

apiRouter.get('/companies', (request, response)=>{
  response.json(companyDataRows)
})

module.exports = apiRouter
