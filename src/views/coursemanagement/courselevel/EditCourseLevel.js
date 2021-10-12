import React from "react";
import "../Style.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
import Token from "../../../components/AuthToken/AuthToken";
class EditCourseLevel extends React.Component {
  componentDidMount() {
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });

    //Authentication
    if (localStorage.authToken !== Token) {
      window.location.href = "/login";
    }
  }
  render() {
    return (
      <section class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="box box-primary">
              <div class="box-header">
                <h3 class="box-title">Edit Course Level</h3>
              </div>
              <hr />
              <form>
                <div class="box-body row">
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>Course Level</label>
                      <select class="form-control">
                        <option>Select</option>
                        <option>UG</option>
                        <option>PG</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label for="courseTextarea">Description</label>
                      <textarea
                        id="courseTextarea"
                        class="form-control"
                        rows="3"
                        name="about"
                        placeholder="Enter about course"
                      ></textarea>
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
export default EditCourseLevel;
