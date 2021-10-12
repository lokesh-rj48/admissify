import React, { useState } from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "./Style.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "font-awesome/css/font-awesome.min.css";
import $ from "jquery";
class EditCategory extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      $("#example").DataTable();
    });
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });
  }
  render() {
    return (
      <section class="content">
        <div className="col-xs-12">
          <div className="box">
            <div class="box-body row">
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Discussion Category</label>
                  <input
                    type="text"
                    name="discussion_category"
                    class="form-control"
                    placeholder="Enter discussion category"
                  />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="form-group">
                  <label>Discussion Sub Category</label>
                  <input
                    type="text"
                    name="discussion_sub_category"
                    class="form-control"
                    placeholder="Enter discussion sub category"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="form-group">
                  <b for="addressTextarea">Additional Field</b>
                  <textarea
                    id="addressTextarea"
                    class="form-control"
                    rows="3"
                    name="about"
                    placeholder="Enter text"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-sm-12 col-xs-12">
              <div class="form-group">
                <center>
                  <input class="btn btn-warning" type="submit" value="Update" />
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default EditCategory;
