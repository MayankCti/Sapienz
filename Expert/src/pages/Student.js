import React, { useState } from "react";
import Siderbar from "../layout/sidebar";
import Header from "../layout/header";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../routes/path";
import StudentTable from "../components/StudentTable";

function Student() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([
    {
      name: "Keith Baumbach",
      standard: "9th Standard",
      email: "Giovanny51@yahoo.com",
      activeFrom: "12.09.2019",
      imgSrc: "/assets/img/expert_img_1.png",
    },
    {
      name: "Brenda Bogisich",
      standard: "9th Standard",
      email: "Giovanny51@yahoo.com",
      activeFrom: "12.09.2019",
      imgSrc: "/assets/img/expert_img_2.png",
    },
    {
      name: "Elsa Kautzer",
      standard: "9th Standard",
      email: "Marina.Schuster@yahoo.com",
      activeFrom: "12.09.2019",
      imgSrc: "/assets/img/expert_img_3.png",
    },
    {
      name: "Velma Fay",
      standard: "9th Standard",
      email: "Dasia_Herman51@hotmail.com",
      activeFrom: "12.09.2019",
      imgSrc: "/assets/img/expert_img_4.png",
    },
    {
      name: "Keith Baumbach",
      standard: "9th Standard",
      email: "Giovanny51@yahoo.com",
      activeFrom: "12.09.2019",
      imgSrc: "/assets/img/expert_img_1.png",
    },
    {
      name: "Brenda Bogisich",
      standard: "9th Standard",
      email: "Giovanny51@yahoo.com",
      activeFrom: "12.09.2019",
      imgSrc: "/assets/img/expert_img_2.png",
    },
    {
      name: "Elsa Kautzer",
      standard: "9th Standard",
      email: "Marina.Schuster@yahoo.com",
      activeFrom: "12.09.2019",
      imgSrc: "/assets/img/expert_img_3.png",
    },
    {
      name: "Velma Fay",
      standard: "9th Standard",
      email: "Dasia_Herman51@hotmail.com",
      activeFrom: "12.09.2019",
      imgSrc: "/assets/img/expert_img_4.png",
    },
  ]);
  return (
    <>
      <main>
        {/* Expert Sidebaar */}
        <Siderbar />
        <div className="ct_right_content">
          {/* expert header */}
          <Header />
          <div className="ct_inner_dashbaord_main">
            <div className="ct_white_bg p-2">
              <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
                <h4 className="ct_fs_24  ct_fw_600">All Students</h4>
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
                  <div className="form-floating">
                    <select
                      className="form-select ct_grey_input"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected="">All</option>
                      <option value={1}>Best</option>
                      <option value={2}>Average</option>
                      <option value={3}>poor</option>
                    </select>
                    <label htmlFor="floatingSelect">Status</label>
                  </div>
                </div>
              </div>
              <div className="ct_tab_list">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
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
                      {students?.map((student, index) => (
                        <div
                          key={index}
                          className="col-xxl-3 col-xl-6 col-md-6 mb-4"
                        >
                          <a
                            href="javascript:void(0)"
                            onClick={() => navigate(pageRoutes?.studentDetails)}
                            className="text-dark"
                          >
                            <div className="ct_expert_card">
                              <div className="ct_expert_img">
                                <img
                                  src={student?.imgSrc}
                                  alt={student?.name}
                                  className="ct_img_109"
                                />
                              </div>
                              <div className="ct_expert_info">
                                <h4 className="ct_fs_16 ct_fw_600">
                                  {student?.name}
                                </h4>
                                <p>{student?.standard}</p>
                                <p>{student?.email}</p>
                                <h6 className="ct_blue_text">
                                  Active from - {student?.activeFrom}
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
                      <StudentTable />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Student;
