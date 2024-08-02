import React from "react";
import { pageRoutes } from "../routes/path";
import { useNavigate } from "react-router-dom";

function Experts() {
  const navigate = useNavigate();

  return (
    <>
      <div className="ct_inner_dashbaord_main">
        <div className="ct_white_bg p-2">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4 ct_head_bg_white_title">
            <h4 className="ct_fs_24  ct_fw_600">All Experts</h4>
            <div className="d-flex align-items-center gap-3">
              <form className="form-floating">
                <input
                  type="date"
                  className="form-control ct_grey_input"
                  id="floatingInputValue"
                />
                <label htmlFor="floatingInputValue ">From Date</label>
              </form>
              <form className="form-floating">
                <input
                  type="date"
                  className="form-control ct_grey_input"
                  id="floatingInputValue"
                />
                <label htmlFor="floatingInputValue ">To Date</label>
              </form>
              <div className="ms-4">
                <a
                  href="javascript:void(0)"
                  onClick={() => navigate(pageRoutes?.createExpert)}
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
            <div
              className="tab-content"
              id="pills-tabContent"
              onClick={() => navigate(pageRoutes?.expertDetail)}
            >
              <div
                className="tab-pane fade show active"
                id="pills-expert_column"
                role="tabpanel"
                aria-labelledby="pills-expert_column-tab"
              >
                <div className="row">
                  <div className="col-xxl-3 col-xl-6 col-md-6 mb-4">
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.expertDetail)}
                      className="text-dark"
                    >
                      <div className="ct_expert_card">
                        <div className="ct_expert_img">
                          <img
                            src="/assets/img/expert_img_1.png"
                            alt=""
                            className="ct_img_109"
                          />
                        </div>
                        <div className="ct_expert_info">
                          <h4 className="ct_fs_16 ct_fw_600">
                            Rosalie Prohaska
                          </h4>
                          <p>Physicist</p>
                          <p>Sid_Ryan78@gmail.com</p>
                          <h6 className="ct_blue_text">
                            Active from - 12.09.2019
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xxl-3 col-xl-6 col-md-6 mb-4">
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.expertDetail)}
                      className="text-dark"
                    >
                      <div className="ct_expert_card">
                        <div className="ct_expert_img">
                          <img
                            src="/assets/img/expert_img_2.png"
                            alt=""
                            className="ct_img_109"
                          />
                        </div>
                        <div className="ct_expert_info">
                          <h4 className="ct_fs_16 ct_fw_600">
                            Rosalie Prohaska
                          </h4>
                          <p>Physicist</p>
                          <p>Sid_Ryan78@gmail.com</p>
                          <h6 className="ct_blue_text">
                            Active from - 12.09.2019
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xxl-3 col-xl-6 col-md-6 mb-4">
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.expertDetail)}
                      className="text-dark"
                    >
                      <div className="ct_expert_card">
                        <div className="ct_expert_img">
                          <img
                            src="/assets/img/expert_img_3.png"
                            alt=""
                            className="ct_img_109"
                          />
                        </div>
                        <div className="ct_expert_info">
                          <h4 className="ct_fs_16 ct_fw_600">
                            Rosalie Prohaska
                          </h4>
                          <p>Physicist</p>
                          <p>Sid_Ryan78@gmail.com</p>
                          <h6 className="ct_blue_text">
                            Active from - 12.09.2019
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xxl-3 col-xl-6 col-md-6 mb-4">
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.expertDetail)}
                      className="text-dark"
                    >
                      <div className="ct_expert_card">
                        <div className="ct_expert_img">
                          <img
                            src="/assets/img/expert_img_4.png"
                            alt=""
                            className="ct_img_109"
                          />
                        </div>
                        <div className="ct_expert_info">
                          <h4 className="ct_fs_16 ct_fw_600">
                            Rosalie Prohaska
                          </h4>
                          <p>Physicist</p>
                          <p>Sid_Ryan78@gmail.com</p>
                          <h6 className="ct_blue_text">
                            Active from - 12.09.2019
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xxl-3 col-xl-6 col-md-6 mb-4">
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.expertDetail)}
                      className="text-dark"
                    >
                      <div className="ct_expert_card">
                        <div className="ct_expert_img">
                          <img
                            src="/assets/img/expert_img_1.png"
                            alt=""
                            className="ct_img_109"
                          />
                        </div>
                        <div className="ct_expert_info">
                          <h4 className="ct_fs_16 ct_fw_600">
                            Rosalie Prohaska
                          </h4>
                          <p>Physicist</p>
                          <p>Sid_Ryan78@gmail.com</p>
                          <h6 className="ct_blue_text">
                            Active from - 12.09.2019
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xxl-3 col-xl-6 col-md-6 mb-4">
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.expertDetail)}
                      className="text-dark"
                    >
                      <div className="ct_expert_card">
                        <div className="ct_expert_img">
                          <img
                            src="/assets/img/expert_img_2.png"
                            alt=""
                            className="ct_img_109"
                          />
                        </div>
                        <div className="ct_expert_info">
                          <h4 className="ct_fs_16 ct_fw_600">
                            Rosalie Prohaska
                          </h4>
                          <p>Physicist</p>
                          <p>Sid_Ryan78@gmail.com</p>
                          <h6 className="ct_blue_text">
                            Active from - 12.09.2019
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xxl-3 col-xl-6 col-md-6 mb-4">
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.expertDetail)}
                      className="text-dark"
                    >
                      <div className="ct_expert_card">
                        <div className="ct_expert_img">
                          <img
                            src="/assets/img/expert_img_3.png"
                            alt=""
                            className="ct_img_109"
                          />
                        </div>
                        <div className="ct_expert_info">
                          <h4 className="ct_fs_16 ct_fw_600">
                            Rosalie Prohaska
                          </h4>
                          <p>Physicist</p>
                          <p>Sid_Ryan78@gmail.com</p>
                          <h6 className="ct_blue_text">
                            Active from - 12.09.2019
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xxl-3 col-xl-6 col-md-6 mb-4">
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.expertDetail)}
                      className="text-dark"
                    >
                      <div className="ct_expert_card">
                        <div className="ct_expert_img">
                          <img
                            src="/assets/img/expert_img_4.png"
                            alt=""
                            className="ct_img_109"
                          />
                        </div>
                        <div className="ct_expert_info">
                          <h4 className="ct_fs_16 ct_fw_600">
                            Rosalie Prohaska
                          </h4>
                          <p>Physicist</p>
                          <p>Sid_Ryan78@gmail.com</p>
                          <h6 className="ct_blue_text">
                            Active from - 12.09.2019
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xxl-3 col-xl-6 col-md-6 mb-4">
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.expertDetail)}
                      className="text-dark"
                    >
                      <div className="ct_expert_card">
                        <div className="ct_expert_img">
                          <img
                            src="/assets/img/expert_img_1.png"
                            alt=""
                            className="ct_img_109"
                          />
                        </div>
                        <div className="ct_expert_info">
                          <h4 className="ct_fs_16 ct_fw_600">
                            Rosalie Prohaska
                          </h4>
                          <p>Physicist</p>
                          <p>Sid_Ryan78@gmail.com</p>
                          <h6 className="ct_blue_text">
                            Active from - 12.09.2019
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xxl-3 col-xl-6 col-md-6 mb-4">
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.expertDetail)}
                      className="text-dark"
                    >
                      <div className="ct_expert_card">
                        <div className="ct_expert_img">
                          <img
                            src="/assets/img/expert_img_2.png"
                            alt=""
                            className="ct_img_109"
                          />
                        </div>
                        <div className="ct_expert_info">
                          <h4 className="ct_fs_16 ct_fw_600">
                            Rosalie Prohaska
                          </h4>
                          <p>Physicist</p>
                          <p>Sid_Ryan78@gmail.com</p>
                          <h6 className="ct_blue_text">
                            Active from - 12.09.2019
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xxl-3 col-xl-6 col-md-6 mb-4">
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.expertDetail)}
                      className="text-dark"
                    >
                      <div className="ct_expert_card">
                        <div className="ct_expert_img">
                          <img
                            src="/assets/img/expert_img_3.png"
                            alt=""
                            className="ct_img_109"
                          />
                        </div>
                        <div className="ct_expert_info">
                          <h4 className="ct_fs_16 ct_fw_600">
                            Rosalie Prohaska
                          </h4>
                          <p>Physicist</p>
                          <p>Sid_Ryan78@gmail.com</p>
                          <h6 className="ct_blue_text">
                            Active from - 12.09.2019
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xxl-3 col-xl-6 col-md-6 mb-4">
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.expertDetail)}
                      className="text-dark"
                    >
                      <div className="ct_expert_card">
                        <div className="ct_expert_img">
                          <img
                            src="/assets/img/expert_img_4.png"
                            alt=""
                            className="ct_img_109"
                          />
                        </div>
                        <div className="ct_expert_info">
                          <h4 className="ct_fs_16 ct_fw_600">
                            Rosalie Prohaska
                          </h4>
                          <p>Physicist</p>
                          <p>Sid_Ryan78@gmail.com</p>
                          <h6 className="ct_blue_text">
                            Active from - 12.09.2019
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
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
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src="/assets/img/user_profile.png"
                              alt=""
                              className="ct_img_36"
                            />
                            <h5 className="ct_fs_14 ct_fw_600 mb-0">
                              Alfonso Westervelt
                            </h5>
                          </div>
                        </td>
                        <td>Zoey.Boyle@gmail.com</td>
                        <td>12.09.2019 - 12.53 PM</td>
                        <td>Usability</td>
                        <td>
                          <select className="ct_badge ct_status_badge ct_fs_14">
                            <option value="">Approved</option>
                            <option value="">Pending</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src="/assets/img/user_profile.png"
                              alt=""
                              className="ct_img_36"
                            />
                            <h5 className="ct_fs_14 ct_fw_600 mb-0">
                              Alfonso Westervelt
                            </h5>
                          </div>
                        </td>
                        <td>Zoey.Boyle@gmail.com</td>
                        <td>12.09.2019 - 12.53 PM</td>
                        <td>Usability</td>
                        <td>
                          <select className="ct_badge ct_status_badge ct_fs_14">
                            <option value="">Approved</option>
                            <option value="">Pending</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src="/assets/img/user_profile.png"
                              alt=""
                              className="ct_img_36"
                            />
                            <h5 className="ct_fs_14 ct_fw_600 mb-0">
                              Alfonso Westervelt
                            </h5>
                          </div>
                        </td>
                        <td>Zoey.Boyle@gmail.com</td>
                        <td>12.09.2019 - 12.53 PM</td>
                        <td>Usability</td>
                        <td>
                          <select className="ct_badge ct_status_badge ct_fs_14">
                            <option value="">Approved</option>
                            <option value="">Pending</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src="/assets/img/user_profile.png"
                              alt=""
                              className="ct_img_36"
                            />
                            <h5 className="ct_fs_14 ct_fw_600 mb-0">
                              Alfonso Westervelt
                            </h5>
                          </div>
                        </td>
                        <td>Zoey.Boyle@gmail.com</td>
                        <td>12.09.2019 - 12.53 PM</td>
                        <td>Usability</td>
                        <td>
                          <select className="ct_badge ct_status_badge ct_fs_14">
                            <option value="">Approved</option>
                            <option value="">Pending</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src="/assets/img/user_profile.png"
                              alt=""
                              className="ct_img_36"
                            />
                            <h5 className="ct_fs_14 ct_fw_600 mb-0">
                              Alfonso Westervelt
                            </h5>
                          </div>
                        </td>
                        <td>Zoey.Boyle@gmail.com</td>
                        <td>12.09.2019 - 12.53 PM</td>
                        <td>Usability</td>
                        <td>
                          <select className="ct_badge ct_status_badge ct_fs_14">
                            <option value="">Approved</option>
                            <option value="">Pending</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src="/assets/img/user_profile.png"
                              alt=""
                              className="ct_img_36"
                            />
                            <h5 className="ct_fs_14 ct_fw_600 mb-0">
                              Alfonso Westervelt
                            </h5>
                          </div>
                        </td>
                        <td>Zoey.Boyle@gmail.com</td>
                        <td>12.09.2019 - 12.53 PM</td>
                        <td>Usability</td>
                        <td>
                          <select className="ct_badge ct_status_badge ct_fs_14">
                            <option value="">Approved</option>
                            <option value="">Pending</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src="/assets/img/user_profile.png"
                              alt=""
                              className="ct_img_36"
                            />
                            <h5 className="ct_fs_14 ct_fw_600 mb-0">
                              Alfonso Westervelt
                            </h5>
                          </div>
                        </td>
                        <td>Zoey.Boyle@gmail.com</td>
                        <td>12.09.2019 - 12.53 PM</td>
                        <td>Usability</td>
                        <td>
                          <select className="ct_badge ct_status_badge ct_fs_14">
                            <option value="">Approved</option>
                            <option value="">Pending</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src="/assets/img/user_profile.png"
                              alt=""
                              className="ct_img_36"
                            />
                            <h5 className="ct_fs_14 ct_fw_600 mb-0">
                              Alfonso Westervelt
                            </h5>
                          </div>
                        </td>
                        <td>Zoey.Boyle@gmail.com</td>
                        <td>12.09.2019 - 12.53 PM</td>
                        <td>Usability</td>
                        <td>
                          <select className="ct_badge ct_status_badge ct_fs_14">
                            <option value="">Approved</option>
                            <option value="">Pending</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src="/assets/img/user_profile.png"
                              alt=""
                              className="ct_img_36"
                            />
                            <h5 className="ct_fs_14 ct_fw_600 mb-0">
                              Alfonso Westervelt
                            </h5>
                          </div>
                        </td>
                        <td>Zoey.Boyle@gmail.com</td>
                        <td>12.09.2019 - 12.53 PM</td>
                        <td>Usability</td>
                        <td>
                          <select className="ct_badge ct_status_badge ct_fs_14">
                            <option value="">Approved</option>
                            <option value="">Pending</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src="/assets/img/user_profile.png"
                              alt=""
                              className="ct_img_36"
                            />
                            <h5 className="ct_fs_14 ct_fw_600 mb-0">
                              Alfonso Westervelt
                            </h5>
                          </div>
                        </td>
                        <td>Zoey.Boyle@gmail.com</td>
                        <td>12.09.2019 - 12.53 PM</td>
                        <td>Usability</td>
                        <td>
                          <select className="ct_badge ct_status_badge ct_fs_14">
                            <option value="">Approved</option>
                            <option value="">Pending</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experts;
