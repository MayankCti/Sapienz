import React from "react";
import { useNavigate } from "react-router-dom";
import Siderbar from "../layout/sidebar";
import Header from "../layout/header";
import { pageRoutes } from "../routes/path";

function AddFlashCard() {
  const navigate = useNavigate();

  return (
    <>
      <main>
        {/* Expert Sidebaar */}
        <Siderbar/>
        <div className="ct_right_content">
          {/* expert header */}
          <Header/>

          <div className="ct_inner_dashbaord_main">
            <div className="ct_white_bg p-4">
              <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
                <h4 className="ct_fs_24 ps-4 ct_fw_600">Flash Card Details</h4>
                <div className="d-flex align-items-center gap-3">
                  <div className="ms-4 d-flex align-items-center gap-3">
                    <a
                      href="javascript:void(0)"
                      onClick={()=>navigate(pageRoutes?.flashCard)}
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
                        New Card Details
                      </h4>
                      <div className="row mt-4">
                        <div className="col-md-12 mb-4">
                          <div className="form-group">
                            <label htmlFor="" className="mb-2 ct_fw_500">
                              Type <span className="ct_required_text">*</span>
                            </label>
                            <select className="ct_input form-control">
                              <option value="">Multi Options</option>
                              <option value="">Single Option</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <div className="form-group">
                            <label htmlFor="" className="mb-2 ct_fw_500">
                              Question{" "}
                              <span className="ct_required_text">*</span>
                            </label>
                            <textarea
                              className="ct_input form-control h-auto"
                              rows={3}
                              defaultValue={
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?"
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-group">
                            <label htmlFor="" className="mb-2 ct_fw_500">
                              Option 1{" "}
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
                              Option 2{" "}
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
                              Option 3{" "}
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
                              Option 4{" "}
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
                              Category
                              <span className="ct_required_text">*</span>
                            </label>
                            <select className="ct_input form-control">
                              <option value="">Languages</option>
                              <option value="">Languages</option>
                              <option value="">Languages</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <div className="form-group">
                            <label htmlFor="" className="mb-2 ct_fw_500">
                              Correct Answer
                              <span className="ct_required_text">*</span>
                            </label>
                            <select className="ct_input form-control">
                              <option value="">Option 1</option>
                              <option value="">Option 2</option>
                              <option value="">Option 3</option>
                              <option value="">Option 4</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default AddFlashCard;





