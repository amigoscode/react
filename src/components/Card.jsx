import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ video }) => {
  const handleClick = () => {
    console.log('button clicked');
  };

  return (
    <article className={styles.wrapper}>
      <h1 className={styles.title}>{video.title}</h1>
      <p className={styles.desc}>{video.description}</p>
      <Link to={`/${video.id}`}>View</Link>
    </article>
  );
};

export default Card;
