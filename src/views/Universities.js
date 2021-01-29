import UniversityDetails from '../utilities/UniversityDetails';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const Universities = (props) => {
  const { fetchUniversities, city, province } = props;
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    GetAllUniversity();
  }, []);

  const GetAllUniversity = async () => {
    const data = await fetchUniversities({ city, province });
    setUniversities(data.universities.items);
    setLoading(false);
  };
  return (
    <div className='universities'>
      <div className='page-header'>
        <h3>Universities</h3>
      </div>

      <div className='row'>
        {loading ? (
          <Spinner animation='border' />
        ) : (
          universities.map((university) => {
            return <UniversityDetails university={university} />;
          })
        )}
      </div>
    </div>
  );
};

export default Universities;
