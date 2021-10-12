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
class Request extends React.Component {
  componentDidMount() {
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });
    $("body").on("click", ".remove", function () {
      $(this).closest("div").remove();
    });
    var discussions = [
      [
        "1",
        "HI Thank",
        "Simran Kaur",
        "Admission Counselling",
        "View",
        "Active",
      ],
    ];

    $(document).ready(function () {
      $("#discussions").DataTable({
        data: discussions,
        columns: [
          { title: "S.No." },
          { title: "Topic" },
          { title: "Creator" },
          { title: "Discussion Category" },
          { title: "View Comments" },
          { title: "status" },
          // {
          //   data: "link",
          //   render: function (data, type, row, meta) {
          //     return (
          //       '<a class="btn btn-info" role="button" href="' +
          //       "//" +
          //       row.link +
          //       '" target="_blank">click </a>'
          //     );
          //   },
          // },
        ],
      });
    });

    var request = [
      [
        "1",
        "Sonu",
        "9472104466",
        "yadavraviraj3444@gmail.com",
        "Accommodation",
        "Resolved",
        "2021/07/08",
      ],
    ];

    $(document).ready(function () {
      $("#request").DataTable({
        data: request,
        columns: [
          { title: "S.No." },
          { title: "Student" },
          { title: "Contact" },
          { title: "Email" },
          { title: "Request For" },
          { title: "status" },
          { title: "Created On" },
        ],
      });
    });

    var help = [
      [
        "1",
        "JUSTIN JANZ",
        "service complaint",
        "i need to delete this account",
        "UNRESOLVED",
        "2021/06/28",
      ],
    ];

    $(document).ready(function () {
      $("#help").DataTable({
        data: help,
        columns: [
          { title: "S.No." },
          { title: "Student" },
          { title: "Type" },
          { title: "Description" },
          { title: "Status" },
          { title: "Created On" },
        ],
      });
    });
  }

  constructor() {
    super();
    this.state = {
      show2: false,
      show3: false,
    };
  }
  handleModel2() {
    this.setState({ show2: !this.state.show2 });
  }
  handleModel3() {
    this.setState({ show3: !this.state.show3 });
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
        <div className="col-xs-12">
          <div className="box">
            <div className="box-body">
              <CCard>
                <CCardBody>
                  <CTabs>
                    <CNav variant="tabs">
                      <CNavItem>
                        <CNavLink>Requests</CNavLink>
                      </CNavItem>
                    </CNav>
                    <CTabContent>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">Request List</h3>
                                <div
                                  class="dataTables_length"
                                  id="example1_length"
                                ></div>
                              </div>
                              <div class="box-body">
                                <div class="row">
                                  <div class="col-sm-2">
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <label>Date&#160;:</label>
                                      <input
                                        style={{ width: "100%" }}
                                        type="date"
                                        name="fromdate"
                                        id=""
                                        class="form-control"
                                        placeholder="From Date"
                                        autocomplete="off"
                                        onblur=""
                                      />
                                    </div>
                                  </div>
                                  <div class="col-sm-2">
                                    <label>&#160;</label>
                                    <div
                                      class="dataTables_length"
                                      id="example1_length1"
                                    >
                                      <input
                                        type="date"
                                        name="todate"
                                        id=""
                                        aria-controls="example1"
                                        class="form-control input-sm"
                                        style={{ width: "100%" }}
                                        placeholder="To Date"
                                        autocomplete="off"
                                      />
                                    </div>
                                  </div>

                                  <div class="col-sm-3">
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
                                  {/* <div class="col-sm-5">
                                    <div class="add-icon">
                                      <img
                                        src={"/admin/build/avatars/add.png"}
                                        onClick={() => {
                                          this.handleModel2();
                                        }}
                                      />
                                    </div>
                                  </div> */}
                                </div>
                                <hr />
                                <div class="tab-content table-responsive-lg">
                                  <table
                                    id="request"
                                    class="table table-bordered"
                                    width="100%"
                                  ></table>
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
export default Request;
