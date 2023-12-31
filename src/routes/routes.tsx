import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Home from '@/Pages/Home';
import Shop from '@/Pages/Shop';
import ShoopingCart from '@/Components/Ui/ShoopingCart';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: '/products',
      //   element: <Products />,
      // },
      // {
      //   path: '/product-details/:id',
      //   element: <ProductDetails />,
      // },
      // {
      //   path: '/checkout',
      //   element: (
      //     <PrivateRoute>
      //       <Checkout />,
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
  {
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/shoppingCart',
    element: <ShoopingCart />,
  },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
]);

export default routes;
