import UniversityDetails from '../utilities/UniversityDetails';

const Universities = (props) => {
  const { universities } = props;
  return (
    <div className='universities'>
      <div className='page-header'>
        <h3>Universities</h3>
      </div>
      <div className='row'>
        {universities.items.map((university) => {
          return <UniversityDetails university={university} />;
        })}
      </div>
    </div>
  );
};

export default Universities;
