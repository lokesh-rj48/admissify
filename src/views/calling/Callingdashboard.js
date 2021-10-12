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
class Callingdashboard extends React.Component {
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
                    <Link to={"/admin/build/calling"}>
                      <div class="info-box inr-card">
                        <div class="icon-dv">
                          <span class="info-box-number">20</span>
                        </div>
                        <div class="info-box-content">
                          <span class="as-role">Today Lead For Calling</span>
                          <div class="inr-data role-box">
                            <div
                              class="col-md-4 border-right"
                              style={{ padding: "0" }}
                            >
                              <span class="">New</span>
                              <span class="info-box-number lead-label">20</span>
                            </div>
                            <div
                              class="col-md-4 border-right"
                              style={{ padding: "0px 5px 0px" }}
                            >
                              <span class="">Hot</span>
                              <span class="info-box-number lead-label">0</span>
                            </div>
                            <div
                              class="col-md-4 inactive"
                              style={{ padding: "0" }}
                            >
                              <span class="">Warm</span>
                              <span class="info-box-number lead-label">0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <Link to={"/admin/build/calling"}>
                      <div class="info-box inr-card">
                        <div class="icon-dv">
                          <span class="info-box-number">20</span>
                        </div>
                        <div class="info-box-content">
                          <span class="as-role">Lead Status</span>
                          <div class="inr-data role-box">
                            <div
                              class="col-md-4 border-right"
                              style={{ padding: "0" }}
                            >
                              <span class="">DisQualified</span>
                              <span class="info-box-number lead-label">5</span>
                            </div>
                            <div
                              class="col-md-4 border-right"
                              style={{ padding: "0px 5px 0px" }}
                            >
                              <span class="">Ongoing</span>
                              <span class="info-box-number lead-label">10</span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Callingdashboard;
