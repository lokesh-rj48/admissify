import React from "react";
import "./Style.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
import Multiselect from "multiselect-react-dropdown";
import { Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        this.setState({
          id: res.data.data.id,
          name: res.data.data.name,
          email: res.data.data.email,
          mobileNo: res.data.data.mobileNo,
          alternateMobileNo: res.data.data.alternateMobileNo,
          gender: res.data.data.gender,
          profileImage: res.data.data.profileImage,
          address: res.data.data.address,
          education: res.data.data.education,
          experience: res.data.data.experience,
          city: res.data.data.city,
          price: res.data.data.price,
          timeing: res.data.data.timeing,
          additionalInfo: res.data.data.additionalInfo,
        });
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
      showBlog: false,
      showDisc: false,
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
  handleModelFaq() {
    this.setState({ show2: !this.state.show2 });
  }
  handleModelBlog() {
    this.setState({ showBlog: !this.state.showBlog });
  }
  handleModelDisc() {
    this.setState({ showDisc: !this.state.showDisc });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  updateCoach(evt, id) {
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
    console.log("postData", postData);
    evt.preventDefault();
    return;
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
    return (
      <section className="content">
        <ToastContainer />
        <Modal show={this.state.show} onHide={() => this.handleModel()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Article</h3>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div class="box-body row">
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label> Title</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Enter counsellor name"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label> Description</label>
                    <textarea
                      id="addressTextarea"
                      class="form-control"
                      rows="3"
                      name="about"
                      placeholder="Enter content"
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
        <Modal show={this.state.show2} onHide={() => this.handleModelFaq()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add FAQ</h3>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div class="box-body row">
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label> Title</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Enter counsellor name"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label> Description</label>
                    <textarea
                      id="addressTextarea"
                      class="form-control"
                      rows="3"
                      name="about"
                      placeholder="Enter content"
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
        <Modal show={this.state.showBlog} onHide={() => this.handleModelBlog()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Blog</h3>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div class="box-body row">
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label> Title</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Enter counsellor name"
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
                      name="about"
                      placeholder="Enter content"
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
        <Modal show={this.state.showDisc} onHide={() => this.handleModelDisc()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Discussion</h3>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div class="box-body row">
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label> Category</label>
                    <select className="form-control">
                      <option value="">Select</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Sub Category</label>
                    <select className="form-control">
                      <option value="">Select</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Discussion</label>
                    <textarea
                      id="addressTextarea"
                      class="form-control"
                      rows="3"
                      name="about"
                      placeholder="Enter content"
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
                        <CNavLink>Counsellor Details</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Review</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>FAQ</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Article</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Blog</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Discussion</CNavLink>
                      </CNavItem>
                    </CNav>
                    <CTabContent>
                      <CTabPane>
                        <section class="content">
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
                                          onChange={(evt) =>
                                            this.handleChange(evt)
                                          }
                                          defaultValue={this.state.name}
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
                                          onChange={(evt) =>
                                            this.handleChange(evt)
                                          }
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
                                          onChange={(evt) =>
                                            this.handleChange(evt)
                                          }
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
                                          onChange={(evt) =>
                                            this.handleChange(evt)
                                          }
                                          defaultValue={
                                            this.state.alternateMobileNo
                                          }
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
                                          onChange={(evt) =>
                                            this.handleChange(evt)
                                          }
                                        >
                                          <option value="">
                                            Select Gender
                                          </option>
                                          <option
                                            value="1"
                                            selected={this.state.gender == 1}
                                          >
                                            Male
                                          </option>
                                          <option
                                            value="2"
                                            selected={this.state.gender == 2}
                                          >
                                            Female
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Profile Image</label>
                                        <input
                                          type="file"
                                          name="profile"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <label>Address</label>
                                        <input
                                          type="text"
                                          name="address"
                                          onChange={(evt) =>
                                            this.handleChange(evt)
                                          }
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
                                          onChange={(evt) =>
                                            this.handleChange(evt)
                                          }
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
                                          onChange={(evt) =>
                                            this.handleChange(evt)
                                          }
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
                                          onChange={(evt) =>
                                            this.handleChange(evt)
                                          }
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
                                          onChange={(evt) =>
                                            this.handleChange(evt)
                                          }
                                          defaultValue={this.state.timeing}
                                          name="timeing"
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
                                        <select
                                          class="form-control"
                                          name="university"
                                        >
                                          <option value="">Select</option>
                                        </select>
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
                                    <div class="col-lg-12 col-sm-12 col-xs-12">
                                      <div class="form-group">
                                        <label>Coach Status</label>
                                      </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-xs-12">
                                      <div class="form-group">
                                        <input type="checkbox" value="1" />{" "}
                                        Admissify Certified{" "}
                                        <input type="checkbox" value="1" />{" "}
                                        Admissify Verified{" "}
                                        <input type="checkbox" value="1" />{" "}
                                        Premium
                                      </div>
                                    </div>
                                    <div class="col-lg-12 col-sm-12 col-xs-12">
                                      <div class="form-group">
                                        <label>Country</label>
                                        <table class="table  table-responsive">
                                          <tbody>
                                            <tr>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="bank"
                                                  class="mr-r"
                                                />
                                                <span>India</span>
                                              </td>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="bank"
                                                  class="mr-r"
                                                />
                                                <span>Australia</span>
                                              </td>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="bank"
                                                  class="mr-r"
                                                />
                                                <span>Belgium</span>
                                              </td>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="bank"
                                                  class="mr-r"
                                                />
                                                <span>China</span>
                                              </td>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="bank"
                                                  class="mr-r"
                                                />
                                                <span>Cuba</span>
                                              </td>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="bank"
                                                  class="mr-r"
                                                />
                                                <span>Denmark</span>
                                              </td>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="bank"
                                                  class="mr-r"
                                                />
                                                <span>France</span>
                                              </td>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="bank"
                                                  class="mr-r"
                                                />
                                                <span>Germany</span>
                                              </td>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="bank"
                                                  class="mr-r"
                                                />
                                                <span>New Zealand</span>
                                              </td>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="bank"
                                                  class="mr-r"
                                                />
                                                <span>Philippines</span>
                                              </td>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="bank"
                                                  class="mr-r"
                                                />
                                                <span>Singapore</span>
                                              </td>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="bank"
                                                  class="mr-r"
                                                />
                                                <span>Switzerland</span>
                                              </td>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="bank"
                                                  class="mr-r"
                                                />
                                                <span>Thailand</span>
                                              </td>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="bank"
                                                  class="mr-r"
                                                />
                                                <span>Madagascar</span>
                                              </td>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="bank"
                                                  class="mr-r"
                                                />
                                                <span>Maldives</span>
                                              </td>
                                              <td>
                                                <input
                                                  type="checkbox"
                                                  name="bank"
                                                  class="mr-r"
                                                />
                                                <span>Israel</span>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                      <div class="col-lg-12 col-sm-12 col-xs-12">
                                        <div class="form-group">
                                          <b for="addressTextarea">
                                            Additional Field
                                          </b>
                                          <textarea
                                            id="addressTextarea"
                                            class="form-control"
                                            rows="3"
                                            name="additionalInfo"
                                            onChange={(evt) =>
                                              this.handleChange(evt)
                                            }
                                            defaultValue={
                                              this.state.additionalInfo
                                            }
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
                                          onClick={(evt) =>
                                            this.updateCoach(evt, this.state.id)
                                          }
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
                      </CTabPane>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">Review List</h3>
                                <div
                                  class="dataTables_length"
                                  id="example1_length"
                                ></div>
                              </div>
                              <div class="box-body">
                                <hr />
                                <div class="info-box-content">
                                  <table
                                    id="example"
                                    class="table table-bordered counter "
                                  >
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>Student Name</th>
                                        <th>Date</th>
                                        <th>Review</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Shruti Hasan</td>
                                        <td>27 Mar 2021</td>
                                        <td>
                                          Lorem Ipsum is simply dummy text of
                                          the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's
                                          standard dummy text ever since the
                                          1500s, when an unknown printer took a
                                          galley of type and scrambled it to
                                          make a type specimen book.
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
                                <h3 class="box-title">Review List</h3>
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
                                          this.handleModelFaq();
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
                                        <th>Title</th>
                                        <th>Description</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>
                                          5 best undergraduate courses for study
                                          abroad aspirants
                                        </td>
                                        <td>
                                          Studying the alternatives overseas has
                                          a lot to offer, from cultural
                                          diversity to a clean atmosphere to
                                          strong moral standards and a good
                                          degree of education. There is nothing
                                          like studying abroad when it comes to
                                          welcoming cities, renowned
                                          universities, and wonderful climates.
                                          It, on the other hand, draws students
                                          from all over the world. With so many
                                          courses to choose from, picking what
                                          to do with your time might be
                                          difficult. When it comes to studying
                                          abroad, choose the correct course is
                                          crucial. So, keep studying overseas
                                          while preparing for stronger winds.
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
                                <h3 class="box-title">Article List</h3>
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
                                        <th>Title</th>
                                        <th>Article Description</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>
                                          5 best undergraduate courses for study
                                          abroad aspirants
                                        </td>
                                        <td>
                                          Studying the alternatives overseas has
                                          a lot to offer, from cultural
                                          diversity to a clean atmosphere to
                                          strong moral standards and a good
                                          degree of education. There is nothing
                                          like studying abroad when it comes to
                                          welcoming cities, renowned
                                          universities, and wonderful climates.
                                          It, on the other hand, draws students
                                          from all over the world. With so many
                                          courses to choose from, picking what
                                          to do with your time might be
                                          difficult. When it comes to studying
                                          abroad, choose the correct course is
                                          crucial. So, keep studying overseas
                                          while preparing for stronger winds.
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
                                <h3 class="box-title">Blog List</h3>
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
                                          this.handleModelBlog();
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
                                        <th>Title</th>
                                        <th>Blog Description</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>
                                          Collaboration and communication using
                                          digital media
                                        </td>
                                        <td>
                                          Every minute and in every place, life
                                          is full of occurrences. Digital and
                                          interactive media is one such healthy
                                          industry that captures the most
                                          genuine occurrences that occur in our
                                          daily lives. It has a significant
                                          social influence. It is frequently
                                          regarded as one of the most
                                          significant subjects in other
                                          countries since it entails the
                                          responsibility of conveying the
                                          correct message to the target
                                          audience.
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
                                <h3 class="box-title">Discussion</h3>
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
                                          this.handleModelDisc();
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
                                        <th>Category</th>
                                        <th>Sub Category</th>
                                        <th>Topic</th>
                                        <th>Posted By</th>
                                        <th>Discussion</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Regarding Package</td>
                                        <td>Package</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Dheeraj Kumar</td>
                                        <td>
                                          Every minute and in every place, life
                                          is full of occurrences. Digital and
                                          interactive media is one such healthy
                                          industry that captures the most
                                          genuine occurrences that occur in our
                                          daily lives. It has a significant
                                          social influence. It is frequently
                                          regarded as one of the most
                                          significant subjects in other
                                          countries since it entails the
                                          responsibility of conveying the
                                          correct message to the target
                                          audience.
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
export default EditCoaches;
