import { Redirect, withRouter } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import auth from './Auth';
import Toggle from './Toggle';

const Sidebar = (props) => {
  const { location, history, userdata } = props;
  if (location.pathname.match('/login')) {
    return null;
  }

  const logout = () => {
    auth.authenticated = false;
    history.push('/login');
  };
  return (
    <>
      {Object.keys(userdata).length > 0 ? (
        <>
          <div className='sidebar'>
            <div className='header'>
              <div className='profile-pic'>
                <img src={userdata.profile.picture} alt='' />
              </div>
              <h4>Hey {userdata.profile.firstname}</h4>
            </div>
            <div className='nav-home'>
              <li>
                <NavLink activeClassName='active' exact to='/'>
                  <i className='fas fa-home'></i> <span>My Listings</span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/destinations'>
                  <i className='far fa-heart'></i>{' '}
                  <span>Accomodation Interests</span>
                </NavLink>
              </li>

              <li>
                <NavLink activeClassName='active' to='/profile'>
                  <i className='fas fa-user-alt'></i> <span>Profile</span>
                </NavLink>
              </li>

              <li>
                <Link onClick={logout}>
                  <i className='fas fa-times'></i> <span>Logout</span>
                </Link>
              </li>
            </div>
          </div>
          <Toggle />
        </>
      ) : (
        <Redirect />
      )}
    </>
  );
};

export default withRouter(Sidebar);
