import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Services from '../pages/Services';

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
  }
]);
const RoutesWrapper = () => {
  return <RouterProvider router={router} />;
};
export default RoutesWrapper;
