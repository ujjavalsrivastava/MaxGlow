// import { IoMdHome } from "react-icons/io";

import { Link } from "react-router-dom";

const SideBar = () => {
 
  return (
    <>
       <aside class="main-sidebar"> 
  
  <div class="sidebar"> 

    <div class="user-panel">
      <div class="image text-center"><img src="dist/img/img1.jpg" class="img-circle" alt="User Image"/> </div>
      <div class="info">
        <p>Alexander Pierce</p>
        <a href="#"><i class="fa fa-cog"></i></a> <a href="#"><i class="fa fa-envelope-o"></i></a> <a href="#"><i class="fa fa-power-off"></i></a> </div>
    </div>
    

    <ul class="sidebar-menu" data-widget="tree">
      <li class="header">PERSONAL</li>
      <li class="treeview"> <Link to={'/dashboard'}> <i class="fa fa-dashboard"></i> <span>Home</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span>  </Link>
       
      </li>
      <li class="treeview">  <Link to={'/profile'}> <i class="fa fa-bullseye"></i> <span>Profile</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span>   </Link>
        
      </li>
      <li class="treeview"><Link to={'/user-list'}> <i class="fa fa-envelope-o "></i> <span>User List</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span>  </Link>
       
      </li>
      <li class="treeview"><Link to={'/add-user'}> <i class="fa fa-envelope-o "></i> <span>User Add</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span>  </Link>
       
       </li>
      <li class="treeview"> <Link to={'/product-list'}>  <i class="fa fa-briefcase"></i> <span>Product List</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span>  </Link>
       
      </li>

      <li class="treeview"> <Link to={'/product-add'}>  <i class="fa fa-briefcase"></i> <span>Product Add</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span>  </Link>
       
       </li>
       
      
      <li class="active treeview"> <Link to={'/state-master'}>  <i class="fa fa-edit"></i> <span>State List</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </Link>
      
      </li>
      
    </ul>
  </div>

</aside>
    </>
  );
};

export default SideBar;
