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
class Courses extends React.Component {
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });
    $("body").on("click", ".remove", function () {
      $(this).closest("div").remove();
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
      show2: false,
      show3: false,
      show4: false,
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
  handleModel4() {
    this.setState({ show4: !this.state.show4 });
  }

  courseLevelValidations(evt) {
    $(".error-class").remove();
    var CourseLevel = $("#course_level").val();
    var courseTextarea = $("#courseTextarea").val();
    if (!CourseLevel) {
      $("#course_level").after(
        '<div class="error-class">Enter course level.</div>'
      );
      evt.preventDefault();
    }
    if (!courseTextarea) {
      $("#courseTextarea").after(
        '<div class="error-class">Enter description.</div>'
      );
      evt.preventDefault();
    }
    return true;
  }
  streamValidations(evt) {
    $(".error-class").remove();
    var Stream = $("#stream").val();
    var SLevel = $("#stream_course_level").val();
    if (!Stream) {
      $("#stream").after('<div class="error-class">Enter stream name.</div>');
      evt.preventDefault();
    }
    if (!SLevel) {
      $("#stream_course_level").after(
        '<div class="error-class">Select course level.</div>'
      );
      evt.preventDefault();
    }
    return true;
  }
  courseValidations(evt) {
    $(".error-class").remove();
    var CName = $("#course_name").val();
    var CStream = $("#course_stream").val();
    var courseTextarea = $("#courseTextarea").val();
    if (!CName) {
      $("#course_name").after(
        '<div class="error-class">Enter stream name.</div>'
      );
      evt.preventDefault();
    }
    if (!courseTextarea) {
      $("#courseTextarea").after(
        '<div class="error-class">Enter Description</div>'
      );
      evt.preventDefault();
    }
    if (!CStream) {
      $("#course_stream").after('<div class="error-class">Select Stream</div>');
      evt.preventDefault();
    }
    return true;
  }

  render() {
    return (
      <section className="content">
        <Modal show={this.state.show} onHide={() => this.handleModel()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Course Level</h3>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(evt) => this.courseLevelValidations(evt)}>
              <div class="box-body row">
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Course Level</label>
                    <select class="form-control">
                      <option>Select</option>
                      <option>UG</option>
                      <option>PG</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label for="courseTextarea">Description</label>
                    <textarea
                      id="courseTextarea"
                      class="form-control"
                      rows="3"
                      name="about"
                      placeholder="Enter about course level"
                    ></textarea>
                  </div>
                </div>

                <div class="col-lg-12 col-sm-12 col-xs-12 text-center">
                  <button class="btn btn-warning" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
        <Modal show={this.state.show2} onHide={() => this.handleModel2()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Stream</h3>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(evt) => this.streamValidations(evt)}>
              <div class="box-body row">
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Course Level</label>
                    <select
                      name="course"
                      class="form-control"
                      id="stream_course_level"
                    >
                      <option value="">Select Course Level</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Stream</label>
                    <input
                      type="text"
                      name="stream"
                      placeholder="Enter stream name"
                      class="form-control"
                      id="stream"
                    />
                  </div>
                </div>

                <div class="col-lg-12 col-sm-12 col-xs-12 text-center">
                  <button class="btn btn-warning" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
        <Modal show={this.state.show3} onHide={() => this.handleModel3()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Course</h3>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(evt) => this.courseValidations(evt)}>
              <div class="box-body row">
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Stream</label>
                    <select
                      name="course_stream"
                      class="form-control"
                      id="course_stream"
                    >
                      <option value="">Select Stream</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Course</label>
                    <input
                      type="text"
                      name="course_name"
                      placeholder="Enter course name"
                      class="form-control"
                      id="course_name"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label for="courseTextarea">Description</label>
                    <textarea
                      id="courseTextarea"
                      class="form-control"
                      rows="3"
                      name="about"
                      placeholder="Enter about course"
                    ></textarea>
                  </div>
                </div>

                <div class="col-lg-12 col-sm-12 col-xs-12 text-center">
                  <button class="btn btn-warning" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
        <div className="col-xs-12">
          <div className="box">
            <div className="box-body">
              <CCard>
                <CCardBody>
                  <CTabs>
                    <CNav variant="tabs">
                      <CNavItem>
                        <CNavLink>Course Level</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Streams</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Courses</CNavLink>
                      </CNavItem>
                      {/* <CNavItem>
                        <CNavLink>Specialization</CNavLink>
                      </CNavItem> */}
                    </CNav>
                    <CTabContent>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">Course Level</h3>
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
                                      <label>Status&#160;:</label>
                                      <select
                                        name="status"
                                        aria-controls="example1"
                                        value=""
                                        class="form-control input-sm"
                                        style={{ width: "100%" }}
                                      >
                                        <option value="-1">All Status</option>
                                        <option value="0">InActive</option>
                                        <option value="1">Active</option>
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
                                  <div class="col-sm-8">
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
                                        <th>Course Level</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>PG</td>
                                        <td>
                                          <a href="#!">Active</a>
                                        </td>
                                        <td>
                                          <Link
                                            to={
                                              "/admin/build/edit-course-level"
                                            }
                                            class="edit"
                                          >
                                            <span class="fa fa-pencil-square-o"></span>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>UG</td>
                                        <td>
                                          <a href="#!">Active</a>
                                        </td>
                                        <td>
                                          <Link
                                            to={
                                              "/admin/build/edit-course-level"
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
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">Stream List</h3>
                                <div
                                  class="dataTables_length"
                                  id="example1_length"
                                ></div>
                              </div>
                              <div class="box-body">
                                <div class="row">
                                  <div class="col-sm-3">
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <label>Course Level&#160;:</label>
                                      <select
                                        name="course_level"
                                        aria-controls="example1"
                                        value=""
                                        class="form-control input-sm"
                                        style={{ width: "100%" }}
                                      >
                                        <option value="-1">
                                          All Course Level
                                        </option>
                                        <option value="0">PG</option>
                                        <option value="1">UG</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="col-sm-2">
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <label>Status&#160;:</label>
                                      <select
                                        name="status"
                                        aria-controls="example1"
                                        value=""
                                        class="form-control input-sm"
                                        style={{ width: "100%" }}
                                      >
                                        <option value="-1">All Status</option>
                                        <option value="0">InActive</option>
                                        <option value="1">Active</option>
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
                                        <th>Name</th>
                                        <th>Course Level</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>General Management</td>
                                        <td>PG</td>
                                        <td>
                                          <a href="#!">Active</a>
                                        </td>
                                        <td>
                                          <Link
                                            to={"/admin/build/edit-stream"}
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
                                <h3 class="box-title">Course List</h3>
                                <div
                                  class="dataTables_length"
                                  id="example1_length"
                                ></div>
                              </div>
                              <div class="box-body">
                                <div class="row">
                                  <div class="col-sm-3">
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <label>Course Level&#160;:</label>
                                      <select
                                        name="course_level"
                                        aria-controls="example1"
                                        value=""
                                        class="form-control input-sm"
                                        style={{ width: "100%" }}
                                      >
                                        <option value="-1">
                                          All Course Level
                                        </option>
                                        <option value="0">PG</option>
                                        <option value="1">UG</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="col-sm-2">
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <label>Streams&#160;:</label>
                                      <select
                                        name="stream"
                                        aria-controls="example1"
                                        value=""
                                        class="form-control input-sm"
                                        style={{ width: "100%" }}
                                      >
                                        <option value="-1">All Streams</option>
                                        <option value="0">
                                          General Management
                                        </option>
                                        <option value="1">ENG</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="col-sm-2">
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <label>Status&#160;:</label>
                                      <select
                                        name="status"
                                        aria-controls="example1"
                                        value=""
                                        class="form-control input-sm"
                                        style={{ width: "100%" }}
                                      >
                                        <option value="-1">All Status</option>
                                        <option value="0">InActive</option>
                                        <option value="1">Active</option>
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
                                  <div class="col-sm-3">
                                    <div class="add-icon">
                                      <img
                                        src={"/admin/build/avatars/add.png"}
                                        onClick={() => {
                                          this.handleModel3();
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
                                        <th>Course</th>
                                        <th>Stream</th>
                                        <th>Course Level</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>
                                          Advanced Manufacturing Engineering and
                                          Management
                                        </td>
                                        <td>General Management</td>
                                        <td>PG</td>
                                        <td>
                                          Manufacturing is at the centre of
                                          engineering, as everything in our
                                          day-to-day lives needs to be created
                                          and produced. Our Advanced
                                          Manufacturing Engineering and
                                          Management MSc delivers a unique
                                          balance between manufacturing
                                          processes and management.
                                        </td>
                                        <td>
                                          <a href="#!">Active</a>
                                        </td>
                                        <td>
                                          <Link
                                            to={"/admin/build/edit-course"}
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
export default Courses;
