import React from "react";
import "./Style.css";
import { Multiselect } from "multiselect-react-dropdown";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
import { Modal } from "react-bootstrap";
import {
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
} from "@coreui/react";
class ViewApplied extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <section className="content">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-body">
              <CCard>
                <CCardBody>
                  <CTabs>
                    <CNav variant="tabs">
                      <CNavItem>
                        <CNavLink>Overview</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Profile</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Documents</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Services</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Activity Log</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Payment</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Appointment</CNavLink>
                      </CNavItem>
                    </CNav>
                    <CTabContent>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-body row">
                                <div class="col-lg-4 col-sm-4 col-xs-12">
                                  <div class="form-group">
                                    <label>Name</label>
                                    <p>Harsukhpal Kaur</p>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-sm-4 col-xs-12">
                                  <div class="form-group">
                                    <label>Mobile</label>
                                    <p>9638527414</p>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-sm-4 col-xs-12">
                                  <div class="form-group">
                                    <label>Date of Birth</label>
                                    <p>29/08/1994</p>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-sm-4 col-xs-12">
                                  <div class="form-group">
                                    <label>Age</label>
                                    <p>27</p>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-sm-4 col-xs-12">
                                  <div class="form-group">
                                    <label>Current Qualification</label>
                                    <p>UG</p>
                                  </div>
                                </div>
                                <div class="col-lg-4 col-sm-4 col-xs-12">
                                  <div class="form-group">
                                    <label>Interested Countries</label>
                                    <div>
                                      <span class="country-interest">
                                        AUSTRALIA
                                      </span>
                                      <span class="country-interest">USA</span>
                                      <span class="country-interest">
                                        Europe
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-12 col-sm-12 col-xs-12">
                                  <div class="form-group">
                                    <label>Test</label>
                                    <div>
                                      <span class="country-interest">
                                        English Proficiency
                                      </span>
                                      <span class="country-interest">
                                        Score - 70%
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-12 col-sm-12 col-xs-12">
                                  <div class="form-group">
                                    <label>Interest of University</label>
                                    <div>
                                      <span class="course-interest">
                                        Loughborough University
                                      </span>
                                      <span class="course-interest">
                                        Art Institute of Tampa
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-12 col-sm-12 col-xs-12">
                                  <div class="form-group">
                                    <label>Service</label>
                                    <div>
                                      <span class="course-interest">
                                        Online Coaching
                                      </span>
                                      <span class="course-interest">
                                        Accommodation
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-12 col-sm-12 col-xs-12">
                                  <div class="form-group">
                                    <label>Interested Courses</label>
                                    <div>
                                      <span class="course-interest">
                                        HD in Digital Music and Media
                                      </span>
                                      <span class="course-interest">
                                        HD in Architectural Design
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </CTabPane>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-body row">
                                <div class="col-lg-6 col-sm-6 col-xs-12 custom-card">
                                  <div class="box-body row">
                                    <div
                                      class="col-lg-11"
                                      style={{
                                        "background-color":
                                          "rgb(235, 237, 239)",
                                        "margin-bottom": "10px",
                                        "margin-left": "15px",
                                        "margin-top": "15px",
                                      }}
                                    >
                                      <strong>Personal Info</strong>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label> Full Name</label>
                                        <input
                                          type="text"
                                          name="name"
                                          class="form-control"
                                          defaultValue="Amit Chaudhary"
                                          placeholder="Enter your full name"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Email</label>
                                        <input
                                          type="email"
                                          name="email"
                                          class="form-control"
                                          placeholder="Enter email"
                                          defaultValue="amit@gmail.com"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Mobile</label>
                                        <input
                                          type="text"
                                          name="mobile"
                                          class="form-control number"
                                          placeholder="Enter mobile number"
                                          defaultValue="8979249966"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>DOB </label>
                                        <input
                                          type="date"
                                          name="dob"
                                          class="form-control"
                                          placeholder="Enter dob"
                                          defaultValue="29/08/1994"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Age</label>
                                        <input
                                          type="text"
                                          name="age"
                                          class="form-control number"
                                          placeholder="Enter your age"
                                          defaultValue="27"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>City </label>
                                        <select
                                          class="form-control select-option"
                                          name="city"
                                          disabled
                                        >
                                          <option value="">Select City</option>
                                          <option value="Noida" selected>
                                            Noida
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Country Code </label>
                                        <input
                                          type="text"
                                          name="country_code"
                                          class="form-control"
                                          placeholder="Enter country code"
                                          defaultValue="+91"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Country Name </label>
                                        <select
                                          class="form-control select-option"
                                          name="country"
                                          disabled
                                        >
                                          <option value="">
                                            Select Country
                                          </option>
                                          <option value="India" selected>
                                            India
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Gender </label>
                                        <select
                                          class="form-control select-option"
                                          name="gender"
                                          disabled
                                        >
                                          <option value="">
                                            Select Gender
                                          </option>
                                          <option value="Male" selected>
                                            Male
                                          </option>
                                          <option value="Female">Female</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Address</label>
                                        <input
                                          type="text"
                                          name="address"
                                          class="form-control"
                                          placeholder="Enter address"
                                          defaultValue="Sector 62, Noida"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div
                                      class="col-lg-11"
                                      style={{
                                        "background-color":
                                          "rgb(235, 237, 239)",
                                        "margin-bottom": "10px",
                                        "margin-left": "15px",
                                      }}
                                    >
                                      <strong>Current Qualification</strong>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Study Level</label>
                                        <input
                                          type="text"
                                          name="study_level"
                                          class="form-control"
                                          placeholder="Enter study level"
                                          defaultValue="Intermediate"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Year of Passing</label>
                                        <input
                                          type="text"
                                          name="passing_year"
                                          class="form-control number"
                                          placeholder="Enter year of passing"
                                          defaultValue="2020"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Course Name</label>
                                        <input
                                          type="text"
                                          name="course_name"
                                          class="form-control"
                                          placeholder="Enter course name"
                                          defaultValue="12th"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Institution Name</label>
                                        <input
                                          type="text"
                                          name="institute"
                                          class="form-control"
                                          placeholder="Enter institution name"
                                          defaultValue="Delhi Public School"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Board </label>
                                        <input
                                          type="text"
                                          name="board"
                                          class="form-control"
                                          placeholder="Enter board name"
                                          defaultValue="CBSE"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Percentile % </label>
                                        <input
                                          type="text"
                                          name="percentage"
                                          class="form-control"
                                          placeholder="Enter percentile"
                                          defaultValue="90"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-6 col-sm-6 col-xs-12 custom-card2">
                                  <div class="box-body row">
                                    <div
                                      class="col-lg-11"
                                      style={{
                                        "background-color":
                                          "rgb(235, 237, 239)",
                                        "margin-bottom": "10px",
                                        "margin-left": "15px",
                                        "margin-top": "15px",
                                      }}
                                    >
                                      <strong>Lead Info</strong>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Lead Status</label>
                                        <select
                                          class="form-control select-option"
                                          disabled
                                        >
                                          <option value="">
                                            Select Status
                                          </option>
                                          <option value="">New</option>
                                          <option value="" selected>
                                            Pending
                                          </option>
                                          <option value="">Followup</option>
                                          <option value="">Completed</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Lead Type</label>
                                        <select
                                          class="form-control select-option"
                                          disabled
                                        >
                                          <option value="">Select Type</option>
                                          <option value="">Hot</option>
                                          <option value="">Warm</option>
                                          <option value="" selected>
                                            Cold
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Lead Source</label>
                                        <input
                                          type="text"
                                          name="lead_source"
                                          class="form-control"
                                          placeholder="Enter lead source name"
                                          defaultValue="Devesh Upadhyay"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Lead Created </label>
                                        <input
                                          type="date"
                                          name="created"
                                          class="form-control"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Counsellor</label>
                                        <select
                                          class="form-control  select-option"
                                          disabled
                                        >
                                          <option value="">Select</option>
                                          <option value="">Neeraj</option>
                                          <option value="">Devesh</option>
                                          <option value="" selected>
                                            Raj Kumar
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Last Contacted</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          defaultValue="Harjas"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Lead Source</label>
                                        <select
                                          class="form-control  select-option"
                                          disabled
                                        >
                                          <option value="">Select</option>
                                          <option value="">App</option>
                                          <option value="" selected>
                                            Web
                                          </option>
                                          <option value="">Other</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div
                                      class="col-lg-11"
                                      style={{
                                        "background-color":
                                          "rgb(235, 237, 239)",
                                        "margin-bottom": "10px",
                                        "margin-left": "15px",
                                      }}
                                    >
                                      <strong>Study Plans</strong>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Intake Opting For</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Enter intake opting for"
                                          defaultValue="2Jan - April"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Year</label>
                                        <input
                                          type="text"
                                          class="form-control number"
                                          placeholder="Enter year"
                                          maxLength="4"
                                          defaultValue="2022"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Level</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Enter level"
                                          defaultValue="UG"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Dream Country</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Enter dream country"
                                          defaultValue="Canada"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Docs Status</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Enter docs status"
                                          defaultValue="Complete"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Dream Course</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Enter dream course"
                                          defaultValue="B.Tech"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Financial Status</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Enter financial status"
                                          defaultValue=""
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Budget</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Enter budget"
                                          defaultValue="20 Lac"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>English Proficiency</label>
                                        <select
                                          class="form-control  select-option"
                                          disabled
                                        >
                                          <option value="">Select</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Standardized Test</label>
                                        <select
                                          class="form-control  select-option"
                                          disabled
                                        >
                                          <option value="">Select</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </CTabPane>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-body row">
                                <div class="col-lg-12 col-sm-12 col-xs-12">
                                  <div class="form-group">
                                    <table
                                      id="example"
                                      class="table table-hover "
                                    >
                                      <thead>
                                        <tr>
                                          <th>Uploaded Document</th>
                                          <th>Documents Type</th>
                                          <th></th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <input
                                              type="file"
                                              name="file"
                                              id="file"
                                              class="inputfile"
                                            />
                                            <label for="file">
                                              <span
                                                class="fa fa-file-image-o f-23"
                                                for="file"
                                              ></span>{" "}
                                              <span
                                                class="fa fa-file-image-o f-23"
                                                for="file"
                                              ></span>{" "}
                                              <span class="fa fa-file-pdf-o doc-icon f-23"></span>
                                            </label>
                                          </td>
                                          <td>10th Standard</td>
                                          <td>Verified</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="file"
                                              name="file"
                                              id="file"
                                              class="inputfile"
                                            />
                                            <label for="file">
                                              <span
                                                class="fa fa-file-image-o f-23"
                                                for="file"
                                              ></span>
                                            </label>
                                          </td>
                                          <td>12th Standard</td>
                                          <td>Verified</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="file"
                                              name="file"
                                              id="file"
                                              class="inputfile"
                                            />
                                            <label for="file">
                                              <span
                                                class="fa fa-file-image-o f-23"
                                                for="file"
                                              ></span>{" "}
                                              <span
                                                class="fa fa-file-image-o f-23"
                                                for="file"
                                              ></span>{" "}
                                              <span class="fa fa-file-pdf-o doc-icon f-23"></span>
                                            </label>
                                          </td>
                                          <td>Passport</td>
                                          <td></td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="file"
                                              name="file"
                                              id="file"
                                              class="inputfile"
                                            />
                                            <label for="file">
                                              <span
                                                class="fa fa-file-image-o f-23"
                                                for="file"
                                              ></span>{" "}
                                              <span
                                                class="fa fa-file-image-o f-23"
                                                for="file"
                                              ></span>{" "}
                                              <span class="fa fa-file-pdf-o doc-icon f-23"></span>
                                            </label>
                                          </td>
                                          <td>Bachelors/Diploma</td>
                                          <td>Verified</td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="file"
                                              name="file"
                                              id="file"
                                              class="inputfile"
                                            />
                                            <label for="file">
                                              <span
                                                class="fa fa-file-image-o f-23"
                                                for="file"
                                              ></span>{" "}
                                              <span
                                                class="fa fa-file-image-o f-23"
                                                for="file"
                                              ></span>{" "}
                                              <span class="fa fa-file-pdf-o doc-icon f-23"></span>
                                            </label>
                                          </td>
                                          <td>Masters/Phd</td>
                                          <td></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </CTabPane>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-body row">
                                <div class="col-lg-12 col-sm-12 col-xs-12">
                                  <div class="tab-content table-responsive-lg">
                                    <table
                                      class="table table-bordered"
                                      id="example"
                                    >
                                      <thead>
                                        <tr>
                                          <th>Service Name</th>
                                          <th>Service Details</th>
                                        </tr>
                                      </thead>
                                      <tbody class="f-13">
                                        <tr>
                                          <td>Online Coaching</td>
                                          <td>
                                            Graduate Management Admission Test
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Accommodation</td>
                                          <td>USA</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </CTabPane>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-body row">
                                <div class="col-lg-12 col-sm-12 col-xs-12">
                                  <div class="tab-content table-responsive-lg">
                                    <table
                                      class="table table-bordered"
                                      id="example"
                                    >
                                      <thead>
                                        <tr>
                                          <th>Performed by</th>
                                          <th>Activity</th>
                                          <th>Date</th>
                                        </tr>
                                      </thead>
                                      <tbody class="f-13">
                                        <tr>
                                          <td>Harsukhpal Kaur</td>
                                          <td>Request for Accommodation</td>
                                          <td>12/08/2021</td>
                                        </tr>
                                        <tr>
                                          <td>Harsukhpal Kaur</td>
                                          <td>Request for Visa</td>
                                          <td>15/08/2021</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </CTabPane>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-body row">
                                <div class="col-lg-12 col-sm-12 col-xs-12">
                                  <div class="tab-content table-responsive-lg">
                                    <table
                                      class="table table-bordered"
                                      id="example"
                                    >
                                      <thead>
                                        <tr>
                                          <th>Service Name</th>
                                          <th>Payment Status</th>
                                          <th>Date</th>
                                        </tr>
                                      </thead>
                                      <tbody class="f-13">
                                        <tr>
                                          <td>Accommodation</td>
                                          <td>
                                            <span style={{ color: "green" }}>
                                              Success
                                            </span>
                                          </td>
                                          <td>12/08/2021 12:20PM</td>
                                        </tr>
                                        <tr>
                                          <td>Visa</td>
                                          <td>
                                            <span style={{ color: "red" }}>
                                              Failed
                                            </span>
                                          </td>
                                          <td>12/08/2021 01:20PM</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </CTabPane>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-body row">
                                <div class="col-lg-12 col-sm-12 col-xs-12">
                                  <div class="tab-content table-responsive-lg">
                                    <table
                                      class="table table-bordered"
                                      id="example"
                                    >
                                      <thead>
                                        <tr>
                                          <th>Appointment With</th>
                                          <th>Appointment Status</th>
                                          <th>Appointment Date / Time</th>
                                        </tr>
                                      </thead>
                                      <tbody class="f-13">
                                        <tr>
                                          <td>Shruti Counselor</td>
                                          <td>Complete</td>
                                          <td>12/08/2021, 12:00 PM</td>
                                        </tr>
                                        <tr>
                                          <td>Shruti</td>
                                          <td>Pending</td>
                                          <td>15/09/2021, 03:00 Pm</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </CTabPane>
                    </CTabContent>
                  </CTabs>
                </CCardBody>
              </CCard>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ViewApplied;
