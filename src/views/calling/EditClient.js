import React from "react";
import "./Style.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
class EditClient extends React.Component {
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
                <h3 class="box-title">Edit Student</h3>
              </div>
              <hr />
              <form>
                <div class="box-body row">
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        placeholder="Enter name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Mobile</label>
                      <input
                        type="text"
                        class="form-control number"
                        name="mobile"
                        placeholder="Enter mobile number"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Alternate Mobile No.</label>
                      <input
                        type="text"
                        class="form-control number"
                        name="alternate_mobile"
                        placeholder="Enter alternate mobile number"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Whats App No.</label>
                      <input
                        type="text"
                        class="form-control number"
                        name="whtsappmobile"
                        placeholder="Enter whats app number"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        class="form-control"
                        name="email"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Gender </label>
                      <select class="form-control select-option" name="gender">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Date of Birth</label>
                      <input type="date" class="form-control" name="dob" />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        class="form-control"
                        name="address"
                        placeholder="Enter address"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>University</label>
                      <select
                        class="form-control select-option"
                        name="university"
                      >
                        <option value="">Select University</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Course Level</label>
                      <select class="form-control select-option" name="level">
                        <option value="">Select Level</option>
                        <option value="Male">UG</option>
                        <option value="Female">PG</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Stream</label>
                      <select class="form-control select-option" name="stream">
                        <option value="">Select Stream</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Course</label>
                      <select class="form-control select-option" name="course">
                        <option value="">Select Course</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>City Name</label>
                      <input
                        type="text"
                        class="form-control"
                        name="city"
                        placeholder="Enter city name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Country Name</label>
                      <input
                        type="text"
                        class="form-control"
                        name="country"
                        placeholder="Enter country name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>Caller</label>
                      <input
                        type="text"
                        class="form-control"
                        name="caller"
                        placeholder="Enter something if you want"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <center>
                      <input
                        type="button"
                        class="btn btn-warning lead-btn"
                        value="Update"
                      />
                    </center>
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
export default EditClient;
