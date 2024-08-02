import React from "react";
import { Formik } from "formik";
import { pageRoutes } from "../routes/path";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { forgotPasswordSchema } from "../utils/schema";
import { useDispatch, useSelector } from "react-redux";
import SapienzeLoader from "../components/Loader/SapienzeLoader";
import { expertForgotPassword } from "../redux/actions/authActions";

function ForgetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state?.authReducer);
  const initialState = {
    email: "",
  };

  const handleForgotPassword = async (values) => {
    const callback = (response) => {
      if (response.success) navigate(pageRoutes?.login);
    };
    dispatch(expertForgotPassword({ payload: values, callback }));
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
                    validationSchema={forgotPasswordSchema}
                    onSubmit={(values, actions) => {
                      handleForgotPassword(values);
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
                <form
                  onSubmit={handleSubmit}
                >
                  <div className="ct_login_form_cnt">
                    <div className="ct_mb_50">
                      <h2 className="ct_fs_35 ct_fw_600 ct_mb_30">
                        Forgot Password{" "}
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
                          Email
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
                          placeholder="Enter email address"
                        />
                        <ErrorMessage
                            errors={errors}
                            touched={touched}
                            fieldName="email"
                          />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <button onClick={handleSubmit} type="submit" className="ct_blue_btn w-100 justify-content-center">Continue</button>
                  </div>
                  <p className="text-center mt-4">
                    Already have any account?{" "}
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.login)}
                      className="ct_fw_600 ct_blue_text ms-3"
                    >
                      Sign In
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

export default ForgetPassword;
