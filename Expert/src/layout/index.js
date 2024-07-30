import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./privateRoutes";
import expertRoutes from "../routes/path";
import PageNotFound from "../components/notfound/PageNotFound";
import { getAuth } from "../utils/pip";

const Expert = () => {
  const isLogin = getAuth();
  console.log(isLogin);

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
      </Router>
    </>
  );
};

export default Expert;
