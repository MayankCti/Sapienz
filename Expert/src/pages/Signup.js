import { Formik } from "formik";
import React, { useState } from "react";
import { pageRoutes } from "../routes/path";
import { signupSchema } from "../utils/schema";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { expertSignup } from "../redux/actions/authActions";
import SapienzeLoader from "../components/Loader/SapienzeLoader";

function Signup() {
  const navigate = useNavigate();
  const [isEye, setIsEye] = useState(true);
  const { isLoading } = useSelector((state) => state?.authReducer);
  const dispatch = useDispatch();
  const initialState = {
    email: "",
    user_name: "",
    password: "",
  };

  const handleSignup = async (values) => {
    const callback = (response) => {
      if (response.success) navigate(pageRoutes?.login);
    };
    dispatch(expertSignup({ payload: values, callback }));
  };

  if (isLoading) {
    return <SapienzeLoader/>;
  }
  return (
    <>
      <section className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-end ct_admin_login_btn_fixed">
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
                        navigate("/student/login");
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
                <Formik
                  initialValues={initialState}
                  validationSchema={signupSchema}
                  onSubmit={(values, actions) => {
                    handleSignup(values);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="ct_login_form_cnt">
                        <div className="ct_mb_50">
                          <h2 className="ct_fs_35 ct_fw_600 ct_mb_30">
                            Expert Sign up{" "}
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
                            <span className="ct_fw_600 ct_fs_20">
                              Email Address
                            </span>
                          </label>
                          <div className="position-relative">
                            <input
                              type="email"
                              id="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.email}
                              className="form-control ct_input"
                              placeholder="Enter Email Address"
                            />
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="email"
                            />
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label
                            htmlFor=""
                            className="d-flex align-items-center justify-content-between mb-3"
                          >
                            <span className="ct_fw_600 ct_fs_20">
                              User name
                            </span>
                          </label>
                          <div className="position-relative">
                            <input
                              type="text"
                              id="user_name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.user_name}
                              className="form-control ct_input"
                              placeholder="Enter User name"
                            />
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="user_name"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor=""
                            className="d-flex align-items-center justify-content-between mb-3"
                          >
                            <span className="ct_fw_600 ct_fs_20">Password</span>
                            <span className="ct_badge ct_light_green_bg ct_green_text">
                              Strong
                            </span>
                          </label>
                          <div className="position-relative">
                            <input
                              type={isEye ? "password" : "text"}
                              id="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.password}
                              className="form-control ct_input"
                              placeholder="Type your password here"
                            />
                            <i
                              className={`fa-regular ct_eye_top ${
                                isEye ? "fa-eye-slash" : "fa-eye"
                              }`}
                              onClick={() => setIsEye(!isEye)}
                            />
                          </div>
                          <ErrorMessage
                            errors={errors}
                            touched={touched}
                            fieldName="password"
                          />
                        </div>
                      </div>
                      <div className="mt-5">
                        <button className="ct_blue_btn w-100">Register</button>
                      </div>
                      <p className="text-center mt-4">
                        Already have any account?{" "}
                        <a
                          href="javascript:void(0)"
                          onClick={() => navigate(pageRoutes?.login)}
                          className="ct_fw_600 ct_blue_text ms-3"
                        >
                          Login
                        </a>
                      </p>
                    </form>
                  )}
                </Formik>
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
    </>
  );
}

export default Signup;
