import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Siderbar from "../layout/sidebar";
import Header from "../layout/header";
import { pageRoutes } from "../routes/path";
import FlashCard from "../components/FlashCard";
import SelectFlashCard from "../components/SelectFlashCard";
import {
  fetchCategoryList,
  fetchFlashCardList,
} from "../redux/actions/flashCardActions";
import { useDispatch, useSelector } from "react-redux";
import CategorySelect from "../components/formInputs/CategorySelect";

function NewMockTest() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedIds, setSelectedIds] = useState([]);
  const list = useSelector((state) => state?.flashCardReducer?.flashCardData);
  const { isLoading } = useSelector((state) => state?.flashCardReducer);
  const [flashCardData, setFlashCardData] = useState(list);

  const { categories } = useSelector((state) => state?.flashCardReducer);
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    dispatch(fetchFlashCardList());
    dispatch(fetchCategoryList());
  }, []);

  useEffect(() => {
    let filtered = list;
    if (statusFilter) {
      filtered = filtered.filter((sub) =>
        statusFilter == "all" ? sub : sub?.categoryName == statusFilter
      );
    }
    setFlashCardData(filtered);
  }, [statusFilter, list]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
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
                              className="ct_input form-control"
                              value={selectedIds?.length}
                            />
                          </div>
                        </div>
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
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* when user click on  test question input show this div  */}
            <div className={`ct_white_bg p-4 `}>
              <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <h4 className="ct_fs_24  ct_fw_600 mb-0">Choose Question</h4>
                <div className="d-flex align-items-center gap-3">
                  <h6 className="ct_fs_14 mb-0 ct_fw_500">
                  {selectedIds?.length} Questions Selected
                  </h6>
                  <div className="ct_category_select_2">
                    Category
                    <CategorySelect
                      options={categories}
                      value={statusFilter}
                      valuefilter={true}
                      onChange={setStatusFilter}
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <a
                      href="javascript:void(0)"
                      className="ct_blue_btn py-3 ct_btn_h_48"
                    >
                      Continue
                    </a>
                  </div>
                </div>
              </div>
              <div className="row ct_flash_card_scroll">
                {console.log({ object: flashCardData })}
                {flashCardData &&
                  flashCardData?.map((card, index) => (
                    <SelectFlashCard
                      key={card?.id}
                      card={card}
                      index={index}
                      id={card?.id}
                      selectedIds={selectedIds}
                      setSelectedIds={setSelectedIds}
                      options={card?.options}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default NewMockTest;
