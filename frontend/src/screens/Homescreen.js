import Hero from '../components/Hero';
import PrivateRoute from '../components/PrivateRoute';
import { UseSelector, useSelector } from 'react-redux';

const Homescreen = () => {

  const { userInfo } = useSelector((state) => state.auth);
  return <Hero />;
};
export default Homescreen;