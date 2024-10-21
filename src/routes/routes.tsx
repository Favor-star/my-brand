import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import AboutMe from '../pages/AboutMe';

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
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/about', element: <AboutMe /> }
]);
const RoutesWrapper = () => {
  return <RouterProvider router={router} />;
};
export default RoutesWrapper;
