import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Siderbar from "../layout/sidebar";
import Header from "../layout/header";
import { pageRoutes } from "../routes/path";
import FlashCard from "../components/FlashCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoryList,
  fetchFlashCardList,
} from "../redux/actions/flashCardActions";
import CategorySelect from "../components/formInputs/CategorySelect";

function FlashCardList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state?.flashCardReducer);
  const list = useSelector((state) => state?.flashCardReducer?.flashCardData);
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
              <div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
                <h4 className="ct_fs_24  ct_fw_600 mb-0">Flash Cards</h4>
                <div className="ct_category_select_2">
                  Category
                  <CategorySelect
                    options={categories}
                    value={statusFilter}
                    valuefilter={true}
                    onChange={setStatusFilter}
                  />
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
                {flashCardData?.length <= 0 && (
                  <div className="text-center py-4">No flash cards found.</div>
                )}
                {flashCardData?.map((card, index) => (
                  <>
                  <FlashCard
                    card={card}
                    index={index + 1}
                    onClick={() => {
                      localStorage.setItem('flashCard',card ? JSON?.stringify(card) : null)
                      navigate(pageRoutes?.editFlashCard);
                    }}
                    />
                    </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default FlashCardList;
