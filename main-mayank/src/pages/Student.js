import { pageRoutes } from "../routes/path";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import StudentTable from "../components/StudentTable";
import {
  fetchDashboard,
  filterStudents,
} from "../redux/actions/studentActions";
import { useDispatch, useSelector } from "react-redux";
import SapienzeLoader from "../components/Loader/SapienzeLoader";

function Student() {
  const dispatch = useDispatch();
  const { isLoading, students } = useSelector(
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
            <div className="tab-content" id="pills-tabContent">
              <div
                className={`tab-pane fade show active`}
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
