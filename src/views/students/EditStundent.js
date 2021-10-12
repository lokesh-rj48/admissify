import React from "react";
import "./Style.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
class EditStundent extends React.Component {
  componentDidMount() {
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });

    $(function () {
      $("#btnAdd").bind("click", function () {
        var div = $("<div />");
        div.html(GetDynamicTextBox(""));
        $("#TextBoxContainer").append(div);
      });
      $("body").on("click", ".remove", function () {
        $(this).closest("div").remove();
      });
    });
    function GetDynamicTextBox(value) {
      return (
        '<div class="row" style="margin-top:25px"><div class="col-lg-5 col-sm-5 col-xs-12"><input name = "title[]" placeholder="Enter field title" type="text" value = "" class="form-control" /></div>' +
        '<div class="col-lg-5 col-sm-5 col-xs-12"><input name = "other_field[]" placeholder="Enter detail" type="text" value = "" class="form-control" /></div>' +
        '<button type="button" class="btn btn-danger remove">Remove</button></div>'
      );
    }
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
                        name="fname"
                        class="form-control"
                        placeholder="Enter first name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Mobile</label>
                      <input
                        type="text"
                        name="mobile"
                        class="form-control number"
                        placeholder="Enter mobile number"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        class="form-control"
                        placeholder="Enter password "
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Confirm Password</label>
                      <input
                        type="Password"
                        name="confirm_password"
                        class="form-control"
                        placeholder="Enter confirm password"
                      />
                    </div>
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
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default EditStundent;
