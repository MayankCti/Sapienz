import { message } from "antd";
import { pageRoutes } from "../routes/path";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SimpleReactValidator from "simple-react-validator";
import {
  deleteFlashCard,
  fetchCategoryList,
  updateFlashCard,
} from "../redux/actions/flashCardActions";
import { useDispatch, useSelector } from "react-redux";
import SapienzeLoader from "../components/Loader/SapienzeLoader";
import CategorySelect from "../components/formInputs/CategorySelect";

function EditFlashCard() {
  const CardDetails = JSON?.parse(localStorage.getItem("flashCard"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validator = new SimpleReactValidator({
    className: "text-danger",
  });
  const [, forceUpdate] = useState();
  const { categories, isLoading } = useSelector(
    (state) => state?.flashCardReducer
  );
  const [categoryId, setCategoryId] = useState();
  const [type, setType] = useState("Multi Options");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    dispatch(fetchCategoryList());
    fetchCarddetails();
  }, []);

  // update card details
  const handleUpdate = (event) => {
    event.preventDefault();
    if (validator.allValid()) {
      const callback = (response) => {
        if (response?.success) {
          localStorage?.removeItem("flashCard");
          navigate(pageRoutes?.flashCard);
        }
      };

      const payload =
        type == "Multi Options"
          ? {
              flashCardId: CardDetails?.id,
              flash_card_type: type,
              question,
              option1,
              option2,
              option3,
              option4,
              categoryId: categoryId ?? categories[0]?.id,
              correct_answer: answer ?? "option1",
            }
          : {
              flashCardId: CardDetails?.id,
              flash_card_type: type,
              question,
              correct_answer: answer,
              categoryId: categoryId ?? categories[0]?.id,
            };
      dispatch(updateFlashCard({ payload, callback }));
    } else {
      validator.showMessages();
      message.error("Please fill out all fields");
      forceUpdate(1);
    }
  };
  // set card details
  const fetchCarddetails = () => {
    if (!CardDetails) return;
    setCategoryId(CardDetails?.category_id);
    setType(CardDetails?.flash_card_type);
    setQuestion(CardDetails?.question);
    setOption1(CardDetails?.option1);
    setOption2(CardDetails?.option2);
    setOption3(CardDetails?.option3);
    setOption4(CardDetails?.option4);
    setAnswer(CardDetails?.correct_answer);
  };
  // delete flash card
  const handleDelete = () => {
    const callback = (response) => {
      if (response?.success) {
        localStorage?.removeItem("flashCard");
        navigate(pageRoutes?.flashCard);
      }
    };
    dispatch(
      deleteFlashCard({ payload: { flashCardId: CardDetails?.id }, callback })
    );
  };

  if (isLoading) {
    return <SapienzeLoader />;
  }
  return (
    <>
      <div className="ct_inner_dashbaord_main">
        <div className="ct_white_bg p-4">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
            <h4 className="ct_fs_24 ps-4 ct_fw_600">Flash Card Details</h4>
            <div className="d-flex align-items-center gap-3">
              <div className="ms-4 d-flex align-items-center gap-3">
                <a
                  href="javascript:void(0)"
                  data-bs-toggle="modal"
                  data-bs-target="#ct_confirmation_modal"
                  className="ct_blue_btn ct_delete_btn1 py-3 ct_btn_h_48"
                >
                  Delete Flash Card
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="ct_border_1_black">
                <form onSubmit={handleUpdate}>
                  <h4 className="ct_fs_24 text-center ct_fw_600">
                    Edit Details
                  </h4>
                  <div className="row mt-4">
                    <div className="col-md-12 mb-4">
                      <div className="form-group">
                        <label htmlFor="" className="mb-2 ct_fw_500">
                          Type <span className="ct_required_text">*</span>
                        </label>
                        <select
                          className="ct_input form-control"
                          value={type}
                          onChange={(e) => {
                            setType(e.target.value);
                            // e.target.value = "Single Option" && setAnswer("");
                          }}
                        >
                          <option value="Multi Options">Multi Options</option>
                          <option value="Single Option">Single Option</option>
                        </select>
                        {validator.message("type", type, "required")}
                      </div>
                    </div>
                    <div className="col-md-12 mb-4">
                      <div className="form-group">
                        <label htmlFor="" className="mb-2 ct_fw_500">
                          Question <span className="ct_required_text">*</span>
                        </label>
                        <textarea
                          className="ct_input form-control h-auto"
                          rows={3}
                          value={question}
                          onChange={(e) => setQuestion(e.target.value)}
                        />
                      </div>
                      {validator.message("question", question, "required")}
                    </div>
                    {type == "Multi Options" && (
                      <>
                        <div className="col-md-6 mb-4">
                          <div className="form-group">
                            <label htmlFor="" className="mb-2 ct_fw_500">
                              Option 1{" "}
                              <span className="ct_required_text">*</span>
                            </label>
                            <input
                              type="text"
                              name="option1"
                              value={option1}
                              onChange={(e) => setOption1(e.target.value)}
                              className="ct_input form-control"
                              placeholder="Answer"
                            />
                          </div>
                          {validator.message("option1", option1, "required")}
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-group">
                            <label htmlFor="" className="mb-2 ct_fw_500">
                              Option 2{" "}
                              <span className="ct_required_text">*</span>
                            </label>
                            <input
                              type="text"
                              name="option2"
                              value={option2}
                              onChange={(e) => setOption2(e.target.value)}
                              className="ct_input form-control"
                              placeholder="Answer"
                            />
                          </div>
                          {validator.message("option2", option2, "required")}
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-group">
                            <label htmlFor="" className="mb-2 ct_fw_500">
                              Option 3{" "}
                              <span className="ct_required_text">*</span>
                            </label>
                            <input
                              type="text"
                              name="option3"
                              value={option3}
                              onChange={(e) => setOption3(e.target.value)}
                              className="ct_input form-control"
                              placeholder="Answer"
                            />
                          </div>
                          {validator.message("option3", option3, "required")}
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-group">
                            <label htmlFor="" className="mb-2 ct_fw_500">
                              Option 4{" "}
                              <span className="ct_required_text">*</span>
                            </label>
                            <input
                              type="text"
                              name="option4"
                              value={option4}
                              onChange={(e) => setOption4(e.target.value)}
                              className="ct_input form-control"
                              placeholder="Answer"
                            />
                          </div>
                          {validator.message("option4", option4, "required")}
                        </div>

                        <div className="col-md-12 mb-4">
                          <div className="form-group">
                            <label htmlFor="" className="mb-2 ct_fw_500">
                              Correct Answer
                              <span className="ct_required_text">*</span>
                            </label>
                            <select
                              className="ct_input form-control"
                              value={answer}
                              onChange={(e) => setAnswer(e.target.value)}
                            >
                              <option value="option1">Option 1</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
                              <option value="option4">Option 4</option>
                            </select>
                          </div>
                          {validator.message("answer", answer, "required")}
                        </div>
                      </>
                    )}
                    <div className="col-md-12 mb-4">
                      <div className="form-group">
                        <label htmlFor="" className="mb-2 ct_fw_500">
                          Category
                          <span className="ct_required_text">*</span>
                        </label>
                        <CategorySelect
                          isAll={false}
                          className={"ct_input form-control"}
                          options={categories}
                          value={categoryId}
                          onChange={setCategoryId}
                        />
                      </div>
                    </div>
                    {type == "Single Option" && (
                      <div className="col-md-12 mb-4">
                        <div className="form-group">
                          <label htmlFor="" className="mb-2 ct_fw_500">
                            Answer <span className="ct_required_text">*</span>
                          </label>
                          <input
                            type="text"
                            name="answer"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="ct_input form-control"
                            placeholder="Answer"
                          />
                        </div>
                        {validator.message("answer", answer, "required")}
                      </div>
                    )}
                    <div className="d-flex align-items-center gap-3">
                      <div className="ms-4 d-flex align-items-center gap-3">
                        <button
                          type="submit"
                          className="ct_blue_btn py-3 ct_btn_h_48"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation model */}
      <div
        className="modal fade ct_assets_modal"
        id="ct_confirmation_modal"
        tabindex="-1"
        aria-labelledby="ct_logout_modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0 pt-0">
              <button
                type="button"
                className="btn-close ct_cloose_btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body border-0 ">
              <h4 className="text-center mb-4 ct_fw_600">Delete Flash Card</h4>
              <p className="text-center ct_grey_text">
                Are you sure, you want to delete this flash card?
              </p>
              <div className="modal-footer border-0 justify-content-center">
                <button
                  type="button"
                  className=" ct_outline_btn"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="bg-danger ct_outline_btn ct_blue_btn text-white justify-content-center"
                  data-bs-dismiss="modal"
                  style={{ borderColor: "rgb(220, 53, 69)" }}
                  // onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditFlashCard;
