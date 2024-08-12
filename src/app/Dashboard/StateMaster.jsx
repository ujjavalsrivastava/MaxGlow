import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchData } from "../../helper/api";

const StateMaster = () => {

   
    const[data,setData] = useState([]);

    const[save,setsave] = useState({
           
      "stateName": null,
      "districtName": null,
      "cityName": null,
      "pinCode": null,
  });

    const fetchState = async()=>{
       try { 
        
           const response = await fetchData('/user/getAllStateName', {
             method: 'GET',
         });
          
         setData(response.model)
         } catch (error) {
            
           toast.error(error.message);
         }
    }

 const handleChange = (e)=>{
  setsave((pre)=>(
    {
      ...pre,
      [e.target.name]:e.target.value
    }
  ))
 }

 const savestateFun = async(e)=>{
        e.preventDefault();
        try {
    
   
          const response = await fetchData('/user/saveNewState', {
            method: 'POST',
            body: JSON.stringify(save),
        });
         
          if (response.status) {
          
            toast.success(response.msg);
            fetchState();
          } else {
            toast.error(response.msg);
          }
        } catch (error) {
          toast.error(error.message);
        }
 }


    useEffect(()=>{
        fetchState();
    },[])
    return (
        <>
      
  <div class="content-wrapper"> 
    
    <div class="content-header sty-one">
      <h1 class="text-black">State master</h1>
      <ol class="breadcrumb">
        <li><a href="#">Home</a></li>
        <li class="sub-bread"><i class="fa fa-angle-right"></i> Form</li>
        <li><i class="fa fa-angle-right"></i> State</li>
      </ol>
    </div>
    
    
    <div class="content">
      <div class="info-box">
        <form onSubmit={savestateFun}>
        <div class="row">
          <div class="col-md-6">
           <div class="form-group has-feedback">
                    <label class="control-label">State Name</label>
                    <input class="form-control" name="stateName" type="text" onChange={(e)=>handleChange(e)} />
                   
            </div>
          </div>

          <div class="col-md-6">
           <div class="form-group has-feedback">
                    <label class="control-label">District Name</label>
                    <input class="form-control" name="districtName" type="text" onChange={(e)=>handleChange(e)} />
                   
            </div>
          </div>

          <div class="col-md-6">
           <div class="form-group has-feedback">
                    <label class="control-label">City</label>
                    <input class="form-control" name="cityName" type="text" onChange={(e)=>handleChange(e)} />
                   
            </div>
          </div>
          <div class="col-md-6">
           <div class="form-group has-feedback">
                    <label class="control-label">Pin Code</label>
                    <input class="form-control" name="pinCode" type="text" onChange={(e)=>handleChange(e)} />
                   
            </div>
          </div>
          {/* <div class="col-md-6">
            <div class="form-group has-feedback">
              <label class="control-label">Select District</label>
              <select class="custom-select form-control" id="location1" name="location">
                <option value="">Select District</option>
                <option value="Amsterdam">Example</option>
                <option value="Berlin">Example</option>
                <option value="Frankfurt">Example</option>
              </select>
              
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group has-feedback">
              <label class="control-label">Select City</label>
              <select class="custom-select form-control" id="location1" name="location">
                <option value="">Select City</option>
                <option value="Amsterdam">Example</option>
                <option value="Berlin">Example</option>
                <option value="Frankfurt">Example</option>
              </select>
            
            </div>
          </div> */}
          <div class="col-md-6">
            <div class="form-group has-feedback">
              <button type="submit" class="btn btn-success" style={{marginTop: '29px'}}>Submit</button>
            </div>
          </div>
          </div>
          </form>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">State</th>
                <th scope="col">District</th>
                <th scope="col">City</th>
                <th scope="col">Pin code</th>
               </tr>
            </thead>
            <tbody>
                {data && data.map((row,index)=>(
                    <tr>
                <th scope="row">{index+1}</th>
                <td>{row.stateName}</td>
                <td>{row.districtName}</td>
                
                <td>{row.cityName}</td>
                <td>{row.pinCode}</td>
                </tr>
                ))}
              
         
            </tbody>
          </table>
        </div>
        </div>
    </div>
   
  </div>
  
        </>
    )

}

export default StateMaster