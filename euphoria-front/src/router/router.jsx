import { createBrowserRouter } from "react-router-dom";
import { Home, Auth, Women, Detail, Checkout } from "../pages";
import Signin from "../components/Auth/sign in/Signin";
import CheckEmail from "../components/Auth/check email/CheckEmail";
import Verification from "../components/Auth/verification/Verification";
import Signup from "../components/Auth/sign up/Signup";
import ResetPassword from "../components/Auth/reset password/ResetPassword";
import Password from "../components/Auth/CreatePassword/password";
import ProductList from "../pages/ProductList/ProductList";
import Confirm from "../pages/ConfirmOrder/Confirm";
import AddtoCart from "../pages/AddToCart/AddToCart";
import { MyAccount } from "../pages/MyAccount/MyAccount";
import Wishlist from "../components/Wishlist/Wishlist";
import EmptyCart from "../pages/EmptyCart/EmptyCart";
import PersonalInfo from "../components/PersonalInfo/PersonalInfo";
import Myorders from "../components/MyOrders/Myorders";
import OrderDetails from "../components/OrderDetails/OrderDetails";
import DeliveryAddress from "../components/DeliveryAddress/DeliveryAddress";
import NotFound from "../components/NotFound/NotFound";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  localStorage.getItem("access_token") ? <></> : {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth/sign-in",
        element: <Signin />,
      },
      {
        path: "/auth/sign-up",
        element: <Signup />,
      },
      {
        path: "/auth/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/auth/check-email",
        element: <CheckEmail />,
      },
      {
        path: "/auth/verification",
        element: <Verification />,
      },
      {
        path: "/auth/create-new-password",
        element: <Password />,
      },
    ],
  },
  localStorage.getItem("access_token") ? {
    path: "/my-account",
    element: <MyAccount />,
    children: [
      {
        path: "/my-account/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/my-account/my-orders",
        element: <Myorders />,
      },
      {
        path: "/my-account/my-orders/order-details",
        element: <OrderDetails />,
      },
      {
        path: "/my-account/personal-info",
        element: <PersonalInfo />,
      },
      {
        path: "/my-account/sign-out",
      },
      {
        path: "/my-account/my-info",
        element: <DeliveryAddress />,
      },
    ],
  } : <></>,
  {
    path: "/women",
    element: <Women />,
  },
  {
    path: "/women/:id",
    element: <Detail />,
  },
  {
    path: "/cart",
    element: <AddtoCart />,
  },
  {
    path: "/cart/checkout",
    element: <Checkout />,
  },
  {
    path: "/confirm-order",
    element: <Confirm />,
  },
  {
    path: "/product-list",
    element: <ProductList />,
  },
  {
    path: "/addtocart",
    element: <AddtoCart />,
  },
  {
    path: "/empty-cart",
    element: <EmptyCart />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
