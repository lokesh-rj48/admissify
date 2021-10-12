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
import DateRangePicker from "react-bootstrap-daterangepicker";
import "font-awesome/css/font-awesome.min.css";
import $ from "jquery";
class Appointments extends React.Component {
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });
    $("body").on("click", ".remove", function () {
      $(this).closest("div").remove();
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

  GetDynamicTextFiled() {
    var div = $("<div />");
    var x =
      '<div class="row" style="margin-top:25px"><div class="col-lg-5 col-sm-5 col-xs-12"><input name = "title[]" placeholder="Enter field title" type="text" value = "" class="form-control" /></div>' +
      '<div class="col-lg-5 col-sm-5 col-xs-12"><input name = "other_field[]" placeholder="Enter detail" type="text" value = "" class="form-control" /></div>' +
      '<button type="button" class="btn btn-danger remove">Remove</button></div>';

    div.html(x);
    $("#TextBoxContainer").append(div);
  }

  render() {
    return (
      <section className="content">
        <Modal show={this.state.show} onHide={() => this.handleModel()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Packages</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label> Title</label>
                  <input
                    type="text"
                    name="title"
                    class="form-control"
                    placeholder="Enter title"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Purpose</label>
                  <input
                    type="text"
                    name="purpose"
                    class="form-control"
                    placeholder="Enter purpose"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>US Price</label>
                  <input
                    type="text"
                    name="us_price"
                    class="form-control"
                    placeholder="Enter us price"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Non US Price</label>
                  <input
                    type="text"
                    name="non_us_price"
                    class="form-control"
                    placeholder="Enter non us price"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label for="addressTextarea">Note</label>
                  <textarea
                    id="addressTextarea"
                    class="form-control"
                    rows="3"
                    name="note"
                    placeholder="Enter Description"
                  ></textarea>
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>Feature Title</label>
                  <input
                    type="text"
                    name="feature_title"
                    class="form-control"
                    placeholder="Enter feature title"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>Features</label>
                  <div class="form-group tag-container">
                    <input
                      class="form-control"
                      placeholder="Enter features and hit enter button"
                    />
                  </div>
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
                  class="btn btn-primary mr-10"
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
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header d-flexi">
              <h3 class="box-title">Appointments List</h3>
              <div class="dataTables_length" id="example1_length"></div>
            </div>
            <div class="box-body">
              <div class="row">
                <div class="col-sm-1">
                  <label>Date&#160;</label>
                  <DateRangePicker>
                    <button class="form-control">
                      <i class="fa fa-calendar"></i>
                    </button>
                  </DateRangePicker>
                </div>
                <div class="col-sm-2">
                  <div class="dataTables_length" id="example1_length">
                    <label>Counsellor</label>
                    <select class="form-control">
                      <option value="">Select</option>
                      <option value="">Neeraj</option>
                      <option value="">Devesh</option>
                      <option value="">Raj Kumar</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-2">
                  <div class="dataTables_length" id="example1_length">
                    <label>Coach&#160;:</label>
                    <select class="form-control">
                      <option value="-1">Select</option>
                      <option value="">Devesh Hans</option>
                      <option value="">Raj Kumar Singh</option>
                    </select>
                  </div>
                </div>

                <div class="col-sm-2">
                  <label>&#160;</label>
                  <div class="dataTables_length" id="example1_length">
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
                {/* <div class="col-sm-8">
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
              <div class="info-box-content">
                <table id="example" class="table table-bordered counter ">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Counsellor / Coach Name</th>
                      <th>Appointment Date</th>
                      <th>Appointment Time</th>
                      <th>Applicant Name</th>
                      <th>Meeting Link</th>
                      {/* <th>Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mr. K K Jain</td>
                      <td>July 3, 2021</td>
                      <td>09:00 Pm</td>
                      <td>Rahul Kumar</td>
                      <td>
                        <a
                          target="_blank"
                          href="https://meet.google.com/gqx-efxc-qse"
                        >
                          https://meet.google.com/gqx-efxc-qse
                        </a>
                      </td>
                      {/* <td>
                        <Link to={"/admin/build/edit-packages"} class="edit">
                          <span class="fa fa-pencil-square-o"></span>
                        </Link>
                      </td> */}
                    </tr>
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
export default Appointments;
