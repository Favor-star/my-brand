import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import AboutMe from '../pages/AboutMe';
import Loader from '../components/animated/Loader';
import NotFound from '../pages/NotFound';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/test',
    element: <Homepage />
  },
  {
    path: '/services',
    element: <Services />
  },
  { path: '/loader', element: <Loader /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/about', element: <AboutMe /> },
  { path: '/my-blog', element: <NotFound /> },
  {
    path: '*',
    element: <NotFound />
  }
]);

const RoutesWrapper = () => {
  return <RouterProvider router={router} />;
};

export default RoutesWrapper;
