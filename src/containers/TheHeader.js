import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

// routes config
import routes from "../routes";

const TheHeader = () => {
  const history = useHistory();

  const logout = () => {
   localStorage.clear();
    history.push("/login");
    //window.location.href = "/login";
  };

  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };
  //  handleSelect() {
  //   console.log(date);
  // };

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="Admissify"
          src={"/admin/build/avatars/admissify_logo.png"}
          title="Admissify"
          height={35}
        />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
        </CHeaderNavItem>
        {/* <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/users">Users</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink>Settings</CHeaderNavLink>
        </CHeaderNavItem> */}
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <input
          type="submit"
          className="btn btn-danger"
          value="Logout"
          onClick={logout}
        />
               {/* <a
                  href={logout ? "/login" : "/profile"}
                  onClick={logout}
                  className="btn btn-danger "
                >
                  {" "}
                  Log Out
                </a> */}
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />
        <div className="d-md-down-none mfe-2 c-subheader-nav">
          {/* <DateRangePicker>
            <button class="form-control">
              <i class="fa fa-calendar"></i>
            </button>
          </DateRangePicker> */}
        </div>
      </CSubheader>
    </CHeader>
  );
};

export default TheHeader;
