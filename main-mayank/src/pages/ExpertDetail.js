import React, { useState } from 'react'
import { pageRoutes } from '../routes/path'
import { useNavigate } from 'react-router-dom';

function ExpertDetail() {
  const navigate = useNavigate();
  
    return (
      <>
      <div className="ct_inner_dashbaord_main">
        <div className="ct_white_bg p-4">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
            <h4 className="ct_fs_24 ps-4 ct_fw_600">Expert Details</h4>
            <div className="d-flex align-items-center gap-3">
              <div className="ms-4 d-flex align-items-center gap-3">
                <a                  
                  href="javascript:void(0)"
                  onClick={() => navigate(pageRoutes?.editExpertDetail)}
                  className="ct_blue_btn py-3 ct_btn_h_48"
                >
                  Edit Details
                </a>
                <a
                  href="javascript:void(0)"
                  className="ct_blue_btn ct_delete_btn1 py-3 ct_btn_h_48"
                >
                  Delete Flash Cards
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-xl-3 col-md-6 mb-4">
                <a 
                href="javascript:void(0)"
                onClick={() => navigate(pageRoutes?.expertDetail)}
                 className="text-dark">
                  <div className="ct_expert_card ct_py_161">
                    <div className="ct_expert_img">
                      <img
                        src="/assets/img/expert_img_1.png"
                        alt=""
                        className="ct_img_109"
                      />
                    </div>
                    <div className="ct_expert_info">
                      <h4 className="ct_fs_16 ct_fw_600">Rosalie Prohaska</h4>
                      <p>Physicist</p>
                      <p>Sid_Ryan78@gmail.com</p>
                      <h6 className="ct_blue_text">Active from - 12.09.2019</h6>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-9 col-md-6 mb-4">
                <h4 className="ct_fs_20 ct_fw_600 mb-3 ">
                  <span className="ct_text_op_05">Card Created by</span>{" "}
                  <span className="ct_blue_text">Rosalie Prohaska</span>
                </h4>
                <div className="ct_flash_card_scroll">
                  <div className="row">
                    <div className="col-xl-6 mb-4">
                      {/* Add this class when card is selected */}
                      <div className="ct_flash_card pb-0">
                        <div className="d-flex align-items-center gap-2">
                          <div>
                            <input
                              type="checkbox"
                              className="ct_custom_checkbox"
                            />
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua?
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
                    <div className="col-xl-6 mb-4">
                      {/* Add this class when card is selected */}
                      <div className="ct_flash_card pb-0">
                        <div className="d-flex align-items-center gap-2">
                          <div>
                            <input
                              type="checkbox"
                              className="ct_custom_checkbox"
                            />
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua?
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
                    <div className="col-xl-6 mb-4">
                      {/* Add this class when card is selected */}
                      <div className="ct_flash_card pb-0">
                        <div className="d-flex align-items-center gap-2">
                          <div>
                            <input
                              type="checkbox"
                              className="ct_custom_checkbox"
                            />
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua?
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
                    <div className="col-xl-6 mb-4">
                      {/* Add this class when card is selected */}
                      <div className="ct_flash_card pb-0">
                        <div className="d-flex align-items-center gap-2">
                          <div>
                            <input
                              type="checkbox"
                              className="ct_custom_checkbox"
                            />
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua?
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
                    <div className="col-xl-6 mb-4">
                      {/* Add this class when card is selected */}
                      <div className="ct_flash_card pb-0">
                        <div className="d-flex align-items-center gap-2">
                          <div>
                            <input
                              type="checkbox"
                              className="ct_custom_checkbox"
                            />
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua?
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
                    <div className="col-xl-6 mb-4">
                      {/* Add this class when card is selected */}
                      <div className="ct_flash_card pb-0">
                        <div className="d-flex align-items-center gap-2">
                          <div>
                            <input
                              type="checkbox"
                              className="ct_custom_checkbox"
                            />
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua?
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</>

  )
}

export default ExpertDetail