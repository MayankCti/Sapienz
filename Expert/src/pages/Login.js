import { Formik } from "formik";
import React, { useState } from "react";
import { pageRoutes } from "../routes/path";
import { loginSchema } from "../utils/schema";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { expertLogin } from "../redux/actions/authActions";
import SapienzeLoader from "../components/Loader/SapienzeLoader";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state?.authReducer);
  const [isEye, setIsEye] = useState(true);
  const initialState = {
    email: "",
    password: "",
  };

  const handleLogin = async (values) => {
    const callback = (response) => {
      if (response.success) navigate(pageRoutes?.dashboard);
    };
    dispatch(expertLogin({ payload: values, callback }));
  };

  if (isLoading) {
    return <SapienzeLoader />;
  }
  return (
    <>
      <section className="">
        <div className="container-fluid">
          <div
            className="row"
            // onClick={() => {
            //   window.location.href = "/admin/login";
            // }}
          >
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
                  <button
                    onClick={() => {
                      window.location.href = "/login";
                    }}
                    className={`ct_outline_btn`}
                  >
                    <a href="javascript:void(0)">Student</a>
                  </button>
                  <button
                    onClick={() => navigate(pageRoutes?.login)}
                    className={`ct_outline_btn ct_login_tab_active`}
                  >
                    <a href="javascript:void(0)">Expert</a>
                  </button>
                </div>
                <Formik
                  initialValues={initialState}
                  validationSchema={loginSchema}
                  onSubmit={(values, actions) => {
                    handleLogin(values);
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
                            Expert Login{" "}
                          </h2>
                          {/* <p className="ct_light_text mb-0">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p> */}
                        </div>
                        <div className="form-group mb-4">
                          <label
                            htmlFor=""
                            className="d-flex align-items-center justify-content-between mb-3"
                          >
                            <span className="ct_fw_600 ct_fs_20">Email</span>
                          </label>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control ct_input"
                              id="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.email}
                              placeholder="Enter email"
                            />
                            <ErrorMessage
                              errors={errors}
                              touched={touched}
                              fieldName="email"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor=""
                            className="d-flex align-items-center justify-content-between mb-3"
                          >
                            <span className="ct_fw_600 ct_fs_20">Password</span>
                          </label>
                          <div className="position-relative">
                            <input
                              className="form-control ct_input"
                              type={isEye ? "password" : "text"}
                              id="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.password}
                              placeholder="Enter password"
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
                      <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap mt-3">
                        <p className="mb-0 ct_color_8E8E8E">
                          <label
                            htmlFor=""
                            className="d-flex align-items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              className="ct_custom_checkbox"
                            />
                            Remember me?
                          </label>
                        </p>
                        <a
                          href="javascript:void(0)"
                          onClick={() => navigate(pageRoutes?.forgotPassword)}
                          className="ct_color_8E8E8E  ct_forgot_password_link"
                        >
                          Forgot Passowrd ?
                        </a>
                      </div>
                      <div className="mt-5">
                        <button
                          onClick={handleSubmit}
                          type="submit"
                          className="ct_blue_btn w-100 justify-content-center"
                        >
                          LogIn
                        </button>
                      </div>
                      <p className="text-center mt-4">
                        Don’t have any account?{" "}
                        <a
                          href="javascript:void(0)"
                          onClick={() => navigate(pageRoutes?.signup)}
                          className="ct_fw_600 ct_blue_text ms-3"
                        >
                          Sign up
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

export default Login;
