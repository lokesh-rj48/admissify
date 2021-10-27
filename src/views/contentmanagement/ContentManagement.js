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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ckeditor, { CKEditor } from "@ckeditor/ckeditor5-react";
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
class ContentManagement extends React.Component {
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });
  }

  constructor() {
    super();
    this.state = {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
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
  handleModel5() {
    this.setState({ show5: !this.state.show5 });
  }
  handleModel6() {
    this.setState({ show6: !this.state.show6 });
  }

  DisplayHideShow() {
    var Type = $("#type").val();
    if (Type == "Content") {
      $("#contentTesti").show();
      $("#videoTesti").hide();
    }
    if (Type == "Video") {
      console.log(Type);
      $("#videoTesti").show();
      $("#contentTesti").hide();
    }
  }
  officeValidations(evt) {
    $(".error-class").remove();
    var Name = $("#name").val();
    var Address = $("#addressTextarea").val();
    if (!Name) {
      $("#name").after('<div class="error-class">Enter office location.</div>');
      evt.preventDefault();
    }
    if (!Address) {
      $("#addressTextarea").after(
        '<div class="error-class">Enter about.</div>'
      );
      evt.preventDefault();
    }
    return true;
  }
  articleValidations(evt) {
    $(".error-class").remove();
    var AuthorNAme = $("#author_name").val();
    var ArticleTitle = $("#article_title").val();
    var ArticleBanner = $("#article_banner").val();
    var ArticleTags = $("#article_tags").val();
    if (!AuthorNAme) {
      $("#author_name").after(
        '<div class="error-class">Enter author name.</div>'
      );
      evt.preventDefault();
    }
    if (!ArticleTitle) {
      $("#article_title").after('<div class="error-class">Enter title.</div>');
      evt.preventDefault();
    }
    if (!ArticleBanner) {
      $("#article_banner").after(
        '<div class="error-class">Choose article banner.</div>'
      );
      evt.preventDefault();
    }
    if (!ArticleTags) {
      $("#article_tags").after(
        '<div class="error-class">Enter article tags.</div>'
      );
      evt.preventDefault();
    }
    return true;
  }

  render() {
    return (
      <section className="content">
        <Modal show={this.state.show} onHide={() => this.handleModel()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Article</h3>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(evt) => this.articleValidations(evt)}>
              <div class="box-body row">
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Author Name</label>
                    <input
                      type="text"
                      name="author_name"
                      placeholder="Enter author name"
                      class="form-control"
                      id="author_name"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Enter title"
                      class="form-control"
                      id="article_title"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Article Banner</label>
                    <input
                      type="file"
                      name="banner"
                      class="form-control"
                      id="article_banner"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Tags</label>
                    <input
                      type="text"
                      name="tags"
                      class="form-control"
                      id="article_tags"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label for="courseTextarea">Description</label>
                    <CKEditor
                      id="article_desc"
                      editor={ClassicEditor}
                      onInit={(editor) => {
                        //// this inializes our application
                      }}
                    />
                  </div>
                </div>
                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    padding: "8px 12px 0 5px",
                    "background-color": "#ebedef",
                  }}
                >
                  <div class="form-group">
                    <label for="courseTextarea">
                      <strong>Meta Tags Settings</strong>
                    </label>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Meta Title</label>
                    <input
                      type="texrt"
                      name="meta_title"
                      class="form-control"
                      placeholder="Enter meta title"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label for="keywordsTextarea">Meta Keywords</label>
                    <textarea
                      id="keywordsTextarea"
                      class="form-control"
                      rows="3"
                      name="meta_keywords"
                      placeholder="Enter meta keywords"
                    ></textarea>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Meta Description</label>
                    <CKEditor
                      editor={ClassicEditor}
                      onInit={(editor) => {
                        //// this inializes our application
                      }}
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
          <Modal.Footer>
            {/* <button
              class="btn btn-danger"
              type="submit"
              onClick={() => {
                this.handleModel();
              }}
              value="Close"
            >
              Close
            </button> */}
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.show2} onHide={() => this.handleModel2()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Testimonial</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>Select Type</label>
                  <select
                    class="form-control"
                    id="type"
                    onChange={() => this.DisplayHideShow()}
                  >
                    <option value="">Select Type</option>
                    <option value="Content">Content</option>
                    <option value="Video">Video</option>
                  </select>
                </div>
              </div>
              <div
                class="col-lg-12 col-sm-12 col-xs-12 row content hidden"
                id="contentTesti"
                style={{ display: "none" }}
              >
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      class="form-control"
                      id="author_name"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Profile Image</label>
                    <input type="file" name="profile" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Rating</label>
                    <input
                      type="text"
                      name="rating"
                      class="form-control number"
                      placeholder="Give rating 1 to 5"
                      maxLength="1"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label for="testimonialTextarea">Content</label>
                    <textarea
                      id="testimonialTextarea"
                      class="form-control"
                      rows="3"
                      name="content"
                      placeholder="Enter content"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-12 col-sm-12 col-xs-12 row video hidden"
                id="videoTesti"
                style={{ display: "none" }}
              >
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      class="form-control"
                      id="author_name"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Profile Image</label>
                    <input type="file" name="profile" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Rating</label>
                    <input
                      type="text"
                      name="rating"
                      class="form-control number"
                      placeholder="Give rating 1 to 5"
                      maxLength="1"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label for="">Video</label>
                    <input type="file" name="video" class="form-control " />
                  </div>
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
        <Modal show={this.state.show3} onHide={() => this.handleModel3()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Office Location</h3>
          </Modal.Header>
          <Modal.Body>
            <form return onSubmit={(evt) => this.officeValidations(evt)}>
              <div class="box-body">
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Enter title"
                      class="form-control"
                      id="title"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone_number"
                      placeholder="Enter phone number"
                      class="form-control"
                      id="phone_number"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Pincode</label>
                    <input
                      type="tel"
                      name="pincode"
                      placeholder="Enter pincode"
                      class="form-control number"
                      id="pincode"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Location</label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Enter location"
                      class="form-control"
                      id="location"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>City</label>
                    <select className="form-control">
                      <option value="">Select</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label for="addressTextarea">Address</label>
                    <textarea
                      id="addressTextarea"
                      class="form-control"
                      rows="3"
                      name="about"
                      placeholder="Enter address"
                    ></textarea>
                  </div>
                </div>
                <center>
                  <button class="btn btn-warning" type="submit">
                    Submit
                  </button>
                </center>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            {/* <button class="btn btn-warning" type="submit">
              Submit
            </button> */}
            {/* <button
              class="btn btn-danger"
              type="submit"
              onClick={() => {
                this.handleModel3();
              }}
              value="Close"
            >
              Close
            </button> */}
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.show4} onHide={() => this.handleModel4()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Website Page Meta</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Page Type</label>
                  <select class="form-control select-option" name="page_type">
                    <option value="">Select Page Type</option>
                    <option value="">Home Page</option>
                    <option value="">Article</option>
                    <option value="">About Us Page</option>
                    <option value="">Scholarship</option>
                    <option value="">Visa Assistance</option>
                    <option value="">Coaching</option>
                    <option value="">Mobile App Landing</option>
                    <option value="">Contact Us Page</option>
                    <option value="">Study Abroad Page</option>
                    <option value="">Check My Chance</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label for="">Title</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter title"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label for="addressTextarea">Meta Description</label>
                  <textarea
                    id="addressTextarea"
                    class="form-control"
                    rows="3"
                    name="meta_description"
                    maxLength="255"
                    placeholder="Enter meta description"
                  ></textarea>
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label for="addressTextarea">Meta Keywords</label>
                  <textarea
                    id="addressTextarea"
                    class="form-control"
                    rows="3"
                    name="meta_keywords"
                    placeholder="Enter meta keywords"
                    maxLength="255"
                  ></textarea>
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
          </Modal.Body>
          <Modal.Footer>
            <button class="btn btn-warning" type="submit">
              Submit
            </button>
            <button
              class="btn btn-danger"
              type="submit"
              onClick={() => {
                this.handleModel4();
              }}
              value="Close"
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.show5} onHide={() => this.handleModel5()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Faq</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Type</label>
                  <select class="form-control select-option" name="type">
                    <option value="">Select Type</option>
                    <option value="UG">UG</option>
                    <option value="PG">PG</option>
                    <option value="MBA">MBA</option>
                    <option value="MBBS">MBBS</option>
                    <option value="Engineering">Engineering</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label for="addressTextarea">Question</label>
                  <input
                    type="text"
                    name="question"
                    placeholder="Enter heading"
                    class="form-control"
                    id="question"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label for="">Description</label>
                  <CKEditor
                    editor={ClassicEditor}
                    onInit={(editor) => {
                      //// this inializes our application
                    }}
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
          </Modal.Body>
          <Modal.Footer>
            <button class="btn btn-warning" type="submit">
              Submit
            </button>
            <button
              class="btn btn-danger"
              type="submit"
              onClick={() => {
                this.handleModel5();
              }}
              value="Close"
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.show6} onHide={() => this.handleModel6()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add PopUp</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label for="addressTextarea">Title</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter title"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label for="addressTextarea">Promotion Pic</label>
                  <input
                    type="file"
                    name="promotion_pic"
                    placeholder="Enter promotion pic"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label for="addressTextarea">Redirect Url</label>
                  <input
                    type="text"
                    name="redirect_url"
                    placeholder="Enter redirect url"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label for="addressTextarea">Promotion Url</label>
                  <input
                    type="text"
                    name="promotion_url"
                    placeholder="Enter promotion url"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label for="addressTextarea">Close Time</label>
                  <input
                    type="text"
                    name="close_time"
                    placeholder="Enter close time"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label for="addressTextarea">Popup Height</label>
                  <input
                    type="text"
                    name="popup_height"
                    placeholder="Enter popup_height"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label for="addressTextarea">Popup Width</label>
                  <input
                    type="text"
                    name="popup_width"
                    placeholder="Enter popup width"
                    class="form-control"
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
          </Modal.Body>
          <Modal.Footer>
            <button class="btn btn-warning" type="submit">
              Submit
            </button>
            <button
              class="btn btn-danger"
              type="submit"
              onClick={() => {
                this.handleModel6();
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
                        <CNavLink>Articles</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Testimonials</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Office Location</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Website Page Meta</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>FAQs</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Add PopUp</CNavLink>
                      </CNavItem>
                    </CNav>
                    <CTabContent>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">Articles</h3>
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
                                      </button>{" "}
                                      &nbsp; &nbsp;
                                      {/* <button type="submit" name="" class="btn btn-secondary">
                      Export Excel
                    </button> */}
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
                                        <th>Author Name</th>
                                        <th>Title</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Tester</td>
                                        <td>
                                          Study Abroad: When is the right time
                                          to plan Foreign Bachelor’s Education?
                                        </td>
                                        <td>
                                          <a href="#!">Active</a>
                                        </td>
                                        <td>
                                          <Link
                                            to={"/admin/build/edit-article"}
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
                                <h3 class="box-title">Testimonials</h3>
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
                                        <th>Rating</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Tester</td>
                                        <td>5</td>
                                        <td>
                                          <a href="#!">Active</a>
                                        </td>
                                        <td>
                                          <Link
                                            to={"/admin/build/edit-article"}
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
                                <h3 class="box-title">Office Location</h3>
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
                                      </button>{" "}
                                      &nbsp; &nbsp;
                                      {/* <button type="submit" name="" class="btn btn-secondary">
                      Export Excel
                    </button> */}
                                    </div>
                                  </div>
                                  <div class="col-sm-8">
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
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>New Delhi</td>
                                        <td>
                                          71/4 Shivaji Marg Najafgarh Road
                                        </td>
                                        <td>
                                          <a href="#!">Active</a>
                                        </td>
                                        <td>
                                          <Link
                                            to={"/admin/build/edit-location"}
                                            class="edit"
                                          >
                                            <span class="fa fa-pencil-square-o"></span>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>Noida</td>
                                        <td>
                                          6th Floor, C-56/11, Sec-62 Noida,
                                          India, Pin: 201301
                                        </td>
                                        <td>
                                          <a href="#!">Active</a>
                                        </td>
                                        <td>
                                          <Link
                                            to={"/admin/build/edit-location"}
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
                                <h3 class="box-title">Website Page Meta</h3>
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
                                          this.handleModel4();
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
                                        <th>Page</th>
                                        <th>Title</th>
                                        <th>Meta Description</th>
                                        <th>Meta Keywords</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Home Page</td>
                                        <td>
                                          Best Overseas Education Consultant in
                                          Delhi | study abroad free - Admissify
                                        </td>
                                        <td>
                                          Best Study Abroad Consultants in
                                          India, Study in Germany, US, Canada,
                                          UK - Apply FREE on the Admissify App
                                        </td>
                                        <td>
                                          Overseas Education Consultant in
                                          Delhi, study abroad free,abroad study
                                          scholarship,how to apply direct to
                                          study abroad,study abroad consultants
                                          in delhi
                                        </td>
                                        <td>
                                          <Link
                                            to={
                                              "/admin/build/edit-static-page-meta"
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
                                <h3 class="box-title">FAQs List</h3>
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
                                      </button>{" "}
                                      &nbsp; &nbsp;
                                      {/* <button type="submit" name="" class="btn btn-secondary">
                      Export Excel
                    </button> */}
                                    </div>
                                  </div>
                                  <div class="col-sm-8">
                                    <div class="add-icon">
                                      <img
                                        src={"/admin/build/avatars/add.png"}
                                        onClick={() => {
                                          this.handleModel5();
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
                                        <th>Type</th>
                                        <th>Heading</th>
                                        <th>Content</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>MBA</td>
                                        <td>
                                          Should I engage in community service
                                          to strengthen my MBA application
                                          profile?
                                        </td>
                                        <td>
                                          Being involved in community service
                                          reflects well on your leadership and
                                          giving back, however it is better done
                                          if you are passionate about the cause
                                          and believe in it. Nowadays many
                                          applicants have community service as
                                          part of their experience, so it is
                                          better to make your efforts unique and
                                          personal.
                                        </td>
                                        <td>
                                          <a href="#!">Active</a>
                                        </td>
                                        <td>
                                          <Link
                                            to={"/admin/build/edit-faq"}
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
                                <h3 class="box-title">Add PopUp</h3>
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
                                          this.handleModel6();
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
                                        <th>Title</th>
                                        <th>Promotion Pic</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>LIfewithin</td>
                                        <td>
                                          Fulfill Your Dreams of Foreign
                                          Education. ASK US HOW?
                                        </td>
                                        <td></td>
                                        <td>
                                          <a href="#!">Active</a>
                                        </td>
                                        <td>
                                          <Link
                                            to={"/admin/build/edit-popup"}
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
export default ContentManagement;
