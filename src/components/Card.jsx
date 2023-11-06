import styles from './Card.module.css';

const Card = ({ video }) => {
  const handleClick = () => {
    alert('button clicked');
  };

  return (
    <article className={styles.wrapper}>
      <h1 className={styles.title}>{video.title}</h1>
      <p className={styles.desc}>{video.description}</p>
      <button onClick={handleClick} className={styles.button}>
        View
      </button>
    </article>
  );
};

export default Card;
