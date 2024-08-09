import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchData } from "../../helper/api";

const StateMaster = () => {

   
    const[data,setData] = useState(null);

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
    useEffect(()=>{
        fetchState();
    },[])
    return (
        <>
      
  <div class="content-wrapper"> 
    
    <div class="content-header sty-one">
      <h1 class="text-black">Basic Tables</h1>
      <ol class="breadcrumb">
        <li><a href="#">Home</a></li>
        <li class="sub-bread"><i class="fa fa-angle-right"></i> Tables</li>
        <li><i class="fa fa-angle-right"></i> Basic Tables</li>
      </ol>
    </div>
    
    
    <div class="content">
      <div class="info-box">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group has-feedback">
              <label class="control-label">Select State</label>
              <select class="custom-select form-control" id="location1" name="location">
                <option value="">Select State</option>
                <option value="Amsterdam">Example</option>
                <option value="Berlin">Example</option>
                <option value="Frankfurt">Example</option>
              </select>
             
            </div>
          </div>
          <div class="col-md-6">
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
          </div>
          <div class="col-md-6">
            <div class="form-group has-feedback">
              <button type="submit" class="btn btn-success" style={{marginTop: '29px'}}>Submit</button>
            </div>
          </div>
          </div>
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