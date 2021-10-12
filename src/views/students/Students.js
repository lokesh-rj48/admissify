import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import { Modal } from "react-bootstrap";
import "./Style.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "font-awesome/css/font-awesome.min.css";
import $ from "jquery";
class Students extends React.Component {
  componentDidMount() {
    //initialize datatable
    var students = [
      [
        "1",
        "Harsukhpal Kaur",
        "8284585937",
        "harrykaur12456@gmail.com",
        "Noida",
        "Female",
        "Web",
        "2021/07/09",
      ],
    ];

    $(document).ready(function () {
      $("#example").DataTable({
        data: students,
        columns: [
          { title: "S.No." },
          { title: "Name" },
          { title: "Mobile" },
          { title: "Email" },
          { title: "City" },
          { title: "Gender" },
          { title: "Source Type" },
          { title: "Created At" },
          // {
          //   targets: 2,
          //   render: function (data, type, row, meta) {
          //     if (type === "display") {
          //       data = '<a href="/edit-student"><i class="fa fa-eye"></i></a>';
          //     }

          //     return data;
          //   },
          // },
        ],
      });
    });
  }
  render() {
    return (
      <section className="content">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header d-flexi">
              <h3 class="box-title">User List</h3>
              <div class="dataTables_length" id="example1_length"></div>
            </div>
            <div class="box-body">
              <div class="row">
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
              <hr />
              <div class="tab-content">
                <table
                  id="example"
                  class="table table-bordered"
                  width="100%"
                ></table>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Students;
