import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from './privateRoutes';
import expertRoutes from '../routes/path';
import PageNotFound from '../components/notfound/PageNotFound';


const Expert = () => {
  return (
    <>
     <Router basename="/">
        <Routes>
          {expertRoutes?.map((item,i) => {
            return (
              <Route
                path={item.path}
                key={i}
                exact
                element={item?.isPrivate ? <PrivateRoute>{item?.element}</PrivateRoute> : item?.element}
              />
            );
          })}
          <Route exact path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router> 
    </>
  )
}

export default Expert

