import React from "react";

const StudentTable = () => {
  return (
    <table className="table ct_custom_table">
      <thead>
        <tr>
          <th> Students Name</th>
          <th>Email Address</th>
          <th>Join Date &amp; Time</th>
          <th>Mock Test</th>
          <th>Score</th>
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
              <h5 className="ct_fs_14 ct_fw_600 mb-0">Alfonso Westervelt</h5>
            </div>
          </td>
          <td>Zoey.Boyle@gmail.com</td>
          <td>12.09.2019 - 12.53 PM</td>
          <td>12</td>
          <td>580</td>
          <td>
            <span className="ct_badge  ct_cyan_bg text-white px-0 ct_w_80 ct_fs_14 text-center">
              Best
            </span>
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
              <h5 className="ct_fs_14 ct_fw_600 mb-0">Alfonso Westervelt</h5>
            </div>
          </td>
          <td>Zoey.Boyle@gmail.com</td>
          <td>12.09.2019 - 12.53 PM</td>
          <td>12</td>
          <td>580</td>
          <td>
            <span className="ct_badge  ct_yellow_bg text-white px-0 ct_w_80 ct_fs_14 text-center">
              Average
            </span>
          </td>
        </tr>
        {new Array(1, 2, 3, 4, 5, 6, 7).map((item, i) => {
          return (
            <tr key={i}>
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
              <td>12</td>
              <td>580</td>
              <td>
                <span className="ct_badge  ct_pink_bg text-white px-0 ct_w_80 ct_fs_14 text-center">
                  Poor
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StudentTable;
