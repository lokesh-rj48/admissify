import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ckeditor, { CKEditor } from "@ckeditor/ckeditor5-react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
class EditPopup extends React.Component {
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
                <h3 class="box-title">Edit Popup</h3>
              </div>
              <hr />
              <form>
                <div class="box-body row">
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label for="addressTextarea">Title</label>
                      <input
                        type="text"
                        name="title"
                        placeholder="Enter title"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label for="addressTextarea">Promotion Pic</label>
                      <input
                        type="file"
                        name="promotion_pic"
                        placeholder="Enter promotion pic"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label for="addressTextarea">Redirect Url</label>
                      <input
                        type="text"
                        name="redirect_url"
                        placeholder="Enter redirect url"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label for="addressTextarea">Promotion Url</label>
                      <input
                        type="text"
                        name="promotion_url"
                        placeholder="Enter promotion url"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label for="addressTextarea">Close Time</label>
                      <input
                        type="text"
                        name="close_time"
                        placeholder="Enter close time"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label for="addressTextarea">Popup Height</label>
                      <input
                        type="text"
                        name="popup_height"
                        placeholder="Enter popup_height"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label for="addressTextarea">Popup Width</label>
                      <input
                        type="text"
                        name="popup_width"
                        placeholder="Enter popup width"
                        class="form-control"
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
export default EditPopup;
