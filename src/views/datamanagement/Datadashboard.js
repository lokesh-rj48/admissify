import React from "react";
import { Link } from "react-router-dom";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "./Style.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "font-awesome/css/font-awesome.min.css";
import $ from "jquery";
class Datadashboard extends React.Component {
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });
  }
  render() {
    return (
      <section class="content">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header d-flexi">
              <h3 class="box-title"></h3>
              <div class="dataTables_length" id="example1_length"></div>
            </div>
            <div class="box-body">
              <div class="tab-content">
                <div class="row">
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <Link to={"/admin/build/datamanagement"}>
                      <div class="info-box inr-card">
                        <div class="icon-dv">
                          <span class="info-box-number">20</span>
                        </div>
                        <div class="info-box-content">
                          <span class="as-role">Country </span>
                          <div class="inr-data role-box">
                            <div class="col-md-6 border-right">
                              <span class="">Active</span>
                              <span class="info-box-number label-success">
                                15
                              </span>
                            </div>
                            <div class="col-md-6 inactive">
                              <span class="">Inactive</span>
                              <span class="info-box-number label-danger">
                                5
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <Link to={"/admin/build/datamanagement"}>
                      <div class="info-box inr-card">
                        <div class="icon-dv">
                          <span class="info-box-number">5</span>
                        </div>
                        <div class="info-box-content">
                          <span class="as-role">State </span>
                          <div class="inr-data role-box">
                            <div class="col-md-6 border-right">
                              <span class="">Active</span>
                              <span class="info-box-number label-success">
                                4
                              </span>
                            </div>
                            <div class="col-md-6 inactive">
                              <span class="">Inactive</span>
                              <span class="info-box-number label-danger">
                                1
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <Link to={"/admin/build/datamanagement"}>
                      <div class="info-box inr-card">
                        <div class="icon-dv">
                          <span class="info-box-number">10</span>
                        </div>
                        <div class="info-box-content">
                          <span class="as-role">City </span>
                          <div class="inr-data role-box">
                            <div class="col-md-6 border-right">
                              <span class="">Active</span>
                              <span class="info-box-number label-success">
                                8
                              </span>
                            </div>
                            <div class="col-md-6 inactive">
                              <span class="">Inactive</span>
                              <span class="info-box-number label-danger">
                                2
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <Link to={"/admin/build/datamanagement"}>
                      <div class="info-box inr-card">
                        <div class="icon-dv">
                          <span class="info-box-number">215</span>
                        </div>
                        <div class="info-box-content">
                          <span class="as-role">University </span>
                          <div class="inr-data role-box">
                            <div class="col-md-6 border-right">
                              <span class="">Active</span>
                              <span class="info-box-number label-success">
                                200
                              </span>
                            </div>
                            <div class="col-md-6 inactive">
                              <span class="">Inactive</span>
                              <span class="info-box-number label-danger">
                                15
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <Link to={"/admin/build/datamanagement"}>
                      <div class="info-box inr-card">
                        <div class="icon-dv">
                          <span class="info-box-number">450</span>
                        </div>
                        <div class="info-box-content">
                          <span class="as-role">University Course</span>
                          <div class="inr-data role-box">
                            <div class="col-md-6 border-right">
                              <span class="">Active</span>
                              <span class="info-box-number label-success">
                                400
                              </span>
                            </div>
                            <div class="col-md-6 inactive">
                              <span class="">Inactive</span>
                              <span class="info-box-number label-danger">
                                50
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Datadashboard;
