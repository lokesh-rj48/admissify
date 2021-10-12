import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "./Style.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "font-awesome/css/font-awesome.min.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import $ from "jquery";
class AppliedStudent extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      $("#show-hidden-menu").click(function () {
        $(".hidden-menu").slideToggle("slow");
      });
    });

    //initialize datatable
    // var students = [
    //   [
    //     "1",
    //     "Rahul Kaushik",
    //     "8284585937",
    //     "kaushikrahul12456@gmail.com",
    //     "HD in Architectural Design",
    //     "2021/07/09",
    //     "",
    //   ],
    // ];
    // $(document).ready(function () {
    //   $("#example").DataTable({
    //     data: students,
    //     columns: [
    //       { title: "S.No." },
    //       { title: "Name" },
    //       { title: "Mobile" },
    //       { title: "Email" },
    //       { title: "Applied For" },
    //       { title: "Created At" },
    //       {
    //         targets: 2,
    //         render: function (data, type, row, meta) {
    //           if (type === "display") {
    //             data = '<a href="/edit-student"><i class="fa fa-eye"></i></a>';
    //           }
    //           return data;
    //         },
    //       },
    //     ],
    //   });
    // });
  }
  render() {
    return (
      <section className="content">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header d-flexi">
              <h3 class="box-title">Student Applied</h3>
              <div class="dataTables_length" id="example1_length"></div>
            </div>
            <div class="box-body">
              <div class="row">
                <div class="col-sm-2">
                  <div class="dataTables_length" id="example1_length">
                    <label>Date Apply On</label>
                    <select class="form-control">
                      <option value="">Select</option>
                      <option value="">Next Followup Date</option>
                      <option value="">Last Followup Date</option>
                      <option value="">Created Date</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-2">
                  <label>Date&#160;</label>
                  <DateRangePicker>
                    <button class="form-control">
                      <i class="fa fa-calendar"></i>
                    </button>
                  </DateRangePicker>
                </div>
                <div class="col-sm-2">
                  <div class="dataTables_length" id="example1_length">
                    <label>Lead Status</label>
                    <select class="form-control">
                      <option value="">Select Status</option>
                      <option value="">New</option>
                      <option value="">Pending</option>
                      <option value="">Followup</option>
                      <option value="">Completed</option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-2">
                  <div class="dataTables_length" id="example1_length">
                    <label>Lead Type</label>
                    <select class="form-control">
                      <option value="">Select Type</option>
                      <option value="">No Response</option>
                      <option value="">Callback</option>
                      <option value="">Followup</option>
                    </select>
                  </div>
                </div>

                <div class="col-sm-3">
                  <label>&#160;</label>
                  <div class="dataTables_length" id="example1_length">
                    <button
                      type="submit"
                      name="filter"
                      id="filter"
                      class="btn btn-warning filter mr-r"
                    >
                      Filter
                    </button>
                    <span id="show-hidden-menu" style={{ cursor: "pointer" }}>
                      <b>Advance Filter</b>
                    </span>
                  </div>
                </div>
              </div>
              <div class="row hidden-menu mr-10" style={{ display: "none" }}>
                <div class="col-sm-2">
                  <div class="dataTables_length" id="example1_length">
                    <label>Application Executive</label>
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
                    <label>Course Level</label>
                    <select class="form-control">
                      <option value="">Select</option>
                      <option value="">PG</option>
                      <option value="">UG</option>
                    </select>
                  </div>
                </div>
              </div>
              <hr />
              <div class="tab-content">
                <table id="example" class="table table-bordered ">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Name</th>
                      <th>Mobile</th>
                      <th>Email</th>
                      <th>Applied For</th>
                      <th>Applied Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Rahul Kaushik</td>
                      <td>8527418525</td>
                      <td>kaushikrahul12456@gmail.com</td>
                      <td>HD in Architectural Design</td>
                      <td>27 Mar 2021, 12:20PM</td>
                      <td>
                        <Link class="edit" to={"/admin/build/view-applicant"}>
                          <span
                            class="fa fa-eye"
                            style={{ "margin-right": "5px" }}
                          ></span>
                        </Link>
                        <Link
                          class="edit"
                          to={"/admin/build/edit-applied-student"}
                        >
                          <span
                            class="fa fa-pencil-square-o"
                            style={{ "margin-right": "5px" }}
                          ></span>
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
export default AppliedStudent;
