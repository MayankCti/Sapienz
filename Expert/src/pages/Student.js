import { pageRoutes } from "../routes/path";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import StudentTable from "../components/StudentTable";
import {
  fetchDashboard,
  filterStudents,
} from "../redux/actions/studentActions";
import { useDispatch, useSelector } from "react-redux";
import { getDateFormat, getStandard } from "../utils/pip";
import { toggleBlock } from "../redux/reducers/studentRreducer";
import SapienzeLoader from "../components/Loader/SapienzeLoader";
import NoRecord from "../components/NoRecord";

function Student() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, students, isBlock } = useSelector(
    (state) => state?.studentReducer
  );
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [status, setStatus] = useState("");
  const [url, setUrl] = useState({});

  useEffect(() => {
    dispatch(fetchDashboard());
  }, []);

  useEffect(() => {
    dispatch(filterStudents(url));
  }, [url]);

  const handleStatusChange = (type, e) => {
    const { value } = e.target;
    switch (type) {
      case "fromDate":
        setUrl({ ...url, fromDate: value });
        setFromDate(value);
        break;
      case "toDate":
        setUrl({ ...url, toDate: value });
        setToDate(value);
        break;
      case "status":
        setUrl({ ...url, status: value });
        setStatus(value);
        break;
    }
  };

  if (isLoading) {
    return <SapienzeLoader/>;
  }
  return (
    <>
      <div className="ct_inner_dashbaord_main">
        <div className="ct_white_bg p-2">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
            <h4 className="ct_fs_24  ct_fw_600">All Students</h4>
            <div className="d-flex align-items-center gap-3">
              <form className="form-floating">
                <input
                  type="date"
                  className="form-control ct_grey_input"
                  id="floatingInputValue1"
                  onChange={(e) => handleStatusChange("fromDate", e)}
                  value={fromDate}
                  max={toDate}
                />
                <label htmlFor="floatingInputValue1">From Date</label>
              </form>
              <form className="form-floating">
                <input
                  type="date"
                  onChange={(e) => handleStatusChange("toDate", e)}
                  value={toDate}
                  min={fromDate}
                  className="form-control ct_grey_input"
                  id="floatingInputValue"
                />
                <label htmlFor="floatingInputValue ">To Date</label>
              </form>
              <div className="form-floating">
                <select
                  className="form-select ct_grey_input"
                  id="floatingSelect"
                  onChange={(e) => handleStatusChange("status", e)}
                  value={status}
                  aria-label="Floating label select example"
                >
                  <option value={""}>All</option>
                  <option value={"best"}>Best</option>
                  <option value={"average"}>Average</option>
                  <option value={"poor"}>Poor</option>
                </select>
                <label htmlFor="floatingSelect">Status</label>
              </div>
            </div>
          </div>
          <div className="ct_tab_list">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${isBlock ? "active" : ""} `}
                  id="pills-expert_column-tab"
                  type="button"
                  role="tab"
                  onClick={() => {
                    dispatch(toggleBlock(true));
                  }}
                >
                  <i className="bi bi-grid" />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${!isBlock ? "active" : ""} `}
                  id="pills-expert-list-tab"
                  type="button"
                  role="tab"
                  onClick={() => {
                    dispatch(toggleBlock(false));
                  }}
                >
                  <i className="bi bi-list-task" />
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className={`tab-pane fade ${isBlock ? "show active" : ""}`}
                id="pills-expert_column"
                role="tabpanel"
              >
                <div className="row">
                  {students?.length <= 0 && (
                    <NoRecord/>
                  )}
                  {students?.length > 0 &&
                    students?.map((student, index) => (
                      <div
                        key={index}
                        className="col-xxl-3 col-xl-6 col-md-6 mb-4"
                      >
                        <a
                          href="javascript:void(0)"
                          onClick={() =>
                            navigate(pageRoutes?.studentDetails, {
                              state: { id: student?.id },
                            })
                          }
                          className="text-dark"
                        >
                          <div className="ct_expert_card">
                            <div className="ct_expert_img">
                              <img
                                src={
                                  student?.user_profile ??
                                  "http://192.168.29.100:4002/profile/profile_images1722939937833.jpg"
                                }
                                alt={""}
                                className="ct_img_109"
                              />
                            </div>
                            <div className="ct_expert_info">
                              <h4 className="ct_fs_16 ct_fw_600">
                                {student?.first_name ?? ""}{" "}
                                {student?.last_name ?? ""}
                              </h4>
                              <p>
                                {student?.classes ?? ""}
                                {getStandard(student?.classes)}
                              </p>
                              <p>{student?.email}</p>
                              <h6 className="ct_blue_text">
                                Active from -{" "}
                                {getDateFormat(student?.created_at)}
                              </h6>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                </div>
              </div>
              <div
                className={`tab-pane fade ${!isBlock ? "show active" : ""}`}
                id="pills-expert-list"
                role="tabpanel"
              >
                <div className="table-responsive mt-4">
                  <StudentTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Student;
