import { NavLink, Outlet } from 'react-router-dom';
import styles from './App.module.css';

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
      <header>
        <nav>
          <MyNavLink to="/">Home</MyNavLink>
          <MyNavLink to="/about-us">About Us</MyNavLink>
          <MyNavLink to="/contact-us">Contact Us</MyNavLink>
        </nav>
      </header>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default App;
