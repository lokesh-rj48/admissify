import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
import Token from "../../components/AuthToken/AuthToken";

const Login = () => {
  // const [user_name, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const [loginStatus, setLoginStatus] = useState("");

  // //const history = useHistory();

  // const login = () => {
  //   axios
  //     .post("http://localhost:3001/login", {
  //       user_name: user_name,
  //       password: password,
  //     })
  //     .then((response) => {
  //       if (response.data.message) {
  //         setLoginStatus(response.data.message);
  //       } else {
  //         localStorage.setItem(
  //           "authToken",
  //           user_name ? "f6bae9511cd510f9322cae49c5db7268" : ""
  //         );
  //         localStorage.setItem("userRole", response.data[0].user_role);
  //         if (localStorage.authToken) {
  //           // history.push("/dashboard");
  //           window.location.href = "/dashboard";
  //         } else {
  //           //history.push("/login");
  //           window.location.href = "/login";
  //         }
  //       }
  //     });
  // };
  // useEffect(() => {
  //   if (localStorage.authToken !== Token) {
  //     // history.push("/login");
  //     window.location.href = "/login";
  //   }
  // }, []);

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
                        placeholder="Username"
                        autoComplete="username"
                        // onChange={(e) => {
                        //   setUsername(e.target.value);
                        // }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        // onChange={(e) => {
                        //   setPassword(e.target.value);
                        // }}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="12">
                        <center>
                          <Link>
                            {/* <button class="btn btn-warning" onClick={login}> */}
                            <button class="btn btn-warning">Login</button>
                          </Link>
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
