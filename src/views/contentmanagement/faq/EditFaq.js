import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ckeditor, { CKEditor } from "@ckeditor/ckeditor5-react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
class EditFaq extends React.Component {
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
                <h3 class="box-title">Edit Faq</h3>
              </div>
              <hr />
              <form>
                <div class="box-body row">
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Type</label>
                      <select class="form-control" name="type">
                        <option value="">Select Type</option>
                        <option value="UG">UG</option>
                        <option value="PG">PG</option>
                        <option value="MBA">MBA</option>
                        <option value="MBBS">MBBS</option>
                        <option value="Engineering">Engineering</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label for="addressTextarea">Question</label>
                      <input
                        type="text"
                        name="question"
                        placeholder="Enter heading"
                        class="form-control"
                        id="question"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label for="">Description</label>
                      <CKEditor
                        editor={ClassicEditor}
                        onInit={(editor) => {
                          //// this inializes our application
                        }}
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
export default EditFaq;
