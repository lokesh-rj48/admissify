import React from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
class EditWhatsAppTemp extends React.Component {
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
                <h3 class="box-title">Edit WhatsApp Template</h3>
              </div>
              <hr />
              <form>
                <div class="box-body row">
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label> Name</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="Enter name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Text</label>
                      <input
                        type="text"
                        name="text"
                        class="form-control"
                        placeholder="Enter text"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>Message Type</label>
                      <select class="form-control" name="message_type">
                        <option value="">Select Message Type</option>
                        <option value="Promotional">Promotional</option>
                        <option value="Transactional">Transactional</option>
                      </select>
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
export default EditWhatsAppTemp;
