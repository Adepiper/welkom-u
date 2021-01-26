import { withRouter } from 'react-router-dom';

const Sidebar = (props) => {
  const { location } = props;
  if (location.pathname.match('/login')) {
    return null;
  }
  return <div>Sidebar</div>;
};

export default withRouter(Sidebar);
