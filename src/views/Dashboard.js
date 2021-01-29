import flat from './images/flat.svg';
import { withRouter } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-cards'>
        <div className='row'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='card currency'>
                <div className='card-img'>
                  <img src={flat} alt='' />
                </div>
                <div className='card-info'>
                  <h4>Exchange Currency</h4>
                  <p>Exchange money from one</p>
                  <p>local currency to another</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 '>
              <div className='card accomodation'>
                <div className='card-img'>
                  <img src={flat} alt='' />
                </div>
                <div className='card-info'>
                  <h4>Exchange Currency</h4>
                  <p>Exchange money from one</p>
                  <p>local currency to another</p>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='card explore'>
                <div className='card-img'>
                  <img src={flat} alt='' />
                </div>
                <div className='card-info'>
                  <h4>Exchange Currency</h4>
                  <p>Exchange money from one</p>
                  <p>local currency to another</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
