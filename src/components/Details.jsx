import { useParams } from 'react-router-dom';
import { videos } from '../video-data';

const Details = () => {
  const { id } = useParams();
  const video = videos.find((video) => video.id === parseInt(id));
  return (
    <>
      <h1>{video.title}</h1>
      <p>{video.description}</p>
      <p>{video.genre}</p>
    </>
  );
};

export default Details;
