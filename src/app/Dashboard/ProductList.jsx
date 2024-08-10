import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchData } from "../../helper/api";

const ProductList = ()=>{


const[data,setData] = useState(null);

const fetchProduct = async()=>{
   try { 
    
       const response = await fetchData('/user/getAllProductList', {
         method: 'GET',
     });
      
     setData(response.model)
     } catch (error) {
       toast.error(error.message);
     }
}

console.log('data '+ JSON.stringify(data));


useEffect(()=>{
  fetchProduct();
},[])

    return (
        <>
        
  <div class="content-wrapper"> 
    
    
    
   
    <div class="content">
      <div class="info-box">
      <h4 class="text-black">Product List</h4>
      
      <div class="table-responsive">
                  <table id="example2" class="table table-bordered table-hover" data-name="cool-table">
                    <thead>
                      <tr>
                        <th>Category Code</th>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Unit Value</th>
                        <th>UM</th>
                        <th>Product Price</th>
                        <th>Product Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data && data.map(row =>(
                        <tr>
                        <td>{row.productCategoryCode}</td>
                        <td>{row.productCode}</td>
                        <td>{row.productName}
                          <br/>
                          <img src={row.productImage} class="img-responsive" />
                        </td>
                        <td>{row.productUnitValue}</td>
                        <td>{row.productUM}</td>
                        <td>{row.productPrice}</td>
                        <td><span class={row.productStatus ? 'label label-success':'label label-danger'}>{row.productStatus?'Active':'InActive'}</span></td>
                        <td><i class="fa fa-pencil" aria-hidden="true"></i></td>
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

export default ProductList;