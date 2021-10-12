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
import DateRangePicker from "react-bootstrap-daterangepicker";
import $ from "jquery";
class AppliedDashboard extends React.Component {
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
                    <Link to={"/admin/build/student-applied"}>
                      <div class="info-box inr-card">
                        <div class="icon-dv">
                          <span class="info-box-number">20</span>
                        </div>
                        <div class="info-box-content">
                          <span class="as-role">Today Leads</span>
                          <div class="inr-data role-box">
                            <div
                              class="col-md-4 border-right"
                              style={{ padding: "0" }}
                            >
                              <span class="">New</span>
                              <span class="info-box-number lead-label">10</span>
                            </div>
                            <div
                              class="col-md-4 border-right"
                              style={{ padding: "0px 5px 0px" }}
                            >
                              <span class="">FollowUp</span>
                              <span class="info-box-number lead-label">5</span>
                            </div>
                            <div
                              class="col-md-4 inactive"
                              style={{ padding: "0" }}
                            >
                              <span class="">Converted</span>
                              <span class="info-box-number lead-label">5</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-md-3 col-sm-6 col-xs-12">
                    <Link to={"/admin/build/student-applied"}>
                      <div class="info-box inr-card">
                        <div class="icon-dv">
                          <span class="info-box-number">50</span>
                        </div>
                        <div class="info-box-content">
                          <span class="as-role">Total No. of Leads</span>
                          <div class="inr-data role-box">
                            <div
                              class="col-md-4 border-right"
                              style={{ padding: "0" }}
                            >
                              <span class="">Pending</span>
                              <span class="info-box-number lead-label">5</span>
                            </div>
                            <div
                              class="col-md-4 border-right"
                              style={{ padding: "0px 5px 0px" }}
                            >
                              <span class="">Followup</span>
                              <span class="info-box-number lead-label">25</span>
                            </div>
                            <div
                              class="col-md-4 inactive"
                              style={{ padding: "0" }}
                            >
                              <span class="">Converted</span>
                              <span class="info-box-number lead-label">20</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12 text-right">
                    <div class="row">
                      <div class="col-md-10"></div>
                      <div class="col-md-2">
                        <DateRangePicker>
                          <button class="form-control">
                            <i class="fa fa-calendar"></i>
                          </button>
                        </DateRangePicker>
                      </div>
                    </div>
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
export default AppliedDashboard;
