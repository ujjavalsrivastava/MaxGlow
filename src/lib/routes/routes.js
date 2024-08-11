import Profile from "../../app/Dashboard/Profile";
import Dashboard from "../../app/Dashboard/Dashboard";

import ProductList from "../../app/Dashboard/ProductList";
import ProductAdd from "../../app/Dashboard/ProductAdd";
import ProductEdit from "../../app/Dashboard/ProductEdit";
import UserList from "../../app/Dashboard/UserList";
import AddUser from "../../app/Dashboard/AddUser";
import StateMaster from "../../app/Dashboard/StateMaster";
export const authRoutes = [
  { path: "/dashboard", Component: Dashboard },
  { path: "/profile", Component: Profile },
 
  { path: "/product-list", Component: ProductList },
  { path: "/product-add", Component: ProductAdd },
  
  { path: "/user-list", Component: UserList },
  { path: "/add-user", Component: AddUser },
  { path: "/state-master", Component: StateMaster },
  { path: "/product-add", Component: ProductEdit },
  { path: "/product-edit", Component: ProductEdit },
  

];
