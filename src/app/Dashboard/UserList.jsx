import { useEffect, useState } from "react";
import { fetchData } from "../../helper/api";
import { toast } from "react-toastify";
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

   
   
   const changeStatus = async(email,mob,status,type)=>{
    const s =  status?'InActive':'Active';
    const apiStatus =  status?false:true;
    if (window.confirm(`Are you sure to change ${s}`)) {
      try{

      
      const response = await fetchData('/user/updateUserStatus', {
        method: 'POST',
        body: JSON.stringify({
          'userType':type,
          "email": email,
          "mob": mob,
          "currentStatus": apiStatus
      
      }),
    });
    if (response.status) {
      toast.success(response.msg);
      fetchUserList();
    } else {
      toast.error(response.msg);
    }
  } catch (error) {
    toast.error(error.message);
  }
    
     
    } 
   }
     
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
                        <th>Status</th>
                        <th>Action</th>
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
                            <td>{row.parlourUserCurrentStatus ? 'Active':'Inactive'}</td>
                            <td><a href="javascript:void(0)" onClick={() => changeStatus(row.parlourUserEmail,row.parlourUserMob,row.parlourUserCurrentStatus,'P')}> Edit</a></td>
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
                        <th> Status</th>
                        <th> Action</th>
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
                            <td>{row.retailerCurrentStatus ? 'Active':'Inactive'}</td>
                            <td><a href="javascript:void(0)" onClick={() => changeStatus(row.retailerEmail,row.retailerMob,row.retailerCurrentStatus,'R')}> Edit</a></td>
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
                        <th>Status</th>
                        <th>Action</th>
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
                            <td>{row.dealerCurrentStatus ? 'Active':'Inactive'}</td>
                            <td><a href="javascript:void(0)" onClick={() => changeStatus(row.dealerEmail,row.dealerMob,row.dealerCurrentStatus,'D')}> Edit</a></td>
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
                        <th>Status</th>
                        <th>Action</th>
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
                            <td>{row.stockistCurrentStatus ? 'Active':'Inactive'}</td>
                            <td><a href="javascript:void(0)" onClick={() => changeStatus(row.stockistEmail,row.stockistMob,row.stockistCurrentStatus,'S')}> Edit</a></td>
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