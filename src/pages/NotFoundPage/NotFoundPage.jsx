import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <Link to="/">Go Home</Link>
      <div>Not Found</div>
    </>
  );
};

export default NotFoundPage;
