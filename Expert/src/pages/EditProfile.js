import { Formik } from "formik";
import { pageRoutes } from "../routes/path";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { updateProfileSchema } from "../utils/schema";
import ErrorMessage from "../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import SapienzeLoader from "../components/Loader/SapienzeLoader";
import { fetchProfile, updateProfile } from "../redux/actions/authActions";
import { getProfile } from "../utils/pip";

function EditProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {  isLoading } = useSelector((state) => state?.authReducer);
  const [imagePreview, setImagePreview] = useState(null);
  const data = getProfile()
  const profile = data;
  const [profile_images, setProfileImages] = useState(profile?.expert_profile);
  const [initialState, setInitialState] = useState({
    first_name: profile?.first_name ?? "",
    last_name: profile?.last_name ?? "",
    email: profile?.email ?? "",
  });

  console.log({ object: initialState });

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  const handleUpdateProfile = (values) => {
    const callback = (response) => {
      if (response.success) {
        navigate(pageRoutes?.profile);
      }
    };
    const data = new FormData();
    data.append("first_name", values?.first_name);
    data.append("last_name", values?.last_name);
    {
      imagePreview && data.append("profile_images", imagePreview);
    }

    dispatch(updateProfile({ payload: data, callback }));
  };

  if (isLoading) {
    return <SapienzeLoader />;
  }
  return (
    <>
      <div className="ct_inner_dashbaord_main">
        <div className="ct_white_bg p-4">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
            <h4 className="ct_fs_24 ps-md-4 ct_fw_600">Edit Profile Details</h4>
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
                validationSchema={updateProfileSchema}
                onSubmit={(values, actions) => {
                  handleUpdateProfile(values);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  setFieldValue,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit} className="ps-md-4">
                    <div className="d-flex align-items-center gap-3">
                    <label for="profile_images" style={{ cursor: "pointer" ,position:"relative"}}>
                        <input
                          type="file"
                          onChange={(event) => {
                            setImagePreview(event.target.files[0]);
                          }}
                          id="profile_images"
                          className="d-none"
                        />

                        {imagePreview ? (
                          <>
                            {" "}
                            <img
                              src={URL.createObjectURL(imagePreview)}
                              alt=""
                              className="ct_img_66"
                            />
                          </>
                        ) : (
                          <>
                            <img
                              src={profile_images}
                              alt=""
                              className="ct_img_66"
                            />
                            <div className="ct_edit_profile_icon_camera">
                              <i className="fa-solid fa-camera "></i>
                            </div>
                          </>
                        )}
                      </label>


                      <div>
                        <h5 className="ct_fs_20 mb-1">
                          {profile?.user_name ?? ""}
                        </h5>
                        <p className="mb-0">Admin</p>
                      </div>
                    </div>
                    <ErrorMessage
                      errors={errors}
                      touched={touched}
                      fieldName="profile_images"
                    />
                    <div className="row mt-4">
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label htmlFor="" className="mb-2 ct_fw_500">
                            First Name(s){" "}
                            <span className="ct_required_text">*</span>
                          </label>
                          <input
                            type="text"
                            id="first_name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.first_name}
                            className="ct_input form-control"
                            placeholder="Enter first name"
                          />

                          <ErrorMessage
                            errors={errors}
                            touched={touched}
                            fieldName="first_name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label htmlFor="" className="mb-2 ct_fw_500">
                            Last Name
                            <span className="ct_required_text">*</span>
                          </label>
                          <input
                            type="text"
                            className="ct_input form-control"
                            id="last_name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.last_name}
                            placeholder="Enter last name"
                          />
                          <ErrorMessage
                            errors={errors}
                            touched={touched}
                            fieldName="last_name"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-4">
                        <div className="form-group">
                          <label htmlFor="" className="mb-2 ct_fw_500">
                            Email <span className="ct_required_text">*</span>
                          </label>
                          <input
                            type="email"
                            className="ct_input form-control"
                            placeholder="Enter email"
                            value={values?.email}
                            disabled={true}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <a
                        href="javascript:void(0)"
                        onClick={handleSubmit}
                        className="ct_blue_btn  py-3 ct_btn_h_48"
                      >
                        Save
                      </a>
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

export default EditProfile;
