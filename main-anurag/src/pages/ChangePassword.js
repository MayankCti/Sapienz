import { Formik } from "formik";
import React, { useState } from "react";
import { pageRoutes } from "../routes/path";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { changePasswordSchema } from "../utils/schema";
import { useDispatch, useSelector } from "react-redux";
import { expertChangePassword } from "../redux/actions/authActions";
import SapienzeLoader from "../components/Loader/SapienzeLoader";
import { getProfile } from "../utils/pip";

function ChangePassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user_name, admin_profile } = getProfile();
  const { isLoading } = useSelector((state) => state?.authReducer);
  const [eyes, setEyes] = useState({
    eye1: false,
    eye2: false,
    eye3: false,
  });
  const initialState = {
    old_password: "",
    new_password: "",
    confirm_password: "",
  };

  const handleChangePassword = async (values) => {
    const callback = (response) => {
      if (response.success) {
        navigate(pageRoutes?.profile);
      }
    };
    dispatch(expertChangePassword({ payload: values, callback }));
  };

  if (isLoading) {
    return <SapienzeLoader />;
  }
  return (
    <>
      <div className="ct_inner_dashbaord_main">
        <div className="ct_white_bg p-4">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
            <h4 className="ct_fs_24 ps-md-4 ct_fw_600">Change Password</h4>
            <div className="d-flex align-items-center gap-3">
              <div className="ms-md-4 d-flex align-items-center gap-3">
                <a
                  href="javascript:void(0)"
                  onClick={() => navigate(pageRoutes?.profile)}
                  className=" ct_blue_btn ct_outline_blue py-3 ct_btn_h_48"
                >
                  Cancel
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Formik
                initialValues={initialState}
                validationSchema={changePasswordSchema}
                onSubmit={(values, actions) => {
                  handleChangePassword(values);
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
                  <form onSubmit={handleSubmit} className="ps-md-4">
                    <div className="row mt-4">
                      <div className="col-md-12 mb-4">
                        <div className="form-group">
                          <label htmlFor="" className="mb-2 ct_fw_500">
                            Current Password{" "}
                            <span className="ct_required_text">*</span>
                          </label>
                          <div className="position-relative">
                            <input
                              type={eyes.eye1 ? "text" : "password"}
                              value={values?.old_password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              id="old_password"
                              className="ct_input form-control"
                              placeholder="Enter current password"
                            />
                            <i
                              class={`fa-regular ct_eye_top ${
                                eyes.eye1 ? "fa-eye" : "fa-eye-slash"
                              } `}
                              onClick={() =>
                                setEyes({ ...eyes, eye1: !eyes.eye1 })
                              }
                            ></i>
                          </div>
                        </div>
                        <ErrorMessage
                          errors={errors}
                          touched={touched}
                          fieldName="old_password"
                        />
                      </div>
                      <div className="col-md-12 mb-4">
                        <div className="form-group">
                          <label htmlFor="" className="mb-2 ct_fw_500">
                            New Password
                            <span className="ct_required_text">*</span>
                          </label>
                          <div className="position-relative">
                            <input
                              type={eyes.eye2 ? "text" : "password"}
                              id="new_password"
                              value={values?.new_password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="ct_input form-control"
                              placeholder="Enter new password"
                            />
                            <i
                              class={`fa-regular ct_eye_top ${
                                eyes.eye2 ? "fa-eye" : "fa-eye-slash"
                              } ct_hide_pass_eye`}
                              onClick={() =>
                                setEyes({ ...eyes, eye2: !eyes.eye2 })
                              }
                            ></i>
                          </div>
                        </div>
                        <ErrorMessage
                          errors={errors}
                          touched={touched}
                          fieldName="new_password"
                        />
                      </div>
                      <div className="col-md-12 mb-4">
                        <div className="form-group">
                          <label htmlFor="" className="mb-2 ct_fw_500">
                            Confirm Password{" "}
                            <span className="ct_required_text">*</span>
                          </label>
                          <div className="position-relative">
                            <input
                              type={eyes.eye3 ? "text" : "password"}
                              value={values?.confirm_password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              autocomplete="off"
                              id="confirm_password"
                              className="ct_input form-control"
                              placeholder="Enter confirm password"
                            />
                            <i
                              class={`fa-regular ct_eye_top ${
                                eyes.eye3 ? "fa-eye" : "fa-eye-slash"
                              } ct_hide_pass_eye`}
                              onClick={() =>
                                setEyes({ ...eyes, eye3: !eyes.eye3 })
                              }
                            ></i>
                          </div>
                        </div>
                        <ErrorMessage
                          errors={errors}
                          touched={touched}
                          fieldName="confirm_password"
                        />
                      </div>
                      <button
                        type="submit"
                        href="javascript:void(0)"
                        onClick={handleSubmit}
                         className="ct_blue_btn  py-3 ct_btn_h_48 justify-content-center w-auto"
                      >
                        Update Password
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
