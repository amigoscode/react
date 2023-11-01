const Card = ({ title = 'Default title', description = 'desc' }) => {
  const handleClick = () => {
    alert('button clicked');
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={handleClick}>View</button>
    </div>
  );
};

export default Card;
