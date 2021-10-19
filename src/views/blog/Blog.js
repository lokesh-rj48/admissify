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
class Blog extends React.Component {
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
            <h3 class="box-title">Add Blog</h3>
          </Modal.Header>
          <Modal.Body>
            <from>
              <div class="box-body row">
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Blog Category</label>
                    <select className="form-control">
                      <option value="">Select</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Heading</label>
                    <input
                      type="text"
                      name="discussion_category"
                      class="form-control"
                      placeholder="Enter blog heading"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Blog Description</label>
                    <textarea
                      id="addressTextarea"
                      class="form-control"
                      rows="3"
                      name="description"
                      placeholder="Enter text"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <center>
                    <button class="btn btn-warning" type="submit">
                      Submit
                    </button>
                  </center>
                </div>
              </div>
            </from>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.show2} onHide={() => this.handleModel2()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Category</h3>
          </Modal.Header>
          <Modal.Body>
            <from>
              <div class="box-body row">
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Category</label>
                    <input
                      type="text"
                      name="discussion_category"
                      class="form-control"
                      placeholder="Enter category name"
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
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <center>
                    <button class="btn btn-warning" type="submit">
                      Submit
                    </button>
                  </center>
                </div>
              </div>
            </from>
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
                        <CNavLink>Blog</CNavLink>
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
                                      <h3 class="box-title">Blog List</h3>
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
                                          <th>Category</th>
                                          <th>Heading</th>
                                          <th>Content</th>
                                          <th>Status</th>
                                          <th>Action</th>
                                        </tr>
                                      </thead>
                                      <tbody class="f-13">
                                        <tr>
                                          <td>1</td>
                                          <td>Changes</td>
                                          <td>
                                            New Changes in UK Post Study Work
                                            Visa 2022 January Intake | New Rules
                                            & Updates for Indian Students
                                          </td>
                                          <td>
                                            The Graduate route is meant in such
                                            how that international student who
                                            have attained their degree from a
                                            recognized university within the UK
                                            to remain here and can appear for
                                            work for a minimum of 2 years.
                                          </td>
                                          <td>Active</td>
                                          <td>
                                            <Link
                                              to={"/admin/build/edit-blog"}
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
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody class="f-13">
                                      <tr>
                                        <td>1</td>
                                        <td>
                                          New Changes in UK Post Study Work Visa
                                          2022 January Intake | New Rules &
                                          Updates for Indian Students
                                        </td>
                                        <td>
                                          <Link>Active</Link>
                                        </td>
                                        <td>
                                          <Link
                                            to={
                                              "/admin/build/edit-blog-category"
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
export default Blog;
