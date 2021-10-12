import React, { useState } from "react";
import "./Style.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";

class EditAdvertisement extends React.Component {
  componentDidMount() {
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });
  }
  bannerHideShow() {
    var Type = $("#banner_").val();
    if (Type == "Website Page") {
      $("#web_page").show();
      $("#country_page").hide();
    }
    if (Type == "Country Name") {
      $("#country_page").show();
      $("#web_page").hide();
    }
  }
  render() {
    return (
      <section class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="box box-primary">
              <div class="box-header">
                <h3 class="box-title">Edit Advertisement</h3>
              </div>
              <hr />
              <div class="box-body row">
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Banner Type</label>
                    <select class="form-control">
                      <option value="">Select</option>
                      <option value="">PopUp Banner</option>
                      <option value="">Middle Banner</option>
                      <option value="">Side Banner</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label> Image</label>
                    <input type="file" name="file" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Advertisement On</label>
                    <select
                      class="form-control"
                      id="banner_"
                      onChange={() => this.bannerHideShow()}
                    >
                      <option value="">Select</option>
                      <option value="Website Page">Website Page</option>
                      <option value="Country Name">Country Name</option>
                    </select>
                  </div>
                </div>
                <div
                  class="col-lg-6 col-sm-6 col-xs-12"
                  id="web_page"
                  style={{ display: "none" }}
                >
                  <div class="form-group">
                    <label>Page Name</label>
                    <select class="form-control">
                      <option value="">Select</option>
                      <option value="">Home Page</option>
                      <option value="">University Page</option>
                    </select>
                  </div>
                </div>
                <div
                  class="col-lg-6 col-sm-6 col-xs-12"
                  id="country_page"
                  style={{ display: "none" }}
                >
                  <div class="form-group">
                    <label>Country Name</label>
                    <select class="form-control">
                      <option value="">Select</option>
                      <option value="">AUSTRALIA</option>
                      <option value="">CANADA</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Landing Url</label>
                    <input
                      type="text"
                      name="landing_url"
                      class="form-control"
                      placeholder="Enter landing url"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Valid From</label>
                    <input type="date" name="fdate" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Valid Up To</label>
                    <input type="date" name="todate" class="form-control" />
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
export default EditAdvertisement;
