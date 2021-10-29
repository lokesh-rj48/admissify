import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { validateLogin } from "../../validation/validation";

import {
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { getToken } from "../../utils/Auth/token";
import { loginUser } from "../../services/service";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const history = useHistory();
  const isAuthenticated = getToken();

  const [user, setUser] = useState(initialValues);
  const [formValidate, setSubmitting] = useState({
    isSubmitting: false,
    error: undefined,
  });
  const [errors, setErrors] = useState({ selected: undefined });
  const { email, password } = user;

  React.useEffect(() => {
    const validationErrors = validateLogin(user);
    let noErrors = Object.keys(validationErrors).length == 0;
    let currentError = validationErrors[errors.selected];
    setSubmitting({ isSubmitting: noErrors, error: currentError });
  }, [errors]);

  const onValueChange = (event) => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
    setErrors({ ...errors, selected: event?.target.name });
  };

  const userLogin = async (event) => {
    let userdata = await loginUser(user, history);
console.log(userdata);
    // if (userdata?.token) {
    //   history.push("/dashboard");
    //   //  window.location.href = "/dashboard";
    // } else {
    //    history.push("/login");
    //  // window.location.href = "/login";
    // }

  };

  // useEffect(() => {
  //   if (isAuthenticated == false) {
  //     history.push("/login");
  //     //           window.location.href = "/dashboard";
  //   } else {
  //     history.push("/dashboard");
  //     //  window.location.href = "/login";
  //   }
  // }, [isAuthenticated]);
console.log(isAuthenticated);
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="5">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <center>
                      <img src={"/admin/build/avatars/admissify_logo.png"} />
                    </center>
                    <center>
                      {/* <p style={{ color: "red" }}>{loginStatus}</p> */}
                    </center>
                    <br />
                   
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                        value={email}
                        onChange={(input) => onValueChange(input)}
                      />
                      
                    </CInputGroup>
                    {errors?.selected == "email" && (
                      <span className="error">{formValidate?.error}</span>
                    )}
                   
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="Password"
                        name="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(input) => onValueChange(input)}
                      />
                    </CInputGroup>
                    {errors?.selected == "password" && (
                      <span className="error">{formValidate?.error}</span>
                    )}
                    <CRow>
                      <CCol xs="12">
                        <center>
                          {/* <a> */}
                          <button type="button"
                            className={
                              !formValidate.isSubmitting
                                ? "disabledClass btn btn-warning "
                                : "btn btn-warning"
                            }
                            onClick={userLogin}
                          >
                            Login
                          </button>
                          {/* <button className="btn btn-warning">Login</button> */}
                          {/* </a> */}
                        </center>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
