import React, { useState } from "react";
import { Link } from "react-router-dom";
//Bootstrap and jQuery libraries
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "./Style.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "font-awesome/css/font-awesome.min.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
import $ from "jquery";
class Calling extends React.Component {
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });
  }
  changeStatus() {
    var value = $("#calling_feedback").val();
    if (value) {
      alert("Do you want to change remark status ?");
    }
  }

  constructor() {
    super();
    this.state = {
      show: false,
      show2: false,
      show3: false,
    };
  }
  handleModel() {
    this.setState({ show: !this.state.show });
  }
  handleModel2() {
    this.setState({ show2: !this.state.show2 });
  }
  handleModel3() {
    this.setState({ show3: !this.state.show3 });
  }

  render() {
    return (
      <section className="content">
        <Modal show={this.state.show} onHide={() => this.handleModel()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Client</h3>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div class="box-body row">
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      placeholder="Enter name"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Mobile</label>
                    <input
                      type="text"
                      class="form-control number"
                      name="mobile"
                      placeholder="Enter mobile number"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      class="form-control"
                      name="email"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Gender </label>
                    <select class="form-control select-option" name="gender">
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Date of Birth</label>
                    <input type="date" class="form-control" name="dob" />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      class="form-control"
                      name="address"
                      placeholder="Enter address"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>University</label>
                    <select class="form-control" name="university">
                      <option value="">Select University</option>
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
                    <label>City Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="city"
                      placeholder="Enter city name"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Country Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="country"
                      placeholder="Enter country name"
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
                      name="about"
                      placeholder="Enter text"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
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
            <h3 class="box-title">Status</h3>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div class="box-body row">
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Calling Status</label>{" "}
                    <select class="form-control" name="calling_type">
                      <option value="">Select Status</option>
                      <option value="">Not Picking Up</option>
                      <option value="2">Not Interested</option>
                      <option value="1">Not the Concerned Person</option>
                      <option value="1">Call Not connecting</option>
                      <option value="1">An action to convert lead</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Lead Status</label>{" "}
                    <select class="form-control" name="calling_type">
                      <option value="">Select Type</option>
                      <option value="">General</option>
                      <option value="3">Hot</option>
                      <option value="2">Warm</option>
                      <option value="1">Cold</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Comment</label>
                    <textarea
                      id="courseTextarea"
                      class="form-control"
                      rows="3"
                      name="about"
                    ></textarea>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Next Followup Date</label>
                    <input
                      type="date"
                      class="form-control"
                      name="next_follow_date"
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
                      name="about"
                      placeholder="Enter text"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
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
        <Modal show={this.state.show3} onHide={() => this.handleModel3()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Convert to Lead</h3>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div class="box-body row">
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Convert to Lead</label>
                    <select class="form-control" name="calling_type">
                      <option value="">Select</option>
                      <option value="1">Converted</option>
                      <option value="1">In Progress</option>
                      <option value="2">Unqualified</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Comment</label>
                    <textarea
                      id="courseTextarea"
                      class="form-control"
                      rows="3"
                      name="comment"
                    ></textarea>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <b for="addressTextarea">Additional Field</b>
                    <textarea
                      id="addressTextarea"
                      class="form-control"
                      rows="3"
                      name="about"
                      placeholder="Enter text"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button class="btn btn-warning" type="submit">
              Submit
            </button>
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
          </Modal.Footer>
        </Modal>
        <div className="col-xs-12">
          <div className="box">
            <div className="box-body">
              <div class="col-xs-12">
                <div class="box">
                  <div class="box-header d-flexi">
                    <div class="row">
                      <div class="col-md-2">
                        <h3 class="box-title">Calling List</h3>
                      </div>
                      <div class="col-md-10">
                        <div class="btn-exl text-right">
                          <Link class="mr-r">
                            <span
                              class="fa fa-download d-icon"
                              data-bs-toggle="tooltip"
                              title="Download Calling List"
                            ></span>
                          </Link>
                          <Link class="mr-r" to={"/admin/build/import-client"}>
                            <span
                              class="fa fa-upload d-icon"
                              data-bs-toggle="tooltip"
                              title="Upload Client Excel"
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
                    </div>
                    <div class="dataTables_length" id="example1_length">
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
                        <div class="col-md-1">
                          <label>Date&#160;</label>
                          <DateRangePicker>
                            <button class="form-control">
                              <i class="fa fa-calendar"></i>
                            </button>
                          </DateRangePicker>
                        </div>
                        <div class="col-sm-2">
                          <div class="dataTables_length" id="example1_length">
                            <label>Telecaller</label>
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
                            <label>Lead Status</label>
                            <select class="form-control">
                              <option value="">Select</option>
                              <option value="">New</option>
                              <option value="">Converted</option>
                              <option value="">Unqualified</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-2">
                          <div class="dataTables_length" id="example1_length">
                            <label>Calling Status</label>
                            <select class="form-control">
                              <option value="">Select Status</option>
                              <option value="">Not Picking Up</option>
                              <option value="2">Not Interested</option>
                              <option value="1">
                                Not the Concerned Person
                              </option>
                              <option value="1">Call Not connecting</option>
                              <option value="1">
                                An action to convert lead
                              </option>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="box-body">
                    <hr />
                    <div class="tab-content table-responsive-lg">
                      <table id="example" class="table table-bordered">
                        <thead>
                          <tr style={{ "font-size": "13px" }}>
                            <th>SN.</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>PG/UG</th>
                            <th>Calling Status</th>
                            <th>Telecaller</th>
                            <th>Date</th>
                            <th>Lead Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody class="f-13">
                          <tr>
                            <td>
                              <p class="from">1</p>
                            </td>
                            <td>
                              <p class="from">Rahul Kumar</p>
                            </td>
                            <td>
                              <p class="from">
                                <i
                                  class="fa fa-phone lead-icon"
                                  aria-hidden="true"
                                ></i>
                              </p>
                            </td>
                            <td>
                              <p class="from">UG</p>
                            </td>
                            <td class="text-center">
                              <span
                                class="fa fa-plus-square-o calling-btn"
                                onClick={() => {
                                  this.handleModel2();
                                }}
                              ></span>
                              <p class="lead-action">No action performed</p>
                            </td>
                            <td>
                              <select class="form-control from">
                                <option value="">Select</option>
                                <option value="">Neeraj</option>
                                <option value="">Devesh</option>
                                <option value="">Raj Kumar</option>
                              </select>
                            </td>

                            <td class="text-left">
                              <div class="tool-tip">
                                27 Mar, 12:20PM
                                <span class="tooltipdate">
                                  Next Followup Date
                                </span>
                              </div>
                              <div class="flex">
                                <div class="tool-tip">
                                  17 Mar, 12:20PM
                                  <span class="tooltipdate">
                                    Last Followup Date
                                  </span>
                                </div>

                                <div class="tool-tip">
                                  <span class="font-icon">
                                    <i class="fa fa-comment"></i>
                                  </span>
                                  <span class="tooltiptext">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s.
                                  </span>
                                </div>
                              </div>
                              <div class="tool-tip">
                                7 Mar, 12:20PM
                                <span class="tooltipdate">Created Date</span>
                              </div>
                            </td>
                            <td>
                              <button
                                type="button"
                                class="btn btn-warning cid p-btn"
                                onClick={() => {
                                  this.handleModel3();
                                }}
                              >
                                New
                              </button>
                              <p class="b-color">Followup</p>
                            </td>
                            <td>
                              <Link
                                to={"/admin/build/edit-client"}
                                class="edit"
                              >
                                <span class="fa fa-pencil-square-o"></span>
                              </Link>{" "}
                              <a href="">
                                <span class="fa fa-whatsapp lead-icon"></span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="from">2</p>
                            </td>
                            <td>
                              <p class="from">Mukul Kumar</p>
                            </td>
                            <td>
                              <p class="from">
                                <i
                                  class="fa fa-phone lead-icon"
                                  aria-hidden="true"
                                ></i>
                              </p>
                            </td>
                            <td>
                              <p class="from">PG</p>
                            </td>
                            <td class="text-center">
                              <span
                                class="fa fa-plus-square-o calling-btn"
                                onClick={() => {
                                  this.handleModel2();
                                }}
                              ></span>
                              <p class="lead-action">
                                An action to convert lead
                              </p>
                            </td>
                            <td>
                              <select class="form-control from">
                                <option value="">Select</option>
                                <option value="">Neeraj</option>
                                <option value="">Devesh</option>
                                <option value="" selected>
                                  Raj Kumar
                                </option>
                              </select>
                            </td>

                            <td class="text-left">
                              <div class="tool-tip">
                                27 Mar, 12:20PM
                                <span class="tooltipdate">
                                  Next Followup Date
                                </span>
                              </div>
                              <div class="flex">
                                <div class="tool-tip">
                                  17 Mar, 12:20PM
                                  <span class="tooltipdate">
                                    Last Followup Date
                                  </span>
                                </div>

                                <div class="tool-tip">
                                  <span class="font-icon">
                                    <i class="fa fa-comment"></i>
                                  </span>
                                  <span class="tooltiptext">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s.
                                  </span>
                                </div>
                              </div>
                              <div class="tool-tip">
                                7 Mar, 12:20PM
                                <span class="tooltipdate">Created Date</span>
                              </div>
                            </td>
                            <td>
                              <button
                                type="button"
                                class="btn btn-warning cid green p-btn"
                              >
                                Converted
                              </button>
                              <p style={{ color: "red" }}>No response</p>
                            </td>
                            <td>
                              <Link
                                to={"/admin/build/edit-client"}
                                class="edit"
                              >
                                <span class="fa fa-pencil-square-o"></span>
                              </Link>{" "}
                              <a href="">
                                <span class="fa fa-whatsapp lead-icon"></span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="from">3</p>
                            </td>
                            <td>
                              <p class="from">Sanjay Singh</p>
                            </td>
                            <td>
                              <p class="from">
                                <i
                                  class="fa fa-phone lead-icon"
                                  aria-hidden="true"
                                ></i>
                              </p>
                            </td>
                            <td>
                              <p class="from">UG</p>
                            </td>
                            <td class="text-center">
                              <span
                                class="fa fa-plus-square-o calling-btn"
                                onClick={() => {
                                  this.handleModel2();
                                }}
                              ></span>
                              <p class="lead-action">
                                Not the concerned person
                              </p>
                            </td>
                            <td>
                              <select class="form-control from">
                                <option value="">Select</option>
                                <option value="">Neeraj</option>
                                <option value="">Devesh</option>
                                <option value="">Raj Kumar</option>
                              </select>
                            </td>

                            <td class="text-left">
                              <div class="tool-tip">
                                27 Mar, 12:20PM
                                <span class="tooltipdate">
                                  Next Followup Date
                                </span>
                              </div>
                              <div class="flex">
                                <div class="tool-tip">
                                  17 Mar, 12:20PM
                                  <span class="tooltipdate">
                                    Last Followup Date
                                  </span>
                                </div>

                                <div class="tool-tip">
                                  <span class="font-icon">
                                    <i class="fa fa-comment"></i>
                                  </span>
                                  <span class="tooltiptext">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s.
                                  </span>
                                </div>
                              </div>
                              <div class="tool-tip">
                                7 Mar, 12:20PM
                                <span class="tooltipdate">Created Date</span>
                              </div>
                            </td>
                            <td>
                              <button
                                type="button"
                                class="btn btn-warning cid red p-btn"
                              >
                                Unqualified
                              </button>
                              <p class="b-color">Callback</p>
                            </td>
                            <td>
                              <Link
                                to={"/admin/build/edit-client"}
                                class="edit"
                              >
                                <span class="fa fa-pencil-square-o"></span>
                              </Link>{" "}
                              <a href="">
                                <span class="fa fa-whatsapp lead-icon"></span>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Calling;
