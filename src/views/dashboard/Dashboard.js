import React, { lazy, useEffect, useState } from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "./Style.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import MainChartExample from "../charts/MainChartExample.js";
//import Token from "../../components/AuthToken/AuthToken";
import $ from "jquery";
import axios from "axios";
const Dashboard = () => {
  axios.defaults.withCredentials = true;

  const [loginStatus, setLoginStatus] = useState("");
  //const history = useHistory();

  // useEffect(() => {
  //   axios.get("http://localhost:3001/auth").then((response) => {
  //     if (response.data.loggedIn == true) {
  //       setLoginStatus(response.data.user);
  //     } else {
  //       history.push("/login");
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   if (localStorage.authToken !== Token) {
  //     //history.push("/login");
  //     window.location.href = "/login";
  //   }
  // }, []);
  return (
    <>
      <section class="content">
        <div class="row">
          <div class="col-md-11 col-sm-11 col-xs-12">
            <span class="as-role">
              Today'
              <span style={{ "text-transform": "lowercase" }}>s</span> Data
            </span>
          </div>
          <div class="col-md-1 col-sm-1 col-xs-12 text-right">
            <DateRangePicker>
              <button class="form-control">
                <i class="fa fa-calendar"></i>
              </button>
            </DateRangePicker>
          </div>
        </div>
        <div class="row mr-t">
          <div class="col-md-3 col-sm-6 col-xs-12">
            <Link to={"#!"}>
              <div class="info-box inr-card">
                <div class="icon-dv">
                  <span class="info-box-number">20</span>
                </div>
                <div class="info-box-content">
                  <span class="as-role">Today Leads</span>
                  <div class="inr-data role-box">
                    <div class="col-md-4 border-right" style={{ padding: "0" }}>
                      <span class="">New</span>
                      <span class="info-box-number lead-label">10</span>
                    </div>
                    <div
                      class="col-md-4 border-right"
                      style={{ padding: "0px 5px 0px" }}
                    >
                      <span class="">FollowUp</span>
                      <span class="info-box-number lead-label">5</span>
                    </div>
                    <div class="col-md-4 inactive" style={{ padding: "0" }}>
                      <span class="">Converted</span>
                      <span class="info-box-number lead-label">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <Link to={"#!"}>
              <div class="info-box inr-card">
                <div class="icon-dv">
                  <span class="info-box-number">14</span>
                </div>
                <div class="info-box-content">
                  <span class="as-role">Today Applicants</span>
                  <div class="inr-data role-box">
                    <div class="col-md-6 border-right">
                      <span class="">UG</span>
                      <span class="info-box-number lead-label">12</span>
                    </div>
                    <div class="col-md-6 inactive">
                      <span class="">PG</span>
                      <span class="info-box-number lead-label">6</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <Link to={"#!"}>
              <div class="info-box inr-card">
                <div class="icon-dv">
                  <span class="info-box-number">9</span>
                </div>
                <div class="info-box-content">
                  <span class="as-role">Today Counsellings</span>
                  <div class="inr-data role-box">
                    <div class="col-md-6 border-right">
                      <span class="">Assigned</span>
                      <span class="info-box-number lead-label">4</span>
                    </div>
                    <div class="col-md-6 inactive">
                      <span class="">Completed</span>
                      <span class="info-box-number lead-label">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <Link to={"#!"}>
              <div class="info-box inr-card">
                <div class="icon-dv">
                  <span class="info-box-number">4</span>
                </div>
                <div class="info-box-content">
                  <span class="as-role">Today Issues</span>
                  <div class="inr-data role-box">
                    <div class="col-md-6 border-right">
                      <span class="">Assigned</span>
                      <span class="info-box-number lead-label">5</span>
                    </div>
                    <div class="col-md-6 inactive">
                      <span class="">Resolved</span>
                      <span class="info-box-number lead-label">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <Link to={"#!"}>
              <div class="info-box inr-card">
                <div class="icon-dv">
                  <span class="info-box-number">20</span>
                </div>
                <div class="info-box-content">
                  <span class="as-role">Today Visa Applied</span>
                  <div class="inr-data role-box">
                    <div class="col-md-6 border-right">
                      <span class="">Approved</span>
                      <span class="info-box-number lead-label">15</span>
                    </div>
                    <div class="col-md-6 inactive">
                      <span class="">Rejected</span>
                      <span class="info-box-number lead-label">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section class="content mr-t">
        <div class="row">
          <div class="col-md-11 col-sm-11 col-xs-12">
            <span class="as-role">Overall Data</span>
          </div>
        </div>
        <div class="row t mr-t">
          <div class="col-md-3 col-sm-6 col-xs-12">
            <Link to={"#!"}>
              <div class="info-box inr-card">
                <div class="icon-dv">
                  <span class="info-box-number">18</span>
                </div>
                <div class="info-box-content">
                  <span class="as-role">Total University</span>
                  <div class="inr-data role-box">
                    <div class="col-md-6 border-right">
                      <span class="">Partner</span>
                      <span class="info-box-number lead-label">12</span>
                    </div>
                    <div class="col-md-6 inactive">
                      <span class="">Non Partner</span>
                      <span class="info-box-number lead-label">6</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <Link to={"#!"}>
              <div class="info-box inr-card">
                <div class="icon-dv">
                  <span class="info-box-number">50</span>
                </div>
                <div class="info-box-content">
                  <span class="as-role">Total Leads</span>
                  <div class="inr-data role-box">
                    <div class="col-md-4 border-right" style={{ padding: "0" }}>
                      <span class="">New</span>
                      <span class="info-box-number lead-label">30</span>
                    </div>
                    <div
                      class="col-md-4 border-right"
                      style={{ padding: "0px 5px 0px" }}
                    >
                      <span class="">Follow</span>
                      <span class="info-box-number lead-label">5</span>
                    </div>
                    <div class="col-md-4 inactive" style={{ padding: "0" }}>
                      <span class="">Completed</span>
                      <span class="info-box-number lead-label">15</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <Link to={"#!"}>
              <div class="info-box inr-card">
                <div class="icon-dv">
                  <span class="info-box-number">14</span>
                </div>
                <div class="info-box-content">
                  <span class="as-role">Total Applicants</span>
                  <div class="inr-data role-box">
                    <div class="col-md-6 border-right">
                      <span class="">UG</span>
                      <span class="info-box-number lead-label">12</span>
                    </div>
                    <div class="col-md-6 inactive">
                      <span class="">PG</span>
                      <span class="info-box-number lead-label">6</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <Link to={"#!"}>
              <div class="info-box inr-card">
                <div class="icon-dv">
                  <span class="info-box-number">9</span>
                </div>
                <div class="info-box-content">
                  <span class="as-role">Total Counsellings</span>
                  <div class="inr-data role-box">
                    <div class="col-md-6 border-right">
                      <span class="">Assigned</span>
                      <span class="info-box-number lead-label">4</span>
                    </div>
                    <div class="col-md-6 inactive">
                      <span class="">Completed</span>
                      <span class="info-box-number lead-label">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <Link to={"#!"}>
              <div class="info-box inr-card">
                <div class="icon-dv">
                  <span class="info-box-number">9</span>
                </div>
                <div class="info-box-content">
                  <span class="as-role">Total Appointment</span>
                  <div class="inr-data role-box">
                    <div class="col-md-6 border-right">
                      <span class="">Pending</span>
                      <span class="info-box-number lead-label">4</span>
                    </div>
                    <div class="col-md-6 inactive">
                      <span class="">Complete</span>
                      <span class="info-box-number lead-label">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <Link to={"#!"}>
              <div class="info-box inr-card">
                <div class="icon-dv">
                  <span class="info-box-number">20</span>
                </div>
                <div class="info-box-content">
                  <span class="as-role">Total Demo</span>
                  <div class="inr-data role-box">
                    <div class="col-md-6 border-right">
                      <span class="">Booked</span>
                      <span class="info-box-number lead-label">15</span>
                    </div>
                    <div class="col-md-6 inactive">
                      <span class="">Completed</span>
                      <span class="info-box-number lead-label">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <Link to={"#!"}>
              <div class="info-box inr-card">
                <div class="icon-dv">
                  <span class="info-box-number">29</span>
                </div>
                <div class="info-box-content">
                  <span class="as-role">Application Success</span>
                  <div class="inr-data role-box">
                    <div class="col-md-6 border-right">
                      <span class="">Applied</span>
                      <span class="info-box-number lead-label">24</span>
                    </div>
                    <div class="col-md-6 inactive">
                      <span class="">Converted</span>
                      <span class="info-box-number lead-label">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <Link to={"#!"}>
              <div class="info-box inr-card">
                <div class="icon-dv">
                  <span class="info-box-number">4</span>
                </div>
                <div class="info-box-content">
                  <span class="as-role">Total Issues</span>
                  <div class="inr-data role-box">
                    <div class="col-md-6 border-right">
                      <span class="">Assigned</span>
                      <span class="info-box-number lead-label">5</span>
                    </div>
                    <div class="col-md-6 inactive">
                      <span class="">Resolved</span>
                      <span class="info-box-number lead-label">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <Link to={"#!"}>
              <div class="info-box inr-card">
                <div class="icon-dv">
                  <span class="info-box-number">4</span>
                </div>
                <div class="info-box-content">
                  <span class="as-role">Total Visa Applied</span>
                  <div class="inr-data role-box">
                    <div class="col-md-6 border-right">
                      <span class="">Assigned</span>
                      <span class="info-box-number lead-label">5</span>
                    </div>
                    <div class="col-md-6 inactive">
                      <span class="">Completed</span>
                      <span class="info-box-number lead-label">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <Link to={"#!"}>
              <div class="info-box inr-card">
                <div class="icon-dv">
                  <span class="info-box-number">15</span>
                </div>
                <div class="info-box-content">
                  <span class="as-role">Total Coaches</span>
                  <div class="inr-data role-box">
                    <div class="col-md-6 border-right">
                      <span class="">Active</span>
                      <span class="info-box-number label-success">10</span>
                    </div>
                    <div class="col-md-6 inactive">
                      <span class="">Inactive</span>
                      <span class="info-box-number label-danger">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <Link to={"/universities"}>
              <div class="info-box inr-card">
                <div class="icon-dv">
                  <span class="info-box-number">14</span>
                </div>
                <div class="info-box-content">
                  <span class="as-role">Total Counsellor</span>
                  <div class="inr-data role-box">
                    <div class="col-md-6 border-right">
                      <span class="">Active</span>
                      <span class="info-box-number label-success">10</span>
                    </div>
                    <div class="col-md-6 inactive">
                      <span class="">Inactive</span>
                      <span class="info-box-number label-danger">4</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <Link to={"/course-level"}>
              <div class="info-box inr-card">
                <div class="icon-dv">
                  <span class="info-box-number">4</span>
                </div>
                <div class="info-box-content">
                  <span class="as-role">Total No. of Courses</span>
                  <div class="inr-data role-box">
                    <div class="col-md-6 border-right">
                      <span class="">Active</span>
                      <span class="info-box-number label-success">3</span>
                    </div>
                    <div class="col-md-6 inactive">
                      <span class="">Inactive</span>
                      <span class="info-box-number label-danger">1</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <Link to={"/course-level"}>
              <div class="info-box inr-card">
                <div class="icon-dv">
                  <span class="info-box-number">4</span>
                </div>
                <div class="info-box-content">
                  <span class="as-role">No of Discussions</span>
                  <div class="inr-data role-box">
                    <div class="col-md-6 border-right">
                      <span class="">Active</span>
                      <span class="info-box-number label-success">3</span>
                    </div>
                    <div class="col-md-6 inactive">
                      <span class="">Inactive</span>
                      <span class="info-box-number label-danger">1</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section class="content mr-t">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="info-box inr-card">
              <div class="info-box-content table-responsive">
                <table class="table table-bordered counter" id="example">
                  <tbody>
                    <tr class="f-13">
                      <td>&nbsp;</td>
                      <td>
                        <span class="">AUS</span>
                        {/* <span>
                          {" "}
                          <img
                            class="country-flag"
                            src={"/admin/build/avatars/Flag-Australia.jpg"}
                          />
                        </span> */}
                      </td>
                      <td>
                        <span class="">CAN</span>
                      </td>
                      <td>
                        <span class="">USA</span>
                      </td>
                      <td>
                        <span class="">DEU</span>
                      </td>
                      <td>
                        <span class="">IRL</span>
                      </td>
                      <td>
                        <span class="">SGP</span>
                      </td>
                      <td>
                        <span class="">UK</span>
                      </td>
                      <td>
                        <span class="">NZL</span>
                      </td>
                      <td>
                        <span class="">DUBAI</span>
                      </td>
                      <td>
                        <span class="">CHE</span>
                      </td>
                      <td>
                        <span class="">FRA</span>
                      </td>
                      <td>
                        <span class="">EUR</span>
                      </td>
                      <td>
                        <span class="">CHN</span>
                      </td>
                      <td>
                        <span class="">DNK</span>
                      </td>
                      <td>
                        <span class="">FIN</span>
                      </td>
                      <td>
                        <span class="">HKG</span>
                      </td>
                      <td>
                        <span class="">ZAF</span>
                      </td>
                      <td>
                        <span class="">SWE</span>
                      </td>
                      <td>
                        <span class="">HUN</span>
                      </td>
                      <td>
                        <span class="">ITA</span>
                      </td>
                      <td>
                        <span class="">POL</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="f-13">UG</td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">38</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">30</span>
                      </td>
                      <td>
                        <span class="info-box-number">44</span>
                      </td>
                      <td>
                        <span class="info-box-number">20</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">38</span>
                      </td>
                      <td>
                        <span class="info-box-number ">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">30</span>
                      </td>
                      <td>
                        <span class="info-box-number">44</span>
                      </td>
                      <td>
                        <span class="info-box-number">20</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">38</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">30</span>
                      </td>
                      <td>
                        <span class="info-box-number">44</span>
                      </td>
                      <td>
                        <span class="info-box-number">20</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">38</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="f-13">PG</td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                      <td>
                        <span class="info-box-number">0</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content">
        <MainChartExample style={{ height: "300px", marginTop: "40px" }} />
      </section>
    </>
  );
};

export default Dashboard;
