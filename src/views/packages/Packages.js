import React, { useState } from "react";
import { Link } from "react-router-dom";
//multiple tags
import { WithContext as ReactTags } from "react-tag-input";
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
class Packages extends React.Component {
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
            <h3 class="box-title">Add Packages</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Package Name</label>
                  <input
                    type="text"
                    name="package_name"
                    class="form-control"
                    placeholder="Enter package name"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Price</label>
                  <input
                    type="text"
                    name="price"
                    class="form-control"
                    placeholder="Enter us price"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>Package Type</label>
                  <select class="form-control" name="package_type">
                    <option value="">Select Type</option>
                    <option value="">Third Party</option>
                    <option value="">Admissify</option>
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
                    name="additional_field"
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
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header d-flexi">
              <h3 class="box-title">Packages List</h3>
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
                      <th>Title</th>
                      <th>Purpose</th>
                      <th>US Price</th>
                      <th>Non Us Price</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Scholarship (SAS1)</td>
                      <td>Purpose 1</td>
                      <td>9000</td>
                      <td>13500</td>
                      <td>
                        <Link>Active</Link>
                      </td>
                      <td>
                        <Link to={"/admin/build/edit-packages"} class="edit">
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
export default Packages;
