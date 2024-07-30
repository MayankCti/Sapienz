import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCapitalization, getDateFormat, getStatusClass } from "../utils/pip";

const StudentTable = () => {
  const list = useSelector((state) => state?.studentReducer?.students);
  const [students, setStudents] = useState(list);

  return (
    <table className="table ct_custom_table">
      <thead>
        <tr>
          <th> Students Name</th>
          <th>Email Address</th>
          <th>Joined Date &amp; Time</th>
          {/* <th>Mock Test</th>
          <th>Score</th> */}
          <th>Status</th>
        </tr>
      </thead>
      {students?.length <= 0 && (
        <div className="text-center py-4">No record found.</div>
      )}
      <tbody>
        {students?.length > 0 &&
          students?.map((student, index) => {
            return (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={
                        student?.user_profile ?? "/assets/img/user_profile.png"
                      }
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
                <td>580</td> */}
                <td>
                  {console.log(student)}
                  <span
                    className={`ct_badge ${getStatusClass(
                      student?.status
                    )} text-white px-0 ct_w_80 ct_fs_14 text-center`}
                  >
                    {getCapitalization(student?.status)}
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
