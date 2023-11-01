import Card from './Card';

const LastTwo = ({ data }) => {
  return (
    <>
      {data.map((post) => (
        <Card key={post.id} video={post} />
      ))}
    </>
  );
};

export default LastTwo;
