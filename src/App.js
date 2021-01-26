import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './views/Login';
import Sidebar from './utilities/Sidebar';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import ExploreDestination from './views/ExploreDestination';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/login' component={Login} />
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/destinations' component={ExploreDestination} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
