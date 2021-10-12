import React from "react";
import "../Style.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
class EditUser extends React.Component {
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
                <h3 class="box-title">Edit User</h3>
              </div>
              <hr />
              <form>
                <div class="box-body">
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter user name"
                        class="form-control"
                        id="name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>Email/User Name</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter user email"
                        class="form-control"
                        id="email"
                      />
                    </div>
                  </div>
                  {/* <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        class="form-control"
                        id="password"
                      />
                    </div>
                  </div> */}
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>Mobile</label>
                      <input
                        type="text"
                        name="mobile"
                        placeholder="Enter mobile number"
                        maxLength="10"
                        class="form-control number"
                        id="mobile"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>User role</label>
                      <select name="stream" class="form-control" id="stream">
                        <option value="">Select User Role</option>
                        <option value="">Promoter</option>
                        <option value="">Telecaller</option>
                        <option value="">Field Agent</option>
                        <option value="">Seo</option>
                        <option value="">Counsellor</option>
                        <option value="">Account</option>
                        <option value="">Associate Manager</option>
                        <option value="">Application Executive</option>
                        <option value="">Visa Executive</option>
                        <option value="">Operational</option>
                        <option value="">Application</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>City</label>
                      <select name="city" class="form-control" id="city">
                        <option value="">Select City</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>Profile photo</label>
                      <input
                        type="file"
                        name="profile_photo"
                        class="form-control"
                        id="profile_photo"
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
export default EditUser;
