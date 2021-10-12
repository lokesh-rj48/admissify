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
class Templates extends React.Component {
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
  render() {
    return (
      <section className="content">
        <Modal show={this.state.show4} onHide={() => this.handleModel4()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add SMS Template</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label> Name</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Enter name"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Text</label>
                  <input
                    type="text"
                    name="text"
                    class="form-control"
                    placeholder="Enter text"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>Message Type</label>
                  <select class="form-control" name="message_type">
                    <option value="">Select Message Type</option>
                    <option value="Promotional">Promotional</option>
                    <option value="Transactional">Transactional</option>
                  </select>
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
        <Modal show={this.state.show} onHide={() => this.handleModel()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add WhatsApp Template</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label> Name</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Enter name"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Text</label>
                  <input
                    type="text"
                    name="text"
                    class="form-control"
                    placeholder="Enter text"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>Message Type</label>
                  <select class="form-control" name="message_type">
                    <option value="">Select Message Type</option>
                    <option value="Promotional">Promotional</option>
                    <option value="Transactional">Transactional</option>
                  </select>
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
                this.handleModel();
              }}
              value="Close"
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.show2} onHide={() => this.handleModel2()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Email Template</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label> Name</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Enter name"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    class="form-control"
                    placeholder="Enter subject"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>Attachment</label>
                  <input type="file" name="attachment" class="form-control" />
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
            <h3 class="box-title">Add landing Page Template</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Enter name"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    class="form-control"
                    placeholder="Enter subject"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>Landing Page Url</label>
                  <input
                    type="text"
                    name="url"
                    class="form-control"
                    placeholder="Enter landing page url"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>Attachment</label>
                  <input type="file" name="attachment" class="form-control" />
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
                this.handleModel3();
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
                        <CNavLink>Sms Template</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>WhatsApp Template</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Email Template</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Landing Page Template</CNavLink>
                      </CNavItem>
                    </CNav>
                    <CTabContent>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">SMS Template List</h3>
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
                                        <th>Name</th>
                                        <th>Text</th>
                                        <th>Message</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                          <Link
                                            to={
                                              "/admin/build/edit-sms-template"
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
                                <h3 class="box-title">
                                  WhatsApp Template List
                                </h3>
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
                                <div class="tab-content">
                                  <table
                                    id="example"
                                    class="table table-bordered "
                                  >
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>Name</th>
                                        <th>Text</th>
                                        <th>Message</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                          <Link
                                            to={
                                              "/admin/build/edit-whatsapp-template"
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
                                <h3 class="box-title">Email Template List</h3>
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
                                <div class="tab-content">
                                  <table
                                    id="example"
                                    class="table table-bordered "
                                  >
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>Name</th>
                                        <th>Subject</th>
                                        <th>Template</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>EDM_Immigration</td>
                                        <td>Introduction to Admissify!!</td>
                                        <td>
                                          <Link
                                            to={
                                              "/admin/build/edit-email-template"
                                            }
                                            class="edit"
                                          >
                                            <button class="btn btn-success">
                                              View/Edit
                                            </button>
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
                                <h3 class="box-title">
                                  Landing Page Templates List
                                </h3>
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
                                        <th>Subject</th>
                                        <th>Template</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>EDM_Immigration</td>
                                        <td>Introduction to Admissify!!</td>
                                        <td>
                                          <Link
                                            to={
                                              "/admin/build/edit-website-template"
                                            }
                                            class="edit"
                                          >
                                            <button class="btn btn-success">
                                              View/Edit
                                            </button>
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
export default Templates;
