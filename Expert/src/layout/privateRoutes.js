import React from 'react'
import {  Navigate } from 'react-router-dom'
import { getAuth } from '../utils/pip';
import { pageRoutes } from '../routes/path';

const PrivateRoute = ({ children }) => {
    const isAuth = getAuth("EXPERT");
    return (
        isAuth ? children : <Navigate to={pageRoutes?.login} />
    )
}

export default PrivateRoute