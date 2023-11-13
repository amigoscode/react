import styles from './App.module.css';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <HomePage />
    </div>
  );
};

export default App;
