import { useEffect, useState } from "react";
import { fetchData,fetchDataFile } from "../../helper/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProductAdd = ()=>{
    const[catgory,setCategory]=useState([]);
    const[productSave,setProductSave]=useState(null);
    const[image,setImage]=useState(null);

    const navigate  = useNavigate();
    
    const fetchCatgory = async()=>{
        try { 
         
            const response = await fetchData('/user/getAllCategoryList', {
              method: 'GET',
          });
           
          setCategory(response.model)
          } catch (error) {
            toast.error(error.message);
          }
     }

     const handleFileChange = async (event) => {
        setImage(event.target.files[0]);
        //   console.log(event.target.files[0]);
      };
     const handleChange = (e)=>{
        setProductSave((pre)=>({
            ...pre,
            [e.target.name]:e.target.value
        }))

     }

     const SaveProduct = async (e) => {
        e.preventDefault();
        try {
           
            const formData = new FormData();
            console.log('formData'+ formData);
            formData.append("productCode", productSave.productCode);
            formData.append("productCategoryCode", productSave.productCategoryCode);
            formData.append("productName", productSave.productName);
            formData.append("productPrice", productSave.productPrice);
            formData.append("productStatus", productSave.productStatus);
            formData.append("productUM", productSave.productUM);
            formData.append("productUnitValue", productSave.productUnitValue);
            
            formData.append("image", image);

           

            fetch('http://103.60.102.203:8080/MaxGlow/user/addNewProduct', {
                method: 'POST',
                body: formData,
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log('File uploaded successfully:', data);
                    navigate("/product-list");
                     toast.success(data.msg);
                 
                })
                .catch((error) => {
                  toast.error('Error uploading file:', error);
                  console.error('Error uploading file:', error);
                });

                return false;
         
          const response = await fetchDataFile('/user/addNewProduct', {
            method: 'POST',
            body: formData,
        });
         
          if (response.status) {
           
            navigate("/product-list");
            toast.success(response.msg);
          } else {
            toast.error(response.msg);
          }
        } catch (error) {
          toast.error(error.message);
        }
      };

     useEffect(()=>{
        fetchCatgory();
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
              <h5 class="text-white m-b-0">Add Product</h5>
            </div>
            <div class="card-body">
              
              <form onSubmit={SaveProduct}>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Category</label>
                    <select class="custom-select form-control"  name="productCategoryCode" onChange={handleChange}>
                      <option value="">Select Catregory</option>
                      {catgory.product_items_view && catgory.product_items_view.map(row =>(
                        <option value={row.productCategoryCode}>{row.productCategoryName}</option>
                      ))}
                      
                      
                    </select>
                   
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Product Code</label>
                    <input class="form-control"  name="productCode" onChange={handleChange} type="text"/>
                    
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Product Name</label>
                    <input class="form-control" name="productName" onChange={handleChange} type="text" />

                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Product Price</label>
                    <input class="form-control" name="productPrice" onChange={handleChange} type="text" />

                   </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Product UM</label>
                    <input class="form-control" name="productUM" onChange={handleChange} type="text" />
                    
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Product Status</label>
                    <select class="custom-select form-control" required onChange={handleChange}  name="productStatus">
                    <option value="">Select Option</option>
                      <option value="false">Inactive</option>
                      <option value="true">Active</option>
                     
                    </select>
                   
                  </div>
                </div>
         
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Product Unit Value</label>
                    <input class="form-control" name="productUnitValue" onChange={handleChange} type="text" />
                  
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Product Image</label>
                    <input class="form-control" name="image" onChange={handleFileChange} type="file" required/>
                    
                  </div>
                </div>
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

export default ProductAdd;