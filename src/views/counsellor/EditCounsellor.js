import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
//multiple tags
//Bootstrap and jQuery libraries
import { Modal } from "react-bootstrap";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
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
import Multiselect from "multiselect-react-dropdown";
class EditCounsellor extends React.Component {
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
  render() {
    return (
      <section className="content">
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
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <div
                                  class="dataTables_length"
                                  id="example1_length"
                                ></div>
                              </div>
                              <div class="box-body">
                                <div class="box-body row">
                                  <div class="col-lg-6 col-sm-6 col-xs-12">
                                    <div class="form-group">
                                      <label> Name</label>
                                      <input
                                        type="text"
                                        name="name"
                                        class="form-control"
                                        placeholder="Enter counsellor name"
                                      />
                                    </div>
                                  </div>
                                  <div class="col-lg-6 col-sm-6 col-xs-12">
                                    <div class="form-group">
                                      <label>Email</label>
                                      <input
                                        type="email"
                                        name="email"
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
                                        name="mob"
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
                                        name="mob"
                                        class="form-control number"
                                        placeholder="Enter mobile number"
                                      />
                                    </div>
                                  </div>
                                  <div class="col-lg-6 col-sm-6 col-xs-12">
                                    <div class="form-group">
                                      <label>Gender</label>
                                      <select class="form-control">
                                        <option value="">Select Gender</option>
                                        <option value="">Male</option>
                                        <option value="">Female</option>
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
                                      <select class="form-control ">
                                        <option value="">Select City</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="col-lg-12 col-sm-12 col-xs-12">
                                    <div class="form-group">
                                      <label>Counsellor Status</label>
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
                                  </div>
                                  <div class="col-lg-12 col-sm-12 col-xs-12">
                                    <div class="form-group">
                                      <center>
                                        <input
                                          class="btn btn-warning"
                                          type="submit"
                                          value="Update"
                                        />
                                      </center>
                                    </div>
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
export default EditCounsellor;
