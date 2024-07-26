import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Siderbar from "../layout/sidebar";
import Header from "../layout/header";
import { pageRoutes } from "../routes/path";
import { useDispatch, useSelector } from "react-redux";
import CategorySelect from "../components/formInputs/CategorySelect";
import {
  fetchCategoryList,
  fetchMockTestList,
} from "../redux/actions/flashCardActions";

function AllMockTest() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state?.flashCardReducer);
  const list = useSelector((state) => state?.flashCardReducer?.mockList);
  const [mockList, setMockList] = useState(list);
  const [statusFilter, setStatusFilter] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCategoryList());
    dispatch(fetchMockTestList());
  }, []);
  return (
    <>
      <main>
        {/* Expert Sidebaar */}
        <Siderbar />
        <div className="ct_right_content">
          {/* expert header */}
          <Header />
          <div className="ct_inner_dashbaord_main">
            <div className="ct_white_bg ">
              <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
                <h4 className="ct_fs_24  ct_fw_600">All Mock Test</h4>
                <div className="d-flex align-items-center gap-3">
                  <div className="ct_category_select_2">
                    Category :
                    <CategorySelect
                      options={categories}
                      value={statusFilter}
                      onChange={setStatusFilter}
                    />
                  </div>

                  <div className="ct_category_select_2">
                    Sorted by :
                    <select>
                      <option value="">Marks</option>
                      <option value="">Marks</option>
                    </select>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.newMocktest)}
                      className="ct_blue_btn ct_btn_h_48"
                    >
                      + Create New Mock Test
                    </a>
                  </div>
                </div>
              </div>
              <div className="table-responsive mt-4">
                <table className="table ct_custom_table">
                  <thead>
                    <tr>
                      <th>Test name</th>
                      <th>Category / Field</th>
                      <th>Duration</th>
                      <th>Total Questions</th>
                      <th>Marks</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockList?.length === 0 && (
                      <div className="text-center py-4">
                        No flash cards found.
                      </div>
                    )}
                    {mockList?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item?.test_name}</td>
                          <td>{item?.category}</td>
                          <td>{item?.test_duration}</td>
                          <td>{item?.totalQuestions}</td>
                          <td>{item?.total_mark}</td>
                          <td>
                            <label className="ct_switch">
                              <input type="checkbox" defaultChecked={item?.status != 0 ? true: false}  />
                              <div className="ct_slider">
                                <div className="ct_circle">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="1.1"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      width={6}
                                      height={6}
                                      x={0}
                                      y={0}
                                      viewBox="0 0 365.696 365.696"
                                      style={{
                                        enableBackground: "new 0 0 512 512",
                                      }}
                                      xmlSpace="preserve"
                                      className="cross"
                                    >
                                      <g>
                                        <path
                                          d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"
                                          fill="currentColor"
                                          data-original="#000000"
                                        />
                                      </g>
                                    </svg>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="1.1"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      width={10}
                                      height={10}
                                      x={0}
                                      y={0}
                                      viewBox="0 0 24 24"
                                      style={{
                                        enableBackground: "new 0 0 512 512",
                                      }}
                                      xmlSpace="preserve"
                                      className="checkmark"
                                    >
                                      <g>
                                        <path
                                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                                          fill="currentColor"
                                          data-original="#000000"
                                          className=""
                                        />
                                      </g>
                                    </svg>
                                </div>
                              </div>
                            </label>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AllMockTest;
