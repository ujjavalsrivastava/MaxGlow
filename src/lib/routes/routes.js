import Profile from "../../app/Dashboard/Profile";
import Dashboard from "../../app/Dashboard/Dashboard";
import Tree from "../../app/tree/Tree";
import KYC from "../../app/Dashboard/KYC";
import ProductList from "../../app/Dashboard/ProductList";
import UserList from "../../app/Dashboard/UserList";
import payment from "../../pages/payment";

export const authRoutes = [
  { path: "/dashboard", Component: Dashboard },
  { path: "/profile", Component: Profile },
  { path: "/tree", Component: Tree },
  { path: "/Kyc", Component: KYC },
  { path: "/product-list", Component: ProductList },
  { path: "/user-list", Component: UserList },
  { path: "/payment", Component: payment },
];
