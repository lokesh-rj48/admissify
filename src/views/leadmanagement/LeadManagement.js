import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import { Modal } from "react-bootstrap";
import "./Style.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "font-awesome/css/font-awesome.min.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import $ from "jquery";
import { flagSet } from "@coreui/icons";
class LeadManagement extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      $("#example").DataTable();
    });
    $(document).ready(function () {
      $("#ckbCheckAll").click(function () {
        $(".checkBoxClass").attr("checked", this.checked);
      });
    });
    $(document).ready(function () {
      $("#show-hidden-menu").click(function () {
        $(".hidden-menu").slideToggle("slow");
      });
    });
  }
  constructor() {
    super();
    this.state = {
      show: false,
      show2: false,
    };
  }
  handleModel() {
    this.setState({ show: !this.state.show });
  }
  handleModel2() {
    this.setState({ show2: !this.state.show2 });
  }
  render() {
    return (
      <section className="content">
        <Modal show={this.state.show} onHide={() => this.handleModel()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Lead</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    padding: "8px 12px 0 5px",
                    "background-color": "#ebedef",
                  }}
                >
                  <div class="form-group">
                    <label for="courseTextarea">
                      <strong>Personal Details</strong>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label> First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    class="form-control"
                    placeholder="Enter first name"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    class="form-control"
                    placeholder="Enter last name"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Gender </label>
                  <select class="form-control" name="gender">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
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
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    class="form-control"
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Alternate Mobile</label>
                  <input
                    type="text"
                    name="alternate_mobile"
                    class="form-control"
                    placeholder="Enter alternate mobile number"
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
                  />
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
                  />
                </div>
              </div>

              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    padding: "8px 12px 0 5px",
                    "background-color": "#ebedef",
                  }}
                >
                  <div class="form-group">
                    <label for="courseTextarea">
                      <strong>Educational Details</strong>
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Course Level</label>
                  <select class="form-control" name="course_level">
                    <option value="">Select Course Level</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Stream</label>
                  <select class="form-control" name="stream">
                    <option value="">Select Stream</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Course</label>
                  <select class="form-control" name="course">
                    <option value="">Select Course</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Assign Student to Counsellor </label>
                  <input
                    type="text"
                    name="assign_counsellor"
                    class="form-control"
                    placeholder="Enter assign student to counsellor"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>City </label>
                  <input
                    type="text"
                    name="city"
                    class="form-control"
                    placeholder="Enter city"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Country Name </label>
                  <input
                    type="text"
                    name="country"
                    class="form-control"
                    placeholder="Enter Country Name"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Lead Type </label>
                  <input
                    type="text"
                    name="lead_type"
                    class="form-control"
                    placeholder="Enter lead type"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Lead Created By </label>
                  <input
                    type="text"
                    name="lead_created_by"
                    class="form-control"
                    placeholder="Enter lead created by"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Intake </label>
                  <input
                    type="text"
                    name="intake"
                    class="form-control"
                    placeholder="Enter intake"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Balance Status </label>
                  <input
                    type="text"
                    name="balance_status"
                    class="form-control"
                    placeholder="Enter"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Flagged </label>
                  <input
                    type="text"
                    name="flagged"
                    class="form-control"
                    placeholder="Enter flagged"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <b for="addressTextarea">Additional Field</b>
                  <textarea
                    id="addressTextarea"
                    class="form-control"
                    rows="3"
                    name="additional_field"
                    placeholder="Enter text"
                  ></textarea>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button class="btn btn-warning" type="submit">
              Submit
            </button>
            <button
              class="btn btn-danger"
              type="submit"
              onClick={() => {
                this.handleModel();
              }}
              value="Close"
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.show2} onHide={() => this.handleModel2()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Assigned To</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>Assignee Type</label>
                  <select class="form-control">
                    <option value="">Select</option>
                    <option value="" selected>
                      Counsellor
                    </option>
                    <option value="">Telecaller</option>
                    <option value="">Application Executive</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>Assign To</label>
                  <select class="form-control">
                    <option value="">Select</option>
                    <option value="" selected>
                      Neeraj
                    </option>
                    <option value="">Devesh</option>
                    <option value="">Rajkumar</option>
                  </select>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button class="btn btn-warning" type="submit">
              Submit
            </button>
            <button
              class="btn btn-danger"
              type="submit"
              onClick={() => {
                this.handleModel2();
              }}
              value="Close"
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header d-flexi">
              <div class="row">
                <div class="col-md-1">
                  <h3 class="box-title">Leads</h3>
                </div>
                <div class="col-md-11">
                  <div class="btn-exl">
                    <span
                      title="Bulk Assign"
                      class="fa fa-user-plus d-icon mr-r"
                      onClick={() => {
                        this.handleModel2();
                      }}
                    ></span>
                    <a
                      class="fa fa-download d-icon mr-r"
                      data-bs-toggle="tooltip"
                      title="Download Sample"
                      href={"/admin/build/avatars/Lead-Excel.csv"}
                      download
                    ></a>
                    <Link class="mr-r" to={"/admin/build/importfile"}>
                      <span
                        class="fa fa-upload d-icon"
                        data-bs-toggle="tooltip"
                        title="Import Excel"
                      ></span>
                    </Link>
                    <div class="add-icon">
                      <img
                        src={"/admin/build/avatars/add.png"}
                        onClick={() => {
                          this.handleModel();
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* <div class="col-md-1">
                  <div class="add-icon">
                    <img
                      src={"/admin/build/avatars/add.png"}
                      onClick={() => {
                        this.handleModel();
                      }}
                    />
                  </div>
                </div> */}
              </div>
              <div class="dataTables_length" id="example1_length"></div>
            </div>
            <div class="box-body">
              <div class="row">
                <div class="col-sm-2">
                  <div class="dataTables_length" id="example1_length">
                    <label>Date Apply On</label>
                    <select class="form-control">
                      <option value="">Select</option>
                      <option value="">Next Followup Date</option>
                      <option value="">Last Followup Date</option>
                      <option value="">Created Date</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-2">
                  <label>Date&#160;</label>
                  <DateRangePicker>
                    <button class="form-control">
                      <i class="fa fa-calendar"></i>
                    </button>
                  </DateRangePicker>
                </div>
                <div class="col-sm-2">
                  <div class="dataTables_length" id="example1_length">
                    <label>Lead Status</label>
                    <select class="form-control">
                      <option value="">Select Status</option>
                      <option value="">New</option>
                      <option value="">Pending</option>
                      <option value="">Followup</option>
                      <option value="">Completed</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-2">
                  <div class="dataTables_length" id="example1_length">
                    <label>Lead Type</label>
                    <select class="form-control">
                      <option value="">Select Type</option>
                      <option value="">No Response</option>
                      <option value="">Callback</option>
                      <option value="">Followup</option>
                    </select>
                  </div>
                </div>

                <div class="col-sm-3">
                  <label>&#160;</label>
                  <div class="dataTables_length" id="example1_length">
                    <button
                      type="submit"
                      name="filter"
                      id="filter"
                      class="btn btn-warning filter mr-r"
                    >
                      Filter
                    </button>
                    <span id="show-hidden-menu" style={{ cursor: "pointer" }}>
                      <b>Advance Filter</b>
                    </span>
                  </div>
                </div>
              </div>
              <div class="row hidden-menu mr-10" style={{ display: "none" }}>
                <div class="col-sm-2">
                  <div class="dataTables_length" id="example1_length">
                    <label>Application Executive</label>
                    <select class="form-control">
                      <option value="">Select</option>
                      <option value="">Neeraj</option>
                      <option value="">Devesh</option>
                      <option value="">Raj Kumar</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-2">
                  <div class="dataTables_length" id="example1_length">
                    <label>Counsellor</label>
                    <select class="form-control">
                      <option value="">Select</option>
                      <option value="">Neeraj</option>
                      <option value="">Devesh</option>
                      <option value="">Raj Kumar</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-2">
                  <div class="dataTables_length" id="example1_length">
                    <label>Course Level</label>
                    <select class="form-control">
                      <option value="">Select</option>
                      <option value="">PG</option>
                      <option value="">UG</option>
                    </select>
                  </div>
                </div>
              </div>
              <hr />
              <div class="tab-content table-responsive-lg">
                <table class="table table-bordered" id="example">
                  <thead>
                    <tr>
                      <th class="text-center">
                        <input type="checkbox" id="ckbCheckAll" />
                        <br />
                      </th>
                      <th>Name</th>
                      <th>Mobile</th>
                      <th>Date</th>
                      <th>Status/Type</th>
                      <th>Interested In</th>
                      <th>Counsellor</th>
                      {/* <th>Telecaller</th> */}
                      <th>Application Executive</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody class="f-13">
                    <tr class="text-center">
                      <td>
                        <input
                          type="checkbox"
                          class="checkBoxClass"
                          id="Checkbox1"
                        />
                      </td>
                      <td>Harsukhpal Kaur</td>
                      <td>9638527414</td>
                      <td class="text-left">
                        <div class="tool-tip">
                          27 Mar, 12:20PM
                          <span class="tooltipdate">Next Followup Date</span>
                        </div>
                        <div class="flex">
                          <div class="tool-tip">
                            17 Mar, 12:20PM
                            <span class="tooltipdate">Last Followup Date</span>
                          </div>

                          <div class="tool-tip">
                            <span class="font-icon">
                              <i class="fa fa-comment"></i>
                            </span>
                            <span class="tooltiptext">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s.
                            </span>
                          </div>
                        </div>
                        <div class="tool-tip">
                          7 Mar, 12:20PM
                          <span class="tooltipdate">Created Date</span>
                        </div>
                      </td>
                      <td>
                        <span class="badge badge-success badge-pill">
                          <i class="fa fa-circle text-success"></i> Followup
                        </span>
                        <br />
                        <span class="badge badge-primary tfont">
                          No Response
                        </span>
                      </td>
                      <td>PG</td>
                      <td>
                        <select class="form-control">
                          <option value="">Select</option>
                          <option value="">Neeraj</option>
                          <option value="" selected>
                            Devesh
                          </option>
                          <option value="">Raj Kumar</option>
                        </select>
                      </td>
                      <td>
                        <select class="form-control">
                          <option value="">Select</option>
                          <option value="" selected>
                            Neeraj
                          </option>
                          <option value="">Devesh</option>
                          <option value="">Raj Kumar</option>
                        </select>
                      </td>
                      <td>
                        <Link to={"/admin/build/edit-lead"} class="edit mr-r">
                          <span class="fa fa-pencil-square-o"></span>
                        </Link>
                        <Link>
                          <span class="fa fa-whatsapp lead-icon"></span>
                        </Link>
                      </td>
                    </tr>
                    <tr class="text-center">
                      <td>
                        <input
                          type="checkbox"
                          class="checkBoxClass"
                          id="Checkbox1"
                        />
                      </td>
                      <td>Amit Chaudhary</td>
                      <td>8985899656</td>
                      <td class="text-left">
                        <div class="tool-tip">
                          27 Mar, 12:20PM
                          <span class="tooltipdate">Next Followup Date</span>
                        </div>
                        <div class="flex">
                          <div class="tool-tip">
                            17 Mar, 12:20PM
                            <span class="tooltipdate">Last Followup Date</span>
                          </div>

                          <div class="tool-tip">
                            <span class="font-icon">
                              <i class="fa fa-comment"></i>
                            </span>
                            <span class="tooltiptext">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s.
                            </span>
                          </div>
                        </div>
                        <div class="tool-tip">
                          7 Mar, 12:20PM
                          <span class="tooltipdate">Created Date</span>
                        </div>
                      </td>
                      <td>
                        <span class="badge badge-warning badge-pill">
                          <i class="fa fa-circle text-success"></i> Pending
                        </span>
                        <br />
                        <span class="badge light-blue tfont">Followup</span>
                      </td>
                      <td>UG</td>
                      {/* <td>
                        <select class="form-control">
                          <option value="">Select</option>
                          <option value="">Neeraj</option>
                          <option value="">Devesh</option>
                          <option value="" selected>
                            Raj Kumar
                          </option>
                        </select>
                      </td> */}
                      <td>
                        <select class="form-control">
                          <option value="">Select</option>
                          <option value="">Neeraj</option>
                          <option value="">Devesh</option>
                          <option value="" selected>
                            Raj Kumar
                          </option>
                        </select>
                      </td>
                      <td>
                        <select class="form-control">
                          <option value="">Select</option>
                          <option value="" selected>
                            Neeraj
                          </option>
                          <option value="">Devesh</option>
                          <option value="">Raj Kumar</option>
                        </select>
                      </td>
                      <td class="text-center">
                        <Link to={"/admin/build/edit-lead"} class="edit mr-r">
                          <span class="fa fa-pencil-square-o"></span>
                        </Link>
                        <Link>
                          <span class="fa fa-whatsapp lead-icon"></span>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default LeadManagement;
