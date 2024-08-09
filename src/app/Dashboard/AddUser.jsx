const AddUser = ()=>{
    return (
        <>
  <div class="content-wrapper"> 
   
   <div class="content">
     <div class="info-box">
<div class="row m-t-3">
        <div class="col-lg-12">
          <div class="card ">
            <div class="card-header bg-blue">
              <h5 class="text-white m-b-0">User Profile</h5>
            </div>
            <div class="card-body">
              
              <form>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Full Name</label>
                    <input class="form-control" placeholder="First Name" type="text" />
                   
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Name of Shop</label>
                    <input class="form-control" placeholder="Name of Shop" type="text"/>
                    
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">E-mail</label>
                    <input class="form-control" placeholder="E-mail" type="text" />

                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Contact Number</label>
                    <input class="form-control" placeholder="Contact Number" type="text" />

                   </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Address</label>
                    <input class="form-control" placeholder="Address" type="text" />
                    
                  </div>
                </div>
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
                    <label class="control-label">Select PinCode</label>
                    <select class="custom-select form-control" id="location1" name="location">
                      <option value="">Select PinCode</option>
                      <option value="Amsterdam">Example</option>
                      <option value="Berlin">Example</option>
                      <option value="Frankfurt">Example</option>
                    </select>
                  
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Area</label>
                    <input class="form-control" placeholder="Area" type="text" />
                  
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Landmark</label>
                    <input class="form-control" placeholder="Landmark" type="text" />
                    
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Super Stockist</label>
                    <input class="form-control" placeholder="Super Stockist" type="text" />
                    
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

export default AddUser;