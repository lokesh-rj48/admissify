import React from "react";
import "../Style.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ckeditor, { CKEditor } from "@ckeditor/ckeditor5-react";
class EditUniversity extends React.Component {
  componentDidMount() {
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });
  }
  render() {
    return (
      <section class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="box box-primary">
              <div class="box-header">
                <h3 class="box-title">Edit University</h3>
              </div>
              <hr />
              <form>
                <div class="box-body row">
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
                    <div class="form-group">
                      <label>University State/Country/State</label>
                      <input
                        type="text"
                        name="university_state"
                        class="form-control"
                        placeholder="Enter university state/country/state"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
                    <div class="form-group">
                      <label>Country</label>
                      <select class="form-control" name="county">
                        <option value="">Select Country</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                  <div class="col-lg-4 col-sm-4 col-xs-12">
                    <div class="form-group">
                      <label>Privacy</label>
                      <select class="form-control" name="privacy">
                        <option value="">Select Privacy</option>
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-4 col-xs-12">
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
                    <div class="form-group">
                      <label for="courseTextarea">
                        <strong>Meta Tags Settings</strong>
                      </label>
                    </div>
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
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default EditUniversity;
