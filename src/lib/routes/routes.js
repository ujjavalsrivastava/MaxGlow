import Profile from "../../app/Dashboard/Profile";
import Dashboard from "../../app/Dashboard/Dashboard";

import ProductList from "../../app/Dashboard/ProductList";
import UserList from "../../app/Dashboard/UserList";
import AddUser from "../../app/Dashboard/AddUser";
import StateMaster from "../../app/Dashboard/StateMaster";
export const authRoutes = [
  { path: "/dashboard", Component: Dashboard },
  { path: "/profile", Component: Profile },
 
  { path: "/product-list", Component: ProductList },
  { path: "/user-list", Component: UserList },
  { path: "/add-user", Component: AddUser },
  { path: "/state-master", Component: StateMaster },
  

];
