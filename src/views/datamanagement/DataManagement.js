import React, { useState } from "react";
import { Link } from "react-router-dom";
//Bootstrap and jQuery libraries
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "././country/Style.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "font-awesome/css/font-awesome.min.css";
import $ from "jquery";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ckeditor, { CKEditor } from "@ckeditor/ckeditor5-react";
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
class DataManagement extends React.Component {
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });
    // $("#btnAdd").on("click", function () {});
    // $("#btnAdd2").on("click", function () {});
    $("body").on("click", ".annual_btn", function () {
      $(this).closest("div").remove();
    });
  }
  GetDynamicEconomicOverview() {
    var div = $("<div />");
    var x =
      '<div class="col-lg-12"><div class="form-group"><label>Economic Overview Part Time Circle</label><input type="text" name="meta_title" class="form-control" placeholder="Enter economic overview part time circle"/></div></div>' +
      '<div class="col-lg-12"><div class="form-group"><label>Economic Overview Part Time Circle In</label><input type="text" name="meta_title" class="form-control" placeholder="Enter economic overview part time circle In" /></div></div>' +
      '<div class="col-lg-12"><div class="form-group"><label>Title</label> <input type="text" name="meta_title" class="form-control" placeholder="Enter title" /></div></div>' +
      '<div class="col-lg-12"><div class="form-group"><label>Description</label> <textarea id="notesTextarea" class="form-control"  placeholder="Enter description" rows="3" ></textarea> </div> </div>' +
      '<i class="fa fa-minus-square-o annual_btn"></i></div></br>';

    div.html(x);
    $("#TextBoxContainer").append(div);
  }

  constructor() {
    super();
    this.state = {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
    };
  }
  handleModel() {
    this.setState({ show: !this.state.show });
  }
  handleModel2() {
    this.setState({ show2: !this.state.show2 });
  }
  handleModel3() {
    this.setState({ show3: !this.state.show3 });
  }
  handleModel4() {
    this.setState({ show4: !this.state.show4 });
  }
  handleModel5() {
    this.setState({ show5: !this.state.show5 });
  }
  handleModel6() {
    this.setState({ show6: !this.state.show6 });
  }

  countryValidations(evt) {
    $(".error-class").remove();
    var CountryName = $("#country_name").val();
    var CountryCode = $("#country_code").val();
    var CountrySortCode = $("#country_sort_code").val();
    var CountryLogo = $("#country_logo").val();
    var FeaturesImages = $("#feature_image").val();
    var countryTextarea = $("#countryTextarea").val();
    if (!CountryName) {
      $("#country_name").after(
        '<div class="error-class">Enter country name.</div>'
      );
      evt.preventDefault();
    }
    if (!CountryCode) {
      $("#country_code").after(
        '<div class="error-class">Enter country code.</div>'
      );
      evt.preventDefault();
    }
    if (!CountrySortCode) {
      $("#country_sort_code").after(
        '<div class="error-class">Enter country short code.</div>'
      );
      evt.preventDefault();
    }
    if (!CountryLogo) {
      $("#country_logo").after(
        '<div class="error-class">Choose county flag.</div>'
      );
      evt.preventDefault();
    }
    if (!FeaturesImages) {
      $("#feature_image").after(
        '<div class="error-class">Choose feature images.</div>'
      );
      evt.preventDefault();
    }
    if (!countryTextarea) {
      $("#countryTextarea").after(
        '<div class="error-class">Enter about.</div>'
      );
      evt.preventDefault();
    }
    return true;
  }
  stateValidations(evt) {
    $(".error-class").remove();
    var State = $("#state").val();
    if (!State) {
      $("#state").after('<div class="error-class">Enter state name.</div>');
      evt.preventDefault();
    }
    return true;
  }
  cityValidations(evt) {
    $(".error-class").remove();
    var City = $("#city").val();
    if (!City) {
      $("#city").after('<div class="error-class">Enter city name.</div>');
      evt.preventDefault();
    }
    return true;
  }
  importValidations(evt) {
    $(".error-class").remove();
    var File = $("#import_file").val();
    var Type = $("#source_type").val();
    if (!File) {
      $("#import_file").after('<div class="error-class">Choose file.</div>');
      evt.preventDefault();
    }
    if (!Type) {
      $("#source_type").after(
        '<div class="error-class">Select source type.</div>'
      );
      evt.preventDefault();
    }
    return true;
  }
  render() {
    return (
      <section className="content">
        <Modal show={this.state.show} onHide={() => this.handleModel()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Country</h3>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(evt) => this.countryValidations(evt)}>
              <div class="box-body row">
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Country Name</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Enter country name"
                      id="country_name"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Country Code</label>
                    <input
                      type="text"
                      name="country_code"
                      class="form-control number"
                      placeholder="Enter country code"
                      id="country_code"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Country Short Name</label>
                    <input
                      type="text"
                      name="country_sort_code"
                      class="form-control number"
                      placeholder="Enter country sort code"
                      id="country_sort_code"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Country Flag</label>
                    <input
                      type="file"
                      name="country_logo"
                      class="form-control"
                      id="country_logo"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Featured banner for app</label>
                    <input
                      type="file"
                      name="feature_image"
                      class="form-control"
                      id="feature_image"
                      multiple
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label for="countryTextarea">About</label>
                    <textarea
                      id="countryTextarea"
                      class="form-control"
                      rows="3"
                      name="country_about"
                      placeholder="Enter about"
                      maxLength="255"
                    ></textarea>
                  </div>
                </div>
                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    "background-color": "rgb(235, 237, 239)",
                  }}
                >
                  <strong>Fees and Affordability</strong>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Scholarships</label>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <input
                      type="text"
                      name="meta_title"
                      class="form-control"
                      placeholder="Ex- Based on Merit/Need/Early Acceptances"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <input
                      type="text"
                      name="meta_title"
                      class="form-control"
                      placeholder="Ex- 5% - 40%*"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Accommodation</label>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <input
                      type="text"
                      name="meta_title"
                      class="form-control"
                      placeholder="Ex- Payable Towards Stay"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <input
                      type="text"
                      name="meta_title"
                      class="form-control"
                      placeholder="Ex- INR 2 - 4 Lakhs Per annum"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Exchange Rate</label>
                    <input
                      type="text"
                      name="meta_title"
                      class="form-control"
                      placeholder="Enter exchange rate"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Fee Affordability Exchange Rate Sub Title</label>
                    <input
                      type="text"
                      name="affordability_exchange_sub_title"
                      class="form-control"
                      placeholder="Enter fee affordability exchange rate sub title"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Fee Affordability Total One Year Cost</label>
                    <input
                      type="text"
                      name="affordability_total_year_cost"
                      class="form-control"
                      placeholder="Enter fee affordability"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Fee Affordability Tuition Fee UG</label>
                    <input
                      type="text"
                      name="affordability_tuition_fee_ug"
                      class="form-control"
                      placeholder="Enter fee affordability tuition ug"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Fee Affordability Tuition Fee PG</label>
                    <input
                      type="text"
                      name="affordability_tuition_fee_pg"
                      class="form-control"
                      placeholder="Enter fee affordability tuition fee pg"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Fee Affordability Total Cost UG</label>
                    <input
                      type="text"
                      name="affordability_cost_ug"
                      class="form-control"
                      placeholder="Enter fee affordability total cost ug"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Fee Affordability Total Cost PG</label>
                    <input
                      type="text"
                      name="affordability_cost_pg"
                      class="form-control"
                      placeholder="Enter fee affordability total cost pg"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Fee Affordability Avg Living Expense</label>
                    <input
                      type="text"
                      name="affordability_ang_living_expense"
                      class="form-control"
                      placeholder="Enter fee affordability avg living expense"
                    />
                  </div>
                </div>
                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    "background-color": "rgb(235, 237, 239)",
                  }}
                >
                  <strong>Eligibility and Exam Score</strong>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Academic Requirements (in years)</label>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <input
                      type="text"
                      name="meta_title"
                      class="form-control"
                      placeholder="Ex- UG - 12"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <input
                      type="text"
                      name="meta_title"
                      class="form-control"
                      placeholder="Ex- PG - 16*"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Test Preparation Requirement (UG)</label>
                    <input
                      type="text"
                      name="meta_title"
                      class="form-control"
                      placeholder="Enter requirement test"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Test Preparation Requirement (PG)</label>
                    <input
                      type="text"
                      name="meta_title"
                      class="form-control"
                      placeholder="Enter requirement test"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>English Proficiency Requirement (TOEFL)</label>
                    <input
                      type="text"
                      name="meta_title"
                      class="form-control"
                      placeholder="Enter english proficiency in TOEFL"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>English Proficiency Requirement (IELTS)</label>
                    <input
                      type="text"
                      name="meta_title"
                      class="form-control"
                      placeholder="Enter english proficiency in IELTS"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>English Proficiency Requirement (PTE)</label>
                    <input
                      type="text"
                      name="meta_title"
                      class="form-control"
                      placeholder="Enter english proficiency in PTE"
                    />
                  </div>
                </div>
                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    "background-color": "rgb(235, 237, 239)",
                  }}
                >
                  <strong>Economic Overview</strong>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Part Time Circle</label>
                    <input
                      type="text"
                      name="meta_title"
                      class="form-control"
                      placeholder="Enter economic overview part time circle"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Part Time Circle In</label>
                    <input
                      type="text"
                      name="meta_title"
                      class="form-control"
                      placeholder="Enter economic overview part time circle In"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      name="meta_title"
                      class="form-control"
                      placeholder="Enter title"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Description</label>
                    <textarea
                      id="notesTextarea"
                      class="form-control"
                      placeholder="Enter description"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div
                  id="TextBoxContainer"
                  class="col-lg-12 col-sm-12 col-xs-12"
                ></div>
                <div class="col-lg-12 col-sm-12 col-xs-12 text-right">
                  <span
                    id="btnAdd"
                    class="fa fa-plus-square-o  mr-10"
                    value="Add"
                    style={{
                      "margin-bottom": "10px",
                      "margin-top": "10px",
                    }}
                    onClick={() => this.GetDynamicEconomicOverview()}
                  ></span>
                </div>

                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    "background-color": "rgb(235, 237, 239)",
                  }}
                >
                  <strong>Placement & Employment </strong>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      name="placement_unemployment"
                      class="form-control"
                      placeholder="Enter placement & employment title"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Placement & Employment Text</label>
                    <input
                      type="text"
                      name="placement_unemployment_text"
                      class="form-control"
                      placeholder="Enter placement & employment text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Placement & Employment Graph Max</label>
                    <input
                      type="text"
                      name="placement_unemployment_graph"
                      class="form-control"
                      placeholder="Enter placement & employment graph max"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Placement & Employment Graph Med</label>
                    <input
                      type="text"
                      name="placement_unemployment_graph_med"
                      class="form-control"
                      placeholder="Enter placement & employment graph med"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Placement & Employment Graph Low</label>
                    <input
                      type="text"
                      name="placement_unemployment_graph_low"
                      class="form-control"
                      placeholder="Enter placement & employment graph low"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Placement & Employment Graph Desc</label>
                    <input
                      type="text"
                      name="placement_unemployment_graph_desc"
                      class="form-control"
                      placeholder="Enter placement & employment graph desc"
                    />
                  </div>
                </div>
                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    "background-color": "rgb(235, 237, 239)",
                  }}
                >
                  <strong>Student VISA </strong>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Visa Application Process</label>
                    <input
                      type="text"
                      name="visa_application"
                      class="form-control"
                      placeholder="Enter visa application process"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Visa Fee</label>
                    <input
                      type="text"
                      name="visa_fee"
                      class="form-control"
                      placeholder="Enter visa feee"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Visa Document Required</label>
                    <input
                      type="text"
                      name="visa_doc"
                      class="form-control"
                      placeholder="Enter document required"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Visa Document Remark</label>
                    <input
                      type="text"
                      name="visa_doc_remark"
                      class="form-control"
                      placeholder="Enter document remark"
                    />
                  </div>
                </div>
                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    "background-color": "rgb(235, 237, 239)",
                  }}
                >
                  <strong>Meta Tags Settings</strong>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Meta Title</label>
                    <input
                      type="text"
                      name="meta_title"
                      class="form-control"
                      placeholder="Enter meta title"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Meta Keywords</label>
                    <input
                      type="text"
                      name="meta_keywords"
                      class="form-control"
                      placeholder="Enter meta keywords"
                    />
                  </div>
                </div>

                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Meta Description</label>
                    <input
                      type="text"
                      name="meta_description"
                      class="form-control"
                      placeholder="Enter meta description"
                    />
                  </div>
                </div>
                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    "background-color": "rgb(235, 237, 239)",
                  }}
                >
                  <strong>Promotion Section</strong>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Background Banner</label>
                    <input type="file" name="banner" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Banner Line Image</label>
                    <input
                      type="text"
                      name="banner_line"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Visa Text</label>
                    <input
                      type="text"
                      name="visa_text"
                      class="form-control"
                      placeholder="Enter visa text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Degree Text</label>
                    <input
                      type="text"
                      name="degree_text"
                      class="form-control"
                      placeholder="Enter degree text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Scholar Text</label>
                    <input
                      type="text"
                      name="scholar_text"
                      class="form-control"
                      placeholder="Enter scholar text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Rank Text</label>
                    <input
                      type="text"
                      name="rank_text"
                      class="form-control"
                      placeholder="Enter rank text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Work Text</label>
                    <input
                      type="text"
                      name="work_text"
                      class="form-control"
                      placeholder="Enter work text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Accommodation Text</label>
                    <input
                      type="text"
                      name="accommodation_text"
                      class="form-control"
                      placeholder="Enter accommodation text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Know More Back</label>
                    <input type="file" name="know_more" class="form-control" />
                  </div>
                </div>
                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    "background-color": "rgb(235, 237, 239)",
                  }}
                >
                  <strong>Other Details</strong>
                </div>

                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>&#160;</label>
                    <br />
                    <input type="checkbox" name="top_chance" /> Check My Chance
                    Top
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Map</label>
                    <input type="file" name="map" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Country Banner</label>
                    <input
                      type="file"
                      name="country_banner"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Country Footer Banner</label>
                    <input
                      type="file"
                      name="country_footer"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>
                      Eligibility Exam Score Academic Requirement UG
                    </label>
                    <input
                      type="text"
                      name="eligibility_nexam_requirement_ug"
                      class="form-control"
                      placeholder="Enter eligibility exam score academic requirement ug"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>
                      Eligibility Exam Score Academic Requirement PG
                    </label>
                    <input
                      type="text"
                      name="eligibility_nexam_requirement_pg"
                      class="form-control"
                      placeholder="Enter eligibility exam score academic requirement pg"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>
                      Eligibility Exam Score Test Prep Requirement UG
                    </label>
                    <input
                      type="text"
                      name="eligibility_nexam_test_ug"
                      class="form-control"
                      placeholder="Enter eligibility exam score test prep requirement ug"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>
                      Eligibility Exam Score Test Prep Requirement PG
                    </label>
                    <input
                      type="text"
                      name="eligibility_nexam_test_pg"
                      class="form-control"
                      placeholder="Enter eligibility exam score test prep requirement pg"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Eligibility Exam Score One Year Cost</label>
                    <input
                      type="text"
                      name="eligibility_nexam_year_cost"
                      class="form-control"
                      placeholder="Enter eligibility exam score one year cost"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Part Time Job Circle</label>
                    <input
                      type="text"
                      name="economic_overview"
                      class="form-control"
                      placeholder="Enter economic overview part time job circle"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Part Time Job Circle in 1</label>
                    <input
                      type="text"
                      name="economic_overview_circle1"
                      class="form-control"
                      placeholder="Enter economic overview part time job circle in 1"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Part Time Job Text</label>
                    <input
                      type="text"
                      name="economic_part_time_text"
                      class="form-control"
                      placeholder="Enter economic overview part time job text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Post Study Circle</label>
                    <input
                      type="text"
                      name="economic_post_study"
                      class="form-control"
                      placeholder="Enter economic overview post study circle"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Post Study Circle In</label>
                    <input
                      type="text"
                      name="economic_post_study_circle"
                      class="form-control"
                      placeholder="Enter economic overview post study circle in"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Post Study Text</label>
                    <input
                      type="text"
                      name="economic_post_study_text"
                      class="form-control"
                      placeholder="Enter economic overview post study text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Highest Paying Jobs Text</label>
                    <input
                      type="text"
                      name="economic_overview_jobs"
                      class="form-control"
                      placeholder="Enter economic overview highest paying jobs text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Highest Paying Jobs Circle</label>
                    <input
                      type="text"
                      name="economic_overview_jobs_circle"
                      class="form-control"
                      placeholder="Enter economic overview highest paying jobs Circle"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>
                      Economic Overview Highest Paying Jobs Circle In
                    </label>
                    <input
                      type="text"
                      name="economic_overview_jobs_circle_in"
                      class="form-control"
                      placeholder="Enter economic overview highest paying jobs Circle in"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Min Wage Circle</label>
                    <input
                      type="text"
                      name="economic_overview_minwage"
                      class="form-control"
                      placeholder="Enter economic overview min wage circle"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Min Wage Circle In</label>
                    <input
                      type="text"
                      name="economic_overview_minwage_in"
                      class="form-control"
                      placeholder="Enter economic overview min wage circle in"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Min Wage Text</label>
                    <input
                      type="text"
                      name="economic_overview_text"
                      class="form-control"
                      placeholder="Enter economic overview min wage text"
                    />
                  </div>
                </div>

                <div class="col-lg-12 col-sm-12 col-xs-12 text-center">
                  <button class="btn btn-warning" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            {/* <button
              class="btn btn-danger"
              type="submit"
              onClick={() => {
                this.handleModel();
              }}
              value="Close"
            >
              Close
            </button> */}
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.show3} onHide={() => this.handleModel3()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add University</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>University Name</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Enter university name"
                    id="name"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>University Cover Image</label>
                  <input
                    type="file"
                    name="university_image"
                    class="form-control"
                    id="university_image"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>University Url</label>
                  <input
                    type="text"
                    name="university_url"
                    class="form-control"
                    placeholder="Enter university url"
                    id="university_url"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>University Logo</label>
                  <input
                    type="file"
                    name="university_logo"
                    class="form-control"
                    id="university_logo"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>University Code</label>
                  <input
                    type="text"
                    name="mobile"
                    class="form-control"
                    placeholder="Enter university code"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>University Rating</label>
                  <input
                    type="text"
                    name="university_rating"
                    class="form-control number"
                    placeholder="Enter university rating"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>University Ranking</label>
                  <input
                    type="text"
                    name="university_ranking"
                    class="form-control"
                    placeholder="Enter university ranking"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Minimum Marks for Admission</label>
                  <input
                    type="text"
                    name="min_marks"
                    class="form-control number"
                    placeholder="Enter Minimum marks for admission"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label for="aboutTextarea">About University</label>
                  <textarea
                    id="aboutTextarea"
                    class="form-control"
                    rows="3"
                    name="about_university"
                    placeholder="Enter about university"
                  ></textarea>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>University Type</label>
                  <select class="form-control select-option" name="county">
                    <option value="">Select Type</option>
                    <option value="">Affiliated</option>
                    <option value="">Government</option>
                    <option value="">Deemed</option>
                    <option value="">Privet</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Student Population</label>
                  <input
                    type="text"
                    name="s_population"
                    class="form-control"
                    placeholder="Enter student population"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>FAFSA Code</label>
                  <input
                    type="text"
                    name="fafsa_code"
                    class="form-control"
                    placeholder="Enter fafsa code"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Accreditation</label>
                  <input
                    type="text"
                    name="accreditation"
                    class="form-control"
                    placeholder="Enter accreditation"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Average Cost of Attendance</label>
                  <input
                    type="text"
                    name="attendance_cost"
                    class="form-control"
                    placeholder="Enter average cost of attendance"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Student : Faculty Ratio</label>
                  <input
                    type="text"
                    name="faculty_ration"
                    class="form-control"
                    placeholder="Enter student faculty ration Ex. 24:1"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Country</label>
                  <select class="form-control select-option" name="county">
                    <option value="">Select Country</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>University State</label>
                  <input
                    type="text"
                    name="university_state"
                    class="form-control"
                    placeholder="Enter university state"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    class="form-control"
                    id="city"
                    placeholder="Enter city name"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    class="form-control"
                    placeholder="Enter address"
                    id="address"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Country Rank</label>
                  <input
                    type="text"
                    name="country_rank"
                    class="form-control number"
                    placeholder="Enter country rank"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    class="form-control"
                    placeholder="Enter location"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Lifestyle</label>
                  <input
                    type="text"
                    name="lifestyle"
                    class="form-control"
                    id="lifestyle"
                    placeholder="Enter lifestyle"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Lifestyle Details</label>
                  <input
                    type="text"
                    name="lifestyle_details"
                    class="form-control"
                    id="lifestyle_details"
                    placeholder="Enter lifestyle details"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Living Cost</label>
                  <input
                    type="text"
                    name="living_cost"
                    class="form-control"
                    placeholder="Enter living cost"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Total Cost</label>
                  <input
                    type="text"
                    name="total_cost"
                    class="form-control"
                    placeholder="Enter total cost"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>Amenities</label>
                  <br />
                  <input type="checkbox" name="bank" class="mr-r" />
                  <span class="mr-r">Bank</span>
                  <input type="checkbox" name="food" class="mr-r" />
                  <span class="mr-r">Food</span>
                  <input type="checkbox" name="health" class="mr-r" />
                  <span class="mr-r">Healthcare</span>
                  <input type="checkbox" name="commute" class="mr-r" />
                  <span class="mr-r">Commute</span>
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>Accommodation Details</label>
                  <textarea
                    id="courseTextarea"
                    class="form-control"
                    rows="3"
                    name="accommodation_details"
                    placeholder="Enter accommodation details"
                  ></textarea>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Accommodation Cost</label>
                  <input
                    type="text"
                    name="accommodation_cost"
                    class="form-control"
                    placeholder="Enter accommodation cost"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Intake</label>
                  <input
                    type="text"
                    name="intake"
                    class="form-control"
                    id="intake"
                    placeholder="Enter intake"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Total No. of Students</label>
                  <input
                    type="text"
                    name="total_student"
                    class="form-control"
                    id="total_student"
                    placeholder="Enter total no. of students"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Legal Status</label>
                  <input
                    type="text"
                    name="legal_status"
                    class="form-control"
                    id="legal_status"
                    placeholder="Enter legal status"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="mobile"
                    class="form-control number"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Average Tuition Fee</label>
                  <input
                    type="text"
                    name="tuition_fee"
                    class="form-control"
                    placeholder="Enter average tuition fee"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Average Living Expense</label>
                  <input
                    type="text"
                    name="living_expense"
                    class="form-control"
                    placeholder="Enter average living expense"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Trending Points</label>
                  <input
                    type="text"
                    name="trending_points"
                    class="form-control"
                    placeholder="Enter trending points"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Analytic Points</label>
                  <input
                    type="text"
                    name="analytic_points"
                    class="form-control"
                    placeholder="Enter analytic points"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Privacy</label>
                  <select class="form-control select-option" name="privacy">
                    <option value="">Select Privacy</option>
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Download Brochure</label>
                  <input type="file" name="brochure" class="form-control" />
                </div>
              </div>
              <div
                class="col-lg-12 col-sm-12 col-xs-12"
                style={{
                  padding: "8px 12px 0 5px",
                  "background-color": "#ebedef",
                }}
              >
                <strong>Meta Tags Settings</strong>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>Meta Title</label>
                  <input
                    type="texrt"
                    name="meta_title"
                    class="form-control"
                    placeholder="Enter meta title"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label for="keywordsTextarea">Meta Keywords</label>
                  <textarea
                    id="keywordsTextarea"
                    class="form-control"
                    rows="3"
                    name="meta_keywords"
                    placeholder="Enter meta keywords"
                  ></textarea>
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>Meta Description</label>
                  <CKEditor
                    editor={ClassicEditor}
                    onInit={(editor) => {
                      //// this inializes our application
                    }}
                  />
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
                this.handleModel3();
              }}
              value="Close"
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.show4} onHide={() => this.handleModel4()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add University Course</h3>
          </Modal.Header>
          <Modal.Body>
            <div class="box-body row">
              <div class="col-md-12">
                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    "background-color": "rgb(235, 237, 239)",
                  }}
                >
                  <strong>Basic Info</strong>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>University</label>
                      <select class="form-control" name="university">
                        <option value="">Select University</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Course</label>
                      <select class="form-control" name="course">
                        <option value="">Select Course</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Course Name Alias</label>
                      <input
                        type="text"
                        name="alias1"
                        class="form-control"
                        placeholder="Enter course name alias"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Duration</label>
                      <input
                        type="text"
                        name="duration"
                        class="form-control"
                        placeholder="Enter duration"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Course Level</label>
                      <select class="form-control" name="course_level">
                        <option value="">Select Course Level</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Application Deadline</label>
                      <input type="date" name="" class="form-control" />
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    "background-color": "rgb(235, 237, 239)",
                  }}
                >
                  <strong>Academic Info</strong>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Academic Requirement</label>
                  <input
                    type="text"
                    name="academic_requirement"
                    class="form-control"
                    placeholder="Enter academic requirement"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Academic Details</label>
                  <input
                    type="text"
                    name="academic_details"
                    class="form-control"
                    placeholder="Enter academic details"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Application Fee</label>
                  <input
                    type="text"
                    name="application_fee"
                    class="form-control "
                    placeholder="Enter application fee"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Tuition Fee</label>
                  <input
                    type="text"
                    name="tuition"
                    class="form-control"
                    placeholder="Enter tuition"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>LOR | SOP</label>
                  <input
                    type="text"
                    name="tuition"
                    class="form-control"
                    placeholder="Enter requirement"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>ILETS</label>
                  <input
                    type="text"
                    name="tuition"
                    class="form-control"
                    placeholder="Enter ILETS score"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>TOEFL</label>
                  <input
                    type="text"
                    name="tuition"
                    class="form-control"
                    placeholder="Enter TOEFL score"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>GRE</label>
                  <input
                    type="text"
                    name="tuition"
                    class="form-control"
                    placeholder="Enter GRE score"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>GMAT</label>
                  <input
                    type="text"
                    name="tuition"
                    class="form-control"
                    placeholder="Enter GMAT score"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Scholarships Details</label>
                  <input
                    type="text"
                    name="scholarship_details"
                    class="form-control"
                    placeholder="Enter scholarship details"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>&#160; &nbsp;</label>
                  <br />
                  <input type="checkbox" name="scholarship" class="mr-r" />
                  <span class="mr-r">Scholarships</span>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Internship co op Details</label>
                  <input
                    type="text"
                    name="internship_co_op_details"
                    class="form-control"
                    placeholder="Enter internship co op details"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>&#160; &nbsp;</label>
                  <br />
                  <input type="checkbox" name="internship_co_op" class="mr-r" />
                  <span class="mr-r">Internship co op</span>
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <label>Option Available</label>
                  <select class="form-control">
                    <option>Select</option>
                  </select>
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
                this.handleModel4();
              }}
              value="Close"
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.show5} onHide={() => this.handleModel5()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add State</h3>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(evt) => this.stateValidations(evt)}>
              <div class="box-body">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                      <div class="form-group">
                        <label>Country</label>
                        <select class="form-control">
                          <option>Select Country</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                      <div class="form-group">
                        <label>State Name</label>
                        <input
                          type="text"
                          name="state"
                          id="state"
                          class="form-control"
                          placeholder="Enter state name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            {/* <button
              class="btn btn-danger"
              type="submit"
              onClick={() => {
                this.handleModel5();
              }}
              value="Close"
            >
              Close
            </button> */}
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.show6} onHide={() => this.handleModel6()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add City</h3>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(evt) => this.cityValidations(evt)}>
              <div class="box-body">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                      <div class="form-group">
                        <label>Country</label>
                        <select class="form-control">
                          <option>Select Country</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                      <div class="form-group">
                        <label>State</label>
                        <select class="form-control">
                          <option>Select State</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                      <div class="form-group">
                        <label>City Name</label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          class="form-control"
                          placeholder="Enter city name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12 text-center">
                  <button class="btn btn-warning" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            {/* <button
              class="btn btn-danger"
              type="submit"
              onClick={() => {
                this.handleModel6();
              }}
              value="Close"
            >
              Close
            </button> */}
          </Modal.Footer>
        </Modal>
        <div className="col-xs-12">
          <div className="box">
            <div className="box-body">
              <CCard>
                <CCardBody>
                  <CTabs>
                    <CNav variant="tabs">
                      <CNavItem>
                        <CNavLink>Country</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>State</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>City</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>University</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>University Course</CNavLink>
                      </CNavItem>
                    </CNav>
                    <CTabContent>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">Country List</h3>
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
                                <div class="tab-content">
                                  <table
                                    id="example"
                                    class="table table-bordered "
                                  >
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>Name</th>
                                        <th>Flag</th>
                                        <th>About</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>AUSTRALIA (AUT)</td>
                                        <td>
                                          <img
                                            class="flag"
                                            src={
                                              "/admin/build/avatars/Flag-Australia.jpg"
                                            }
                                          />{" "}
                                          (+61)
                                        </td>
                                        <td>Testing</td>
                                        <td>
                                          <a href="#!">Active</a>
                                        </td>
                                        <td>
                                          <Link
                                            to={"/admin/build/edit-country"}
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
                      </CTabPane>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">State List</h3>
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
                                  <div class="col-sm-8">
                                    <div class="add-icon">
                                      <img
                                        src={"/admin/build/avatars/add.png"}
                                        onClick={() => {
                                          this.handleModel5();
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <hr />
                                <div class="tab-content">
                                  <table
                                    id="example"
                                    class="table table-bordered "
                                  >
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>State</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Uttar Pradesh</td>
                                        <td>
                                          <a href="#!">Active</a>
                                        </td>
                                        <td>
                                          <Link
                                            to={"/admin/build/edit-state"}
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
                      </CTabPane>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">City List</h3>
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
                                  <div class="col-sm-8">
                                    <div class="add-icon">
                                      <img
                                        src={"/admin/build/avatars/add.png"}
                                        onClick={() => {
                                          this.handleModel6();
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <hr />
                                <div class="tab-content">
                                  <table
                                    id="example"
                                    class="table table-bordered "
                                  >
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>City</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Noida</td>
                                        <td>
                                          <a href="#!">Active</a>
                                        </td>
                                        <td>
                                          <Link
                                            to={"/admin/build/edit-city"}
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
                      </CTabPane>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">University List</h3>
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
                                      </button>{" "}
                                      &nbsp; &nbsp;
                                      <button
                                        type="submit"
                                        name=""
                                        class="btn btn-secondary"
                                      >
                                        Export Excel
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col-sm-7">
                                    <div class="add-icon">
                                      <img
                                        src={"/admin/build/avatars/add.png"}
                                        onClick={() => {
                                          this.handleModel3();
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <hr />
                                <div class="tab-content">
                                  <table
                                    id="example"
                                    class="table table-bordered "
                                  >
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>university Name</th>
                                        <th>Country</th>
                                        <th>Address</th>
                                        <th>University Rating</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Argosy University, Tampa</td>
                                        <td>USA</td>
                                        <td>
                                          1403 N Howard Ave, Tampa, FL 33607,
                                          United States
                                        </td>
                                        <td>4</td>
                                        <td>
                                          <a href="#!">Active</a>
                                        </td>
                                        <td>
                                          <Link
                                            to={"/admin/build/edit-university"}
                                            class="edit"
                                          >
                                            <span class="fa fa-pencil-square-o"></span>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>
                                          Art Institute of Fort Lauderdale
                                        </td>
                                        <td>USA</td>
                                        <td>
                                          1799 SE 17th St, Fort Lauderdale, FL
                                          33316, United States
                                        </td>
                                        <td>3</td>
                                        <td>
                                          <a href="#!">Active</a>
                                        </td>
                                        <td>
                                          <Link
                                            to={"/admin/build/edit-university"}
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
                      </CTabPane>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">
                                  University Course List
                                </h3>
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
                                      </button>{" "}
                                      &nbsp; &nbsp;
                                      <button
                                        type="submit"
                                        name=""
                                        class="btn btn-secondary"
                                      >
                                        Export Excel
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col-sm-7">
                                    <div class="add-icon">
                                      <img
                                        src={"/admin/build/avatars/add.png"}
                                        onClick={() => {
                                          this.handleModel4();
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <hr />
                                <div class="tab-content">
                                  <table
                                    id="example"
                                    class="table table-bordered "
                                  >
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>University Name</th>
                                        <th>Course</th>
                                        <th>Duration</th>
                                        <th>Type</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Loughborough University</td>
                                        <td>
                                          Advanced Manufacturing Engineering and
                                          Management
                                        </td>
                                        <td>12</td>
                                        <td></td>
                                        <td>
                                          <a href="#!">Active</a>
                                        </td>
                                        <td>
                                          <Link
                                            to={
                                              "/admin/build/edit-university-course"
                                            }
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
export default DataManagement;
