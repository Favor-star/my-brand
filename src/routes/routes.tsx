import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from '../pages/Homepage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/test',
    element: <Homepage />
  }
]);
const RoutesWrapper = () => {
  return <RouterProvider router={router} />;
};
export default RoutesWrapper;
