import React, { useState } from "react";
import { Link } from "react-router-dom";
//multiple tags
//Bootstrap and jQuery libraries
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "./Style.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "font-awesome/css/font-awesome.min.css";
import $ from "jquery";
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
import Multiselect from "multiselect-react-dropdown";
class Counsellor extends React.Component {
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });
  }

  constructor() {
    super();
    this.state = {
      SlotOptions: [
        { timeSlot: "09:00am - 11:00am", id: 1 },
        { timeSlot: "11:00am - 01:00pm", id: 2 },
        { timeSlot: "01:00pm - 03:00pm", id: 3 },
        { timeSlot: "03:00pm - 05:00pm", id: 4 },
      ],
      DayOptions: [
        { day: "Monday", id: 1 },
        { day: "Tuesday", id: 2 },
        { day: "Wednesday", id: 3 },
        { day: "Thursday", id: 4 },
        { day: "Friday", id: 5 },
        { day: "Saturday", id: 6 },
      ],
      show: false,
      show2: false,
    };
  }
  handleModel() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <section className="content">
        <Modal show={this.state.show} onHide={() => this.handleModel()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Counsellor</h3>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div class="box-body row">
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label> Name</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Enter counsellor name"
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
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Mobile No.</label>
                    <input
                      type="text"
                      name="mob"
                      class="form-control number"
                      placeholder="Enter mobile number"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Alternate Mobile No.</label>
                    <input
                      type="text"
                      name="mob"
                      class="form-control number"
                      placeholder="Enter mobile number"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Gender</label>
                    <select class="form-control">
                      <option value="">Select Gender</option>
                      <option value="">Male</option>
                      <option value="">Female</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Profile Image</label>
                    <input type="file" name="profile" class="form-control" />
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
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Education</label>
                    <input
                      type="text"
                      name="education"
                      class="form-control"
                      placeholder="Enter highest qualification"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Experience</label>
                    <input
                      type="text"
                      name="experience"
                      class="form-control"
                      placeholder="Enter experience in years"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Price</label>
                    <input
                      type="text"
                      name="price"
                      class="form-control number"
                      placeholder="Enter price"
                    />
                  </div>
                </div>

                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Available Time Slot</label>
                    <Multiselect
                      options={this.state.SlotOptions}
                      selectedValues={this.state.selectedValue}
                      displayValue="timeSlot"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Availability Days</label>
                    <Multiselect
                      options={this.state.DayOptions}
                      selectedValues={this.state.selectedValue}
                      displayValue="day"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>City</label>
                    <select class="form-control ">
                      <option value="">Select City</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Country</label>
                    <table class="table  table-responsive">
                      <tbody>
                        <tr>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>India</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Australia</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Belgium</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>China</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Cuba</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Denmark</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>France</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Germany</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>New Zealand</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Philippines</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Singapore</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Switzerland</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Thailand</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Madagascar</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Maldives</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Israel</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <center>
                  <button class="btn btn-warning" type="submit">
                    Submit
                  </button>
                </center>
              </div>
            </form>
          </Modal.Body>
        </Modal>
        <div className="col-xs-12">
          <div className="box">
            <div className="box-body">
              <CCard>
                <CCardBody>
                  <CTabs>
                    <CNav variant="tabs">
                      <CNavItem>
                        <CNavLink>Counsellor List</CNavLink>
                      </CNavItem>
                    </CNav>
                    <CTabContent>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">Counsellor List</h3>
                                <div
                                  class="dataTables_length"
                                  id="example1_length"
                                ></div>
                              </div>
                              <div class="box-body">
                                <div class="row">
                                  <div class="col-sm-12">
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
                                <hr />
                                <div class="info-box-content">
                                  <table
                                    id="example"
                                    class="table table-bordered counter "
                                  >
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>Name</th>
                                        <th>Profile</th>
                                        <th>Mobile</th>
                                        <th>Gender</th>
                                        <th>City</th>
                                        <th>Country</th>
                                        <th>Counselling</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Shruti Counselor</td>
                                        <td>
                                          <img
                                            class="profile"
                                            src={
                                              "/admin/build/avatars/Men-Profile.png"
                                            }
                                          />
                                        </td>
                                        <td>8529638525</td>
                                        <td>Female</td>
                                        <td>Delhi</td>
                                        <td>India</td>
                                        <td>
                                          <Link to={"#!"}>20</Link>
                                        </td>
                                        <td>
                                          <Link to={"#!"}>Active</Link>
                                        </td>
                                        <td>
                                          <Link
                                            to={"/admin/build/edit-counsellor"}
                                            class="edit"
                                          >
                                            <span class="fa fa-pencil-square-o"></span>
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
export default Counsellor;
