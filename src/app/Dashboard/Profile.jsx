import { useEffect, useState } from "react";
import { fetchProfile } from "../../store/profileReducer";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
  const userDetails = localStorage.getItem("token.data");
  const obj = JSON.parse(userDetails);

  return (
    <>
      <div class="content-wrapper">
        <div class="content-header sty-one">
          <h1 class="text-black">Profile</h1>
          <ol class="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li class="sub-bread">
              <i class="fa fa-angle-right"></i> Profile
            </li>
            <li>
              <i class="fa fa-angle-right"></i> Profile
            </li>
          </ol>
        </div>

       
        <div class="content">
         
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
                          <input
                            class="form-control"
                            placeholder="First Name"
                            type="text"
                            value={obj && obj.personName}
                          />
                          <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Mobile No</label>
                          <input
                            class="form-control"
                            placeholder="Last Name"
                            type="text"
                            value={obj && obj.mobile}
                          />
                          
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">E-mail</label>
                          <input
                            class="form-control"
                            placeholder="E-mail"
                            type="text"
                            value={obj && obj.email}
                          />
                          <span
                            class="fa fa-envelope-o form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">User Code</label>
                          <input
                            class="form-control"
                            placeholder="Contact Number"
                            type="text"
                            value={obj && obj.userCode}
                          />
                          
                        </div>
                      </div>
                      {/* <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Company</label>
                          <input
                            class="form-control"
                            placeholder="Company"
                            type="text"
                          />
                          <span
                            class="fa fa-briefcase form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Website</label>
                          <input
                            class="form-control"
                            placeholder="https://"
                            type="text"
                          />
                          <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group has-feedback">
                          <label class="control-label">Bio</label>
                          <textarea
                            class="form-control"
                            id="placeTextarea"
                            rows="3"
                            placeholder="Bio"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group has-feedback">
                          <label class="custom-file center-block block">
                            <input
                              id="file"
                              class="custom-file-input"
                              type="file"
                            />
                            <span class="custom-file-control"></span>{" "}
                          </label>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <button type="submit" class="btn btn-success">
                          Submit
                        </button>
                      </div> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Profile;
