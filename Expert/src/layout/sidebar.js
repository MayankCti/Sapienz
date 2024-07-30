import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { pageRoutes } from "../routes/path";
import { useDispatch } from "react-redux";
import { toggleChange } from "../redux/reducers/authReducer";

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const menuItems = [
    {
      route: pageRoutes?.dashboard,
      iconSrc: "/assets/img/dashbaord_icon.svg",
      label: "Dashboard",
    },
    {
      route: pageRoutes?.student,
      iconSrc: "/assets/img/student_icon.svg",
      label: "Students",
    },
    {
      route: pageRoutes?.flashCard,
      iconSrc: "/assets/img/flash-card_icon.svg",
      label: "Flash Cards",
    },
    {
      route: pageRoutes?.allMockTest,
      iconSrc: "/assets/img/mock_test_icon.svg",
      label: "Mock Test",
    },
  ];
  const isActive = (path) => location.pathname === path;

  return (
    <div className="ct_side_bar ">
      <div
        className="ct_close_menu"
        onClick={() => dispatch(toggleChange(false))}
      >
        <i className="fa-solid fa-xmark" />
      </div>
      <div className="ct_logo">
        <img src="/assets/img/logo.svg" alt="Logo" />
      </div>
      <ul className="ct_side_menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href="javascript:void(0)"
              onClick={() => navigate(item?.route)}
              className={isActive(item?.route) ? "active" : ""}
            >
              <img src={item?.iconSrc} alt={`${item?.label} Icon`} />
              {item?.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
