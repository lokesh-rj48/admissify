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
class Discussion extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      $("#example").DataTable();
      $("#example1").DataTable();
    });
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });
    $("body").on("click", ".remove", function () {
      $(this).closest("div").remove();
    });
  }

  GetDynamicTextFiled() {
    var div = $("<div />");
    var x =
      '<div class="row" style="margin-top:25px"><div class="col-lg-5 col-sm-5 col-xs-12"><input name = "title[]" placeholder="Enter field title" type="text" value = "" class="form-control" /></div>' +
      '<div class="col-lg-5 col-sm-5 col-xs-12"><input name = "other_field[]" placeholder="Enter detail" type="text" value = "" class="form-control" /></div>' +
      '<button type="button" class="btn btn-danger remove">Remove</button></div>';

    div.html(x);
    $("#TextBoxContainer").append(div);
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

  userHideShow() {
    var Type = $("#type").val();
    if (Type == "App/Web") {
      $("#userType").show();
    }
    if (Type == "Coach") {
      $("#userType").hide();
    }
    if (Type == "Counsellor") {
      $("#userType").hide();
    }
    if (Type == "Admissify User") {
      $("#userType").hide();
    }
  }
  render() {
    return (
      <section className="content">
        <Modal show={this.state.show} onHide={() => this.handleModel()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Discussion Inputs</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Discussion Category</label>
                  <select className="form-control" name="category">
                    <option value="">Select</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Discussion Sub Category</label>
                  <select className="form-control" name="sub_category">
                    <option value="">Select</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>Tag</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter tag"
                    name="tag"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label for="countryTextarea">Topic</label>
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Enter topic"
                    maxLength="255"
                    name="topic"
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
            <h3 class="box-title">Add Category & Sub-Category</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Discussion Category</label>
                  <input
                    type="text"
                    name="category"
                    class="form-control"
                    placeholder="Enter discussion category"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Discussion Sub Category</label>
                  <input
                    type="text"
                    name="sub_category"
                    class="form-control"
                    placeholder="Enter discussion sub category"
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
                        <CNavLink>Discussion</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Category</CNavLink>
                      </CNavItem>
                    </CNav>
                    <CTabContent>
                      <CTabPane>
                        <section class="content">
                          <div className="col-xs-12">
                            <div className="box">
                              <div className="box-body">
                                <div class="box-header d-flexi">
                                  <div class="row">
                                    <div class="col-sm-6">
                                      <h3 class="box-title">Discussions</h3>
                                    </div>
                                    <div class="col-sm-6">
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
                                <div class="box-body">
                                  <div class="row">
                                    <div class="col-sm-2">
                                      <div
                                        class="dataTables_length"
                                        id="example1_length"
                                      >
                                        <label>Status&#160;:</label>
                                        <select
                                          class="form-control input-sm"
                                          style={{ width: "100%" }}
                                        >
                                          <option value="-1">All Status</option>
                                          <option value="1">Active</option>
                                          <option value="0">Suspended</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-sm-2">
                                      <div
                                        class="dataTables_length"
                                        id="example1_length"
                                      >
                                        <label>User Type&#160;:</label>
                                        <select
                                          id="type"
                                          class="form-control"
                                          onChange={() => this.userHideShow()}
                                        >
                                          <option>Select</option>
                                          <option value="Coach">Coach</option>
                                          <option value="Counsellor">
                                            Counsellor
                                          </option>
                                          <option value="App/Web">
                                            App/Web
                                          </option>
                                          <option value="Admissify User">
                                            Admissify User
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div
                                      class="col-sm-2"
                                      id="userType"
                                      style={{ display: "none" }}
                                    >
                                      <div class="form-group">
                                        <label>&#160;</label>
                                        <select class="form-control">
                                          <option value="">Select User</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div class="col-sm-2">
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
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <hr />
                                  <div class="tab-content table-responsive-lg">
                                    <table
                                      class="table table-bordered"
                                      id="example"
                                    >
                                      <thead>
                                        <tr style={{ "font-size": "13px" }}>
                                          <th>S.No.</th>
                                          <th> Category</th>
                                          <th> Sub Category</th>
                                          <th>Topic</th>
                                          <th>Posted By</th>
                                          <th>Reactions</th>
                                          <th>View/Comment</th>
                                          <th>User Type</th>
                                          <th>Status</th>
                                          <th>Action</th>
                                        </tr>
                                      </thead>
                                      <tbody class="f-13">
                                        <tr>
                                          <td>1</td>
                                          <td>Regarding Package</td>
                                          <td>Package</td>
                                          <td>Lorem Ipsum</td>
                                          <td>Dheeraj Kumar</td>
                                          <td>
                                            <span>5</span>{" "}
                                            <span
                                              class="fa fa-thumbs-up"
                                              style={{
                                                color: "#0089ff",
                                                "font-size": "20px",
                                              }}
                                            ></span>{" "}
                                            <span>2</span>{" "}
                                            <span
                                              class="fa fa-thumbs-down"
                                              style={{
                                                color: "red",
                                                "font-size": "20px",
                                              }}
                                            ></span>
                                          </td>
                                          <td>
                                            <span>5</span>{" "}
                                            <span
                                              class="fa fa-eye"
                                              style={{
                                                color: "#0089ff",
                                                "font-size": "20px",
                                              }}
                                            ></span>{" "}
                                            <span>2</span>{" "}
                                            <span
                                              class="fa fa-comments"
                                              style={{
                                                color: "#0089ff",
                                                "font-size": "20px",
                                              }}
                                            ></span>
                                          </td>
                                          <td>Admissify User</td>
                                          <td>Active</td>
                                          <td>
                                            <Link
                                              to={
                                                "/admin/build/edit-discussion"
                                              }
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
                          </div>
                        </section>
                      </CTabPane>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">Category</h3>
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
                                          this.handleModel2();
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <hr />
                                <div class="tab-content table-responsive-lg">
                                  <table
                                    class="table table-bordered"
                                    id="example1"
                                  >
                                    <thead>
                                      <tr style={{ "font-size": "13px" }}>
                                        <th>S.No.</th>
                                        <th> Category</th>
                                        <th> Sub Category</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody class="f-13">
                                      <tr>
                                        <td>1</td>
                                        <td>Regarding Package</td>
                                        <td>Package</td>
                                        <td>
                                          <Link>Active</Link>
                                        </td>
                                        <td>
                                          <Link
                                            to={"/admin/build/edit-category"}
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
export default Discussion;
