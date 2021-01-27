const Profile = () => {
  return (
    <div>
      <div class='user-dashboard-container'>
        <div class='container-fluid'>
          <div class='page-header'>
            <h1 class='text-capitalize'>user dashboard</h1>
          </div>

          <div class='row'>
            <div class='col-lg-11 p-2'>
              <div class='card profile-info'>
                <div class='heading'>
                  <h3 class='text-capitalize'>profile information</h3>
                </div>
                <div class='info-cont'>
                  <div class='row'>
                    <div class='col-lg-4 p-'>
                      <div class='info'>
                        <div class='profile-image'>
                          <img src='/assets/imgs/profileimg.png' alt='' />
                        </div>
                      </div>
                    </div>
                    <div class='col-lg-5 p-2'>
                      <div class='info'>
                        <div class='row'>
                          <div class='col-6 text-left'>
                            <p id='bold'>Full name:</p>
                          </div>
                          <div class='col-6 text-right'>
                            <p></p>
                          </div>
                        </div>

                        <div class='row'>
                          <div class='col-6 text-left'>
                            <p id='bold'>Email:</p>
                          </div>
                          <div class='col-6 text-right'>
                            <p></p>
                          </div>
                        </div>
                        <div class='row'>
                          <div class='col-6 text-left'>
                            <p id='bold'>Phone Number:</p>
                          </div>
                          <div class='col-6 text-right'>
                            <p></p>
                          </div>
                        </div>

                        <div class='row'>
                          <div class='col-6 text-left'>
                            <p id='bold'>Account Number:</p>
                          </div>
                          <div class='col-6 text-right'>
                            <p>0123535642</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='col-lg-3 p-2'>
                      <div class='info'>
                        <div class='row'>
                          <div class='col-6 text-left'>
                            <p id='bold'>City:</p>
                          </div>
                          <div class='col-6 text-right'>
                            <p></p>
                          </div>
                        </div>
                        <div class='row'>
                          <div class='col-6 text-left'>
                            <p id='bold'>State:</p>
                          </div>
                          <div class='col-6 text-right'>
                            <p></p>
                          </div>
                        </div>
                        <div class='row'>
                          <div class='col-6 text-left'>
                            <p id='bold'>Country:</p>
                          </div>
                          <div class='col-6 text-right'>
                            <p></p>
                          </div>
                        </div>
                        <div class='row'>
                          <div class='col-6 text-left'>
                            <p id='bold'>Bank Name</p>
                          </div>
                          <div class='col-6 text-right'>
                            <p>Zenith Bank</p>
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
