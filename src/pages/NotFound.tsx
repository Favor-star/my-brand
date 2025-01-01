import { IconHome } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link
        to="/"
        className="flex items-center text-blueCustom bg-grayCustom px-3 py-2 rounded-md  hover:bg-blueCustom hover:text-white transition-all"
      >
        <IconHome stroke={1.25} className="h-6 w-6 mr-2" />
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
