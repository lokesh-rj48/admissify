import React, { useState } from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "./Style.css";
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
class Support extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  }
  render() {
    return (
      <section className="content">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-body">
              <CCard>
                <CCardBody>
                  <CTabs>
                    <CNav variant="tabs">
                      <CNavItem>
                        <CNavLink>Queries</CNavLink>
                      </CNavItem>
                    </CNav>
                    <CTabContent>
                      <CTabPane>
                        <section class="content">
                          <div className="col-xs-12">
                            <div className="box">
                              <div className="box-body">
                                <div class="box-header d-flexi">
                                  <div class="row">
                                    <div class="col-sm-6">
                                      <h3 class="box-title">Query List</h3>
                                    </div>
                                    {/* <div class="col-sm-6">
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
                                          class="form-control input-sm"
                                          style={{ width: "100%" }}
                                        >
                                          <option value="-1">All Status</option>
                                          <option value="1">Resolve</option>
                                          <option value="0">Pending</option>
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
                                  </div>
                                  <hr />
                                  <div class="tab-content table-responsive-lg">
                                    <table
                                      class="table table-bordered"
                                      id="example"
                                    >
                                      <thead>
                                        <tr style={{ "font-size": "13px" }}>
                                          <th>S.No.</th>
                                          <th>Email Id</th>
                                          <th>Mobile No</th>
                                          <th>Name</th>
                                          <th>Query</th>
                                          <th>Assign To</th>
                                          <th>Status</th>
                                        </tr>
                                      </thead>
                                      <tbody class="f-13">
                                        <tr>
                                          <td>1</td>
                                          <td>testing@gmail.com</td>
                                          <td>8527418528</td>
                                          <td>Dheeraj Kumar</td>
                                          <td>
                                            How I improve my IELTS exam score?
                                          </td>
                                          <td>
                                            <select style={{ width: "60%" }}>
                                              <option>Select</option>
                                            </select>
                                          </td>
                                          <td>Resolve</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
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
export default Support;
