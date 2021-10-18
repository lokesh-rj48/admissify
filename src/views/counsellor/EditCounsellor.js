import React from "react";
import "./Style.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
import Multiselect from "multiselect-react-dropdown";
class EditCounsellor extends React.Component {
  componentDidMount() {
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });
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
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      options: [
        { status: "Admissify Certified", id: 1 },
        { status: "Admissify Verified", id: 2 },
        { status: "Premium", id: 3 },
      ],
    };
  }

  handleChange(selectedItems) {
    this.setState({ selectedItems });
  }
  render() {
    return (
      <section class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="box box-primary">
              <div class="box-header">
                <h3 class="box-title">Edit Counsellor</h3>
              </div>
              <hr />
              <div class="box-body row">
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label> Name</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Enter counsellor name"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Mobile No.</label>
                    <input
                      type="text"
                      name="mob"
                      class="form-control number"
                      placeholder="Enter mobile number"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Alternate Mobile No.</label>
                    <input
                      type="text"
                      name="mob"
                      class="form-control number"
                      placeholder="Enter mobile number"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Gender</label>
                    <select class="form-control">
                      <option value="">Select Gender</option>
                      <option value="">Male</option>
                      <option value="">Female</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Profile Image</label>
                    <input type="file" name="profile" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      class="form-control"
                      placeholder="Enter address"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Education</label>
                    <input
                      type="text"
                      name="education"
                      class="form-control"
                      placeholder="Enter highest qualification"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Experience</label>
                    <input
                      type="text"
                      name="experience"
                      class="form-control"
                      placeholder="Enter experience in years"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Price</label>
                    <input
                      type="text"
                      name="price"
                      class="form-control number"
                      placeholder="Enter price"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Time</label>
                    <label>Available Time Slot</label>
                    <select class="form-control ">
                      <option value="">Select Slot</option>
                      <option value="">09:00am - 11:00am</option>
                      <option value="">11:00am - 01:00pm</option>
                      <option value="">01:00pm - 03:00pm</option>
                      <option value="">03:00pm - 05:00pm</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>City</label>
                    <select class="form-control ">
                      <option value="">Select City</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Counsellor Status</label>
                    <Multiselect
                      options={this.state.options}
                      selectedValues={this.state.selectedValue}
                      onSelect={this.onSelect}
                      onRemove={this.onRemove}
                      displayValue="status"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Country</label>
                    <table class="table  table-responsive">
                      <tbody>
                        <tr>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>India</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Australia</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Belgium</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>China</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Cuba</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Denmark</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>France</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Germany</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>New Zealand</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Philippines</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Singapore</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Switzerland</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Thailand</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Madagascar</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Maldives</span>
                          </td>
                          <td>
                            <input type="checkbox" name="bank" class="mr-r" />
                            <span>Israel</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
export default EditCounsellor;
