import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Login from './views/Login';
import Sidebar from './utilities/Sidebar';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import ExploreDestination from './views/ExploreDestination';
import Universities from './views/Universities';
import ModalDialog from './utilities/ModalDialog';

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [provinceLoading, setProvinceLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('Federation');
  const [province, setProvince] = useState('New Brunswick');
  const [universities, setUniversities] = useState({});
  const openModal = () => {
    setIsOpen(true);
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
      `https://api.welkom-u.ca/WelkomU_Test/api/UniversityManagement/GetAllUniversity?ProvinceValue=${params.province}&CityValue=${params.city}&PageSize=2&CurrentPage=1`
    );
    const data = await res.json();
    setProvince(params.province);
    setCity(params.city);

    setUniversities(data.universities);

    console.log(universities);
  };

  return (
    <Router>
      <div className='App'>
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
                      <ExploreDestination
                        openModal={openModal}
                        fetchProvinces={fetchProvinces}
                        city={city}
                        province={province}
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
    </Router>
  );
}

export default App;
