import React from "react";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../routes/path";

function NewPassword() {
  const navigate = useNavigate();
  return (
    <>
      <section className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div
                className="text-end ct_admin_login_btn_fixed"
                // onClick={()=>{window.location.href = "/admin/login"}}
              >
                <a href="javascript:void(0)">
                  Admin Login
                  <i className="fa-solid fa-id-badge ms-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <div className="ct_login_form">
                <div className="ct_login_tab ct_mb_50">
                  <button className="ct_outline_btn ">
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        {
                          window.location.href = "/login";
                        }
                      }}
                    >
                      Student
                    </a>
                  </button>
                  <button className="ct_outline_btn ct_login_tab_active">
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.login)}
                    >
                      Expert
                    </a>
                  </button>
                </div>
                <form action="#">
                  <div className="ct_login_form_cnt">
                    <div className="ct_mb_50">
                      <h2 className="ct_fs_35 ct_fw_600 ct_mb_30">
                        Create New Password{" "}
                      </h2>
                      <p className="ct_light_text mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div className="form-group mb-4">
                      <label
                        htmlFor=""
                        className="d-flex align-items-center justify-content-between mb-3"
                      >
                        <span className="ct_fw_600 ct_fs_20">New Password</span>
                        <span className="ct_badge ct_light_green_bg ct_green_text">
                          Strong
                        </span>
                      </label>
                      <div className="position-relative">
                        <input
                          type="password"
                          className="form-control ct_input"
                          placeholder="Enter password"
                        />
                        <i className="fa-regular fa-eye-slash ct_eye_top" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor=""
                        className="d-flex align-items-center justify-content-between mb-3"
                      >
                        <span className="ct_fw_600 ct_fs_20">
                          Confirm Password
                        </span>
                        <span className="ct_badge ct_light_green_bg ct_green_text">
                          Strong
                        </span>
                      </label>
                      <div className="position-relative">
                        <input
                          type="password"
                          className="form-control ct_input"
                          placeholder="Enter password"
                        />
                        <i className="fa-regular fa-eye-slash ct_eye_top" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <button className="ct_blue_btn w-100 justify-content-center">
                      Continue
                    </button>
                  </div>
                  <p className="text-center mt-4">
                    Already have an account?{" "}
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.login)}
                      className="ct_fw_600 ct_blue_text ms-3"
                    >
                      Login
                    </a>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-lg-5 mb-4 mb-lg-0 px-lg-0">
              <div className="ct_login_right_img">
                <img src="/assets/img/expert_login_img.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* All Js Start */}
      {/* All Js End */}
    </>
  );
}

export default NewPassword;
