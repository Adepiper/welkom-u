import SlidingImages from '../utilities/SliderImages';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ExploreDestination = (props) => {
  const { openModal, fetchProvinces } = props;
  return (
    <div className='destination-container'>
      <div className='page-header'>
        <h3>Explore Destinations</h3>
      </div>
      <div className='slider'>
        <SlidingImages />
      </div>
      <div className='destination-body'>
        <div className='row'>
          <div className='col-md-8 col-lg-4'>
            <div className='main-destination'>
              <h2>Main destination</h2>
              <div className='destination active'>
                <div className='destination-flag'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg'
                    alt=''
                  />
                </div>
                <div className='destination-country'>
                  <h3>Canada</h3>
                  <p>New Brunswick, Federation </p>
                </div>
              </div>
            </div>

            <div className='other-destination'>
              <h2>Other destinations</h2>
              <div className='destination'>
                <div className='destination-flag'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg'
                    alt=''
                  />
                </div>
                <div className='destination-country'>
                  <h3>Canada</h3>
                  <p>New Brunswick, Federation </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 col-lg-8'></div>

          <div className='col-md-6 col-lg-8'>
            <div className='country-info'>
              <div className='country-info-header'>
                <div className='province'>
                  <h4>Canada</h4>
                  <p>
                    <b>Province:</b> New Brunswick
                  </p>
                  <p>
                    <b>City:</b> Federation
                  </p>
                </div>
                <div className='change-location'>
                  <button
                    onClick={() => {
                      openModal();
                      fetchProvinces();
                    }}
                    className='btn'
                  >
                    Change Location
                  </button>
                </div>
              </div>

              <div className='country-info-body'>
                <Link to='/universities' className='card'>
                  <div>
                    <h3>Universities</h3>
                    <p>Explore your Universities</p>
                  </div>
                  <div>
                    <i className='fas fa-chevron-right'></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreDestination;
