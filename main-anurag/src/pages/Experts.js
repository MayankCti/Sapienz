import React, { useState, useEffect } from "react";
import { pageRoutes } from "../routes/path";
import { useNavigate } from "react-router-dom";
import * as CONFIG_JSON from "../routes/endPoints";
import axios from "axios"; // Import axios
import { getAuth, getDateFormat2 } from "../utils/pip";

function Experts() {
  const navigate = useNavigate();
  const [expertsinfo, setExpertsINfo] = useState([]); // State to store expert data

  useEffect(() => {
    expertData();
  }, []);

  const expertData = () => {
    const token = getAuth();
    axios({
      method: "get",
      url: CONFIG_JSON.BASE_URL + CONFIG_JSON.allExpertsAPI,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res?.data?.success) {
          setExpertsINfo(res?.data?.allExperts); // Store the data in state
        }
      })
      .catch((err) => {
        console.log("An error occurred while fetching categories:", err);
      });
  };

  const handleExpertDetails = (value) => {
    // console.log(value);
    navigate(pageRoutes?.expertDetail, { state: { id: value } });
  };

  return (
    <div className="ct_inner_dashbaord_main">
      <div className="ct_white_bg p-2">
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4 ct_head_bg_white_title">
          <h4 className="ct_fs_24 ct_fw_600">All Experts</h4>
          <div className="d-flex align-items-center gap-3">
            <form className="form-floating">
              <input
                type="date"
                className="form-control ct_grey_input"
                id="floatingInputValue"
              />
              <label htmlFor="floatingInputValue">From Date</label>
            </form>
            <form className="form-floating">
              <input
                type="date"
                className="form-control ct_grey_input"
                id="floatingInputValue"
              />
              <label htmlFor="floatingInputValue">To Date</label>
            </form>
            <div className="ms-4">
              <a
                href="javascript:void(0)"
                onClick={() => navigate(pageRoutes.createExpert)}
                className="ct_blue_btn ct_btn_h_48"
              >
                + Add New Expert
              </a>
            </div>
          </div>
        </div>
        <div className="ct_tab_list">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-expert_column-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-expert_column"
                type="button"
                role="tab"
                aria-controls="pills-expert_column"
                aria-selected="true"
              >
                <i className="bi bi-grid" />
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-expert-list-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-expert-list"
                type="button"
                role="tab"
                aria-controls="pills-expert-list"
                aria-selected="false"
              >
                <i className="bi bi-list-task" />
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-expert_column"
              role="tabpanel"
              aria-labelledby="pills-expert_column-tab"
            >
              <div className="row">
                {expertsinfo.map((expert, index) => (
                  <div className="col-xxl-3 col-xl-6 col-md-6 mb-4" key={index}>
                    <a
                      href="javascript:void(0)"
                      onClick={() => handleExpertDetails(index+1)}
                      className="text-dark"
                    >
                      <div className="ct_expert_card">
                        <div className="ct_expert_img">
                          <img
                            src={expert?.expert_profile ?? "http://192.168.29.100:4002/profile/profile_images1722939937833.jpg"}
                            alt=""
                            className="ct_img_109"
                          />
                        </div>
                        <div className="ct_expert_info">
                          <h4 className="ct_fs_16 ct_fw_600">
                            {expert.first_name} {expert?.last_name}
                          </h4>
                          <p>{expert?.subject}</p>
                          <p>{expert?.email}</p>
                          <h6 className="ct_blue_text">
                            Active from - {getDateFormat2(expert?.updated_at)}
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-expert-list"
              role="tabpanel"
              aria-labelledby="pills-expert-list-tab"
            >
              <div className="table-responsive mt-4">
                <table className="table ct_custom_table">
                  <thead>
                    <tr>
                      <th>Expert Name</th>
                      <th>Email Address</th>
                      <th>Join Date &amp; Time</th>
                      <th>Expert in </th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expertsinfo.map((expert, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src={expert?.expert_profile}
                              alt=""
                              className="ct_img_36"
                            />
                            <h5 className="ct_fs_14 ct_fw_600 mb-0">
                              {expert.first_name} {expert?.last_name}
                            </h5>
                          </div>
                        </td>
                        <td>{expert?.email}</td>
                        <td>{getDateFormat2(expert?.updated_at)}</td>
                        <td>{expert?.subject}</td>
                        <td>
                          <select className="ct_badge ct_status_badge ct_fs_14">
                            <option value="approved">Approved</option>
                            <option value="pending">Pending</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experts;
