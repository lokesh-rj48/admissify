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
class EditCity extends React.Component {
  componentDidMount() {
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });

    //Getting ID From URL
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf("/") + 1);
    //For State By ID
    axios
      .get(Url + `api/city/getCityById?id=${id}`)
      .then((res) => {
        console.log("res", res);
        this.setState({
          city_id: res.data.data.city_id,
          country_id: res.data.data.country_id,
          state_id: res.data.data.state_id,
          name: res.data.data.name,
        });
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occured at API end (" + err.message + ")");
      });

    //For Get All Country
    axios
      .get(Url + `api/country/getAllCountry`)
      .then((res) => {
        console.log("res", res);
        this.setState({ countryList: res.data.data });
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occurred at API end (" + err.message + ")");
      });

    //For Get All State
    axios
      .get(Url + `api/state/getAllState`)
      .then((res) => {
        console.log("res", res);
        this.setState({ stateList: res.data.data });
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occurred at API end (" + err.message + ")");
      });
  }

  constructor() {
    super();
    this.state = {
      countryList: [],
      stateList: [],
      country_id: "",
      state_id: "",
      name: "",
      slug: "",
    };
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  updateCity(evt, city_id) {
    const postData = {
      country_id: this.state.country_id,
      state_id: this.state.state_id,
      name: this.state.name,
      slug: this.state.name.toLowerCase(),
    };

    axios
      .put(Url + `api/city/update/${city_id}`, postData)
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
    const countryList = this.state.countryList || [];
    const stateList = this.state.stateList || [];
    return (
      <section class="content">
        <ToastContainer />
        <div class="row">
          <div class="col-md-12">
            <div class="box box-primary">
              <div class="box-header">
                <h3 class="box-title">Edit City</h3>
              </div>
              <hr />
              <form>
                <div class="box-body row">
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>Country</label>
                      <select
                        class="form-control"
                        name="country_id"
                        onChange={(evt) => this.handleChange(evt)}
                      >
                        <option>Select Country</option>
                        {countryList &&
                          countryList.map((data) => {
                            return (
                              <option
                                value={data.id}
                                key={data.id}
                                selected={this.state.country_id == data.id}
                              >
                                {data.country_name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>State</label>
                      <select
                        class="form-control"
                        name="state_id"
                        onChange={(evt) => this.handleChange(evt)}
                      >
                        <option>Select Country</option>
                        {stateList &&
                          stateList.map((data) => {
                            return (
                              <option
                                value={data.id}
                                key={data.id}
                                selected={this.state.state_id == data.id}
                              >
                                {data.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        name="name"
                        onChange={(evt) => this.handleChange(evt)}
                        defaultValue={this.state.name}
                        placeholder="Enter city name"
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
                          onClick={(evt) =>
                            this.updateCity(evt, this.state.city_id)
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
export default EditCity;
