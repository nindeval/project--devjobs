import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//import NoMatch404 from './components/NoMatch404.js'

// import CompanyListings from './components/CompanyListings.js'
// import JobListings from './components/JobListings.js'
// import RegisterForm from './components/RegisterForm.js'
// import LoginForm from './components/LoginForm.js'

// import NavBar from './components/Nav.js'


const DynamicRoute = (props) => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: '#0E6655'}
  return <h2 style={styleObj}>Dynamic Route: <u>{props.match.params.routeVal}</u></h2>
}

const DemoComponent = () => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: 'slateblue'}
  return <h2 style={styleObj}>Demo Route U</h2>
}

const NoMatch404 = () => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: 'indianred'}
  return <h2 style={styleObj}>No Match - 404</h2>
}

class App extends React.Component {
  render (){
    return <div>
      // <NavBar />
      <Switch>
        // <Route path='/companies' component={CompanyListings}/>
        // <Route path='/jobs' component={JobsListings}/>
        <Route path='/ex/:routeVal' component={DynamicRoute}/>
        <Route path='/demo' component={DemoComponent}/>
        <Route component={NoMatch404}/>
      </Switch>
    </div>
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
