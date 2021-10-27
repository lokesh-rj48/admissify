import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ckeditor, { CKEditor } from "@ckeditor/ckeditor5-react";
import Url from "../../../components/URL/Url";
import Collapsible from "react-collapsible";
import "./Style.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const axios = require("axios");
class EditCountry extends React.Component {
  componentDidMount() {
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });

    //Getting ID From URL
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf("/") + 1);
    //For Country By ID
    axios
      .get(Url + `api/country/getCountryById?id=${id}`)
      .then((res) => {
        console.log("res", res);
        this.setState({
          id: res.data.data.id,
          code: res.data.data.code,
          country_name: res.data.data.country_name,
          country_short_name: res.data.data.country_short_name,
          description: res.data.data.description,
        });
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occured at API end (" + err.message + ")");
      });
  }
  constructor() {
    super();
    this.state = {
      country_name: "",
      code: "",
      country_short_name: "",
      flag: "",
      description: "",
      slug: "",
    };
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  updateCountry(evt, id) {
    const postData = {
      country_name: this.state.country_name,
      slug: this.state.country_name.toLowerCase(),
      code: this.state.code,
      //flag: formData.get("flag").name,
      description: this.state.description,
      country_short_name: this.state.country_short_name,
    };
    //console.log("postData", postData);

    axios
      .put(Url + `api/country/updateCountry/${id}`, postData)
      .then((res) => {
        console.log("res", res);
        toast.success(res.data.message);
        window.location.reload();
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occured at API end (" + err.message + ")");
      });
  }
  render() {
    return (
      <section class="content">
        <ToastContainer />
        <div class="row">
          <div class="col-md-12">
            <div class="box box-primary">
              <div class="box-header">
                <h3 class="box-title">Edit Country</h3>
              </div>
              <hr />
              <div class="box-body row">
                <div class="col-md-12">
                  <Collapsible trigger="Country" className="icon-user">
                    <form>
                      <div class="row">
                        <div class="col-lg-6 col-sm-6 col-xs-12">
                          <div class="form-group">
                            <label>Country Name</label>
                            <input
                              type="text"
                              name="country_name"
                              onChange={(evt) => this.handleChange(evt)}
                              defaultValue={this.state.country_name}
                              class="form-control"
                              placeholder="Enter country name"
                              id="name"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-xs-12">
                          <div class="form-group">
                            <label>Country Code</label>
                            <input
                              type="text"
                              name="code"
                              onChange={(evt) => this.handleChange(evt)}
                              defaultValue={this.state.code}
                              class="form-control number"
                              placeholder="Enter country code"
                              id="country"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-xs-12">
                          <div class="form-group">
                            <label>Country Short Name</label>
                            <input
                              type="text"
                              name="country_short_name"
                              onChange={(evt) => this.handleChange(evt)}
                              defaultValue={this.state.country_short_name}
                              class="form-control number"
                              placeholder="Enter country sort code"
                              id="country"
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
                              rows="5"
                              name="description"
                              onChange={(evt) => this.handleChange(evt)}
                              defaultValue={this.state.description}
                              placeholder="Enter about"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-lg-12 col-sm-12 col-xs-12">
                          <div class="form-group">
                            <center>
                              <input
                                onClick={(evt) =>
                                  this.updateCountry(evt, this.state.id)
                                }
                                class="btn btn-warning"
                                type="submit"
                                value="Update"
                              />
                            </center>
                          </div>
                        </div>
                      </div>
                    </form>
                  </Collapsible>
                  <Collapsible
                    trigger="Fees and Affordability"
                    className="icon-money"
                  >
                    <div class="row">
                      <div class="col-lg-12 col-sm-12 col-xs-12">
                        <div class="form-group">
                          <label>Scholarships</label>
                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                          <input
                            type="text"
                            name="scholarship"
                            class="form-control"
                            placeholder="Ex- Based on Merit/Need/Early Acceptances"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                          <input
                            type="text"
                            name="scholarship_percentage"
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
                            name="accommodation"
                            class="form-control"
                            placeholder="Ex- Payable Towards Stay"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                          <input
                            type="text"
                            name="accommodation_charge"
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
                            name="exchange_rate"
                            class="form-control"
                            placeholder="Enter exchange rate"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-sm-6 col-xs-12">
                        <div class="form-group">
                          <label>
                            Fee Affordability Exchange Rate Sub Title
                          </label>
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
                            name="affordability_total_cost_ug"
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
                            name="affordability_total_cost_pg"
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
                      <div class="col-lg-12 col-sm-12 col-xs-12">
                        <div class="form-group">
                          <center>
                            <input
                              class="btn btn-warning"
                              type="submit"
                              value="Update"
                            />
                          </center>
                        </div>
                      </div>
                    </div>
                  </Collapsible>
                  <Collapsible
                    trigger="Eligibility and Exam Score"
                    className="icon-email"
                  >
                    <div class="row">
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
                      <div class="col-lg-12 col-sm-12 col-xs-12">
                        <div class="form-group">
                          <center>
                            <input
                              class="btn btn-warning"
                              type="submit"
                              value="Update"
                            />
                          </center>
                        </div>
                      </div>
                    </div>
                  </Collapsible>
                  <Collapsible
                    trigger="Placement & Employment"
                    className="icon-briefcase"
                  >
                    <div class="row">
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
                      <div class="col-lg-12 col-sm-12 col-xs-12">
                        <div class="form-group">
                          <center>
                            <input
                              class="btn btn-warning"
                              type="submit"
                              value="Update"
                            />
                          </center>
                        </div>
                      </div>
                    </div>
                  </Collapsible>
                  <Collapsible trigger="Student VISA" className="icon-visa">
                    <div class="row">
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
                      <div class="col-lg-12 col-sm-12 col-xs-12">
                        <div class="form-group">
                          <center>
                            <input
                              class="btn btn-warning"
                              type="submit"
                              value="Update"
                            />
                          </center>
                        </div>
                      </div>
                    </div>
                  </Collapsible>
                  <Collapsible
                    trigger="Meta Tags Settings"
                    className="icon-tags"
                  >
                    <div class="row">
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
                      <div class="col-lg-12 col-sm-12 col-xs-12">
                        <div class="form-group">
                          <center>
                            <input
                              class="btn btn-warning"
                              type="submit"
                              value="Update"
                            />
                          </center>
                        </div>
                      </div>
                    </div>
                  </Collapsible>
                  <Collapsible
                    trigger="Promotion Section"
                    className="icon-email"
                  >
                    <div class="row">
                      <div class="col-lg-4 col-sm-4 col-xs-12">
                        <div class="form-group">
                          <label>Background Banner</label>
                          <input
                            type="file"
                            name="banner"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-4 col-xs-12">
                        <div class="form-group">
                          <label>Banner Line Image</label>
                          <input
                            type="text"
                            name="banner_line"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-4 col-sm-4 col-xs-12">
                        <div class="form-group">
                          <label>Know More Back</label>
                          <input
                            type="file"
                            name="know_more"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12 col-sm-12 col-xs-12">
                        <div class="form-group">
                          <center>
                            <input
                              class="btn btn-warning"
                              type="submit"
                              value="Update"
                            />
                          </center>
                        </div>
                      </div>
                    </div>
                  </Collapsible>
                  <Collapsible trigger="Other Details" className="icon-history">
                    <div class="row">
                      <div class="col-lg-4 col-sm-4 col-xs-12">
                        <div class="form-group">
                          <label>&#160;</label>
                          <br />
                          <input type="checkbox" name="top_chance" /> Check My
                          Chance Top
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-4 col-xs-12">
                        <div class="form-group">
                          <label>Map</label>
                          <input type="file" name="map" class="form-control" />
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-4 col-xs-12">
                        <div class="form-group">
                          <label>Country Banner</label>
                          <input
                            type="file"
                            name="country_banner"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-4 col-xs-12">
                        <div class="form-group">
                          <label>Country Footer Banner</label>
                          <input
                            type="file"
                            name="country_footer"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-4 col-sm-4 col-xs-12">
                        <div class="form-group">
                          <label>
                            Economic Overview Part Time Job Circle in 1
                          </label>
                          <input
                            type="text"
                            name="economic_overview_circle1"
                            class="form-control"
                            placeholder="Enter economic overview part time job circle in 1"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-4 col-sm-4 col-xs-12">
                        <div class="form-group">
                          <label>
                            Economic Overview Highest Paying Jobs Text
                          </label>
                          <input
                            type="text"
                            name="economic_overview_jobs"
                            class="form-control"
                            placeholder="Enter economic overview highest paying jobs text"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-4 col-xs-12">
                        <div class="form-group">
                          <label>
                            Economic Overview Highest Paying Jobs Circle
                          </label>
                          <input
                            type="text"
                            name="economic_overview_jobs_circle"
                            class="form-control"
                            placeholder="Enter economic overview highest paying jobs Circle"
                          />
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-4 col-sm-4 col-xs-12">
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
                      <div class="col-lg-12 col-sm-12 col-xs-12">
                        <div class="form-group">
                          <center>
                            <input
                              class="btn btn-warning"
                              type="submit"
                              value="Update"
                            />
                          </center>
                        </div>
                      </div>
                    </div>
                  </Collapsible>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default EditCountry;
