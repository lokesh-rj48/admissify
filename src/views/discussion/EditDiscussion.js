import React from "react";
import "./Style.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
class EditDiscussion extends React.Component {
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
                <h3 class="box-title">Edit Discussion</h3>
              </div>
              <hr />
              <form>
                <div class="box-body row">
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Discussion Category</label>
                      <select className="form-control" disabled>
                        <option value="">Select</option>
                        <option value="" selected>
                          Regarding Package
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Discussion Sub Category</label>
                      <select className="form-control" disabled>
                        <option value="">Select</option>
                        <option value="" selected>
                          Package
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label for="countryTextarea">Topic</label>
                      <input
                        type="text"
                        name="discussion_sub_category"
                        class="form-control"
                        value="What is a Graduate route?"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>Meta Tag</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter tag"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>Remarks</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter remarks"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <table class="table table-bordered" id="example">
                        <thead>
                          <tr style={{ "font-size": "13px" }}>
                            <th>S.No.</th>
                            <th> Comment By</th>
                            <th> Comment</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody class="f-13">
                          <tr>
                            <td>1</td>
                            <td>Rahul Kumar</td>
                            <td>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </td>
                            <td>
                              <select>
                                <option>Active</option>
                                <option>Suspended</option>
                              </select>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
export default EditDiscussion;
