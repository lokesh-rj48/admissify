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
class Advertisement extends React.Component {
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

  bannerHideShow() {
    var Type = $("#banner_").val();
    if (Type == "Website Page") {
      $("#web_page").show();
      $("#country_page").hide();
    }
    if (Type == "Country Name") {
      $("#country_page").show();
      $("#web_page").hide();
    }
  }

  render() {
    return (
      <section className="content">
        <Modal show={this.state.show} onHide={() => this.handleModel()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Create Advertisement</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Banner Type</label>
                  <select class="form-control" name="banner_type">
                    <option value="">Select</option>
                    <option value="">PopUp Banner</option>
                    <option value="">Middle Banner</option>
                    <option value="">Side Banner</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label> Image</label>
                  <input type="file" name="image" class="form-control" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Advertisement On</label>
                  <select
                    class="form-control"
                    id="banner_"
                    onChange={() => this.bannerHideShow()}
                    name="advertisement_on"
                  >
                    <option value="">Select</option>
                    <option value="Website Page">Website Page</option>
                    <option value="Country Name">Country Name</option>
                  </select>
                </div>
              </div>
              <div
                class="col-lg-6 col-sm-6 col-xs-12"
                id="web_page"
                style={{ display: "none" }}
              >
                <div class="form-group">
                  <label>Page Name</label>
                  <select class="form-control" name="page_name">
                    <option value="">Select</option>
                    <option value="">Home Page</option>
                    <option value="">University Page</option>
                  </select>
                </div>
              </div>
              <div
                class="col-lg-6 col-sm-6 col-xs-12"
                id="country_page"
                style={{ display: "none" }}
              >
                <div class="form-group">
                  <label>Country Name</label>
                  <select class="form-control" name="country">
                    <option value="">Select</option>
                    <option value="">AUSTRALIA</option>
                    <option value="">CANADA</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Landing Url</label>
                  <input
                    type="text"
                    name="landing_url"
                    class="form-control"
                    placeholder="Enter landing url"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Valid From</label>
                  <input type="date" name="valid_from" class="form-control" />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Valid Up To</label>
                  <input type="date" name="todate" class="form-control" />
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
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header d-flexi">
              <h3 class="box-title">Advertisement Banner</h3>
              <div class="dataTables_length" id="example1_length"></div>
            </div>
            <div class="box-body">
              <div class="row">
                <div class="col-sm-2">
                  <div class="dataTables_length" id="example1_length">
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
              <div class="info-box-content">
                <table id="example" class="table table-bordered counter ">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Banner Image</th>
                      <th>Page Name</th>
                      <th>Page Position</th>
                      <th>Landing Url</th>
                      <th>View</th>
                      <th>From Date</th>
                      <th>To Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <img
                          class="ads-banner"
                          src="/admin/build/avatars/Flag-Australia.jpg"
                        />
                      </td>
                      <td>University List Page</td>
                      <td>Medium</td>
                      <td>
                        <a
                          target="_blank"
                          href="https://abym.in/dev-url/admissify/uni-list"
                        >
                          https://abym.in/dev-url/admissify/uni-list
                        </a>
                      </td>
                      <td>10</td>
                      <td>3 Sept, 2021</td>
                      <td>23 Sept, 2021</td>
                      <td>
                        <Link to="">Active</Link>
                      </td>
                      <td>
                        <Link
                          to={"/admin/build/edit-advertisement"}
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
    );
  }
}
export default Advertisement;
