import React, { useState } from "react";
import { Link } from "react-router-dom";
//Bootstrap and jQuery libraries
import Url from "../../components/URL/Url";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const axios = require("axios");
const md5 = require("md5");
class Users extends React.Component {
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
      setTimeout(() => {
        $("#example").DataTable();
        $("#example1").DataTable();
      }, 100);
    });
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });

    //For Get All UserRole
    axios
      .get(Url + `api/role/getAllRole`)
      .then((res) => {
        console.log("res", res);
        this.setState({ roleList: res.data.data });
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occurred at API end (" + err.message + ")");
      });

    //For Get All User
    axios
      .get(Url + `api/users/getUsersList`)
      .then((res) => {
        console.log("res", res);
        this.setState({ userList: res.data.data });
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occurred at API end (" + err.message + ")");
      });
  }

  //User Active Inactive Status
  activeInactive(evt, status, id) {
    if (status == 1) {
      status = 0;
    } else {
      status = 1;
    }
    const r = window.confirm("Do you want to change status ?");
    if (r == true) {
      const postData = {
        status: status,
      };
      axios
        .put(Url + `api/users/update/${id}`, postData, {
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
    }
  }

  constructor() {
    super();
    this.state = {
      show: false,
      show2: false,
      roleList: [],
      additional_info: "",
      role: "",
      name: "",
      email: "",
      mobile: "",
      password: "",
      role_id: "",
      profile_photo: "",
      created_by: "",
      updated_by: "",
    };
  }
  handleModel() {
    this.setState({ show: !this.state.show });
  }
  handleModel2() {
    this.setState({ show2: !this.state.show2 });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  addUserRole(evt) {
    const postData = {
      role: this.state.role,
      additional_info: this.state.additional_info,
    };
    axios
      .post(`http://localhost:8081/api/role/add`, postData, {
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
  }
  addUser(evt) {
    const postData = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      password: md5(this.state.password),
      role_id: this.state.role_id,
      //profile_photo: this.state.profile_photo,
      //created_by: this.state.created_by,
      // updated_by: this.state.updated_by,
    };
    axios
      .post(`http://localhost:8081/api/users/add`, postData, {})
      .then((res) => {
        console.log("res", res);
        toast.success(res.data.message);
        window.location.reload();
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occurred at API end (" + err.message + ")");
      });
  }
  render() {
    const roleList = this.state.roleList || [];
    const userList = this.state.userList || [];
    return (
      <section className="content">
        <ToastContainer />
        <Modal show={this.state.show} onHide={() => this.handleModel()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add User</h3>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(evt) => this.addUser(evt)}>
              <div class="box-body row">
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.name}
                      placeholder="Enter user name"
                      class="form-control"
                      id="name"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Mobile</label>
                    <input
                      type="text"
                      name="mobile"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.mobile}
                      placeholder="Enter mobile number"
                      maxLength="10"
                      class="form-control number"
                      id="mobile"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Email/User Name</label>
                    <input
                      type="email"
                      name="email"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.email}
                      placeholder="Enter user email"
                      class="form-control"
                      id="email"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.password}
                      placeholder="Enter user password"
                      class="form-control"
                      id="password"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>User role</label>
                    <select
                      name="role_id"
                      class="form-control"
                      id="stream"
                      onChange={(evt) => this.handleChange(evt)}
                    >
                      <option value="">Select User Role</option>
                      {roleList &&
                        roleList.map((data) => {
                          return (
                            <option value={data.id} key={data.id}>
                              {data.role}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Profile photo</label>
                    <input
                      type="file"
                      name="profile_photo"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.profile_photo}
                      class="form-control"
                      id="profile_photo"
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
        </Modal>
        <Modal show={this.state.show2} onHide={() => this.handleModel2()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add User Role</h3>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(evt) => this.addUserRole(evt)}>
              <div class="box-body">
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>User Role</label>
                    <input
                      type="text"
                      name="role"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.role}
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
                      name="additional_info"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.additional_info}
                      placeholder="Enter text"
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
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {userList &&
                                        userList.length > 0 &&
                                        userList.map((data, key) => {
                                          return (
                                            <tr key={data.id}>
                                              <td>{++key}</td>
                                              <td>{data.name}</td>
                                              <td>{data.email}</td>
                                              <td>{data.mobile}</td>
                                              <td>
                                                <a
                                                  href="javascript:void(0)"
                                                  onClick={(evt) =>
                                                    this.activeInactive(
                                                      evt,
                                                      data.status,
                                                      data.id
                                                    )
                                                  }
                                                >
                                                  {data.status == 1 ? (
                                                    <span class="label label-lg  label-light-success label-inline">
                                                      Active
                                                    </span>
                                                  ) : (
                                                    <span class="label label-lg  label-light-danger label-inline">
                                                      Inactive
                                                    </span>
                                                  )}
                                                </a>
                                              </td>
                                              <td>
                                                <Link
                                                  to={
                                                    "/admin/build/edit-user/" +
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
                                    id="example1"
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
                                      {roleList &&
                                        roleList.length > 0 &&
                                        roleList.map((data, key) => {
                                          return (
                                            <tr key={data.id}>
                                              <td>{++key}</td>
                                              <td>{data.role}</td>
                                              <td>
                                                <Link
                                                  to={
                                                    "/admin/build/user-permission"
                                                  }
                                                  class="edit"
                                                >
                                                  <span
                                                    class="fa fa-check-square"
                                                    style={{
                                                      marginRight: "5px",
                                                    }}
                                                    title="User Permission"
                                                  ></span>
                                                </Link>{" "}
                                                <Link
                                                  to={
                                                    "/admin/build/edit-user-role/" +
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
export default Users;
