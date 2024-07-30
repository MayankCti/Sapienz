import React, { useEffect } from "react";
import StudentTable from "../components/StudentTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/authActions";
import { fetchDashboard } from "../redux/actions/studentActions";
import SapienzeLoader from "../components/Loader/SapienzeLoader";

function ExpertDashboard() {
  const dispatch = useDispatch();
  const { cardData, isLoading } = useSelector((state) => state?.studentReducer);

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchDashboard());
  }, []);

  if (isLoading) {
    return <SapienzeLoader/>;
  }
  return (
    <>
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
                        <p className="ct_fw_600">{card?.title}</p>
                        <h2 className="ct_fs_28 ct_fw_600">{card?.value}</h2>
                      </div>
                      <div
                        className="ct_dash_card_icon"
                        style={{ backgroundColor: card?.backgroundColor }}
                      >
                        <img src={card?.iconSrc} alt={card?.title} />
                      </div>
                    </div>
                    {/* <div className="mt-4">
                      <p className="d-flex align-items-center gap-2 ct_fw_600 ct_clr_606060 mb-0">
                        <i className="fa-solid fa-arrow-trend-up ct_cyan_text" />
                        <span className="ct_cyan_text">{card?.trend}</span>{" "}
                        {card?.trendText}
                      </p>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
            <div className="ct_white_bg ct_mt_28">
              <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
                <h4 className="ct_fs_24  ct_fw_600">All Students</h4>
              </div>
              <div className="table-responsive mt-4">
                <StudentTable />
              </div>
            </div>
          </div>
    </>
  );
}

export default ExpertDashboard;
