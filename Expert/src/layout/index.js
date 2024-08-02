import React from "react";
import Header from "./header";

import Sidebar from "./sidebar";
import { getAuth } from "../utils/pip";
import expertRoutes from "../routes/path";
import PrivateRoute from "./privateRoutes";
import { useSelector } from "react-redux";
import PageNotFound from "../components/notfound/PageNotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Expert = () => {
  const isLogin = getAuth();
  const { isToggle } = useSelector((state) => state.authReducer);


  if (!isLogin) {
    return (
      <Router basename="/expert">
        <Routes>
          {expertRoutes?.map((item, i) => (
            <Route
              path={item.path}
              key={i}
              exact
              element={
                item?.isPrivate ? (
                  <PrivateRoute>{item?.element}</PrivateRoute>
                ) : (
                  item?.element
                )
              }
            />
          ))}
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    );
  }
  return (
    <>
      <Router basename="/expert">
        <main className={`${isToggle ? "ct_collapsed_sidebar" : ""}`}>
          <Sidebar />
          <div className="ct_right_content">
            <Header />
            <Routes>
              {expertRoutes?.map(
                (item, i) =>
                  item?.isPrivate && (
                    <Route
                      path={item.path}
                      key={i}
                      exact
                      element={
                        item?.isPrivate ? (
                          <PrivateRoute>{item?.element}</PrivateRoute>
                        ) : (
                          item?.element
                        )
                      }
                    />
                  )
              )}
              {/* <Route exact path="*" element={<PageNotFound />} /> */}
            </Routes>
          </div>
        </main>
      </Router>
    </>
  );
};

export default Expert;
