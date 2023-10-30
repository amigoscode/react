const Card = ({ title = 'Default title', description = 'desc' }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Card;
