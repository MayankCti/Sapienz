import React, { useEffect } from "react";
import Siderbar from "../layout/sidebar";
import Header from "../layout/header";
import StudentTable from "../components/StudentTable";
import { fetchProfile } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";

function ExpertDashboard() {
  const dispatch = useDispatch();
  const cardData = [
    {
      title: "Total Mock Test",
      value: 425,
      backgroundColor: "rgb(130 128 255 / 16%)",
      iconSrc: "/assets/img/mock_test_purple_icon.svg",
      trend: "8.5%",
      trendText: "Up from yesterday",
    },
    {
      title: "Total Students",
      value: 14,
      backgroundColor: "rgb(252 190 45 / 16%)",
      iconSrc: "/assets/img/total_expert_icon.svg",
      trend: "1.3%",
      trendText: "Up from past week",
    },
    {
      title: "My Flash Cards",
      value: 236,
      backgroundColor: "rgb(0 182 155 / 16%)",
      iconSrc: "/assets/img/total_flash_card.svg",
      trend: "1.3%",
      trendText: "Up from past week",
    },
    {
      title: "My Ranking",
      value: 62,
      backgroundColor: "rgb(255 144 102 / 16%)",
      iconSrc: "/assets/img/total_categories_icon.svg",
      trend: "1.8%",
      trendText: "Up from yesterday",
    },
  ];

  useEffect(() => {
    dispatch(fetchProfile());
  });
  return (
    <>
      <main>
        {/* Expert Sidebaar */}
        <Siderbar />
        <div className="ct_right_content">
          {/* expert header */}
          <Header />
          <div className="ct_inner_dashbaord_main">
            <h3 className="ct_fs_35 ct_fw_600 py-4">Dashboard</h3>
            <div className="row">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 mb-4 mb-xxl-0"
                >
                  <div className="ct_dashboard_card">
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <div>
                        <p className="ct_fw_600">{card.title}</p>
                        <h2 className="ct_fs_28 ct_fw_600">{card.value}</h2>
                      </div>
                      <div
                        className="ct_dash_card_icon"
                        style={{ backgroundColor: card.backgroundColor }}
                      >
                        <img src={card.iconSrc} alt={card.title} />
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="d-flex align-items-center gap-2 ct_fw_600 ct_clr_606060 mb-0">
                        <i className="fa-solid fa-arrow-trend-up ct_cyan_text" />
                        <span className="ct_cyan_text">{card.trend}</span>{" "}
                        {card.trendText}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="ct_white_bg ct_mt_28">
              <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
                <h4 className="ct_fs_24  ct_fw_600">All Students</h4>
                <form className="form-floating">
                  <input
                    type="month"
                    className="form-control"
                    id="floatingInputValue"
                  />
                  <label htmlFor="floatingInputValue">Month</label>
                </form>
              </div>
              <div className="table-responsive mt-4">
                <StudentTable />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ExpertDashboard;
