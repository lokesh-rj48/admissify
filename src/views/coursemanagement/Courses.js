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
//import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const axios = require("axios");

class Courses extends React.Component {
  componentDidMount() {
    console.log("cors error");
    //For Course Level
    axios
      .get(
        `http://localhost:8081/api/masters/getMasters?masterGroup=CourseLevel`,
        {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        console.log("res", res);
        this.setState({ courseLevelList: res.data.data });
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occured at API end (" + err.message + ")");
      });

    //For Stream
    axios
      .get(`http://localhost:8081/api/masters/getMasters?masterGroup=STREAM`, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("res", res);
        this.setState({ streamList: res.data.data });
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occured at API end (" + err.message + ")");
      });

    //For Course
    axios
      .get(`http://localhost:8081/api/masters/getMasters?masterGroup=COURSE`, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("res", res);
        this.setState({ courseList: res.data.data });
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occured at API end (" + err.message + ")");
      });

    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
      //$("#example1").DataTable();
      //$("#example2").DataTable();
    });
    $("body").on("click", ".remove", function () {
      $(this).closest("div").remove();
    });
  }

  constructor() {
    super();
    this.state = {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      courseLevelList: [],
      streamList: [],
      courseList: [],
      courseLevel: "",
      courseDesc: "",
      courseStream: "",
      courseName: "",
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

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
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

    const postData = {
      masterName: this.state.courseLevel,
      masterCode: this.state.courseLevel.toLowerCase(),
      masterDesc: this.state.courseDesc,
      masterGroup: "CourseLevel",
    };

    console.log("postData", postData);
    axios
      .post(`http://localhost:8081/api/masters/add`, postData, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("res", res);
        toast.success(res.data.message);
        window.location.reload();
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occured at API end (" + err.message + ")");
      });

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

    const streamData = {
      masterName: this.state.courseStream,
      masterCode: this.state.courseStream.toLowerCase(),
      parent: this.state.courseLevel,
      masterGroup: "STREAM",
    };
    //console.log("streamData", streamData);
    axios
      .post(`http://localhost:8081/api/masters/add`, streamData, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("res", res);
        toast.success(res.data.message);
        window.location.reload();
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occured at API end (" + err.message + ")");
      });
    return true;
  }
  courseValidations(evt) {
    $(".error-class").remove();
    var CName = $("#course_name").val();
    var CStream = $("#course_stream").val();
    var courseTextarea = $("#courseTextarea").val();
    if (!CName) {
      $("#course_name").after(
        '<div class="error-class">Enter course name.</div>'
      );
      evt.preventDefault();
    }
    if (!courseTextarea) {
      $("#courseTextarea").after(
        '<div class="error-class">Enter description</div>'
      );
      evt.preventDefault();
    }
    if (!CStream) {
      $("#course_stream").after('<div class="error-class">Select stream</div>');
      evt.preventDefault();
    }

    const courseData = {
      masterName: this.state.courseName,
      masterCode: this.state.courseName.toLowerCase(),
      masterDesc: this.state.courseDesc,
      parent: this.state.courseStream,
      masterGroup: "COURSE",
    };
    console.log("courseData", courseData);
    // evt.preventDefault();
    axios
      .post(`http://localhost:8081/api/masters/add`, courseData, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("res", res);
        toast.success(res.data.message);
        window.location.reload();
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occured at API end (" + err.message + ")");
        err.status(500).send({
          message: err.message || "Course already exist!",
        });
      });

    return true;
  }

  render() {
    const courseLevelList = this.state.courseLevelList || [];
    const streamList = this.state.streamList || [];
    const courseList = this.state.courseList || [];
    return (
      <section className="content">
        <ToastContainer />
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
                    <input
                      type="text"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.courseLevel}
                      class="form-control"
                      id="courseLevel"
                      name="courseLevel"
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
                      name="courseDesc"
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
                      class="form-control"
                      id="stream_course_level"
                      name="courseLevel"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.courseLevel}
                    >
                      <option value="">Select Course Level</option>
                      {courseLevelList &&
                        courseLevelList.map((data) => {
                          return (
                            <option value={data.id}>{data.MasterName}</option>
                          );
                        })}
                    </select>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Stream</label>
                    <input
                      type="text"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.courseStream}
                      placeholder="Enter stream name"
                      class="form-control"
                      id="stream"
                      name="courseStream"
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
                      name="courseStream"
                      class="form-control"
                      id="course_stream"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.courseStream}
                    >
                      <option value="">Select Stream</option>
                      {streamList &&
                        streamList.map((data) => {
                          return (
                            <option value={data.id}>{data.MasterName}</option>
                          );
                        })}
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Course</label>
                    <input
                      type="text"
                      name="courseName"
                      placeholder="Enter course name"
                      class="form-control"
                      id="course_name"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.courseName}
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
                      name="courseDesc"
                      placeholder="Enter about course"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.courseDesc}
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
                                      {courseLevelList &&
                                        courseLevelList.length > 0 &&
                                        courseLevelList.map((data, key) => {
                                          return (
                                            <tr>
                                              <td>{++key}</td>
                                              <td>{data.MasterName}</td>
                                              <td>
                                                {!data.MasterStatus &&
                                                data.MasterStatus != "Inactive"
                                                  ? "Active"
                                                  : "Inactive"}
                                              </td>
                                              <td>
                                                <Link
                                                  to={
                                                    "/admin/build/edit-course-level/" +
                                                    data.id
                                                  }
                                                  class="edit"
                                                >
                                                  <span class="fa fa-pencil-square-o"></span>
                                                </Link>
                                              </td>
                                            </tr>
                                          );
                                        })}
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
                                    <div class="dataTables_length">
                                      <label>Course Level&#160;:</label>
                                      <select
                                        name="courseLevel"
                                        onChange={(evt) =>
                                          this.handleChange(evt)
                                        }
                                        defaultValue={this.state.courseLevel}
                                        aria-controls="example1"
                                        value=""
                                        class="form-control input-sm"
                                        style={{ width: "100%" }}
                                      >
                                        <option value="-1">
                                          All Course Level
                                        </option>
                                        {courseLevelList &&
                                          courseLevelList.map((data) => {
                                            return (
                                              <option value={data.id}>
                                                {data.MasterName}
                                              </option>
                                            );
                                          })}
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
                                    id="example1"
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
                                      {streamList &&
                                        streamList.length > 0 &&
                                        streamList.map((data, key) => {
                                          return (
                                            <tr>
                                              <td>{++key}</td>
                                              <td>{data.MasterName}</td>
                                              <td>{data.Parent.MasterName}</td>
                                              <td>
                                                {!data.MasterStatus &&
                                                data.MasterStatus != "Inactive"
                                                  ? "Active"
                                                  : "Inactive"}
                                              </td>
                                              <td>
                                                <Link
                                                  to={
                                                    "/admin/build/edit-stream/" +
                                                    data.id
                                                  }
                                                  class="edit"
                                                >
                                                  <span class="fa fa-pencil-square-o"></span>
                                                </Link>
                                              </td>
                                            </tr>
                                          );
                                        })}
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
                                    <div class="dataTables_length">
                                      <label>Course Level&#160;:</label>
                                      <select
                                        name="courseLevel"
                                        onChange={(evt) =>
                                          this.handleChange(evt)
                                        }
                                        defaultValue={this.state.courseLevel}
                                        aria-controls="example1"
                                        value=""
                                        class="form-control input-sm"
                                        style={{ width: "100%" }}
                                      >
                                        <option value="-1">
                                          All Course Level
                                        </option>
                                        {courseLevelList &&
                                          courseLevelList.map((data) => {
                                            return (
                                              <option value={data.id}>
                                                {data.MasterName}
                                              </option>
                                            );
                                          })}
                                      </select>
                                    </div>
                                  </div>
                                  <div class="col-sm-2">
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <label>Stream&#160;:</label>
                                      <select
                                        name="courseStream"
                                        class="form-control"
                                        onChange={(evt) =>
                                          this.handleChange(evt)
                                        }
                                        defaultValue={this.state.courseStream}
                                      >
                                        <option value="">Select Stream</option>
                                        {streamList &&
                                          streamList.map((data) => {
                                            return (
                                              <option value={data.id}>
                                                {data.MasterName}
                                              </option>
                                            );
                                          })}
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
                                    id="example2"
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
                                      {courseList &&
                                        courseList.length > 0 &&
                                        courseList.map((data, key) => {
                                          return (
                                            <tr>
                                              <td>{++key}</td>
                                              <td>{data.MasterName}</td>
                                              <td>{data.Parent.MasterName}</td>
                                              <td></td>
                                              <td>{data.MasterDesc}</td>
                                              <td>
                                                {!data.MasterStatus &&
                                                data.MasterStatus != "Inactive"
                                                  ? "Active"
                                                  : "Inactive"}
                                              </td>
                                              <td>
                                                <Link
                                                  to={
                                                    "/admin/build/edit-course/" +
                                                    data.id
                                                  }
                                                  class="edit"
                                                >
                                                  <span class="fa fa-pencil-square-o"></span>
                                                </Link>
                                              </td>
                                            </tr>
                                          );
                                        })}
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
