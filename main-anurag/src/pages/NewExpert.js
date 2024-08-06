import { Formik } from 'formik';
import React, { useState } from 'react';
import { newExpertSchema } from '../utils/schema';
import { getAuth } from '../utils/pip';
import { addExpertsAPI, BASE_URL } from '../routes/endPoints';
import axios from 'axios';
import { message } from 'antd';
import { pageRoutes } from '../routes/path';
import { useNavigate } from 'react-router-dom';

function CreateExpert() {
  const navigate = useNavigate();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    addressLine1: '',
    addressLine2: '',
    townCity: '',
    county: '',
    expertIn: '',
    profileImage: null,
  };

  const [profileImagePreview, setProfileImagePreview] = useState('/assets/img/user_profile.png');

  const handleLogin = (values) => {
    const formData = new FormData();
    formData.append('first_name', values.firstName);
    formData.append('last_name', values.lastName);
    formData.append('email', values.email);
    formData.append('mobile_number', values.mobile);
    formData.append('address_line1', values.addressLine1);
    formData.append('address_line2', values.addressLine2);
    formData.append('city', values.townCity);
    formData.append('county', values.county);
    formData.append('expertIn', values.expertIn);
    if (values.profileImage) {
      formData.append('profile_image', values.profileImage);
    }

    const token = getAuth();
    axios({
      method: 'post',
      url: BASE_URL + addExpertsAPI,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    })
      .then((res) => {
        if (res?.data?.success) {
          message.success(res?.data?.message)
          console.log(res?.data?.data);
          navigate(pageRoutes?.editExpertDetail)
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="ct_inner_dashbaord_main">
      <div className="ct_white_bg p-4">
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
          <h4 className="ct_fs_24 ps-4 ct_fw_600">New Expert Details</h4>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="ct_border_1_black">
              <Formik
                initialValues={initialValues}
                validationSchema={newExpertSchema}
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
                  setFieldValue,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <h4 className="ct_fs_24 text-center ct_fw_600">
                      Expert Details
                    </h4>
                    <div className="ct_edit_profile_img mt-4">
                      <label htmlFor="profileImage">
                        <input
                          type="file"
                          name="profileImage"
                          className="d-none"
                          id="profileImage"
                          onChange={(event) => {
                            setFieldValue('profileImage', event.currentTarget.files[0]);
                            setProfileImagePreview(URL.createObjectURL(event.currentTarget.files[0]));
                          }}
                        />
                        <img
                          src={profileImagePreview}
                          alt=""
                          className="ct_img_148"
                        />
                        <div className="ct_edit_profile_icon">
                          <i className="fa-solid fa-pencil" />
                        </div>
                      </label>
                    </div>
                    <div className="row mt-4">
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label htmlFor="firstName" className="mb-2">
                            First Name(s){" "}
                            <span className="ct_required_text">*</span>
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            className="ct_input form-control"
                            placeholder="First Name"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.firstName && errors.firstName ? (
                            <div className="text-danger">{errors.firstName}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label htmlFor="lastName" className="mb-2">
                            Last Name <span className="ct_required_text">*</span>
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            className="ct_input form-control"
                            placeholder="Last Name"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.lastName && errors.lastName ? (
                            <div className="text-danger">{errors.lastName}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-md-12 mb-4">
                        <div className="form-group">
                          <label htmlFor="email" className="mb-2">
                            Email <span className="ct_required_text">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            className="ct_input form-control"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.email && errors.email ? (
                            <div className="text-danger">{errors.email}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-md-12 mb-4">
                        <div className="form-group">
                          <label htmlFor="mobile" className="mb-2">
                            Mobile No. <span className="ct_required_text">*</span>
                          </label>
                          <input
                            type="text"
                            name="mobile"
                            className="ct_input form-control"
                            placeholder="Mobile No."
                            value={values.mobile}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.mobile && errors.mobile ? (
                            <div className="text-danger">{errors.mobile}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label htmlFor="addressLine1" className="mb-2">
                            Address line 1
                            <span className="ct_required_text">*</span>
                          </label>
                          <input
                            type="text"
                            name="addressLine1"
                            className="ct_input form-control"
                            placeholder="Enter Address"
                            value={values.addressLine1}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.addressLine1 && errors.addressLine1 ? (
                            <div className="text-danger">{errors.addressLine1}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label htmlFor="addressLine2" className="mb-2">
                            Address line 2
                            <span className="ct_required_text">*</span>
                          </label>
                          <input
                            type="text"
                            name="addressLine2"
                            className="ct_input form-control"
                            placeholder="Enter Address"
                            value={values.addressLine2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.addressLine2 && errors.addressLine2 ? (
                            <div className="text-danger">{errors.addressLine2}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label htmlFor="townCity" className="mb-2">
                            Town/City
                            <span className="ct_required_text">*</span>
                          </label>
                          <input
                            type="text"
                            name="townCity"
                            className="ct_input form-control"
                            placeholder="Town/City"
                            value={values.townCity}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.townCity && errors.townCity ? (
                            <div className="text-danger">{errors.townCity}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label htmlFor="county" className="mb-2">
                            County<span className="ct_required_text">*</span>
                          </label>
                          <select
                            name="county"
                            className="ct_input form-control"
                            value={values.county}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option value="">Choose County</option>
                            <option value="India">India</option>
                            <option value="United Kingdom">United Kingdom</option>
                          </select>
                          {touched.county && errors.county ? (
                            <div className="text-danger">{errors.county}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-md-12 mb-4">
                        <div className="form-group">
                          <label htmlFor="expertIn" className="mb-2">
                            Expert In
                            <span className="ct_required_text">*</span>
                          </label>
                          <select
                            name="expertIn"
                            className="ct_input form-control"
                            value={values.expertIn}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option value="">Select Expertise</option>
                            <option value="Physics">Physics</option>
                            <option value="Maths">Maths</option>
                            <option value="Chemistry">Chemistry</option>
                          </select>
                          {touched.expertIn && errors.expertIn ? (
                            <div className="text-danger">{errors.expertIn}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="submit" className="ct_blue_btn py-3 ct_btn_h_48">
                        Save
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateExpert;
