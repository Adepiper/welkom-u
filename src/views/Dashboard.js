const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-cards'>
        <div className='row'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='card currency'>
                <div className='card-info'>
                  <h4>Exchange Currency</h4>
                  <p>Exchange money from one</p>
                  <p>local currency to another</p>
                </div>
                <div className='card-img'></div>
              </div>
            </div>
            <div className='col-md-4 '>
              <div className='card accomodation'>
                <h4>Get an Accomodation</h4>
                <p>Find the best accomodation</p>
                <p>at afordable price.</p>
              </div>
              <div className='card-img'></div>
            </div>
            <div className='col-md-4'>
              <div className='card explore'>
                <h4>Explore your destination</h4>
                <p>Get relevant information about</p>
                <p>any country and community</p>
              </div>
              <div className='card-img'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
