import { useSelector } from "react-redux";
const Dashboard = () => {
  const state = useSelector((state) => state);
  console.log({ state });

  return (
    <>
      <div class="content-wrapper">
        <div class="content-header sty-one">
          <h1>Dashboard 2</h1>
          <ol class="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <i class="fa fa-angle-right"></i> Dashboard 2
            </li>
          </ol>
        </div>

        <div class="content">
          

        
          
        
        </div>
      </div>
    </>
  );
};

export default Dashboard;
