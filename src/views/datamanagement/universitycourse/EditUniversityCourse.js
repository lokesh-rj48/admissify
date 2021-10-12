import React from "react";
import "../Style.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
class EditUniversityCourse extends React.Component {
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
                <h3 class="box-title">Edit University Course</h3>
              </div>
              <hr />
              <form>
                <div class="box-body row">
                  <div class="col-md-12">
                    <div
                      class="col-lg-12 col-sm-12 col-xs-12"
                      style={{
                        "background-color": "rgb(235, 237, 239)",
                      }}
                    >
                      <div class="form-group">
                        <label for="courseTextarea">
                          <strong>Basic Info</strong>
                        </label>
                      </div>
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
                      <div class="form-group">
                        <label for="courseTextarea">
                          <strong>Academic Info</strong>
                        </label>
                      </div>
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
                      <input
                        type="checkbox"
                        name="internship_co_op"
                        class="mr-r"
                      />
                      <span class="mr-r">Internship co op</span>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Other Requirement</label>
                      <input
                        type="text"
                        name="other_requirement"
                        class="form-control"
                        placeholder="Enter other requirement"
                      />
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
export default EditUniversityCourse;
