import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from './views/Login';
import Sidebar from './utilities/Sidebar';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import ExploreDestination from './views/ExploreDestination';
import Universities from './views/Universities';
import ModalDialog from './utilities/ModalDialog';

function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const afterOpenModal = () => {
    // subtitle.style.color = '#f00';
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Router>
      <div className='App'>
        <ModalDialog
          modalIsOpen={modalIsOpen}
          afterOpenModal={afterOpenModal}
          closeModal={closeModal}
        />
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
                  render={(props) => (
                    <>
                      <ExploreDestination openModal={openModal} />;
                    </>
                  )}
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
