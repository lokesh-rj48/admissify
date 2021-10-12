import React from "react";
import "./Style.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
class ImportFile extends React.Component {
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
                <h3 class="box-title">Import File</h3>
              </div>
              <hr />
              <form>
                <div class="box-body row">
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>Select File</label>
                      <input type="file" name="file" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label for="courseTextarea">
                        <strong>Other Fields</strong>
                      </label>
                    </div>
                  </div>
                  <div
                    id="TextBoxContainer"
                    class="col-lg-12 col-sm-12 col-xs-12"
                  ></div>
                  <div class="col-lg-12 col-sm-12 col-xs-12 text-right">
                    <button
                      id="btnAdd"
                      type="button"
                      class="btn btn-primary"
                      data-toggle="tooltip"
                      data-original-title="Add more controls"
                    >
                      Add
                    </button>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <center>
                        <input
                          class="btn btn-warning"
                          type="submit"
                          value="Submit"
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
export default ImportFile;
