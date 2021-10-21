import React from "react";
import "../Style.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
class Permission extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      $("#ckbCheckView").click(function () {
        $(".checkBoxView").attr("checked", this.checked);
      });
    });
    $(document).ready(function () {
      $("#ckbCheckEdit").click(function () {
        $(".checkBoxEdit").attr("checked", this.checked);
      });
    });
    $(document).ready(function () {
      $("#ckbCheckAdd").click(function () {
        $(".checkBoxAdd").attr("checked", this.checked);
      });
    });
    $(document).ready(function () {
      $("#ckbCheckDelete").click(function () {
        $(".checkBoxDelete").attr("checked", this.checked);
      });
    });
  }
  render() {
    return (
      <section class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="box box-primary">
              <div class="box-header">
                <h3 class="box-title"> User Permission</h3>
              </div>
              <hr />
              <div class="tab-content">
                <table class="table table-bordered ">
                  <thead>
                    <tr>
                      <th>Module Name</th>
                      <th>
                        <input
                          type="checkbox"
                          id="ckbCheckView"
                          className="Checkbox1"
                        />{" "}
                        View
                      </th>
                      <th>
                        <input
                          type="checkbox"
                          id="ckbCheckAdd"
                          className="Checkbox1"
                        />{" "}
                        Add
                      </th>
                      <th>
                        <input
                          type="checkbox"
                          id="ckbCheckEdit"
                          className="Checkbox1"
                        />{" "}
                        Edit
                      </th>
                      <th>
                        <input
                          type="checkbox"
                          id="ckbCheckDelete"
                          className="Checkbox1"
                        />{" "}
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Data Management</td>
                      <td>
                        <input
                          type="checkbox"
                          id="Checkbox1"
                          class="checkBoxView"
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          id="Checkbox1"
                          class="checkBoxAdd"
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          id="Checkbox1"
                          class="checkBoxEdit"
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          id="Checkbox1"
                          class="checkBoxDelete"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Content Management</td>
                      <td>
                        <input
                          type="checkbox"
                          id="Checkbox1"
                          class="checkBoxView"
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          id="Checkbox1"
                          class="checkBoxAdd"
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          id="Checkbox1"
                          class="checkBoxEdit"
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          id="Checkbox1"
                          class="checkBoxDelete"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Calling Management</td>
                      <td>
                        <input
                          type="checkbox"
                          id="Checkbox1"
                          class="checkBoxView"
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          id="Checkbox1"
                          class="checkBoxAdd"
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          id="Checkbox1"
                          class="checkBoxEdit"
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          id="Checkbox1"
                          class="checkBoxDelete"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Permission;
