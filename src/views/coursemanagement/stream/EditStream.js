import React from "react";
import "../Style.css";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const axios = require("axios");
class EditStream extends React.Component {
  componentDidMount() {
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });

    //For Course Level
    axios
      .get(
        `http://localhost:8081/api/masters/getMasters?masterGroup=CourseLevel`,
        {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        console.log("res", res);
        this.setState({ courseLevelList: res.data.data });
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occured at API end (" + err.message + ")");
      });

    //Getting ID From URL
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf("/") + 1);

    //For CourseLevel By ID
    axios
      .get(`http://localhost:8081/api/masters/getMasterbyId/${id}`, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("res", res);
        this.setState({
          id: res.data.data.id,
          MasterName: res.data.data.MasterName,
          Parent: res.data.data.Parent,
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
      MasterName: "",
      courseLevelList: [],
    };
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  updateStream(evt, id) {
    const postData = {
      masterName: this.state.MasterName,
      parent: parseInt(this.state.Parent),
    };
    // console.log("postData", postData);

    axios
      .put(`http://localhost:8081/api/masters/update/${id}`, postData, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      })
      .then((res) => {
        console.log("res", res);
        toast.success(res.data.message);
        window.location.reload();
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occured at API end (" + err.message + ")");
      });
  }

  render() {
    const courseLevelList = this.state.courseLevelList || [];
    return (
      <section class="content">
        <ToastContainer />
        <div class="row">
          <div class="col-md-12">
            <div class="box box-primary">
              <div class="box-header">
                <h3 class="box-title">Edit Stream</h3>
              </div>
              <hr />
              <form>
                <div class="box-body row">
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Course Level</label>
                      <select
                        name="Parent"
                        class="form-control"
                        id="course_level"
                        onChange={(evt) => this.handleChange(evt)}
                      >
                        <option value="">Select Course Level</option>
                        {courseLevelList &&
                          courseLevelList.map((data) => {
                            return (
                              <option
                                value={data.id}
                                selected={this.state.Parent == data.id}
                              >
                                {data.MasterName}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                      <label>Stream</label>
                      <input
                        type="text"
                        name="MasterName"
                        onChange={(evt) => this.handleChange(evt)}
                        defaultValue={this.state.MasterName}
                        placeholder="Enter stream name"
                        class="form-control"
                        id="name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <center>
                        <button
                          onClick={(evt) =>
                            this.updateStream(evt, this.state.id)
                          }
                          class="btn btn-warning"
                          type="submit"
                        >
                          Update
                        </button>
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
export default EditStream;
