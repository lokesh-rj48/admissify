import React from "react";
import "./Style.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
import Multiselect from "multiselect-react-dropdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const axios = require("axios");
class EditCoaches extends React.Component {
  componentDidMount() {
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });
    $("#type").on("change", function () {
      if (this.value == "Content") {
        $("#content").show();
        $("#video").hide();
      }
      if (this.value == "Video") {
        $("#video").show();
        $("#content").hide();
      }
    });

    //Getting ID From URL
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf("/") + 1);

    //For Coach By ID
    axios
      .get(`http://localhost:8081/api/coach/getCoachbyId/${id}`, {
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
      options: [
        { status: "Admissify Certified", id: 1 },
        { status: "Admissify Verified", id: 2 },
        { status: "Premium", id: 3 },
      ],
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

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  updateCoach(evt, id) {
    console.log("Update");
    const postData = {
      name: this.state.name,
      mobileNo: this.state.mobileNo,
      email: this.state.email,
      alternateMobileNo: this.state.alternateMobileNo,
      gender: this.state.gender,
      //profileImage: this.state.profileImage,
      address: this.state.address,
      education: this.state.education,
      experience: this.state.experience,
      //cityId: this.state.cityId,
      //countryId: this.state.countryId,
      price: this.state.price,
      timeing: this.state.timeing,
      additionalInfo: this.state.additionalInfo,
    };

    axios
      .put(`http://localhost:8081/api/coach/update/${id}`, postData, {
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
      });
  }
  render() {
    const coachList = this.state.coachList || [];
    return (
      <section class="content">
        <ToastContainer />
        <div class="row">
          <div class="col-md-12">
            <div class="box box-primary">
              <div class="box-header">
                <h3 class="box-title">Edit Coach</h3>
              </div>
              <hr />
              <from>
                <div class="box-body row">
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label> Name</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        onChange={(evt) => this.handleChange(evt)}
                        defaultValue={coachList.name}
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
                        defaultValue={coachList.email}
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
                        defaultValue={coachList.mobileNo}
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
                        defaultValue={coachList.alternateMobileNo}
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
                      >
                        <option value="">Select Gender</option>
                        <option value="1" selected={coachList.gender == 1}>
                          Male
                        </option>
                        <option value="2" selected={coachList.gender == 2}>
                          Female
                        </option>
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
                        onChange={(evt) => this.handleChange(evt)}
                        defaultValue={coachList.address}
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
                        defaultValue={coachList.education}
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
                        defaultValue={coachList.experience}
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
                        defaultValue={coachList.price}
                        class="form-control number"
                        placeholder="Enter price"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Time</label>
                      <input
                        type="time"
                        name="timeing"
                        onChange={(evt) => this.handleChange(evt)}
                        defaultValue={coachList.timeing}
                        class="form-control"
                        placeholder="Enter time"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>City</label>
                      <select class="form-control">
                        <option value="">Select City</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Coach Status</label>
                      <Multiselect
                        options={this.state.options}
                        selectedValues={this.state.selectedValue}
                        onSelect={this.onSelect}
                        onRemove={this.onRemove}
                        displayValue="status"
                      />
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
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                      <div class="form-group">
                        <b for="addressTextarea">Additional Field</b>
                        <textarea
                          id="addressTextarea"
                          class="form-control"
                          rows="3"
                          name="additionalInfo"
                          onChange={(evt) => this.handleChange(evt)}
                          defaultValue={coachList.additionalInfo}
                          placeholder="Enter text"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <center>
                      <button
                        onClick={(evt) => this.updateCoach(evt, coachList.id)}
                        class="btn btn-warning"
                        type="submit"
                      >
                        Update
                      </button>
                    </center>
                  </div>
                </div>
              </from>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default EditCoaches;
