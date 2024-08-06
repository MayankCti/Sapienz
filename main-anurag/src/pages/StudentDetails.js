import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDateFormat, getStandard } from "../utils/pip";
import SapienzeLoader from "../components/Loader/SapienzeLoader";
import { fetchStudentDetails } from "../redux/actions/studentActions";
import NoRecord from "../components/NoRecord";

function StudentDetails() {
  const student_id = useLocation()?.state?.id;
  const dispatch = useDispatch();
  const { studentDetail, testList, isLoading } = useSelector(
    (state) => state.studentReducer
  );

  useEffect(() => {
    dispatch(fetchStudentDetails(student_id));
  }, []);

  if (isLoading) {
    return <SapienzeLoader />;
  }
  return (
    <>
      <div className="ct_inner_dashbaord_main">
        <div className="ct_white_bg p-4">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
            <h4 className="ct_fs_24 ps-4 ct_fw_600 mb-0">Student Details</h4>
            {/* <div className="d-flex align-items-center gap-3">
              <div className="ms-4 d-flex align-items-center gap-3">
                <button className="ct_blue_btn py-3 ct_btn_h_48">
                  Export to PDF
                </button>
              </div>
            </div> */}
          </div>

          {studentDetail ? (
            <div className="row">
              <div className="col-md-12">
                <div className="ct_flash_card ct_py_70 ct_px_30">
                  <div className="row align-items-center">
                    <div className="col-xxl-4 mb-4 mb-xxl-0">
                      <div className="d-flex align-items-center gap-3 flex-wrap">
                        <img
                          src={
                            studentDetail?.student_profile ??
                            "http://192.168.29.100:4002/profile/profile_images1722939937833.jpg"
                          }
                          alt=""
                          className="ct_img_148"
                        />
                        <div>
                          <h5 className="ct_fs_28 mb-1 ct_fw_600">
                            {studentDetail?.studentProfile?.user_name}
                          </h5>
                          <p className="mb-0">
                            {studentDetail?.studentProfile?.classes}
                            {getStandard(
                              studentDetail?.studentProfile?.classes
                            )}
                          </p>
                          <p className="mb-0">
                            {studentDetail?.studentProfile?.email}{" "}
                          </p>
                          <p className="ct_blue_text mb-0">
                            Active from -{" "}
                            {getDateFormat(
                              studentDetail?.studentProfile?.created_at
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-8 ">
                      <div className="ct_grid_3">
                        <div className="ct_small_box">
                          <div className="ct_small_box_shadow_icon">
                            <i className="fa-solid fa-flag" />
                          </div>
                          <div>
                            <h4 className="ct_fs_28 ct_fw_600">
                              {studentDetail?.passCount ?? 0}
                            </h4>
                            <p className="mb-0">Quiz Passed</p>
                          </div>
                        </div>
                        <div className="ct_small_box">
                          <div className="ct_small_box_shadow_icon">
                            <i className="fa-solid fa-clock" />
                          </div>
                          <div>
                            <h4 className="ct_fs_28 ct_fw_600">
                              {studentDetail?.minimumTiming ?? 0}{" "}
                            </h4>
                            <p className="mb-0">Fastest Time hh:mm</p>
                          </div>
                        </div>
                        <div className="ct_small_box">
                          <div className="ct_small_box_shadow_icon">
                            <i className="fa-solid fa-circle-check" />
                          </div>
                          <div>
                            <h4 className="ct_fs_28 ct_fw_600">
                              {studentDetail?.totalCorrectAnswers ?? 0}
                            </h4>
                            <p className="mb-0">Correct Answers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <NoRecord />
          )}
          <h4 className="ct_fs_24 ps-4 ct_fw_600 mb-3  mt-4">
            Given Test Details
          </h4>
          <div className="table-responsive">
            <table className="table ct_custom_table">
              <thead>
                <tr>
                  <th> Test name</th>
                  <th>Category</th>
                  <th>Duration</th>
                  <th>Total Questions</th>
                  <th>Marks</th>
                  <th>Obtain Marks</th>
                </tr>
              </thead>
              <tbody>
                {testList?.length > 0 ? (
                  testList?.map((record) => (
                    <tr key={record?.id}>
                      <td>{record?.testDetails?.test_name}</td>
                      <td>{record?.category}</td>
                      <td>{record?.testDetails?.test_duration}</td>
                      <td>{record?.totalQuestions}</td>
                      <td>{record?.testDetails?.total_mark}</td>
                      <td>{record?.obtain_mark}</td>
                    </tr>
                  ))
                ) : (
                  <NoRecord />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDetails;
