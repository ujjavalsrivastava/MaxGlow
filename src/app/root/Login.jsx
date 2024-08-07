import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/img/body-bg.jpg";
import { useState } from "react";
import { fetchData } from "../../helper/api";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  const handle = (e) => {
    setData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      
     
      const response = await fetchData('/token', {
        method: 'POST',
        body: JSON.stringify(data),
    });
     
      if (response.status) {
        localStorage.setItem("token", response.msg);
        localStorage.setItem("token.data", JSON.stringify(response.model));
        navigate("/dashboard");
        toast.success('login Succefully');
      } else {
        toast.error(response.msg);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "100vh",
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="login-box">
          <div className="login-box-body">
            <h3 className="login-box-msg">Sign In</h3>

            <form onSubmit={submitLogin} method="post">
              <div className="form-group has-feedback">
                <input
                  type="number"
                  className="form-control sty1"
                  name="mob"
                  placeholder="Mobile"
                  onChange={handle}
                />
              </div>
              <div className="form-group has-feedback">
                <input
                  type="password"
                  className="form-control sty1"
                  name="password"
                  onChange={handle}
                  placeholder="Password"
                />
              </div>
              <div>
                <div className="col-xs-8">
                  <div className="checkbox icheck">
                    <label>
                      <input type="checkbox" />
                      Remember Me{" "}
                    </label>
                    <a
                      href="pages-recover-password.html"
                      className="pull-right"
                    >
                      <i className="fa fa-lock"></i> Forgot pwd?
                    </a>{" "}
                  </div>
                </div>

                <div className="col-xs-4 m-t-1">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-flat"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
        

            <div className="m-t-2">
              Don't have an account?{" "}
              <a href="pages-register.html" className="text-center">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
