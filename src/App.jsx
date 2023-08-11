import './App.css'
import { Dashboard } from './pages/Dashboard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import Layout from './Layout';
import { fakeAuthProvider } from './fakeAuth';
import { Brands } from './pages/InventoryManagement/Brands';
import Categories from './pages/InventoryManagement/Categories';
import Products from './pages/InventoryManagement/Products';


let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    loader: () => ({ username: "username" }),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "brands",
        element: <Brands />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ]
  },
  {
    path: "/logout",
    async action() {
      // We signout in a "resource route" that we can hit from a fetcher.Form
      await fakeAuthProvider.signout();
      return redirect("/");
    }
  }
]);

function App() {

  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  )
}

export default App
