import React from "react";
import "../Style.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import Url from "../../../components/URL/Url";
import $ from "jquery";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const axios = require("axios");
class EditUserRole extends React.Component {
  componentDidMount() {
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });

    //Getting ID From URL
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf("/") + 1);
    //For State By ID
    axios
      .get(Url + `api/role/getRolebyId?id=${id}`, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("res", res);
        this.setState({
          id: res.data.data.id,
          role: res.data.data.role,
          additional_info: res.data.data.additional_info,
        });
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occured at API end (" + err.message + ")");
      });
  }

  constructor() {
    super();
    this.state = {
      additional_info: "",
      role: "",
    };
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  updateUserRole(evt, id) {
    const postData = {
      role: this.state.role,
      additional_info: this.state.additional_info,
    };

    axios
      .put(Url + `api/role/update/${id}`, postData)
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload();
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occured at API end (" + err.message + ")");
      });
  }
  render() {
    return (
      <section class="content">
        <ToastContainer />
        <div class="row">
          <div class="col-md-12">
            <div class="box box-primary">
              <div class="box-header">
                <h3 class="box-title">Edit User Role</h3>
              </div>
              <hr />
              <form>
                <div class="box-body">
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>User Role</label>
                      <input
                        type="text"
                        name="role"
                        onChange={(evt) => this.handleChange(evt)}
                        defaultValue={this.state.role}
                        placeholder="Enter user role"
                        class="form-control"
                        id="user_role"
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
                        name="additional_info"
                        onChange={(evt) => this.handleChange(evt)}
                        defaultValue={this.state.additional_info}
                        placeholder="Enter text"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <center>
                        <input
                          class="btn btn-warning"
                          type="submit"
                          value="Update"
                          onClick={(evt) =>
                            this.updateUserRole(evt, this.state.id)
                          }
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
export default EditUserRole;
