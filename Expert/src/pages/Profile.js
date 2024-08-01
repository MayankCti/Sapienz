import { pageRoutes } from "../routes/path";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/authActions";
import SapienzeLoader from "../components/Loader/SapienzeLoader";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile, isLoading } = useSelector((state) => state?.authReducer);

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  if (isLoading) {
    return <SapienzeLoader/>;
  }
  return (
    <>
      <div className="ct_inner_dashbaord_main">
        <div className="ct_white_bg p-4">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
            <h4 className="ct_fs_24 ps-md-4 ct_fw_600">Profile</h4>
            <div className="d-flex align-items-center gap-3">
              <div className="ms-md-4 d-flex align-items-center gap-3">
                <a
                  href="javascript:void(0)"
                  onClick={() => navigate(pageRoutes?.editProfile)}
                  className="ct_blue_btn  py-3 ct_btn_h_48"
                >
                  Update Profile
                </a>
                <a
                  href="javascript:void(0)"
                  onClick={() => navigate(pageRoutes?.changePassword)}
                  type="button"
                  className="ct_blue_btn mt-0 ct_btn_h_48"
                >
                  Change Password
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form className="ps-md-4">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={
                      profile?.expert_profile ?? "/assets/img/user_profile.png"
                    }
                    alt=""
                    className="ct_img_66"
                  />
                  <div>
                    <h5 className="ct_fs_20 mb-1">
                      {profile?.user_name ?? ""}
                    </h5>
                    <p className="mb-0">Admin</p>
                  </div>
                </div>

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
                        value={profile?.first_name}
                        className="ct_input form-control"
                        placeholder="Enter first name"
                        disabled={true}
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
                        value={profile?.last_name}
                        placeholder="Enter last name"
                        disabled={true}
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
                        value={profile?.email}
                        disabled={true}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
