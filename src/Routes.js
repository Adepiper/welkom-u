import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Sidebar from './utilities/Sidebar';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import ExploreDestination from './views/ExploreDestination';
import Universities from './views/Universities';
import ModalDialog from './utilities/ModalDialog';
import LoginUser from './views/LoginUser';
import { ProtectedRoute } from './utilities/ProtectedRoute';
import auth from './utilities/Auth';
import Toggle from './utilities/Toggle';

const Routes = (props) => {
  const { history } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [provinceLoading, setProvinceLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [userCity, setUserCity] = useState('');
  const [userProvince, setUserProvince] = useState('');
  const [error, setError] = useState('');
  const [userdata, setUserData] = useState({});

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
    const res = await fetch(
      `https://api.welkom-u.ca/WelkomU_Test/api/UniversityManagement/GetAllUniversity?ProvinceValue=${params.province}&CityValue=${params.city}&PageSize=5&CurrentPage=1`
    );
    const data = await res.json();
    return data;
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
    data.result.responseCode === '00'
      ? loginSuccess(data)
      : setError(data.result.responseDescription);
  };

  const loginSuccess = (data) => {
    auth.authenticated = true;
    setUserData(data.result.userProfile);
    history.push('/');
  };
  return (
    <div className='App'>
      <ModalDialog
        provinces={provinces}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        cities={cities}
        fetchCities={fetchCities}
        provinceLoading={provinceLoading}
        setUserProvince={setUserProvince}
        setUserCity={setUserCity}
        userProvince={userProvince}
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
          <div className='col-lg-3 col-xl-2'>
            <Sidebar userdata={userdata} />
          </div>
          <div className='col-lg-9 col-xl-10 body'>
            <div className='container'>
              <ProtectedRoute path='/' exact component={Dashboard} />
              <ProtectedRoute
                exact
                path='/profile'
                component={Profile}
                userdata={userdata}
              />
              <ProtectedRoute
                openModal={openModal}
                fetchProvinces={fetchProvinces}
                city={userCity}
                province={userProvince}
                exact
                path='/destinations'
                component={ExploreDestination}
                userdata={userdata}
                setUserCity={setUserCity}
                setUserProvince={setUserProvince}
              />
              <ProtectedRoute
                exact
                path='/universities'
                component={Universities}
                fetchUniversities={fetchUniversities}
                city={userCity}
                province={userProvince}
              />
            </div>
          </div>
        </div>
      </Switch>
    </div>
  );
};

export default withRouter(Routes);
