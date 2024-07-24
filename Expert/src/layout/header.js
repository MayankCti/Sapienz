import React from "react";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../routes/path";
import LogoutConfirm from "../components/LogoutConfirm";
import { getProfile } from "../utils/pip";


function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="ct_right_header">
        <div className="ct_right_header_left">
          <div className="ct_toggle_bar">
            <i className="fa-solid fa-bars" />
          </div>
          <div className="ct_head_search">
            <input type="text" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass" />
          </div>
        </div>
        <div className="ct_right_header_right">
          {/* <div className="ct_notification_main">
          <div className="ct_notification_icon">
            <img src="/assets/img/bell_icon.svg" alt="" />
            <span>6</span>
          </div>
        </div> */}
          <div className="ct_language_selector">
            <img src="/assets/img/us.png" alt="" />
            <select className="form-control">
              <option value="English">English</option>
            </select>
          </div>
          <div className="ct_user_profile_head">
            <a
              href="javascript:void(0)"
              onClick={() => navigate(pageRoutes?.profile)}
            >
              <img
                src="/assets/img/user_profile.png"
                alt=""
                className="ct_img_44"
              />
              <div>
                <h6 className="ct_fs_14 ct_fw_600 mb-0">{getProfile("EXPERT")?.user_name}</h6>
                <p className="mb-0 ct_fs_12 ct_fw_400">Admin</p>
              </div>
            </a>
          </div>
          <div>
            <a
              href="javascript:void(0)"
              data-bs-toggle="modal"
              data-bs-target="#ct_logout_modal"
            >
              <img src="/assets/img/logout_icon.svg" alt="" />
            </a>
          </div>
        </div>
      </div>

      <LogoutConfirm logoutfor={pageRoutes?.login}/>
    </>
  );
}

export default Header;
