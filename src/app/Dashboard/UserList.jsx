import { useEffect, useState } from "react";
import { fetchData } from "../../helper/api";

const UserList = ()=>{

    const[tabActive,setTabactive] = useState(1);
    const[data,setData] = useState(null);

     const fetchUserList = async()=>{
        try { 
            const response = await fetchData('/user/getAllUserData', {
              method: 'GET',
          });
           
          setData(response.model)
          } catch (error) {
            toast.error(error.message);
          }
     }

   console.log(data);
   
     
     useEffect(()=>{
        fetchUserList();
     },[])

    return (
        <>
      
  <div class="content-wrapper"> 
   
    
   
    <div class="content">
      <div class="info-box">
        <h4 class="text-black m-b-3">User List</h4>
        <div id="demo">
          <div class="step-app">
            <ul class="step-steps">
              <li onClick={() => setTabactive(1)} class={(tabActive ==1)?'active':null}><a href="javascript:void(0)">Parlour</a></li>
              <li onClick={() => setTabactive(2)} class={(tabActive ==2)?'active':null}><a href="javascript:void(0)">Retailer</a></li>
              <li onClick={() => setTabactive(3)} class={(tabActive ==3)?'active':null}><a href="javascript:void(0)">Dealer</a></li>
              <li onClick={() => setTabactive(4)} class={(tabActive ==4)?'active':null}><a href="javascript:void(0)">Stockist</a></li>
            </ul>
            <div class="step-content">
              <div class={(tabActive ==1)?'step-tab-panel active':'step-tab-panel'}  id="step1">
                <div class="table-responsive">
                  <table id="example2" class="table table-bordered table-hover" data-name="cool-table">
                    <thead>
                      <tr>
                        <th>Code</th>
                        <th> Name</th>
                        <th>Shop Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Super Stockist Name</th>
                      </tr>
                    </thead>
                    <tbody>
                        {data && data.getAllParlourDtoList.map(row =>(
                            <tr>
                            <td>{row.parlourUserDealerCode}</td>
                            <td>{row.parlourUserDealerName}</td>
                            <td>{row.parlourUserShopName}</td>
                            <td>{row.parlourUserEmail}</td>
                            <td>{row.parlourUserMob}</td>
                            <td>{row.parlourUserSuperStockistName}</td>
                            </tr>
                        )) }
                    
        
                    </tbody>
                  
                  </table>
                  </div>
              </div>
              <div class={(tabActive ==2)?'step-tab-panel active':'step-tab-panel'} id="step2">
                <div class="table-responsive">
                  <table id="example2" class="table table-bordered table-hover" data-name="cool-table">
                    <thead>
                      <tr>
                        <th>Code</th>
                        <th> Name</th>
                        <th>Shop Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th> Super Stockist Name</th>
                      </tr>
                    </thead>
                    <tbody>

                    {data && data.getAllRetailerDtoList.map(row =>(
                            <tr>
                            <td>{row.retailerCode}</td>
                            <td>{row.retailerName}</td>
                            <td>{row.retailerShopName}</td>
                            <td>{row.retailerEmail}</td>
                            <td>{row.retailerMob}</td>
                            <td>{row.retailerSuperStockistName}</td>
                            </tr>
                        )) }
                     
                    </tbody>
                    
                  </table>
                  </div>
              </div>
              <div class={(tabActive ==3)?'step-tab-panel active':'step-tab-panel'} id="step3">
                <div class="table-responsive">
                  <table id="example2" class="table table-bordered table-hover" data-name="cool-table">
                    <thead>
                      <tr>
                        <th>Code</th>
                        <th> Name</th>
                        <th>Shop Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Super Stockist Name</th>
                      </tr>
                    </thead>
                    <tbody>
                    {data && data.getAllDealerDtoList.map(row =>(
                            <tr>
                            <td>{row.dealerCode}</td>
                            <td>{row.dealerName}</td>
                            <td>{row.dealerShopName}</td>
                            <td>{row.dealerEmail}</td>
                            <td>{row.dealerMob}</td>
                            <td>{row.dealerSuperStockistName}</td>
                            </tr>
                        )) }
       
                    </tbody>
                 
                  </table>
                  </div>
              </div>
              <div class={(tabActive ==4)?'step-tab-panel active':'step-tab-panel'} id="step4">
                <div class="table-responsive">
                  <table id="example2" class="table table-bordered table-hover" data-name="cool-table">
                    <thead>
                      <tr>
                        <th>Code</th>
                        <th> Name</th>
                        <th>Shop Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Address Area</th>
                      </tr>
                    </thead>
                    <tbody>
                    {data && data.getAllStockDtoList.map(row =>(
                            <tr>
                            <td>{row.stockistCode}</td>
                            <td>{row.stockistName}</td>
                            <td>{row.stockistShopName}</td>
                            <td>{row.stockistEmail}</td>
                            <td>{row.stockistMob}</td>
                            <td>{row.stockistDeliveryAddressArea}</td>
                            </tr>
                        )) }
                    </tbody>
                 
                  </table>
                  </div>
              </div>
            </div>
           
          </div>
        </div>
      
       
      </div>
    
    </div>
   
  </div>
        </>
    )
}

export default UserList;