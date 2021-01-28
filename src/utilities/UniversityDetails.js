const UniversityDetails = ({ university }) => {
  return (
    <div className='col-md-8 '>
      <div className='card universities-list'>
        <div className='univerisity-img'>
          <img src={university.image} alt='' />
        </div>
        <div className='about-university'>
          <div className='about-university-header'>
            <div className='logo'>
              <img
                src='https://cdn.imgbin.com/9/12/7/imgbin-mcmaster-university-medical-centre-mcmaster-faculty-of-science-mcmaster-faculty-of-social-sciences-student-xNy2S8ZgpjF80csA4UuU4mjyM.jpg'
                alt=''
              />
            </div>
            <div className='university-name'>
              <p>{university.name}</p>
              <span>{university.province}</span>
            </div>
          </div>
          <div className='about'>
            <h4>About</h4>
            <p>{university.about}</p>
          </div>

          <div className='view-more'>
            <a href={university.url}>View More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityDetails;
