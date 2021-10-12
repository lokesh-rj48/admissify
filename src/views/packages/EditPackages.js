import React from "react";
import "./Style.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
class EditPackages extends React.Component {
  componentDidMount() {
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });

    //Add More Service Type
    $(function () {
      $("#servicebtn").bind("click", function () {
        var div = $("<div />");
        div.html(GetDynamicServiceTextBox(""));
        $("#ServiceContainer").append(div);
      });
      $("body").on("click", ".remove", function () {
        $(this).closest("div").remove();
      });
    });
    function GetDynamicServiceTextBox(value) {
      return (
        '<div class="row" style="margin-top:25px"><div class="col-lg-10 col-sm-10 col-xs-12"><input name = "service_type[]" placeholder="Enter features" type="text" value = "" class="form-control" /></div>' +
        '<button type="button" class="btn btn-danger remove"><i class="fa fa-trash" aria-hidden="true"></i></button></div>'
      );
    }

    $("#type").on("change", function () {
      if (this.value == "Content") {
        $("#content").show();
        $("#video").hide();
      }
      if (this.value == "Video") {
        $("#video").show();
        $("#content").hide();
      }
    });
  }
  render() {
    return (
      <section class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="box box-primary">
              <div class="box-header">
                <h3 class="box-title">Edit Package</h3>
              </div>
              <hr />
              <div class="box-body row">
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Package Name</label>
                    <input
                      type="text"
                      name="title"
                      class="form-control"
                      placeholder="Enter package name"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Price</label>
                    <input
                      type="text"
                      name="price"
                      class="form-control"
                      placeholder="Enter us price"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Package Type</label>
                    <select class="form-control">
                      <option value="">Select Type</option>
                      <option value="">Third Party</option>
                      <option value="">Admissify</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Features</label>
                    <input
                      type="text"
                      name="service_type[]"
                      class="form-control"
                      placeholder="Enter features"
                    />
                    <div
                      id="ServiceContainer"
                      class="col-lg-12 col-sm-12 col-xs-12"
                    ></div>
                    <div
                      class="col-lg-12 col-sm-12 col-xs-12 text-right"
                      style={{ "margin-top": "15px" }}
                    >
                      <button
                        id="servicebtn"
                        type="button"
                        class="btn btn-primary"
                        data-toggle="tooltip"
                        data-original-title="Add more controls"
                      >
                        <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                      </button>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default EditPackages;
