import './App.css'
import { Dashboard } from './pages/Dashboard';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import Layout from './Layout';
import { fakeAuthProvider } from './fakeAuth';
import Brands from './pages/InventoryManagement/Brands';
import Categories from './pages/InventoryManagement/Categories';
import Products from './pages/InventoryManagement/Products';
import Sales from './pages/PointOfSale/Sales';
import Refunds from './pages/PointOfSale/Refunds';
import Shippings from './pages/PointOfSale/Shippings';
import BrandDetail from './pages/InventoryManagement/Brands/Detail';
import CategoryDetail from './pages/InventoryManagement/Categories/Detail';
import ProductDetail from './pages/InventoryManagement/Products/Detail';
import { accountService } from './_services';
import { useState } from 'react';
import Login from './pages/Login';




function App() {
  // const [user, setUser] = useState(null)
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      loader: () => {
        let user
        const subscription = accountService.user.subscribe(x => { user = x });
        subscription.unsubscribe
        // setTimeout(() => {
        //   // Unsubscribes BOTH subscription and childSubscription
        //   subscription.unsubscribe();
        // }, 10000);
        // const user = accountService.userValue;

        return ({ user })
      },
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: 'inventory',
          children: [
            {
              path: "brands/:page?",
              element: <Brands />,
            },
            {
              path: "brands/:slug/:page?",
              element: <BrandDetail />,
            },
            {
              path: "categories/:page?",
              element: <Categories />,
            },
            {
              path: "categories/:slug/:page?",
              element: <CategoryDetail />,
            },
            {
              path: "products/:page?",
              element: <Products />,
            },
            {
              path: "products/:slug/:page?",
              element: <ProductDetail />,
            },
          ]
        },
        {
          path: 'pos',
          children: [
            {
              path: "sales/:page?",
              element: <Sales />,
            },
            {
              path: "refunds/:page?",
              element: <Refunds />,
            },
            {
              path: "shippings/:page?",
              element: <Shippings />,
            },
          ]
        },

      ]
    },
    {
      path: "login",
      errorElement: <ErrorPage />,
      element: <Login />,
      loader: () => {
        let user
        const subscription = accountService.user.subscribe(x => { user = x });
        subscription.unsubscribe
        return ({ user })
      },
    },
  ]);
  // console.log(import.meta.env.VITE_API_URI)

  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  )
}

export default App
