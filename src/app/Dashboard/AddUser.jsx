import { useEffect, useState } from "react";
import { fetchData } from "../../helper/api";
import $ from 'jquery';
import { toast } from "react-toastify";
const AddUser = ()=>{
  const[checkType,setcheckType] = useState(null);
  const[state,setState] = useState([]);
  const[district,setDistrict] = useState([]);
  const[city,setCity] = useState([]);
  const[pinCode,setPinCode] = useState([]);
  const[stocklist,setstocklist] = useState([]);
  const[handleData,setHandleData] = useState(null);
const fetchState = async()=>{
   try { 
    
       const response = await fetchData('/user/getAllStateName', {
         method: 'GET',
     });

     if(response.status){
           
      setState(response.model);
     }else{
      toast.error(response.msg);
     }
     } catch (error) {
       toast.error(error.message);
     }
}

const findDisttrict = async(stateName) =>{
  try { 
    
    const response = await fetchData('/user/findAllDistrictByStateName', {
      method: 'POST',
      body: JSON.stringify({ "stateName": stateName}),
  });
   
 
    
  if(response.status){
    setDistrict(response.model);
   }else{
    toast.error(response.msg);
   }
  } catch (error) {
    toast.error(error.message);
  }
}
  const handleChange = (e)=>{
    
    setHandleData((pre)=>({
      ...pre,
      [e.target.name]:e.target.value
    }))
  }
const findCity = async(districtName) =>{
  try { 
     const stateName = $('#stateName').val();
    const response = await fetchData('/user/findAllCityByStateNameAndDistrictName', {
      method: 'POST',
      body: JSON.stringify({'stateName':stateName,'districtName':districtName}),
  });

  
  if(response.status){
    setCity(response.model);
   }else{
    toast.error(response.msg);
   }
} catch (error) {
  toast.error(error.message);
}
  
}

const findPinCode = async(cityName) =>{
  try { 
     const stateName = $('#stateName').val();
     const districtName = $('#districtName').val();
    const response = await fetchData('/user/findAllCityByStateNameAndDistrictName', {
      method: 'POST',
      body: JSON.stringify({'stateName':stateName,'districtName':districtName,'cityName':cityName}),
  });

  if(response.status){
    setPinCode(response.model);
   }else{
    toast.error(response.msg);
   }
  

} catch (error) {
  toast.error(error.message);
}
}

const stockListUser = async(districtName) =>{
  try { 
    
    
    const response = await fetchData('/user/getAllSuperStockistListByDistrict', {
      method: 'POST',
      body: JSON.stringify({'dealerDeliveryAddressDistrict':districtName}),
  });
 if(response.status){
  setstocklist(response.model)
 }else{
  toast.error(response.msg);
 }

} catch (error) {
  toast.error(error.message);
}
}



const saveDealerandStocklist = async (e) => {
  e.preventDefault();
  try {
    
   
    const response = await fetchData('/user/addNewDealer', {
      method: 'POST',
      body: JSON.stringify(handleData),
  });
   
    if (response.status) {
    
      navigate("/user-list");
      toast.success(response.msg);
    } else {
      toast.error(response.msg);
    }
  } catch (error) {
    toast.error(error.message);
  }
};



useEffect(()=>{
  fetchState();
},[])
    return (
        <>
  <div class="content-wrapper"> 
   
   <div class="content">
     <div class="info-box">
<div class="row m-t-3">
        <div class="col-lg-12">
          <div class="card ">
            <div class="card-header bg-blue">
              <h5 class="text-white m-b-0">Add User </h5>
            </div>
            <div class="card-body">
              
              <form onSubmit={saveDealerandStocklist}>
              <div class="row">

              <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Type</label>
                    <select class="custom-select form-control" required name="dealerRole" id="dealerRole" onChange={(e) => {handleChange(e),setcheckType(e.target.value)}}>
                      <option value="">Select Option</option>
                      <option value="D">Dealer</option>
                      <option value="S">Stock List</option>
                     
                    </select>
                   
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Full Name</label>
                    <input class="form-control" name="dealerName" type="text" onChange={(e)=>handleChange(e)} />
                   
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Name of Shop</label>
                    <input class="form-control" name="dealerShopName" type="text" onChange={(e)=>handleChange(e)}/>
                    
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">E-mail</label>
                    <input class="form-control" name="dealerEmail" type="text" onChange={(e)=>handleChange(e)}/>

                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Mobile Number</label>
                    <input class="form-control" name="dealerMob" type="text" onChange={(e)=>handleChange(e)}/>

                   </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">password</label>
                    <input class="form-control" name="dealerPassword" type="text" onChange={(e)=>handleChange(e)} />
                    
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Address</label>
                    <input class="form-control" name="dealerDeliveryAddress" type="text" onChange={(e)=>handleChange(e)}/>
                    
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Select State</label>
                    <select class="custom-select form-control"  id="stateName" onChange={(e) => {handleChange(e),findDisttrict(e.target.value)}}>
                      <option value="">Select State</option>
                      {state && state.map(row =>(
                        <option>{row.stateName}</option>
                      ))}
                      
                     
                    </select>
                   
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Select District</label>
                    <select class="custom-select form-control" name="dealerDeliveryAddressDistrict" id="districtName" onChange={(e) => {handleChange(e),findCity(e.target.value),stockListUser(e.target.value)}}>
                      <option value="">Select District</option>
                      {district && district.map(row =>(
                        <option>{row.districtName}</option>
                      ))}
                    </select>
                   
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Select City</label>
                    <select class="custom-select form-control" name="dealerDeliveryAddressCity" id="cityName" onChange={(e)=>{handleChange(e),findPinCode(e.target.value)}}>
                      <option value="">Select City</option>
                      {city && city.map(row =>(
                        <option>{row.cityName}</option>
                      ))}
                    </select>
                  
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Select PinCode</label>
                    <select class="custom-select form-control" id="dealerDeliveryAddressPincode" name="dealerDeliveryAddressPincode" onChange={(e)=>handleChange(e)}>
                      <option value="">Select PinCode</option>
                      {pinCode && pinCode.map(row =>(
                        <option>{row.pinCode}</option>
                      ))}
                    </select>
                  
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Area</label>
                    <input class="form-control" name="dealerDeliveryAddressArea" type="text" onChange={(e)=>handleChange(e)} />
                  
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Landmark</label>
                    <input class="form-control" name="dealerDeliveryAddressLandmark" type="text" onChange={(e)=>handleChange(e)} />
                    
                  </div>
                </div>
                {(checkType == 'D')? (
                  <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Super Stockist</label>
                    <select class="custom-select form-control"  name="dealerDeliveryAddressPincode" onChange={(e)=>handleChange(e)}>
                      <option value="">Select PinCode</option>
                      {stocklist && stocklist.map(row =>(
                        <option>{row.pinCode}</option>
                      ))}
                    </select>
                    
                  </div>
                </div>
                ):null}
                
                <div class="col-md-12">
                  <button type="submit" class="btn btn-success">Submit</button>
                </div>
                 </div>
              </form>
           
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

export default AddUser;