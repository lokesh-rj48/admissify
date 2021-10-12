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
class ContentDashboard extends React.Component {
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
                    <Link to={"/admin/build/content-management"}>
                      <div class="info-box inr-card">
                        <div class="icon-dv">
                          <span class="info-box-number">20</span>
                        </div>
                        <div class="info-box-content">
                          <span class="as-role">Articles </span>
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
                    <Link to={"/admin/build/content-management"}>
                      <div class="info-box inr-card">
                        <div class="icon-dv">
                          <span class="info-box-number">20</span>
                        </div>
                        <div class="info-box-content">
                          <span class="as-role">Testimonials</span>
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
                    <Link to={"/admin/build/content-management"}>
                      <div class="info-box inr-card">
                        <div class="icon-dv">
                          <span class="info-box-number">15</span>
                        </div>
                        <div class="info-box-content">
                          <span class="as-role">Office Location</span>
                          <div class="inr-data role-box">
                            <div class="col-md-6 border-right">
                              <span class="">Active</span>
                              <span class="info-box-number label-success">
                                10
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
                    <Link to={"/admin/build/content-management"}>
                      <div class="info-box inr-card">
                        <div class="icon-dv">
                          <span class="info-box-number">45</span>
                        </div>
                        <div class="info-box-content">
                          <span class="as-role">Website Page Meta</span>
                          <div class="inr-data role-box">
                            <div class="col-md-6 border-right">
                              <span class="">Active</span>
                              <span class="info-box-number label-success">
                                40
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
                    <Link to={"/admin/build/content-management"}>
                      <div class="info-box inr-card">
                        <div class="icon-dv">
                          <span class="info-box-number">4</span>
                        </div>
                        <div class="info-box-content">
                          <span class="as-role">FAQs </span>
                          <div class="inr-data role-box">
                            <div class="col-md-6 border-right">
                              <span class="">Active</span>
                              <span class="info-box-number label-success">
                                3
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
                    <Link to={"/admin/build/content-management"}>
                      <div class="info-box inr-card">
                        <div class="icon-dv">
                          <span class="info-box-number">4</span>
                        </div>
                        <div class="info-box-content">
                          <span class="as-role">PopUp </span>
                          <div class="inr-data role-box">
                            <div class="col-md-6 border-right">
                              <span class="">Active</span>
                              <span class="info-box-number label-success">
                                3
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ContentDashboard;
