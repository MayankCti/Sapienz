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
    return <SapienzeLoader />;
  }
  return (
    <>
      <section className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <div className="ct_login_form">
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
                    <form className="mt-4" onSubmit={handleSubmit}>
                      <div className="ct_login_form_cnt">
                        <div className="ct_mb_50">
                          <h2 className="ct_fs_35 ct_fw_600 ct_mb_30">
                            Forgot Password{" "}
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
                        <button
                          onClick={handleSubmit}
                          type="submit"
                          className="ct_blue_btn w-100"
                        >
                          Continue
                        </button>
                      </div>
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
