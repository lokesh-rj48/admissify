import React, { useState } from "react";
import { Link } from "react-router-dom";
//Bootstrap and jQuery libraries
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "./Style.css";
import Multiselect from "multiselect-react-dropdown";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "font-awesome/css/font-awesome.min.css";
import $ from "jquery";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const axios = require("axios");
class Coaches extends React.Component {
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
      // $("#example").DataTable();
    });
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });

    //For Coach List
    axios
      .get(`http://localhost:8081/api/coach/getAllcoach`, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("res", res);
        this.setState({ coachList: res.data.data });
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occured at API end (" + err.message + ")");
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
      name: "",
      email: "",
      mobileNo: "",
      alternateMobileNo: "",
      gender: "",
      profileImage: "",
      address: "",
      education: "",
      experience: "",
      city: "",
      country: "",
      price: "",
      timeing: "",
      additionalInfo: "",
    };
  }
  handleModel() {
    this.setState({ show: !this.state.show });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  addCoach(evt) {
    const postData = {
      name: this.state.name,
      mobileNo: this.state.mobileNo,
      email: this.state.email,
      alternateMobileNo: this.state.alternateMobileNo,
      gender: this.state.gender,
      profileImage: this.state.profileImage,
      address: this.state.address,
      education: this.state.education,
      experience: this.state.experience,
      cityId: this.state.cityId,
      //countryId: this.state.countryId,
      price: this.state.price,
      timeing: this.state.timeing,
      additionalInfo: this.state.additionalInfo,
    };
    console.log(postData);
    evt.preventDefault();
    axios
      .post(`http://localhost:8081/api/coach/add`, postData, {
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
        toast.error("Error occurred at API end (" + err.message + ")");
        //toast.error("Coach already exist!");
      });
  }

  render() {
    const coachList = this.state.coachList || [];
    return (
      <section className="content">
        <ToastContainer />
        <Modal show={this.state.show} onHide={() => this.handleModel()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Coach</h3>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(evt) => this.addCoach(evt)}>
              <div class="box-body row">
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label> Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.name}
                      class="form-control"
                      placeholder="Enter coach name"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.email}
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
                      name="mobileNo"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.mobileNo}
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
                      name="alternateMobileNo"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.alternateMobileNo}
                      class="form-control number"
                      placeholder="Enter mobile number"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Gender</label>
                    <select
                      class="form-control"
                      name="gender"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.gender}
                    >
                      <option value="">Select Gender</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Profile Image</label>
                    <input
                      type="file"
                      name="profileImage"
                      class="form-control"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.profileImage}
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.address}
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
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.education}
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
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.experience}
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
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.price}
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
                      defaultValue={this.state.timeing}
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.timeing}
                      displayValue="timeSlot"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Availability Days</label>
                    <Multiselect
                      options={this.state.DayOptions}
                      displayValue="day"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>University</label>
                    <select class="form-control" name="university">
                      <option value="">Select</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>City</label>
                    <select
                      class="form-control"
                      name="cityId"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.cityId}
                    >
                      <option value="">Select City</option>
                      <option value="1">Noida</option>
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
                      name="additionalInfo"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.additionalInfo}
                      placeholder="Enter text"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12 text-center">
                <button class="btn btn-warning" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header d-flexi">
              <h3 class="box-title">Coach List</h3>
              <div class="dataTables_length" id="example1_length"></div>
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
                <table id="example" class="table table-bordered counter ">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Name</th>
                      <th>Profile</th>
                      <th>Mobile</th>
                      <th>Gender</th>
                      <th>City</th>
                      <th>Country</th>
                      <th>No of Coaching</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coachList &&
                      coachList.length > 0 &&
                      coachList.map((data, key) => {
                        return (
                          <tr>
                            <td>{++key}</td>
                            <td>{data.name}</td>
                            <td>{data.profileImage}</td>
                            <td>{data.mobileNo}</td>
                            <td>
                              {data.gender == 1
                                ? "Male"
                                : data.gender == 2
                                ? "Female"
                                : ""}
                            </td>
                            <td>{data.cityId}</td>
                            <td>{data.countryId}</td>
                            <td></td>
                            <td>
                              {!data.MasterStatus &&
                              data.MasterStatus != "Inactive"
                                ? "Active"
                                : "Inactive"}
                            </td>
                            <td>
                              <Link
                                to={"/admin/build/edit-coach/" + data.id}
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
    );
  }
}
export default Coaches;
