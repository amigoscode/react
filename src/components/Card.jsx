const Card = ({ video }) => {
  const handleClick = () => {
    alert('button clicked');
  };

  return video.genre === 'Horror' ? (
    <div>
      <h1>{video.title}</h1>
      <p>{video.description}</p>
      <button onClick={handleClick}>View</button>
    </div>
  ) : null;
};

export default Card;
