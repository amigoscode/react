import { NavLink, Outlet } from 'react-router-dom';
import styles from './App.module.css';
import HomePage from './pages/HomePage';

const MyNavLink = (props) => {
  return (
    <NavLink className={({ isActive }) => (isActive ? 'link-red' : 'link-black')} to={props.to}>
      {props.children}
    </NavLink>
  );
};
const App = () => {
  return (
    <div className={styles.wrapper}>
      <nav>
        <MyNavLink to="/">Home</MyNavLink>
        <MyNavLink to="/about-us">About Us</MyNavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
