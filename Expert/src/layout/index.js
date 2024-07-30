import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./privateRoutes";
import expertRoutes from "../routes/path";
import PageNotFound from "../components/notfound/PageNotFound";
import { getAuth } from "../utils/pip";
import Header from "./header";
import Sidebar from "./sidebar";
import { useSelector } from "react-redux";

const Expert = () => {
  const isLogin = getAuth();
  const { isToggle } = useSelector((state) => state.authReducer);

  if (!isLogin) {
    return (
      <Router basename="/">
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
      <Router basename="/">
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
              <Route exact path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </main>
      </Router>
    </>
  );
};

export default Expert;
