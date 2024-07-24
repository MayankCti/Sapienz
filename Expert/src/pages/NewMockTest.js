import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Siderbar from "../layout/sidebar";
import Header from "../layout/header";
import { pageRoutes } from "../routes/path";

function NewMockTest() {
  const navigate = useNavigate();
  const [isTestQuestion, setIsTestQuestion] = useState(false);
  return (
    <>
      <main>
        {/* Expert Sidebaar */}
        <Siderbar />
        <div className="ct_right_content">
          {/* expert header */}
          <Header />
          <div className="ct_inner_dashbaord_main">
            <div className="ct_white_bg p-4">
              <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
                <h4 className="ct_fs_24 ps-4 ct_fw_600">Test Details</h4>
                <div className="d-flex align-items-center gap-3">
                  <div className="ms-4 d-flex align-items-center gap-3">
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.allMockTest)}
                      className="ct_blue_btn py-3 ct_btn_h_48"
                    >
                      Save
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="ct_border_1_black">
                    <form action="">
                      <h4 className="ct_fs_24 text-center ct_fw_600">
                        Test Details
                      </h4>
                      <div className="row mt-4">
                        <div className="col-md-6 mb-4">
                          <div className="form-group">
                            <label htmlFor="" className="mb-2 ct_fw_500">
                              Test Name{" "}
                              <span className="ct_required_text">*</span>
                            </label>
                            <input
                              type="text"
                              className="ct_input form-control"
                              placeholder="Answer"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-group">
                            <label htmlFor="" className="mb-2 ct_fw_500">
                              Duration{" "}
                              <span className="ct_required_text">*</span>
                            </label>
                            <input
                              type="text"
                              className="ct_input form-control"
                              placeholder="Answer"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <div className="form-group">
                            <label htmlFor="" className="mb-2 ct_fw_500">
                              Each Question Mark{" "}
                              <span className="ct_required_text">*</span>
                            </label>
                            <input
                              type="number"
                              className="ct_input form-control"
                              placeholder="Answer"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <div className="form-group">
                            <label htmlFor="" className="mb-2 ct_fw_500">
                              Test Questions
                              <span className="ct_required_text">*</span>
                            </label>
                            <input
                              type="number"
                              onChange={() => setIsTestQuestion(true)}
                              className="ct_input form-control"
                              defaultValue={20}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* when user click on  test question input show this div  */}
            <div
              className={`ct_white_bg p-4 ${!isTestQuestion ? "d-none" : ""}`}
            >
              <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <h4 className="ct_fs_24  ct_fw_600 mb-0">Choose Question</h4>
                <div className="d-flex align-items-center gap-3">
                  <h6 className="ct_fs_14 mb-0 ct_fw_500">
                    15 Questions Selected
                  </h6>
                  <div className="ct_category_select_2">
                    Category
                    <select>
                      <option value="">All</option>
                      <option value="">Language</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <a
                      href="javascript:void(0)"
                      onClick={()=>{setIsTestQuestion(false)}}
                      className="ct_blue_btn py-3 ct_btn_h_48"
                    >
                      Continue
                    </a>
                  </div>
                </div>
              </div>
              <div className="row ct_flash_card_scroll">
                <div className="col-xl-4 mb-4">
                  {/* Add this class ct_flash_card_active when card is selected */}
                  <div className="ct_flash_card pb-0">
                    <div className="d-flex align-items-center gap-2">
                      <div>
                        <input type="checkbox" className="ct_custom_checkbox" />
                      </div>
                      <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">
                        Flash Card 223
                      </h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2 my-3 ">
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        Question 20
                      </p>
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        History
                      </p>
                    </div>
                    <p className="ct_fw_600 mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua?
                    </p>
                    <div className="mt-5">
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        Choose your answer
                      </p>
                      <div className="row mt-2">
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio1"
                              type="radio"
                              defaultChecked=""
                            />
                            <label className="radio-label" htmlFor="radio1">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio2"
                              type="radio"
                            />
                            <label className="radio-label" htmlFor="radio2">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio3"
                              type="radio"
                            />
                            <label className="radio-label" htmlFor="radio3">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio4"
                              type="radio"
                            />
                            <label className="radio-label" htmlFor="radio4">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 mb-4">
                  {/* Add this class ct_flash_card_active when card is selected */}
                  <div className="ct_flash_card ct_flash_card_active pb-0">
                    <div className="d-flex align-items-center gap-2">
                      <div>
                        <input type="checkbox" className="ct_custom_checkbox" />
                      </div>
                      <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">
                        Flash Card 223
                      </h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2 my-3 ">
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        Question 20
                      </p>
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        History
                      </p>
                    </div>
                    <p className="ct_fw_600 mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua?
                    </p>
                    <div className="mt-5">
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        Choose your answer
                      </p>
                      <div className="row mt-2">
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio1"
                              type="radio"
                              defaultChecked=""
                            />
                            <label className="radio-label" htmlFor="radio1">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio2"
                              type="radio"
                            />
                            <label className="radio-label" htmlFor="radio2">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio3"
                              type="radio"
                            />
                            <label className="radio-label" htmlFor="radio3">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio4"
                              type="radio"
                            />
                            <label className="radio-label" htmlFor="radio4">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 mb-4">
                  {/* Add this class ct_flash_card_active when card is selected */}
                  <div className="ct_flash_card ct_flash_card_active pb-0">
                    <div className="d-flex align-items-center gap-2">
                      <div>
                        <input type="checkbox" className="ct_custom_checkbox" />
                      </div>
                      <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">
                        Flash Card 223
                      </h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2 my-3 ">
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        Question 20
                      </p>
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        History
                      </p>
                    </div>
                    <p className="ct_fw_600 mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua?
                    </p>
                    <div className="mt-5">
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        Choose your answer
                      </p>
                      <div className="row mt-2">
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio1"
                              type="radio"
                              defaultChecked=""
                            />
                            <label className="radio-label" htmlFor="radio1">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio2"
                              type="radio"
                            />
                            <label className="radio-label" htmlFor="radio2">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio3"
                              type="radio"
                            />
                            <label className="radio-label" htmlFor="radio3">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio4"
                              type="radio"
                            />
                            <label className="radio-label" htmlFor="radio4">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 mb-4">
                  {/* Add this class ct_flash_card_active when card is selected */}
                  <div className="ct_flash_card ct_flash_card_active pb-0">
                    <div className="d-flex align-items-center gap-2">
                      <div>
                        <input type="checkbox" className="ct_custom_checkbox" />
                      </div>
                      <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">
                        Flash Card 223
                      </h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2 my-3 ">
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        Question 20
                      </p>
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        History
                      </p>
                    </div>
                    <p className="ct_fw_600 mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua?
                    </p>
                    <div className="mt-5">
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        Choose your answer
                      </p>
                      <div className="row mt-2">
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio1"
                              type="radio"
                            />
                            <label className="radio-label" htmlFor="radio1">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio2"
                              type="radio"
                            />
                            <label className="radio-label" htmlFor="radio2">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio3"
                              type="radio"
                            />
                            <label className="radio-label" htmlFor="radio3">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio4"
                              type="radio"
                            />
                            <label className="radio-label" htmlFor="radio4">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 mb-4">
                  {/* Add this class ct_flash_card_active  when card is selected */}
                  <div className="ct_flash_card ct_flash_card_active pb-0">
                    <div className="d-flex align-items-center gap-2">
                      <div>
                        <input type="checkbox" className="ct_custom_checkbox" />
                      </div>
                      <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">
                        Question Card 223
                      </h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2 my-3 ">
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        Question 20
                      </p>
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        History
                      </p>
                    </div>
                    <p className="ct_fw_600 mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua?
                    </p>
                    <div className="mt-5">
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        Fill in the blanks
                      </p>
                      <p className="my-1">Answer</p>
                      <div className="row mt-2">
                        <div className="col-md-12 mb-2">
                          <input
                            type="text"
                            className="ct_input form-control ct_input_56"
                            placeholder="Type Here"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 mb-4">
                  {/* Add this class ct_flash_card_active when card is selected */}
                  <div className="ct_flash_card pb-0">
                    <div className="d-flex align-items-center gap-2">
                      <div>
                        <input type="checkbox" className="ct_custom_checkbox" />
                      </div>
                      <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">
                        Question Card 223
                      </h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2 my-3 ">
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        Question 20
                      </p>
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        History
                      </p>
                    </div>
                    <p className="ct_fw_600 mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua?
                    </p>
                    <div className="mt-5">
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        Fill in the blanks
                      </p>
                      <div className="row mt-2">
                        <div className="col-md-12 mb-2">
                          <input
                            type="text"
                            className="ct_input form-control ct_input_56"
                            placeholder="Type Here"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 mb-4">
                  {/* Add this class ct_flash_card_active when card is selected */}
                  <div className="ct_flash_card pb-0">
                    <div className="d-flex align-items-center gap-2">
                      <div>
                        <input type="checkbox" className="ct_custom_checkbox" />
                      </div>
                      <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">
                        Flash Card 223
                      </h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2 my-3 ">
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        Question 20
                      </p>
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        History
                      </p>
                    </div>
                    <p className="ct_fw_600 mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua?
                    </p>
                    <div className="mt-5">
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        Choose your answer
                      </p>
                      <div className="row mt-2">
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio1"
                              type="radio"
                            />
                            <label className="radio-label" htmlFor="radio1">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio2"
                              type="radio"
                            />
                            <label className="radio-label" htmlFor="radio2">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio3"
                              type="radio"
                            />
                            <label className="radio-label" htmlFor="radio3">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-2">
                          <div>
                            <input
                              className="radio-input"
                              name="radio-group"
                              id="radio4"
                              type="radio"
                            />
                            <label className="radio-label" htmlFor="radio4">
                              <span className="radio-inner-circle" />
                              Option 1
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 mb-4">
                  {/* Add this class ct_flash_card_active when card is selected */}
                  <div className="ct_flash_card pb-0">
                    <div className="d-flex align-items-center gap-2">
                      <div>
                        <input type="checkbox" className="ct_custom_checkbox" />
                      </div>
                      <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">
                        Question Card 223
                      </h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2 my-3 ">
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        Question 20
                      </p>
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        History
                      </p>
                    </div>
                    <p className="ct_fw_600 mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua?
                    </p>
                    <div className="mt-5">
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        Fill in the blanks
                      </p>
                      <p className="my-1">Answer</p>
                      <div className="row mt-2">
                        <div className="col-md-12 mb-2">
                          <input
                            type="text"
                            className="ct_input form-control ct_input_56"
                            placeholder="Type Here"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 mb-4">
                  {/* Add this class ct_flash_card_active when card is selected */}
                  <div className="ct_flash_card pb-0">
                    <div className="d-flex align-items-center gap-2">
                      <div>
                        <input type="checkbox" className="ct_custom_checkbox" />
                      </div>
                      <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">
                        Question Card 223
                      </h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-2 my-3 ">
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        Question 20
                      </p>
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        History
                      </p>
                    </div>
                    <p className="ct_fw_600 mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua?
                    </p>
                    <div className="mt-5">
                      <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                        Fill in the blanks
                      </p>
                      <div className="row mt-2">
                        <div className="col-md-12 mb-2">
                          <input
                            type="text"
                            className="ct_input form-control ct_input_56"
                            placeholder="Type Here"
                          />
                        </div>
                      </div>
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

export default NewMockTest;
