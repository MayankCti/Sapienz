import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCapitalization, getDateFormat, getStatusClass } from "../utils/pip";
import { useLocation, useNavigate } from "react-router-dom";
import { pageRoutes } from "../routes/path";
import NoRecord from "./NoRecord";

const StudentTable = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const list = useSelector((state) => state?.studentReducer?.students);
  const [students, setStudents] = useState(list);

  function tableBody() {
    return students?.map((student, index) => {
      return (
        <tr key={index}>
          <td>
            <div className="d-flex align-items-center gap-2">
              <img
                src={student?.user_profile ?? "http://192.168.29.100:4002/profile/profile_images1722939937833.jpg"}
                alt=""
                className="ct_img_36"
              />
              <h5 className="ct_fs_14 ct_fw_600 mb-0">
                {student?.first_name ?? ""} {student?.last_name ?? ""}
              </h5>
            </div>
          </td>
          <td>{student?.email}</td>
          <td> {getDateFormat(student?.created_at)}</td>
          {/* <td>12</td>
            <td>580</td> 
            */}

          <td>
            <span
              className={`ct_badge ${getStatusClass(
                student?.status
              )} text-white px-0 ct_w_80 ct_fs_14 text-center`}
            >
              {getCapitalization(student?.status)}
            </span>
          </td>
          <td className="">
            <i
              className="fa-solid fa-eye ct_show_modal_dtl"
              onClick={() =>
                navigate(pageRoutes?.studentDetails, {
                  state: { id: student?.id },
                })
              }
            ></i>
          </td>
        </tr>
      );
    });
  }
  
  return (
    <table className="table ct_custom_table">
      <thead>
        <tr>
          <th> Student Name</th>
          <th>Email Address</th>
          <th>Joined Date &amp; Time</th>
          {/* <th>Mock Test</th>
          <th>Score</th> */}
          <th>Status</th>
          <th className="text-end">Action</th>
        </tr>
      </thead>
      {students?.length <= 0 && (
        <NoRecord/>
      )}
      <tbody>
        {pathname == pageRoutes?.dashboard
          ? tableBody()?.slice(0, 5)
          : tableBody()}
      </tbody>
    </table>
  );
};

export default StudentTable;
