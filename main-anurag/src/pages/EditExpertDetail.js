import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../routes/path";

function EditExpertDetail() {
  const navigate = useNavigate();

  return (
    <>
      <div className="ct_inner_dashbaord_main">
        <div className="ct_white_bg p-4">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
            <h4 className="ct_fs_24 ps-4 ct_fw_600">Edit Expert Details</h4>
            <div className="d-flex align-items-center gap-3">
              <div className="ms-4 d-flex align-items-center gap-3">
                <a
                  href="javascript:void(0)"
                  onClick={() => navigate(pageRoutes?.expertDetail)}
                  className="ct_blue_btn py-3 ct_btn_h_48"
                >
                  Update
                </a>
                {/* <a
                  href="javascript:void(0)"
                  className="ct_blue_btn ct_delete_btn1 py-3 ct_btn_h_48"
                >
                  Delete
                </a> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="ct_border_1_black">
                <form action="">
                  <h4 className="ct_fs_24 text-center ct_fw_600">
                    Expert Details
                  </h4>
                  <div className="ct_edit_profile_img mt-4">
                    <label htmlFor="ct_edit_profile">
                      <input
                        type="file"
                        className="d-none"
                        id="ct_edit_profile"
                      />
                      <img
                        src="http://192.168.29.100:4002/profile/profile_images1722939937833.jpg"
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
                        <label htmlFor="" className="mb-2">
                          First Name(s){" "}
                          <span className="ct_required_text">*</span>
                        </label>
                        <input
                          type="text"
                          className="ct_input form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-group">
                        <label htmlFor="" className="mb-2">
                          Last Name <span className="ct_required_text">*</span>
                        </label>
                        <input
                          type="text"
                          className="ct_input form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="form-group">
                        <label htmlFor="" className="mb-2">
                          Email <span className="ct_required_text">*</span>
                        </label>
                        <input
                          type="email"
                          className="ct_input form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="form-group">
                        <label htmlFor="" className="mb-2">
                          Mobile No. <span className="ct_required_text">*</span>
                        </label>
                        <input
                          type="number"
                          className="ct_input form-control"
                          placeholder="Mobile No."
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-group">
                        <label htmlFor="" className="mb-2">
                          Address line 1
                          <span className="ct_required_text">*</span>
                        </label>
                        <input
                          type="text"
                          className="ct_input form-control"
                          placeholder="Enter Address"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-group">
                        <label htmlFor="" className="mb-2">
                          Address line 2
                          <span className="ct_required_text">*</span>
                        </label>
                        <input
                          type="text"
                          className="ct_input form-control"
                          placeholder="Enter Address"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-group">
                        <label htmlFor="" className="mb-2">
                          Town/City
                          <span className="ct_required_text">*</span>
                        </label>
                        <input
                          type="text"
                          className="ct_input form-control"
                          placeholder="Town/City"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-group">
                        <label htmlFor="" className="mb-2">
                          County<span className="ct_required_text">*</span>
                        </label>
                        <select className="ct_input form-control">
                          <option value="">Choose County</option>
                          <option value="">India</option>
                          <option value="">United Kingdom</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="form-group">
                        <label htmlFor="" className="mb-2">
                          Expert In
                          <span className="ct_required_text">*</span>
                        </label>
                        <select className="ct_input form-control">
                          <option value="">Physics</option>
                          <option value="">Maths</option>
                          <option value="">Chemestry</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditExpertDetail;
