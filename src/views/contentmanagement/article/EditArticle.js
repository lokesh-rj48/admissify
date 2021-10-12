import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ckeditor, { CKEditor } from "@ckeditor/ckeditor5-react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
class EditArticle extends React.Component {
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
                <h3 class="box-title">Edit Article</h3>
              </div>
              <hr />
              <form>
                <div class="box-body row">
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Author Name</label>
                      <input
                        type="text"
                        name="author_name"
                        placeholder="Enter author name"
                        class="form-control"
                        id="author_name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Title</label>
                      <input
                        type="text"
                        name="title"
                        placeholder="Enter title"
                        class="form-control"
                        id="title"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Article Banner</label>
                      <input
                        type="file"
                        name="banner"
                        class="form-control"
                        id="banner"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Tags</label>
                      <input
                        type="text"
                        name="tags"
                        class="form-control"
                        id="tags"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label for="courseTextarea">Description</label>
                      <CKEditor
                        editor={ClassicEditor}
                        onInit={(editor) => {
                          //// this inializes our application
                        }}
                      />
                    </div>
                  </div>
                  <div
                    class="col-lg-12 col-sm-12 col-xs-12"
                    style={{
                      padding: "8px 12px 0 5px",
                      "background-color": "#ebedef",
                    }}
                  >
                    <div class="form-group">
                      <label for="courseTextarea">
                        <strong>Meta Tags Settings</strong>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>Meta Title</label>
                      <input
                        type="texrt"
                        name="meta_title"
                        class="form-control"
                        placeholder="Enter meta title"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label for="keywordsTextarea">Meta Keywords</label>
                      <textarea
                        id="keywordsTextarea"
                        class="form-control"
                        rows="3"
                        name="meta_keywords"
                        placeholder="Enter meta keywords"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>Meta Description</label>
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
export default EditArticle;
