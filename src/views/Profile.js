const Profile = (props) => {
  const { userdata } = props;

  return (
    <div>
      <div className='user-dashboard-container'>
        <div className='container-fluid'>
          <div className='page-header'>
            <h1 className='text-capitalize'>profile information</h1>
          </div>

          <div className='card'>
            <div className='row'>
              <div className='col-lg-12 p-2'>
                <div className='card profile-info'>
                  <div className='info-cont'>
                    <div className='row'>
                      <div className='col-lg-4 p-'>
                        <div className='info'>
                          <div className='profile-image'>
                            <img src={userdata.profile.picture} alt='' />
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-5 p-2'>
                        <div className='info'>
                          <div className='row'>
                            <div className='col-6 text-left'>
                              <p id='bold'>Name</p>
                            </div>
                            <div className='col-6 text-right'>
                              <p>
                                {userdata.profile.firstname}{' '}
                                {userdata.profile.lastname}
                              </p>
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-6 text-left'>
                              <p id='bold'>Email:</p>
                            </div>
                            <div className='col-6 text-right'>
                              <p>{userdata.emailAddress}</p>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-6 text-left'>
                              <p id='bold'>Phone Number:</p>
                            </div>
                            <div className='col-6 text-right'>
                              <p>{userdata.profile.phoneNumber}</p>
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-6 text-left'>
                              <p id='bold'>Country of Residence</p>
                            </div>
                            <div className='col-6 text-right'>
                              <p>{userdata.profile.countryOfResidence}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-3 p-2'>
                        <div className='info'>
                          <div className='row'>
                            <div className='col-6 text-left'>
                              <p id='bold'>Nationality:</p>
                            </div>
                            <div className='col-6 text-right'>
                              <p>{userdata.profile.nationality}</p>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-6 text-left'>
                              <p id='bold'>City:</p>
                            </div>
                            <div className='col-6 text-right'>
                              <p>
                                {userdata.profile.immigrationInformation.city}
                              </p>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-6 text-left'>
                              <p id='bold'>Province:</p>
                            </div>
                            <div className='col-6 text-right'>
                              <p>
                                {
                                  userdata.profile.immigrationInformation
                                    .province
                                }
                              </p>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-6 text-left'>
                              <p id='bold'>Destination Country</p>
                            </div>
                            <div className='col-6 text-right'>
                              <p>
                                {
                                  userdata.profile.immigrationInformation
                                    .destinationCountry
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
