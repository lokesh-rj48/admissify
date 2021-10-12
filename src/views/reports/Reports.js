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
class Reports extends React.Component {
  componentDidMount() {
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });
    $("body").on("click", ".remove", function () {
      $(this).closest("div").remove();
    });
    var student = [["1", "Rahul", "rahul@gmail.com"]];

    $(document).ready(function () {
      $("#discussions").DataTable({
        data: student,
        columns: [{ title: "S.No." }, { title: "Name" }, { title: "Email" }],
      });
    });
  }

  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  handleModel() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <section className="content">
        <Modal show={this.state.show} onHide={() => this.handleModel()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Discussion</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label> Topic</label>
                  <input
                    type="text"
                    name="topic"
                    class="form-control"
                    placeholder="Enter topic"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Creator</label>
                  <input
                    type="text"
                    name="creator"
                    class="form-control"
                    placeholder="Enter creator name"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Discussion Category</label>
                  <select class="form-control" name="message_type">
                    <option value="">Select Discussion Category</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Discussion Category</label>
                  <select class="form-control" name="message_type">
                    <option value="">Select Discussion Category</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label for="courseTextarea">
                    <strong>Other Fields</strong>
                  </label>
                </div>
              </div>
              <div
                id="TextBoxContainer"
                class="col-lg-12 col-sm-12 col-xs-12"
              ></div>
              <div class="col-lg-12 col-sm-12 col-xs-12 text-right">
                <button
                  id=""
                  type="button"
                  class="btn btn-primary"
                  data-toggle="tooltip"
                  data-original-title="Add more controls"
                  onClick={() => this.GetDynamicTextFiled()}
                >
                  Add
                </button>
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
        <div className="col-xs-12">
          <div className="box">
            <div className="box-body">
              <CCard>
                <CCardBody>
                  <CTabs>
                    <CNav variant="tabs">
                      <CNavItem>
                        <CNavLink>Student Export</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>Invoice</CNavLink>
                      </CNavItem>
                    </CNav>
                    <CTabContent>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">Discussions</h3>
                                <div
                                  class="dataTables_length"
                                  id="example1_length"
                                ></div>
                              </div>
                              <div class="box-body">
                                <div class="row">
                                  <div class="col-sm-12 text-right">
                                    <button
                                      type="submit"
                                      name=""
                                      class="btn btn-secondary"
                                    >
                                      Export
                                    </button>{" "}
                                    &nbsp;
                                    <button
                                      type="submit"
                                      name=""
                                      class="btn btn-secondary"
                                    >
                                      Export Excel
                                    </button>{" "}
                                    &nbsp;
                                    <button
                                      type="submit"
                                      name=""
                                      class="btn btn-secondary"
                                    >
                                      Download
                                    </button>
                                  </div>
                                  {/* <div class="col-sm-4">
                                    <div class="add-icon">
                                      <img
                                        src={"/admin/build/avatars/add.png"}
                                        onClick={() => {
                                          this.handleModel();
                                        }}
                                      />
                                    </div>
                                  </div> */}
                                </div>
                                <hr />
                                <div class="tab-content">
                                  <table
                                    id="discussions"
                                    class="table table-bordered"
                                    width="100%"
                                  ></table>
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
                                <h3 class="box-title">Invoices</h3>
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
                                      </button>
                                    </div>
                                  </div>
                                  {/* <div class="col-sm-5">
                                    <div class="add-icon">
                                      <img
                                        src={"/admin/build/avatars/add.png"}
                                        onClick={() => {
                                          this.handleModel2();
                                        }}
                                      />
                                    </div>
                                  </div> */}
                                </div>
                                <hr />
                                <div class="tab-content">
                                  <table
                                    id="request"
                                    class="table table-bordered"
                                    width="100%"
                                  ></table>
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
export default Reports;
