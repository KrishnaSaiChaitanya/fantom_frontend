// import logo from "./logo.svg";
// import "./App.css";
// import Checkout from "./components/Checkout";
// import Header from "./components/Header";
// import Cart from "./components/Cart";

// import { createContext, useState } from "react";
// import Sidebar from "./components/Sidemenu";
// import Footer from "./components/Footer";
// import Products from "./components/Products";
// import ContactUs from "./Pages/ContactUs";
// import AboutUs from "./Pages/AboutUs";
// import SignIn from "./Pages/SignIn";
// import WishList from "./Pages/WishList";
// import Dashboard from "./components/Dashboard";
// // import Sidebar from "./components/Sidemenu";

// export const Sidemenu = createContext();
// function App() {
//   // const [showSidebar, setshowSidebar] = useState(false);

//   return <div className="App"></div>;
// }

// export default App;
import "./App.css";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import SignIn from "./Pages/SignIn";
import Checkout from "./components/Checkout";
import WishList from "./Pages/WishList";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Product from "./components/Product";
import Not_found from "./Pages/Not_found";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: productsData,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "*",
        element: <Not_found />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
