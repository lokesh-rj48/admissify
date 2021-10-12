import React from "react";
import "../Style.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
class EditPageMeta extends React.Component {
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
                <h3 class="box-title">Edit Static Page Meta</h3>
              </div>
              <hr />
              <form>
                <div class="box-body row">
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Page Type</label>
                      <select class="form-control" name="page_type">
                        <option value="">Select Page Type</option>
                        <option value="">Home Page</option>
                        <option value="">Article</option>
                        <option value="">About Us Page</option>
                        <option value="">Scholarship</option>
                        <option value="">Visa Assistance</option>
                        <option value="">Coaching</option>
                        <option value="">Mobile App Landing</option>
                        <option value="">Contact Us Page</option>
                        <option value="">Study Abroad Page</option>
                        <option value="">Check My Chance</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label for="">Title</label>
                      <input
                        type="text"
                        name="title"
                        placeholder="Enter title"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label for="addressTextarea">Meta Description</label>
                      <textarea
                        id="addressTextarea"
                        class="form-control"
                        rows="3"
                        name="meta_description"
                        placeholder="Enter meta description"
                        maxLength="255"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label for="addressTextarea">Meta Keywords</label>
                      <textarea
                        id="addressTextarea"
                        class="form-control"
                        rows="3"
                        name="meta_keywords"
                        placeholder="Enter meta keywords"
                        maxLength="255"
                      ></textarea>
                    </div>
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
export default EditPageMeta;
