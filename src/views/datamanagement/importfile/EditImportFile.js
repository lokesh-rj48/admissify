import React from "react";
import "../Style.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
import Token from "../../../components/AuthToken/AuthToken";
class EditImportFile extends React.Component {
  componentDidMount() {
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });

    //Authentication
    // if (localStorage.authToken !== Token) {
    //   window.location.href = "/login";
    // } else {
    //   window.location.href = "/admin/build/courses";
    // }
  }
  render() {
    return (
      <section class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="box box-primary">
              <div class="box-header">
                <h3 class="box-title">Edit Import File</h3>
              </div>
              <hr />
              <form>
                <div class="box-body">
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>Select File</label>
                      <input type="file" name="file" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>&nbsp;</label>
                      <select name="source" class="form-control">
                        <option value="">Select Source Option</option>
                        <option value="University">University</option>
                        <option value="Courses">Courses</option>
                        <option value="Countries">Countries</option>
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
export default EditImportFile;
