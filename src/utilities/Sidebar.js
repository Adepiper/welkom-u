import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  const { location } = props;
  if (location.pathname.match('/login')) {
    return null;
  }
  return (
    <div className=''>
      <div className='header'>
        <div className='profile-pic'>
          <img src='' alt='' />
          hello
        </div>
        <h4>Hey Babajide</h4>
      </div>

      <div className='nav-home'>
        <li>
          <Link to='/' className='active'>
            <i className='fas fa-home'></i> <span>My Listings</span>
          </Link>
        </li>
        <li>
          <Link to='/destinations'>
            <i className='far fa-heart'></i> <span>Accomodation Interests</span>
          </Link>
        </li>

        <li>
          <Link to='/profile'>
            <i className='fas fa-user-alt'></i> <span>Profile</span>
          </Link>
        </li>

        <li>
          <Link to='/'>
            <i className='fas fa-times'></i> <span>Logout</span>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
