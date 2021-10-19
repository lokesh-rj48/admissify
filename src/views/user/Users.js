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
import Token from "../../components/AuthToken/AuthToken";
class Users extends React.Component {
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });

    //Authentication
    // if (localStorage.authToken !== Token) {
    //   window.location.href = "/login";
    // }
  }

  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.state = {
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
            <h3 class="box-title">Add User</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter user name"
                    class="form-control"
                    id="name"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Email/User Name</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter user email"
                    class="form-control"
                    id="email"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Enter mobile number"
                    maxLength="10"
                    class="form-control number"
                    id="mobile"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>User role</label>
                  <select
                    name="stream"
                    class="form-control select-option"
                    id="stream"
                  >
                    <option value="">Select User Role</option>
                    <option value="">Promoter</option>
                    <option value="">Telecaller</option>
                    <option value="">Field Agent</option>
                    <option value="">Seo</option>
                    <option value="">Counsellor</option>
                    <option value="">Account</option>
                    <option value="">Associate Manager</option>
                    <option value="">Application Executive</option>
                    <option value="">Visa Executive</option>
                    <option value="">Operational</option>
                    <option value="">Application</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>City</label>
                  <select
                    name="city"
                    class="form-control select-option"
                    id="city"
                  >
                    <option value="">Select City</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Profile photo</label>
                  <input
                    type="file"
                    name="profile_photo"
                    class="form-control"
                    id="profile_photo"
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
            <h3 class="box-title">Add User Role</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body">
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>User Role</label>
                  <input
                    type="text"
                    name="user_role"
                    placeholder="Enter user role"
                    class="form-control"
                    id="user_role"
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
        <div className="col-xs-12">
          <div className="box">
            <div className="box-body">
              <CCard>
                <CCardBody>
                  <CTabs>
                    <CNav variant="tabs">
                      <CNavItem>
                        <CNavLink>Users</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>User Role</CNavLink>
                      </CNavItem>
                    </CNav>
                    <CTabContent>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">User List</h3>
                                <div
                                  class="dataTables_length"
                                  id="example1_length"
                                ></div>
                              </div>
                              <div class="box-body">
                                <div class="row">
                                  <div class="col-sm-2">
                                    <div class="form-group">
                                      <label>Status</label>
                                      <select class="form-control">
                                        <option value="">All Status</option>
                                        <option value="">Active</option>
                                        <option value="">InActive</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="col-sm-2">
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <label>Date&#160;:</label>
                                      <input
                                        style={{ width: "100%" }}
                                        type="date"
                                        name="fromdate"
                                        id=""
                                        class="form-control input-sm"
                                        placeholder="From Date"
                                        autocomplete="off"
                                        onblur=""
                                      />
                                    </div>
                                  </div>
                                  <div class="col-sm-2">
                                    <label>&#160;</label>
                                    <div
                                      class="dataTables_length"
                                      id="example1_length1"
                                    >
                                      <input
                                        type="date"
                                        name="todate"
                                        id=""
                                        aria-controls="example1"
                                        class="form-control input-sm"
                                        style={{ width: "100%" }}
                                        placeholder="To Date"
                                        autocomplete="off"
                                      />
                                    </div>
                                  </div>

                                  <div class="col-sm-3">
                                    <label>&#160;</label>
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <button
                                        type="submit"
                                        name="filter"
                                        id="filter"
                                        class="btn btn-warning filter"
                                      >
                                        Filter
                                      </button>{" "}
                                      &nbsp; &nbsp;
                                      <button
                                        type="submit"
                                        name=""
                                        class="btn btn-secondary"
                                      >
                                        Export Excel
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col-sm-3">
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
                                <div class="tab-content">
                                  <table
                                    id="example"
                                    class="table table-bordered "
                                  >
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>City</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Harish</td>
                                        <td>associatemanager@adimissify.com</td>
                                        <td>9638527414</td>
                                        <td>New Delhi</td>
                                        <td>Associate Manager</td>
                                        <td>
                                          <Link to="#!">Active</Link>
                                        </td>
                                        <td>
                                          <a href="#!" class="edit">
                                            <span
                                              class="fa fa-eye"
                                              style={{ "margin-right": "5px" }}
                                            ></span>
                                          </a>{" "}
                                          <Link
                                            to={"/admin/build/edit-user"}
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
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">User Role</h3>
                                <div
                                  class="dataTables_length"
                                  id="example1_length"
                                ></div>
                              </div>
                              <div class="box-body">
                                <div class="row">
                                  <div class="col-sm-2">
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <label>Date&#160;:</label>
                                      <input
                                        style={{ width: "100%" }}
                                        type="date"
                                        name="fromdate"
                                        id=""
                                        class="form-control input-sm"
                                        placeholder="From Date"
                                        autocomplete="off"
                                        onblur=""
                                      />
                                    </div>
                                  </div>
                                  <div class="col-sm-2">
                                    <label>&#160;</label>
                                    <div
                                      class="dataTables_length"
                                      id="example1_length1"
                                    >
                                      <input
                                        type="date"
                                        name="todate"
                                        id=""
                                        aria-controls="example1"
                                        class="form-control input-sm"
                                        style={{ width: "100%" }}
                                        placeholder="To Date"
                                        autocomplete="off"
                                      />
                                    </div>
                                  </div>

                                  <div class="col-sm-3">
                                    <label>&#160;</label>
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <button
                                        type="submit"
                                        name="filter"
                                        id="filter"
                                        class="btn btn-warning filter"
                                      >
                                        Filter
                                      </button>{" "}
                                      &nbsp; &nbsp;
                                      <button
                                        type="submit"
                                        name=""
                                        class="btn btn-secondary"
                                      >
                                        Export Excel
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col-sm-5">
                                    <div class="add-icon">
                                      <img
                                        src={"/admin/build/avatars/add.png"}
                                        onClick={() => {
                                          this.handleModel2();
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <hr />
                                <div class="tab-content">
                                  <table
                                    id="example"
                                    class="table table-bordered "
                                  >
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>Role Name</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Application</td>
                                        <td>
                                          <Link
                                            to={"/admin/build/user-permission"}
                                            class="edit"
                                          >
                                            <span
                                              class="fa fa-check-square"
                                              style={{ "margin-right": "5px" }}
                                              title="User Permission"
                                            ></span>
                                          </Link>{" "}
                                          <Link
                                            to={"/admin/build/edit-user-role"}
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
export default Users;
