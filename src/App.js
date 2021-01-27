import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './views/Login';
import Sidebar from './utilities/Sidebar';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import ExploreDestination from './views/ExploreDestination';
import Universities from './views/Universities';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/login' component={Login} />
          <div className='row'>
            <div className='col-lg-3 sidebar'>
              <Sidebar />
            </div>
            <div className='col-lg-9 body'>
              <div className='container'>
                <Route path='/' exact component={Dashboard} />
                <Route exact path='/profile' component={Profile} />
                <Route
                  exact
                  path='/destinations'
                  component={ExploreDestination}
                />
                <Route exact path='/universities' component={Universities} />
              </div>
            </div>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
