import React from "react";
import "../Style.css";
import Url from "../../../components/URL/Url";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const axios = require("axios");
const md5 = require("md5");
class EditUser extends React.Component {
  componentDidMount() {
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });

    //Getting ID From URL
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf("/") + 1);
    //For User By ID
    axios
      .get(Url + `api/users/getUserbyId?id=${id}`, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("res", res);
        this.setState({
          id: res.data.data.id,
          role_id: res.data.data.role_id,
          name: res.data.data.name,
          email: res.data.data.email,
          mobile: res.data.data.mobile,
        });
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occured at API end (" + err.message + ")");
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
  }
  constructor() {
    super();
    this.state = {
      show: false,
      show2: false,
      roleList: [],
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
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  updateUser(evt, id) {
    const postData = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      role_id: this.state.role_id,
    };

    axios
      .put(Url + `api/users/update/${id}`, postData)
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload();
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occured at API end (" + err.message + ")");
      });
  }
  render() {
    const roleList = this.state.roleList || [];
    return (
      <section class="content">
        <ToastContainer />
        <div class="row">
          <div class="col-md-12">
            <div class="box box-primary">
              <div class="box-header">
                <h3 class="box-title">Edit User</h3>
              </div>
              <hr />
              <form>
                <div class="box-body">
                  <div class="col-lg-12 col-sm-12 col-xs-12">
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
                  <div class="col-lg-12 col-sm-12 col-xs-12">
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
                  {/* <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        class="form-control"
                        id="password"
                      />
                    </div>
                  </div> */}
                  <div class="col-lg-12 col-sm-12 col-xs-12">
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
                  <div class="col-lg-12 col-sm-12 col-xs-12">
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
                              <option
                                value={data.id}
                                key={data.id}
                                selected={this.state.role_id == data.id}
                              >
                                {data.role}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
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
                      <center>
                        <input
                          class="btn btn-warning"
                          type="submit"
                          value="Update"
                          onClick={(evt) => this.updateUser(evt, this.state.id)}
                        />
                      </center>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default EditUser;
