const Card = ({ video }) => {
  const handleClick = () => {
    alert('button clicked');
  };

  return (
    <div>
      <h1>{video.title}</h1>
      <p>{video.description}</p>
      <button onClick={handleClick}>View</button>
    </div>
  );
};

export default Card;
