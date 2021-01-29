import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Sidebar from './utilities/Sidebar';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import ExploreDestination from './views/ExploreDestination';
import Universities from './views/Universities';
import ModalDialog from './utilities/ModalDialog';
import LoginUser from './views/LoginUser';

const Routes = (props) => {
  const { history } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [provinceLoading, setProvinceLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [userCity, setUserCity] = useState('');
  const [userProvince, setUserProvince] = useState('');
  const [universities, setUniversities] = useState({});
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userdata, setUserData] = useState([]);
  // const [city, setCity] = useState('Federation');
  // const [province, setProvince] = useState('New Brunswick');

  const openModal = () => {
    setIsOpen(true);
    setUserProvince('New Brunswick');
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const fetchProvinces = async () => {
    setProvinceLoading(true);
    const res = await fetch(
      'https://api.welkom-u.ca/WelkomU_Test/api/CityProvince/GetAllProvinces'
    );
    const data = await res.json();

    setProvinces(data.result.provinces);
    setProvinceLoading(false);
  };
  const fetchCities = async (value) => {
    const res = await fetch(
      `https://api.welkom-u.ca/WelkomU_Test/api/CityProvince/GetAllCities?ProvinceName=${value}`
    );
    const data = await res.json();
    setCities(data.result.cities);
  };

  const fetchUniversities = async (params) => {
    console.log(params);
    const res = await fetch(
      `https://api.welkom-u.ca/WelkomU_Test/api/UniversityManagement/GetAllUniversity?ProvinceValue=${params.province}&CityValue=${params.city}&PageSize=2&CurrentPage=1`
    );
    const data = await res.json();
    setUserProvince(params.province);
    setUserCity(params.city);

    setUniversities(data.universities);
  };

  const createLogin = async (body) => {
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    const res = await fetch(
      `https://api.welkom-u.ca/WelkomU_Test/api/ProfileManagement/LoginUser`,
      settings
    );
    const data = await res.json();
    data.result.responseCode = '00'
      ? loginSuccess(data)
      : setError(data.result.responseDescription);
  };

  const loginSuccess = (data) => {
    setIsAuthenticated(true);
    if (isAuthenticated) {
      setUserData(data);
    }
    history.push('/dashboard');
  };
  return (
    <div className='App'>
      {!isAuthenticated && <Redirect to='/login' />}
      <ModalDialog
        provinces={provinces}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        cities={cities}
        fetchCities={fetchCities}
        fetchUniversities={fetchUniversities}
        provinceLoading={provinceLoading}
      />
      <Switch>
        <Route
          exact
          path='/login'
          render={(props) => (
            <>
              <LoginUser createLogin={createLogin} error={error} />;
            </>
          )}
        />
        <div className='row'>
          <div className='col-lg-3 sidebar'>
            <Sidebar />
          </div>
          <div className='col-lg-9 body'>
            <div className='container'>
              <Route path='/dashboard' exact component={Dashboard} />
              <Route exact path='/profile' component={Profile} />
              <Route
                exact
                path='/destinations'
                render={(props) => (
                  <>
                    <ExploreDestination
                      openModal={openModal}
                      fetchProvinces={fetchProvinces}
                      city={userCity}
                      province={userProvince}
                    />
                    ;
                  </>
                )}
              />
              <Route
                exact
                path='/universities'
                render={(props) => (
                  <>
                    {universities && (
                      <Universities universities={universities} />
                    )}
                  </>
                )}
              />
            </div>
          </div>
        </div>
      </Switch>
    </div>
  );
};

export default withRouter(Routes);
