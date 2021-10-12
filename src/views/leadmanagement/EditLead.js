import React from "react";
import "./Style.css";
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
class EditLead extends React.Component {
  componentDidMount() {
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });
    $(function () {
      $("#btnAddTR").bind("click", function () {
        var tr = $("<tr />");
        tr.html(GetDynamicTR(""));
        $("#add_more").after(tr);
      });
    });
    function GetDynamicTR(value) {
      return '<td> <input type="checkbox" value="on" checked /></td><td><input type="file" name="file" id="file" class="inputfile"  /> <label for="file"> <span class="fa fa-file-image-o f-23" for="file" ></span> </label></td><td><select><option value="">Select Document</option><option value="">GMAT/GRE/SAT</option></select></td><td>Verified <span class="fa fa-pencil-square-o mr-l"></span>  <span class="mr-l"> <button type="button" class="btn btn-default btn-xs"> Request <span class="fa fa-file-text doc-icon"></span></button> </span></td> <td><i class="fa fa-minus-square-o add_more_btn"></i></td></div>';
    }
    $("body").on("click", ".add_more_btn", function () {
      $(this).closest("tr").remove();
    });
    $("body").on("click", ".custom-row", function () {
      $(this).closest("div").remove();
    });
    //document.getElementById("buttonTab1").click();

    //For Add More Educational Fields
    $(function () {
      $("#btnAdd").bind("click", function () {
        var div = $("<div />");
        div.html(GetDynamicTextBox(""));
        $("#TextBoxContainer").append(div);
      });
      $("body").on("click", ".remove-row", function () {
        $(this).closest("div").remove();
      });
    });
    function GetDynamicTextBox(value) {
      return (
        '<div class="row" style="margin-top:25px"><div class="col-lg-6 col-sm-6 col-xs-12"><label>Study Level</label><input type="text" class="form-control" name="study_level" placeholder="Enter study level" /></div>' +
        '<div class="col-lg-6 col-sm-6 col-xs-12"><label>Year of Passing</label><input type="text" class="form-control" name="passing_year" placeholder="Enter year of passing" /></div>' +
        '<div class="col-lg-6 col-sm-6 col-xs-12"><label>Course Name</label><input type="text" class="form-control" name="course_name" placeholder="Enter course name" /></div>' +
        '<div class="col-lg-6 col-sm-6 col-xs-12"><label>Institution Name</label><input type="text" name="institute" class="form-control" placeholder="Enter institution name" /></div>' +
        '<div class="col-lg-6 col-sm-6 col-xs-12"><label>Board</label><input type="text" name="board" class="form-control" placeholder="Enter board name" /></div>' +
        '<div class="col-lg-6 col-sm-6 col-xs-12"><label>Percentile</label><input type="text" name="percentage" class="form-control" placeholder="Enter percentile" /></div>' +
        '<i class="fa fa-minus-square-o remove-row"></i></div>'
      );
    }
  }
  GetDynamicTextFiled() {
    var div = $("<div />");
    var x =
      '<div class="row" style="margin-top:25px"><div class="col-lg-5 col-sm-5 col-xs-12"><input name = "title[]" placeholder="Enter field title" type="text" value = "" class="form-control" /></div>' +
      '<div class="col-lg-5 col-sm-5 col-xs-12"><input name = "other_field[]" placeholder="Enter detail" type="text" value = "" class="form-control" /></div>' +
      '<i class="fa fa-minus-square-o custom-row"></i></div>';

    div.html(x);
    $("#CustomContainer").append(div);
  }
  constructor() {
    super();
    this.state = {
      show3: false,
      show4: false,
      show2: false,
    };
  }
  handleModel3() {
    this.setState({ show3: !this.state.show3 });
  }
  handleModel4() {
    this.setState({ show4: !this.state.show4 });
  }
  handleModel2() {
    this.setState({ show2: !this.state.show2 });
  }
  serviceHideShow() {
    var Type = $("#service").val();
    if (Type == "Online Coaching") {
      $("#coaching").show();
      $("#Country").hide();
      $("#loan").hide();
      $("#packages").hide();
    }
    if (Type == "Accommodation") {
      console.log(Type);
      $("#Country").show();
      $("#coaching").hide();
      $("#loan").hide();
      $("#packages").hide();
    }
    if (Type == "Packages") {
      console.log(Type);
      $("#packages").show();
      $("#Country").hide();
      $("#coaching").hide();
      $("#loan").hide();
    }
    if (Type == "Education Loan") {
      console.log(Type);
      $("#Country").hide();
      $("#coaching").hide();
      $("#loan").show();
      $("#packages").hide();
    }
  }
  render() {
    return (
      <section className="content">
        <Modal show={this.state.show2} onHide={() => this.handleModel2()}>
          <Modal.Header closeButton>
            <h4>Reminder</h4>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Reminder Date</label>
                  <input type="date" class="form-control" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Reminder Time</label>
                  <input
                    type="time"
                    class="form-control"
                    amPmAriaLabel="Select AM/PM"
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div class="col-lg-2 col-sm-2 col-xs-12">
              <button class="btn btn-warning" type="submit">
                Send
              </button>
            </div>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.show3} onHide={() => this.handleModel3()}>
          <Modal.Header closeButton>
            <h4>Document Request</h4>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-2 col-sm-2 col-xs-12">
                <div class="form-group">
                  <label></label>
                  <input type="checkbox" checked /> Email
                </div>
              </div>
              <div class="col-lg-2 col-sm-2 col-xs-12">
                <div class="form-group">
                  <input type="checkbox" /> Sms
                </div>
              </div>
              <div class="col-lg-2 col-sm-2 col-xs-12">
                <div class="form-group">
                  <input type="checkbox" /> WhatsApp
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label></label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter Subject"
                    value="Dummy Subject"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label for="Textarea"> Message</label>
                  <textarea
                    id="Textarea"
                    class="form-control"
                    rows="3"
                    name="sms"
                    placeholder="Message"
                    value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                  ></textarea>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div class="col-lg-2 col-sm-2 col-xs-12">
              <button class="btn btn-warning" type="submit">
                Send
              </button>
            </div>
            <div class="col-lg-2 col-sm-2 col-xs-12">
              <button
                class="btn btn-danger"
                type="submit"
                onClick={() => {
                  this.handleModel3();
                }}
                value="Close"
              >
                Close
              </button>
            </div>
          </Modal.Footer>
        </Modal>
        <Modal
          show={this.state.show4}
          onHide={() => this.handleModel4()}
          class="verification"
        >
          <Modal.Header closeButton>
            <h4>Verification Check</h4>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-2 col-sm-2 col-xs-12">
                <div class="form-group">
                  <label></label>
                  <input
                    type="radio"
                    placeholder="Enter Subject"
                    name="verification"
                  />{" "}
                  Verified
                </div>
              </div>
              <div class="col-lg-2 col-sm-2 col-xs-12">
                <div class="form-group">
                  <input
                    type="radio"
                    placeholder="Enter Subject"
                    name="verification"
                  />{" "}
                  Rejected
                </div>
              </div>
              <div class="col-lg-2 col-sm-2 col-xs-12">
                <div class="form-group">
                  <input
                    type="radio"
                    placeholder="Enter Subject"
                    name="verification"
                  />{" "}
                  None
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>Remark</label>
                  <textarea
                    id="notesTextarea"
                    class="form-control"
                    placeholder="Enter remark"
                    rows="3"
                    name="notes"
                  ></textarea>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div class="col-lg-2 col-sm-2 col-xs-12">
              <button class="btn btn-warning" type="submit">
                Update
              </button>
            </div>
            <div class="col-lg-2 col-sm-2 col-xs-12">
              <button
                class="btn btn-danger"
                type="submit"
                onClick={() => {
                  this.handleModel4();
                }}
                value="Close"
              >
                Close
              </button>
            </div>
          </Modal.Footer>
        </Modal>
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
                        <CNavLink>Notes</CNavLink>
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
                                <div class="col-lg-3 col-sm-3 col-xs-12">
                                  <div class="form-group">
                                    <label>Name</label>
                                    <p>Harsukhpal Kaur</p>
                                  </div>
                                </div>
                                <div class="col-lg-3 col-sm-3 col-xs-12">
                                  <div class="form-group">
                                    <label>Mobile</label>
                                    <p>9638527414</p>
                                  </div>
                                </div>
                                <div class="col-lg-3 col-sm-3 col-xs-12">
                                  <div class="form-group">
                                    <label>Date of Birth</label>
                                    <p>29/08/1994</p>
                                  </div>
                                </div>
                                <div class="col-lg-3 col-sm-3 col-xs-12">
                                  <div class="form-group">
                                    <button class="btn btn-outline-info">
                                      Reschedule
                                    </button>
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
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>City </label>
                                        <select
                                          class="form-control select-option"
                                          name="city"
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
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Country Name </label>
                                        <select
                                          class="form-control select-option"
                                          name="country"
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
                                        />
                                      </div>
                                    </div>
                                    <div
                                      id="TextBoxContainer"
                                      class="col-lg-12 col-sm-12 col-xs-12"
                                    ></div>
                                    <div class="col-lg-12 col-sm-12 col-xs-12 text-right">
                                      <span
                                        id="btnAdd"
                                        class="fa fa-plus-square-o  mr-10"
                                        value="Add"
                                        style={{
                                          "margin-bottom": "10px",
                                        }}
                                      ></span>
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
                                        <select class="form-control select-option">
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
                                        <select class="form-control select-option">
                                          <option value="">Select Type</option>
                                          <option value="">No Response</option>
                                          <option value="">Callback</option>
                                          <option value="" selected>
                                            Followup
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Lead Source</label>
                                        <select class="form-control select-option">
                                          <option value="">Select Type</option>
                                          <option value="">Facebook</option>
                                          <option value="">Google</option>
                                          <option value="" selected>
                                            Just Dial
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Lead Created </label>
                                        <input
                                          type="date"
                                          name="created"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Counsellor</label>
                                        <select class="form-control  select-option">
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
                                      <strong>Study Plans</strong>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Intake Opting For</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Enter intake opting for"
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
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>English Proficiency</label>
                                        <select class="form-control  select-option">
                                          <option value="">Select</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Standardized Test</label>
                                        <select class="form-control  select-option">
                                          <option value="">Select</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="col-lg-12"
                                  style={{ "margin-top": "20px" }}
                                >
                                  <label for="DescTextarea">
                                    <strong>Custom Fields</strong>
                                  </label>
                                  <div
                                    id="CustomContainer"
                                    class="col-lg-12 col-sm-12 col-xs-12"
                                  ></div>
                                  <div class="col-lg-12 col-sm-12 col-xs-12 text-right">
                                    <span
                                      id=""
                                      type="button"
                                      class="fa fa-plus-square-o mr-10 custom-btn"
                                      data-toggle="tooltip"
                                      data-original-title="Add more controls"
                                      onClick={() => this.GetDynamicTextFiled()}
                                    ></span>
                                  </div>
                                </div>
                                <div
                                  class="col-lg-12"
                                  style={{ "margin-top": "20px" }}
                                >
                                  <div class="form-group">
                                    <label for="DescTextarea">
                                      Description
                                    </label>
                                    <textarea
                                      id="DescTextarea"
                                      class="form-control"
                                      rows="3"
                                      name="about"
                                      placeholder="Enter description"
                                    ></textarea>
                                  </div>
                                </div>
                                <div class="col-lg-12">
                                  <div class="form-group">
                                    <label>Latest Activity</label>
                                    <div style={{ display: "flex" }}>
                                      <span class="activity">
                                        <i class="fa fa-user"></i>
                                      </span>
                                      <span>
                                        <strong>Neeraj:</strong> Lorem ipsum
                                        dolor sit amet, consectetur adipiscing
                                        elit
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-12 col-sm-12 col-xs-12">
                                  <div class="form-group">
                                    <center>
                                      <button
                                        type="button"
                                        class="btn btn-warning lead-btn"
                                        style={{ "margin-top": "20px" }}
                                      >
                                        Update
                                      </button>
                                    </center>
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
                                          <th>Required</th>
                                          <th>Uploaded Document</th>
                                          <th></th>
                                          <th>Status</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <input
                                              type="checkbox"
                                              value="on"
                                              checked
                                            />
                                          </td>
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
                                          <td>
                                            Verified
                                            <span
                                              class="fa fa-pencil-square-o mr-l"
                                              onClick={() => {
                                                this.handleModel4();
                                              }}
                                            ></span>
                                            <span class="mr-l">
                                              <button
                                                type="button"
                                                class="btn btn-default btn-xs"
                                                onClick={() => {
                                                  this.handleModel3();
                                                }}
                                              >
                                                Request{" "}
                                                <span class="fa fa-file-text doc-icon"></span>
                                              </button>
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="checkbox"
                                              value="on"
                                              checked
                                            />
                                          </td>
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
                                          <td>
                                            Verified
                                            <span
                                              class="fa fa-pencil-square-o mr-l"
                                              onClick={() => {
                                                this.handleModel4();
                                              }}
                                            ></span>
                                            <span class="mr-l">
                                              <button
                                                type="button"
                                                class="btn btn-default btn-xs"
                                                onClick={() => {
                                                  this.handleModel3();
                                                }}
                                              >
                                                Request{" "}
                                                <span class="fa fa-file-text doc-icon"></span>
                                              </button>
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="checkbox"
                                              value="on"
                                              checked
                                            />
                                          </td>
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
                                          <td>
                                            Verified
                                            <span
                                              class="fa fa-pencil-square-o mr-l"
                                              onClick={() => {
                                                this.handleModel4();
                                              }}
                                            ></span>
                                            <span class="mr-l">
                                              <button
                                                type="button"
                                                class="btn btn-default btn-xs"
                                                onClick={() => {
                                                  this.handleModel3();
                                                }}
                                              >
                                                Request{" "}
                                                <span class="fa fa-file-text doc-icon"></span>
                                              </button>
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="checkbox"
                                              value="on"
                                              checked
                                            />
                                          </td>
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
                                          <td>
                                            Verified
                                            <span
                                              class="fa fa-pencil-square-o mr-l"
                                              onClick={() => {
                                                this.handleModel4();
                                              }}
                                            ></span>
                                            <span class="mr-l">
                                              <button
                                                type="button"
                                                class="btn btn-default btn-xs"
                                                onClick={() => {
                                                  this.handleModel3();
                                                }}
                                              >
                                                Request{" "}
                                                <span class="fa fa-file-text doc-icon"></span>
                                              </button>
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="checkbox"
                                              value="on"
                                              checked
                                            />
                                          </td>
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
                                          <td>
                                            Verified
                                            <span
                                              class="fa fa-pencil-square-o mr-l"
                                              onClick={() => {
                                                this.handleModel4();
                                              }}
                                            ></span>
                                            <span class="mr-l">
                                              <button
                                                type="button"
                                                class="btn btn-default btn-xs"
                                                onClick={() => {
                                                  this.handleModel3();
                                                }}
                                              >
                                                Request{" "}
                                                <span class="fa fa-file-text doc-icon"></span>
                                              </button>
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="checkbox"
                                              value="on"
                                              checked
                                            />
                                          </td>
                                          <td></td>
                                          <td>IELTS/TOFEL/PTE</td>
                                          <td>
                                            Verified
                                            <span
                                              class="fa fa-pencil-square-o mr-l"
                                              onClick={() => {
                                                this.handleModel4();
                                              }}
                                            ></span>
                                            <span class="mr-l">
                                              <button
                                                type="button"
                                                class="btn btn-default btn-xs"
                                                onClick={() => {
                                                  this.handleModel3();
                                                }}
                                              >
                                                Request{" "}
                                                <span class="fa fa-file-text doc-icon"></span>
                                              </button>
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="checkbox"
                                              value="on"
                                              checked
                                            />
                                          </td>
                                          <td></td>
                                          <td>GMAT/GRE/SAT</td>
                                          <td>
                                            Verified
                                            <span
                                              class="fa fa-pencil-square-o mr-l"
                                              onClick={() => {
                                                this.handleModel4();
                                              }}
                                            ></span>
                                            <span class="mr-l">
                                              <button
                                                type="button"
                                                class="btn btn-default btn-xs"
                                                onClick={() => {
                                                  this.handleModel3();
                                                }}
                                              >
                                                Request{" "}
                                                <span class="fa fa-file-text doc-icon"></span>
                                              </button>
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="checkbox"
                                              value="on"
                                              checked
                                            />
                                          </td>
                                          <td></td>
                                          <td>SOP (Statement of purpose)</td>
                                          <td>
                                            Verified
                                            <span
                                              class="fa fa-pencil-square-o mr-l"
                                              onClick={() => {
                                                this.handleModel4();
                                              }}
                                            ></span>
                                            <span class="mr-l">
                                              <button
                                                type="button"
                                                class="btn btn-default btn-xs"
                                                onClick={() => {
                                                  this.handleModel3();
                                                }}
                                              >
                                                Request{" "}
                                                <span class="fa fa-file-text doc-icon"></span>
                                              </button>
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="checkbox"
                                              value="on"
                                              checked
                                            />
                                          </td>
                                          <td></td>
                                          <td>
                                            LOR (Letter of recommendation)
                                          </td>
                                          <td>
                                            Verified
                                            <span
                                              class="fa fa-pencil-square-o mr-l"
                                              onClick={() => {
                                                this.handleModel4();
                                              }}
                                            ></span>
                                            <span class="mr-l">
                                              <button
                                                type="button"
                                                class="btn btn-default btn-xs"
                                                onClick={() => {
                                                  this.handleModel3();
                                                }}
                                              >
                                                Request{" "}
                                                <span class="fa fa-file-text doc-icon"></span>
                                              </button>
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              type="checkbox"
                                              value="on"
                                              checked
                                            />
                                          </td>
                                          <td></td>
                                          <td>CV (Curriculum vitae)</td>
                                          <td>
                                            Verified
                                            <span
                                              class="fa fa-pencil-square-o mr-l"
                                              onClick={() => {
                                                this.handleModel4();
                                              }}
                                            ></span>
                                            <span class="mr-l">
                                              <button
                                                type="button"
                                                class="btn btn-default btn-xs"
                                                onClick={() => {
                                                  this.handleModel3();
                                                }}
                                              >
                                                Request{" "}
                                                <span class="fa fa-file-text doc-icon"></span>
                                              </button>
                                            </span>
                                          </td>
                                        </tr>
                                        <tr id="add_more"></tr>
                                      </tbody>
                                    </table>
                                    <div class="col-lg-12 col-sm-12 col-xs-12 text-right">
                                      <input
                                        id="btnAddTR"
                                        type="button"
                                        class="btn btn-primary lead-btn-color"
                                        value="Add"
                                      />
                                    </div>
                                    <div class="col-lg-12 col-sm-12 col-xs-12">
                                      <div class="form-group">
                                        <center>
                                          <button
                                            type="button"
                                            class="btn btn-warning lead-btn"
                                            style={{ "margin-top": "20px" }}
                                          >
                                            Update
                                          </button>
                                        </center>
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
                                <div class="col-lg-6 col-sm-6 col-xs-12">
                                  <div class="form-group">
                                    <label>Service Name</label>
                                    <select
                                      class="form-control"
                                      id="service"
                                      onChange={() => this.serviceHideShow()}
                                    >
                                      <option value="">Select</option>
                                      <option value="Online Coaching">
                                        Online Coaching
                                      </option>
                                      <option value="Education Loan">
                                        Education Loan
                                      </option>
                                      <option value="Accommodation">
                                        Accommodation
                                      </option>
                                      <option value="Packages">Packages</option>
                                    </select>
                                  </div>
                                </div>
                                <div
                                  class="col-lg-6 col-sm-6 col-xs-12 hidden"
                                  id="packages"
                                  style={{ display: "none" }}
                                >
                                  <div class="form-group">
                                    <label>&#160;</label>
                                    <select class="form-control">
                                      <option value="">Select Packages</option>
                                      <option value="">
                                        Scholarship (SAS1)
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div
                                  class="col-lg-6 col-sm-6 col-xs-12 hidden"
                                  id="loan"
                                  style={{ display: "none" }}
                                >
                                  <div class="form-group">
                                    <label>&#160;</label>
                                    <p>Student Loan</p>
                                  </div>
                                </div>
                                <div
                                  class="col-lg-6 col-sm-6 col-xs-12 hidden"
                                  id="coaching"
                                  style={{ display: "none" }}
                                >
                                  <div class="form-group">
                                    <label>&#160;</label>
                                    <select class="form-control">
                                      <option value="">Select</option>
                                      <option value="">
                                        Graduate Management Admission Test
                                      </option>
                                      <option value="">
                                        Graduate Record Exam
                                      </option>
                                      <option value="">
                                        Test of English as Foreign Language
                                      </option>
                                      <option value="">
                                        Person Test of English
                                      </option>
                                      <option value="">
                                        International English Language Testing
                                        System{" "}
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div
                                  class="col-lg-6 col-sm-6 col-xs-12 hidden"
                                  id="Country"
                                  style={{ display: "none" }}
                                >
                                  <div class="form-group">
                                    <label>&#160;</label>
                                    <select class="form-control">
                                      <option value="">Select Country</option>
                                      <option value="">Australia</option>
                                      <option value="">USA</option>
                                      <option value="">Europe</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="col-lg-12 col-sm-12 col-xs-12">
                                  <div class="form-group">
                                    <center>
                                      <button
                                        type="button"
                                        class="btn btn-warning lead-btn"
                                        style={{ width: "12%" }}
                                      >
                                        Send Request
                                      </button>
                                    </center>
                                  </div>
                                </div>
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
                                          <th>Action</th>
                                        </tr>
                                      </thead>
                                      <tbody class="f-13">
                                        <tr>
                                          <td>Online Coaching</td>
                                          <td>
                                            Graduate Management Admission Test
                                          </td>
                                          <td>
                                            <select class="form-control">
                                              <option value="">Select</option>
                                              <option value="">Eligible</option>
                                              <option value="">
                                                Not Eligible
                                              </option>
                                              <option value="">Accepted</option>
                                              <option value="" selected>
                                                Requested
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Accommodation</td>
                                          <td>USA</td>
                                          <td>
                                            <select class="form-control">
                                              <option value="">Select</option>
                                              <option value="">Eligible</option>
                                              <option value="">
                                                Not Eligible
                                              </option>
                                              <option value="" selected>
                                                Accepted
                                              </option>
                                              <option value="">
                                                Requested
                                              </option>
                                            </select>
                                          </td>
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
                                  <div class="form-group">
                                    <label for="courseTextarea"></label>
                                    <textarea
                                      id="courseTextarea"
                                      class="form-control"
                                      rows="3"
                                      name="about"
                                      placeholder="Enter notes..."
                                    ></textarea>
                                  </div>
                                </div>
                                <div class="col-lg-12 col-sm-12 col-xs-12">
                                  <div class="form-group text-right">
                                    <span class="notes-box mr-r">
                                      <input
                                        type="checkbox"
                                        class="mr-r notes-checkbox"
                                        onClick={() => {
                                          this.handleModel2();
                                        }}
                                      />
                                      <span class="fa fa-bell popup-icon"></span>
                                    </span>
                                    <button
                                      type="button"
                                      class="btn btn-warning lead-btn"
                                    >
                                      Update
                                    </button>
                                  </div>
                                </div>
                                <div class="col-lg-12 col-sm-12 col-xs-12">
                                  <div class="form-group">
                                    <label>Notes Log</label>
                                    <p>Not Picking Up</p>
                                  </div>
                                </div>
                                <div class="col-lg-12 col-sm-12 col-xs-12">
                                  <div class="form-group">
                                    <label>Reminder Log</label>
                                    <p>18/08/2021 01:30 PM</p>
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
                                          <th>Amount</th>
                                          <th>Payment Mode</th>
                                          <th>Payment Status</th>
                                          <th>Date</th>
                                        </tr>
                                      </thead>
                                      <tbody class="f-13">
                                        <tr>
                                          <td>Accommodation</td>
                                          <td>20000</td>
                                          <td>Net Banking</td>
                                          <td>
                                            <span style={{ color: "green" }}>
                                              Success
                                            </span>
                                          </td>
                                          <td>12/08/2021 12:20PM</td>
                                        </tr>
                                        <tr>
                                          <td>Visa</td>
                                          <td>25000</td>
                                          <td>UPI</td>
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
                                          <th>Appointment Type</th>
                                          <th>Payment Type</th>
                                          <th>Appointment Date / Time</th>
                                        </tr>
                                      </thead>
                                      <tbody class="f-13">
                                        <tr>
                                          <td>Harshit Tomer (Coach)</td>
                                          <td>Complete</td>
                                          <td>Demo</td>
                                          <td>Free</td>
                                          <td>12/08/2021, 12:00 PM</td>
                                        </tr>
                                        <tr>
                                          <td>Shruti (Counsellor)</td>
                                          <td>Pending</td>
                                          <td>Counselling</td>
                                          <td>Paid</td>
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
export default EditLead;
