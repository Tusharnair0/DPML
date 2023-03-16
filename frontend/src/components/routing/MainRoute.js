import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Landing from "../layout/Landing";
import Auth from "../../views/Auth";
import NotFound from "../layout/NotFound";
import ProductManage from "../../views/ProductManage";
// import NavbarMenu from "../layout/NavbarMenu";
import Bills from "../../views/Bills";
import Setting from "../../views/Setting";
import PrivateRoute from "../routing/PrivateRoute";

import View from "../../views/View";
import Sidebar from "../layout/Sidebar";
import NavbarMenu from "../layout/TestNavbar";
import User from "../../views/User";
import UpdateUser from "../products/UpdateUser";
import Staff from "../../views/Staff";
import UpdateStaff from "../products/UpdateStaff";
import AddStaff from "../products/AddStaff";

const MainRoute = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/dashboard" && (
        // <NavbarMenu activate={location.pathname} />
        <NavbarMenu activate={location.pathname} />
      )}
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Landing />} />
          <Route path="login" element={<Auth authRoute="login" />} />
          <Route path="register" element={<Auth authRoute="register" />} />
          <Route
            path="/view"
            element={
              <PrivateRoute>
                {/* <NavbarMenu activate="view" /> */}
                <View />
              </PrivateRoute>
            }
          />
          <Route
            path="/ProductManage"
            element={
              <PrivateRoute>
                <ProductManage />
              </PrivateRoute>
            }
          />
          {/* <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <div className="App">
                  <Sidebar location={location} />
                  <Dashboard />
                </div>
              </PrivateRoute>
            }
          /> */}
          <Route
            path="/bills"
            element={
              <PrivateRoute>
                <Bills />
              </PrivateRoute>
            }
          />
          <Route
            path="/setting"
            element={
              <PrivateRoute>
                <Setting />
              </PrivateRoute>
            }
          />
          <Route path="/users" element={<PrivateRoute>
            <User />
          </PrivateRoute>} />
          <Route path="/staffs" element={<PrivateRoute>
            <Staff />
          </PrivateRoute>} />
          <Route path="/users/:id" element={<><UpdateUser/></>}/>
          <Route path="/staffs/:id" element={<><UpdateStaff/></>}/>
          <Route path="/staffs/create/new" element={<><AddStaff/></>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default MainRoute;
