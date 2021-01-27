import { withRouter } from 'react-router-dom';

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
          <a href='' className='active'>
            <i className='fas fa-home'></i> <span>My Listings</span>
          </a>
        </li>
        <li>
          <a href=''>
            <i className='far fa-heart'></i> <span>Accomodation Interests</span>
          </a>
        </li>
        <li>
          <a href=''>
            <i className='fas fa-money-bill-wave-alt'></i>
            <span>Transactions</span>
          </a>
        </li>
        <li>
          <a href=''>
            <i className='fas fa-user-alt'></i> <span>Profile</span>
          </a>
        </li>
        <li>
          <a href=''>
            <i className='fas fa-sliders-h'></i> <span>Settings</span>
          </a>
        </li>
        <li>
          <a href=''>
            <i className='fas fa-bell'></i> <span>Notiications</span>
          </a>
        </li>
        <li>
          <a href=''>
            <i className='fas fa-times'></i> <span>Logout</span>
          </a>
        </li>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
