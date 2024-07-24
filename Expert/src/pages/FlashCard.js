import React from "react";
import { useNavigate } from "react-router-dom";
import Siderbar from "../layout/sidebar";
import Header from "../layout/header";
import { pageRoutes } from "../routes/path";

function FlashCard() {
  const navigate = useNavigate();

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
              <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <h4 className="ct_fs_24  ct_fw_600 mb-0">Flash Cards</h4>
                <div className="ct_category_select_2">
                  Category
                  <select>
                    <option value="">All</option>
                    <option value="">Language</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <a
                      href="javascript:void(0)"
                      onClick={() => navigate(pageRoutes?.addFlashCard)}
                      className="ct_blue_btn py-3 ct_btn_h_48"
                    >
                      + Add New Flash Card
                    </a>
                  </div>
                </div>
              </div>
              <div className="row ct_flash_card_scroll">
                <div className="col-xl-4 mb-4">
                  {/* Add this class when card is selected */}
                  <a
                    href="javascript:void(0)"
                    onClick={() => navigate(pageRoutes?.editFlashCard)}
                    className="text-dark"
                  >
                    <div className="ct_flash_card pb-0">
                      <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">
                        Flash Card 223
                      </h4>
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
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua?
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
                                Option 2
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
                                Option 3
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
                                Option 4
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-4 mb-4">
                  {/* Add this class when card is selected */}
                  <a
                    href="javascript:void(0)"
                    onClick={() => navigate(pageRoutes?.editFlashCard)}
                    className="text-dark"
                  >
                    <div className="ct_flash_card pb-0">
                      <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">
                        Flash Card 223
                      </h4>
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
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua?
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
                                Option 2
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
                                Option 3
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
                                Option 4
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-4 mb-4">
                  {/* Add this class when card is selected */}
                  <a
                    href="javascript:void(0)"
                    onClick={() => navigate(pageRoutes?.editFlashCard)}
                    className="text-dark"
                  >
                    <div className="ct_flash_card pb-0">
                      <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">
                        Flash Card 223
                      </h4>
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
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua?
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
                                Option 2
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
                                Option 3
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
                                Option 4
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-4 mb-4">
                  {/* Add this class when card is selected */}
                  <a
                    href="javascript:void(0)"
                    onClick={() => navigate(pageRoutes?.editFlashCard)}
                    className="text-dark"
                  >
                    <div className="ct_flash_card pb-0">
                      <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">
                        Flash Card 223
                      </h4>
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
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua?
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
                                Option 2
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
                                Option 3
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
                                Option 4
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-4 mb-4">
                  {/* Add this class when card is selected */}
                  <a
                    href="javascript:void(0)"
                    onClick={() => navigate(pageRoutes?.editFlashCard)}
                    className="text-dark"
                  >
                    <div className="ct_flash_card pb-0">
                      <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">
                        Flash Card 223
                      </h4>
                      <div className="d-flex align-items-center justify-content-between gap-2 my-3 ">
                        <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                          Question 20
                        </p>
                        <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                          History
                        </p>
                      </div>
                      <p className="ct_fw_600 mb-0">
                        Lorem ipsum ________ amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua?
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
                  </a>
                </div>
                <div className="col-xl-4 mb-4">
                  {/* Add this class when card is selected */}
                  <a
                    href="javascript:void(0)"
                    onClick={() => navigate(pageRoutes?.editFlashCard)}
                    className="text-dark"
                  >
                    <div className="ct_flash_card pb-0">
                      <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">
                        Flash Card 223
                      </h4>
                      <div className="d-flex align-items-center justify-content-between gap-2 my-3 ">
                        <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                          Question 20
                        </p>
                        <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
                          History
                        </p>
                      </div>
                      <p className="ct_fw_600 mb-0">
                        Lorem ipsum ________ amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua?
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
                  </a>
                </div>
                <div className="col-xl-4 mb-4">
                  {/* Add this class when card is selected */}
                  <a
                    href="javascript:void(0)"
                    onClick={() => navigate(pageRoutes?.editFlashCard)}
                    className="text-dark"
                  >
                    <div className="ct_flash_card pb-0">
                      <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">
                        Flash Card 223
                      </h4>
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
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua?
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
                                Option 2
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
                                Option 3
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
                                Option 4
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-4 mb-4">
                  {/* Add this class when card is selected */}
                  <a
                    href="javascript:void(0)"
                    onClick={() => navigate(pageRoutes?.editFlashCard)}
                    className="text-dark"
                  >
                    <div className="ct_flash_card pb-0">
                      <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">
                        Flash Card 223
                      </h4>
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
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua?
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
                  </a>
                </div>
                <div className="col-xl-4 mb-4">
                  {/* Add this class when card is selected */}
                  <a
                    href="javascript:void(0)"
                    onClick={() => navigate(pageRoutes?.editFlashCard)}
                    className="text-dark"
                  >
                    <div className="ct_flash_card pb-0">
                      <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">
                        Flash Card 223
                      </h4>
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
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua?
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}

export default FlashCard;
