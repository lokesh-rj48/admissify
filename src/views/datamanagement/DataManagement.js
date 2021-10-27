import React, { useState } from "react";
import { Link } from "react-router-dom";
//Bootstrap and jQuery libraries
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Url from "../../components/URL/Url";
import "jquery/dist/jquery.min.js";
import "././country/Style.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "font-awesome/css/font-awesome.min.css";
import $ from "jquery";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ckeditor, { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
} from "@coreui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const axios = require("axios");
class DataManagement extends React.Component {
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
      setTimeout(() => {
        $("#example").DataTable();
        $("#example1").DataTable();
        $("#example2").DataTable();
      }, 100);
    });
    $(document).on("input", ".number", function () {
      this.value = this.value.replace(/\D/g, "");
    });
    $("body").on("click", ".annual_btn", function () {
      $(this).closest("div").remove();
    });

    console.log("cors error");
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

    //For Get All City
    axios
      .get(Url + `api/city/getAllCity`)
      .then((res) => {
        console.log("res", res);
        this.setState({ cityList: res.data.data });
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occurred at API end (" + err.message + ")");
      });
  }
  GetDynamicEconomicOverview() {
    var div = $("<div />");
    var x =
      '<div class="col-lg-12"><div class="form-group"><label>Economic Overview Part Time Circle</label><input type="text" name="meta_title" class="form-control" placeholder="Enter economic overview part time circle"/></div></div>' +
      '<div class="col-lg-12"><div class="form-group"><label>Economic Overview Part Time Circle In</label><input type="text" name="meta_title" class="form-control" placeholder="Enter economic overview part time circle In" /></div></div>' +
      '<div class="col-lg-12"><div class="form-group"><label>Title</label> <input type="text" name="meta_title" class="form-control" placeholder="Enter title" /></div></div>' +
      '<div class="col-lg-12"><div class="form-group"><label>Description</label> <textarea id="notesTextarea" class="form-control"  placeholder="Enter description" rows="3" ></textarea> </div> </div>' +
      '<i class="fa fa-minus-square-o annual_btn"></i></div></br>';

    div.html(x);
    $("#TextBoxContainer").append(div);
  }

  constructor() {
    super();
    this.state = {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      countryList: [],
      stateList: [],
      cityList: [],
      country_name: "",
      code: "",
      country_short_name: "",
      flag: "",
      description: "",
      slug: "",
      country_id: "",
      name: "",
    };
  }
  handleModel() {
    this.setState({ show: !this.state.show });
  }
  handleModel2() {
    this.setState({ show2: !this.state.show2 });
  }
  handleModel3() {
    this.setState({ show3: !this.state.show3 });
  }
  handleModel4() {
    this.setState({ show4: !this.state.show4 });
  }
  handleModel5() {
    this.setState({ show5: !this.state.show5 });
  }
  handleModel6() {
    this.setState({ show6: !this.state.show6 });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  //Country Active Inactive Status
  activeInactiveCountry(evt, status, id) {
    if (status == 1) {
      status = 0;
    } else {
      status = 1;
    }
    const r = window.confirm("Do you want to change status ?");
    if (r == true) {
      const postData = {
        status: status,
      };
      axios
        .put(Url + `api/country/updateCountry/${id}`, postData)
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
  }

  //State Active Inactive Status
  activeInactiveState(evt, status, id) {
    if (status == 1) {
      status = 0;
    } else {
      status = 1;
    }
    const r = window.confirm("Do you want to change status ?");
    if (r == true) {
      const postData = {
        status: status,
      };
      axios
        .put(Url + `api/state/update/${id}`, postData)
        .then((res) => {
          toast.success(res.data.message);
          window.location.reload();
        })
        .catch((err) => {
          //console.log("err",err)
          toast.error("Error occured at API end (" + err.message + ")");
        });
    }
  }

  //City Active Inactive Status
  activeInactiveCity(evt, status, city_id) {
    if (status == 1) {
      status = 0;
    } else {
      status = 1;
    }
    const r = window.confirm("Do you want to change status ?");
    if (r == true) {
      const postData = {
        status: status,
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
  }

  //Country Insertion
  countryValidations(evt) {
    $(".error-class").remove();
    var CountryName = $("#country_name").val();
    var CountryCode = $("#country_code").val();
    var CountrySortCode = $("#country_sort_code").val();
    var CountryLogo = $("#country_flag").val();
    //var FeaturesImages = $("#feature_image").val();
    var countryTextarea = $("#countryTextarea").val();
    // var country_scholarships = $("#country_scholarships").val();
    // var percent = $("#percent").val();
    // var accommodation = $("#accommodation").val();
    // var inr = $("#inr").val();
    // var exchange_rate = $("#exchange_rate").val();
    // var affordability_exchange_sub_title = $(
    //   "#affordability_exchange_sub_title"
    // ).val();
    // var affordability_total_year_cost = $(
    //   "#affordability_total_year_cost"
    // ).val();
    // var affordability_tuition_fee_ug = $("#affordability_tuition_fee_ug").val();
    // var affordability_tuition_fee_pg = $("#affordability_tuition_fee_pg").val();
    // var affordability_cost_ug = $("#affordability_cost_ug").val();
    // var affordability_cost_pg = $("#affordability_cost_pg").val();
    // var affordability_ang_living_expense = $(
    //   "#affordability_ang_living_expense"
    // ).val();
    // var academic_requirements_ug = $("#academic_requirements_ug").val();
    // var academic_requirements_pg = $("#academic_requirements_pg").val();
    // var test_prep_ug = $("#test_prep_ug").val();
    // var test_prep_pg = $("#test_prep_pg").val();
    // var english_proficiency_toefl = $("#english_proficiency_toefl").val();
    // var english_proficiency_ielts = $("#english_proficiency_ielts").val();
    // var english_proficiency_pte = $("#english_proficiency_pte").val();
    // var economic_overview = $("#economic_overview").val();
    // var economic_overview_in = $("#economic_overview_in").val();
    // var overview_title = $("#overview_title").val();
    // var overview_decs = $("#overview_decs").val();
    // var placement_title = $("#placement_title").val();
    // var placement_employment_text = $("#placement_employment_text").val();
    // var placement_employment_graph = $("#placement_employment_graph").val();
    // var placement_employment_graph_med = $(
    //   "#placement_employment_graph_med"
    // ).val();
    // var placement_employment_graph_low = $(
    //   "#placement_employment_graph_low"
    // ).val();
    // var visa_application = $("#visa_application").val();
    // var placement_employment_graph_desc = $(
    //   "#placement_employment_graph_desc"
    // ).val();
    // var visa_fee = $("#visa_fee").val();
    // var visa_doc = $("#visa_doc").val();
    // var visa_doc_remark = $("#visa_doc_remark").val();
    // var meta_title = $("#meta_title").val();
    // var meta_keywords = $("#meta_keywords").val();
    // var meta_description = $("#meta_description").val();
    // var banner = $("#banner").val();
    // var banner_line = $("#banner_line").val();
    // var visa_text = $("#visa_text").val();
    // var degree_text = $("#degree_text").val();
    // var scholar_text = $("#scholar_text").val();
    // var rank_text = $("#rank_text").val();
    // var work_text = $("#work_text").val();
    // var accommodation_text = $("#accommodation_text").val();
    // var know_more = $("#know_more").val();

    if (!CountryName) {
      $("#country_name").after(
        '<div class="error-class">Enter country name.</div>'
      );
      evt.preventDefault();
    }
    if (!CountryCode) {
      $("#country_code").after(
        '<div class="error-class">Enter country code.</div>'
      );
      evt.preventDefault();
    }
    if (!CountrySortCode) {
      $("#country_sort_code").after(
        '<div class="error-class">Enter country short code.</div>'
      );
      evt.preventDefault();
    }
    if (typeof CountryLogo !== "undefined") {
      if (!CountryLogo.match(/\.(jpg|jpeg|png|gif)$/)) {
        $("#country_flag").after(
          '<div class="error-class">Please upload jpg | jpeg | png | gif file.</div>'
        );
      }
    }
    // if (typeof FeaturesImages !== "undefined") {
    //   if (!FeaturesImages.match(/\.(jpg|jpeg|png|gif)$/)) {
    //     $("#feature_image").after(
    //       '<div class="error-class">Please upload jpg | jpeg | png | gif file.</div>'
    //     );
    //     evt.preventDefault();
    //   }
    // }
    if (!countryTextarea) {
      $("#countryTextarea").after(
        '<div class="error-class">Enter about.</div>'
      );
      evt.preventDefault();
    }
    // if (!country_scholarships) {
    //   $("#country_scholarships").after(
    //     '<div class="error-class">Enter scholarship.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!percent) {
    //   $("#percent").after(
    //     '<div class="error-class">Enter scholarship percent.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!accommodation) {
    //   $("#accommodation").after(
    //     '<div class="error-class">Enter accommodation.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!inr) {
    //   $("#inr").after(
    //     '<div class="error-class">Enter accommodation charge per annum.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!exchange_rate) {
    //   $("#exchange_rate").after(
    //     '<div class="error-class">Enter exchange rate.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!affordability_exchange_sub_title) {
    //   $("#affordability_exchange_sub_title").after(
    //     '<div class="error-class">Enter affordability exchange sub title.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!affordability_total_year_cost) {
    //   $("#affordability_total_year_cost").after(
    //     '<div class="error-class">Enter affordability total year cost.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!affordability_tuition_fee_ug) {
    //   $("#affordability_tuition_fee_ug").after(
    //     '<div class="error-class">Enter affordability tuition fee ug.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!affordability_tuition_fee_pg) {
    //   $("#affordability_tuition_fee_pg").after(
    //     '<div class="error-class">Enter affordability tuition fee pg.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!affordability_cost_ug) {
    //   $("#affordability_cost_ug").after(
    //     '<div class="error-class">Enter affordability cost ug.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!affordability_cost_pg) {
    //   $("#affordability_cost_pg").after(
    //     '<div class="error-class">Enter affordability cost pg.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!affordability_ang_living_expense) {
    //   $("#affordability_ang_living_expense").after(
    //     '<div class="error-class">Enter affordability avg living expense.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!academic_requirements_ug) {
    //   $("#academic_requirements_ug").after(
    //     '<div class="error-class">Enter academic requirements ug.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!academic_requirements_pg) {
    //   $("#academic_requirements_pg").after(
    //     '<div class="error-class">Enter academic requirements pg.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!test_prep_ug) {
    //   $("#test_prep_ug").after(
    //     '<div class="error-class">Enter test preparation requirement ug.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!test_prep_pg) {
    //   $("#test_prep_pg").after(
    //     '<div class="error-class">Enter test preparation requirement pg.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!english_proficiency_toefl) {
    //   $("#english_proficiency_toefl").after(
    //     '<div class="error-class">Enter english proficiency TOEFL.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!english_proficiency_ielts) {
    //   $("#english_proficiency_ielts").after(
    //     '<div class="error-class">Enter english proficiency IELTS.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!english_proficiency_pte) {
    //   $("#english_proficiency_pte").after(
    //     '<div class="error-class">Enter english proficiency PTE.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!economic_overview) {
    //   $("#economic_overview").after(
    //     '<div class="error-class">Enter economic overview part time circle .</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!economic_overview_in) {
    //   $("#economic_overview_in").after(
    //     '<div class="error-class">Enter economic overview part time circle in.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!overview_title) {
    //   $("#overview_title").after('<div class="error-class">Enter title.</div>');
    //   evt.preventDefault();
    // }
    // if (!overview_decs) {
    //   $("#overview_decs").after(
    //     '<div class="error-class">Enter description.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!placement_title) {
    //   $("#placement_title").after(
    //     '<div class="error-class">Enter title.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!placement_employment_text) {
    //   $("#placement_employment_text").after(
    //     '<div class="error-class">Enter placement & employment text.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!placement_employment_graph) {
    //   $("#placement_employment_graph").after(
    //     '<div class="error-class">Enter placement & employment graph max.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!placement_employment_graph_med) {
    //   $("#placement_employment_graph_med").after(
    //     '<div class="error-class">Enter placement & employment graph med.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!placement_employment_graph_low) {
    //   $("#placement_employment_graph_low").after(
    //     '<div class="error-class">Enter placement & employment graph low.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!placement_employment_graph_desc) {
    //   $("#placement_employment_graph_desc").after(
    //     '<div class="error-class">Enter placement & employment graph desc.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!visa_application) {
    //   $("#visa_application").after(
    //     '<div class="error-class">Enter visa application process.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!visa_fee) {
    //   $("#visa_fee").after('<div class="error-class">Enter visa fee.</div>');
    //   evt.preventDefault();
    // }
    // if (!visa_doc) {
    //   $("#visa_doc").after('<div class="error-class">Enter visa doc.</div>');
    //   evt.preventDefault();
    // }
    // if (!visa_doc_remark) {
    //   $("#visa_doc_remark").after(
    //     '<div class="error-class">Enter document remark.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!meta_title) {
    //   $("#meta_title").after(
    //     '<div class="error-class">Enter meta title.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!meta_keywords) {
    //   $("#meta_keywords").after(
    //     '<div class="error-class">Enter meta keywords.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!meta_description) {
    //   $("#meta_description").after(
    //     '<div class="error-class">Enter meta description.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (typeof banner !== "undefined") {
    //   if (!banner.match(/\.(jpg|jpeg|png|gif)$/)) {
    //     $("#banner").after(
    //       '<div class="error-class">Please upload jpg | jpeg | png | gif file.</div>'
    //     );
    //     evt.preventDefault();
    //   }
    // }
    // if (!banner_line) {
    //   $("#banner_line").after(
    //     '<div class="error-class">Enter banner line.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!visa_text) {
    //   $("#visa_text").after('<div class="error-class">Enter visa text.</div>');
    //   evt.preventDefault();
    // }
    // if (!degree_text) {
    //   $("#degree_text").after(
    //     '<div class="error-class">Enter degree text.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!scholar_text) {
    //   $("#scholar_text").after(
    //     '<div class="error-class">Enter scholar text.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (!rank_text) {
    //   $("#rank_text").after('<div class="error-class">Enter rank text.</div>');
    //   evt.preventDefault();
    // }
    // if (!work_text) {
    //   $("#work_text").after('<div class="error-class">Enter work text.</div>');
    //   evt.preventDefault();
    // }
    // if (!accommodation_text) {
    //   $("#accommodation_text").after(
    //     '<div class="error-class">Enter accommodation text.</div>'
    //   );
    //   evt.preventDefault();
    // }
    // if (typeof know_more !== "undefined") {
    //   if (!know_more.match(/\.(jpg|jpeg|png|gif)$/)) {
    //     $("#know_more").after(
    //       '<div class="error-class">Please upload jpg | jpeg | png | gif file.</div>'
    //     );
    //     evt.preventDefault();
    //   }
    // }

    const fileInput = document.querySelector("#country_flag");
    const formData = new FormData();
    formData.append("flag", fileInput.files[0]);

    const postData = {
      country_name: this.state.country_name,
      slug: this.state.country_name.toLowerCase(),
      code: this.state.code,
      flag: formData.get("flag").name,
      description: this.state.description,
      country_short_name: this.state.country_short_name,
    };
    // console.log("postData", postData);
    // evt.preventDefault();
    // return;
    axios
      .post(Url + `api/country/add`, postData)
      .then((res) => {
        console.log("res", res);
        toast.success(res.data.message);
        window.location.reload();
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occured at API end (" + err.message + ")");
      });
    return true;
  }
  stateValidations(evt) {
    $(".error-class").remove();
    var Country = $("#country").val();
    var State = $("#state").val();
    if (!Country) {
      $("#country").after('<div class="error-class">Enter country name.</div>');
      evt.preventDefault();
    }
    if (!State) {
      $("#state").after('<div class="error-class">Enter state name.</div>');
      evt.preventDefault();
    }

    //For Save State Data
    const postData = {
      country_id: this.state.country_id,
      name: this.state.name,
    };
    // console.log("postData", postData);
    // evt.preventDefault();
    // return;
    axios
      .post(Url + `api/state/addState`, postData)
      .then((res) => {
        console.log("res", res);
        toast.success(res.data.message);
        window.location.reload();
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occured at API end (" + err.message + ")");
      });
    return true;
  }
  cityValidations(evt) {
    $(".error-class").remove();
    var City = $("#city").val();
    if (!City) {
      $("#city").after('<div class="error-class">Enter city name.</div>');
      evt.preventDefault();
    }

    //For Save City Data
    const postData = {
      country_id: this.state.country_id,
      state_id: this.state.state_id,
      name: this.state.name,
      slug: this.state.name.toLowerCase(),
    };
    axios
      .post(Url + `api/city/saveCity`, postData)
      .then((res) => {
        console.log("res", res);
        toast.success(res.data.message);
        window.location.reload();
      })
      .catch((err) => {
        //console.log("err",err)
        toast.error("Error occured at API end (" + err.message + ")");
      });
    return true;
  }
  addUniValidations(evt) {
    $(".error-class").remove();
    var university = $("#university").val();
    var university_image = $("#university_image").val();
    var university_url = $("#university_url").val();
    var university_logo = $("#university_logo").val();
    var uni_code = $("#uni_code").val();
    var uni_rate = $("#uni_rate").val();
    var uni_rank = $("#uni_rank").val();
    var marks = $("#marks").val();
    var aboutTextarea = $("#aboutTextarea").val();
    var uni_type = $("#uni_type").val();
    var population = $("#population").val();
    var fafsa_code = $("#fafsa_code").val();
    var accreditation = $("#accreditation").val();
    var attendance_cost = $("#attendance_cost").val();
    var faculty_ratio = $("#faculty_ratio").val();
    var uni_country = $("#uni_country").val();
    var uni_state = $("#uni_state").val();
    var uni_state = $("#uni_state").val();
    var uni_city = $("#uni_city").val();
    var address = $("#address").val();
    var country_rank = $("#country_rank").val();
    var location = $("#location").val();
    var lifestyle = $("#lifestyle").val();
    var lifestyle_details = $("#lifestyle_details").val();
    var living_cost = $("#living_cost").val();
    var total_cost = $("#total_cost").val();
    var accommodation_details = $("#accommodation_details").val();
    var accommodation_cost = $("#accommodation_cost").val();
    var intake = $("#intake").val();
    var total_student = $("#total_student").val();
    var legal_status = $("#legal_status").val();
    var mobile = $("#mobile").val();
    var tuition_fee = $("#tuition_fee").val();
    var living_expense = $("#living_expense").val();
    var trending_points = $("#trending_points").val();
    var analytic_points = $("#analytic_points").val();
    var privacy = $("#privacy").val();
    var brochure = $("#brochure").val();
    if (!university) {
      $("#university").after(
        '<div class="error-class">Enter university name.</div>'
      );
      evt.preventDefault();
    }
    if (typeof university !== "undefined") {
      if (!university.match(/^[a-zA-Z ]*$/)) {
        $("#university").after(
          '<div class="error-class">Please enter alphabet characters only.</div>'
        );
      }
    }
    if (typeof university_image !== "undefined") {
      if (!university_image.match(/\.(jpg|jpeg|png|gif)$/)) {
        $("#university_image").after(
          '<div class="error-class">Please upload jpg | jpeg | png | gif file.</div>'
        );
      }
    }
    if (!university_url) {
      $("#university_url").after(
        '<div class="error-class">Enter university url.</div>'
      );
      evt.preventDefault();
    }
    if (typeof university_logo !== "undefined") {
      if (!university_logo.match(/\.(jpg|jpeg|png|gif)$/)) {
        $("#university_logo").after(
          '<div class="error-class">Please upload jpg | jpeg | png | gif file.</div>'
        );
      }
    }
    if (!uni_code) {
      $("#uni_code").after(
        '<div class="error-class">Enter university code.</div>'
      );
      evt.preventDefault();
    }
    if (!uni_rate) {
      $("#uni_rate").after(
        '<div class="error-class">Enter university rating.</div>'
      );
      evt.preventDefault();
    }
    if (!uni_rank) {
      $("#uni_rank").after(
        '<div class="error-class">Enter university ranking.</div>'
      );
      evt.preventDefault();
    }
    if (!marks) {
      $("#marks").after(
        '<div class="error-class">Enter minimum marks for admission.</div>'
      );
      evt.preventDefault();
    }
    if (!aboutTextarea) {
      $("#aboutTextarea").after(
        '<div class="error-class">Enter about university.</div>'
      );
      evt.preventDefault();
    }
    if (!uni_type) {
      $("#uni_type").after(
        '<div class="error-class">Please select university type.</div>'
      );
      evt.preventDefault();
    }
    if (!population) {
      $("#population").after(
        '<div class="error-class">Enter student population.</div>'
      );
      evt.preventDefault();
    }
    if (!fafsa_code) {
      $("#fafsa_code").after(
        '<div class="error-class">Enter fafsa code.</div>'
      );
      evt.preventDefault();
    }
    if (!accreditation) {
      $("#accreditation").after(
        '<div class="error-class">Enter accreditation.</div>'
      );
      evt.preventDefault();
    }
    if (!attendance_cost) {
      $("#attendance_cost").after(
        '<div class="error-class">Enter average cost of attendance.</div>'
      );
      evt.preventDefault();
    }
    if (!faculty_ratio) {
      $("#faculty_ratio").after(
        '<div class="error-class">Enter student faculty ratio.</div>'
      );
      evt.preventDefault();
    }
    if (!uni_country) {
      $("#uni_country").after(
        '<div class="error-class">Enter university cost.</div>'
      );
      evt.preventDefault();
    }
    if (!uni_state) {
      $("#uni_state").after('<div class="error-class">Select state.</div>');
      evt.preventDefault();
    }
    if (!uni_city) {
      $("#uni_city").after('<div class="error-class">Select City.</div>');
      evt.preventDefault();
    }
    if (!address) {
      $("#address").after('<div class="error-class">Enter address.</div>');
      evt.preventDefault();
    }
    if (!country_rank) {
      $("#country_rank").after(
        '<div class="error-class">Enter country rank.</div>'
      );
      evt.preventDefault();
    }
    if (!location) {
      $("#location").after('<div class="error-class">Enter location.</div>');
      evt.preventDefault();
    }
    if (!lifestyle) {
      $("#lifestyle").after('<div class="error-class">Enter lifestyle.</div>');
      evt.preventDefault();
    }
    if (!lifestyle_details) {
      $("#lifestyle_details").after(
        '<div class="error-class">Enter lifestyle detail.</div>'
      );
      evt.preventDefault();
    }
    if (!living_cost) {
      $("#living_cost").after(
        '<div class="error-class">Enter living cost.</div>'
      );
      evt.preventDefault();
    }
    if (!total_cost) {
      $("#total_cost").after(
        '<div class="error-class">Enter total cost.</div>'
      );
      evt.preventDefault();
    }
    if (!accommodation_details) {
      $("#accommodation_details").after(
        '<div class="error-class">Enter accommodation details</div>'
      );
      evt.preventDefault();
    }
    if (!accommodation_cost) {
      $("#accommodation_cost").after(
        '<div class="error-class">Enter accommodation cost.</div>'
      );
      evt.preventDefault();
    }
    if (!intake) {
      $("#intake").after('<div class="error-class">Enter intake.</div>');
      evt.preventDefault();
    }
    if (!total_student) {
      $("#total_student").after(
        '<div class="error-class">Enter total no. of students.</div>'
      );
      evt.preventDefault();
    }
    if (!legal_status) {
      $("#legal_status").after(
        '<div class="error-class">Enter legal status.</div>'
      );
      evt.preventDefault();
    }
    if (typeof mobile !== "undefined") {
      if (!mobile.match(/^[0-9]{10}$/)) {
        $("#mobile").after(
          '<div class="error-class">Enter valid mobile number.</div>'
        );
      }
    }
    if (!tuition_fee) {
      $("#tuition_fee").after(
        '<div class="error-class">Enter tuition fee.</div>'
      );
      evt.preventDefault();
    }
    if (!living_expense) {
      $("#living_expense").after(
        '<div class="error-class">Enter living expense.</div>'
      );
      evt.preventDefault();
    }
    if (!trending_points) {
      $("#trending_points").after(
        '<div class="error-class">Enter trending points.</div>'
      );
      evt.preventDefault();
    }
    if (!analytic_points) {
      $("#analytic_points").after(
        '<div class="error-class">Enter analytic points.</div>'
      );
      evt.preventDefault();
    }
    if (!privacy) {
      $("#privacy").after('<div class="error-class">Enter privacy.</div>');
      evt.preventDefault();
    }
    if (typeof brochure !== "undefined") {
      if (!brochure.match(/\.(jpg|jpeg|png|gif)$/)) {
        $("#brochure").after(
          '<div class="error-class">Please upload jpg | jpeg | png | gif file.</div>'
        );
      }
    }
    return true;
  }
  addUniCourseValidations(evt) {
    $(".error-class").remove();
    var select_uni = $("#select_uni").val();
    var course = $("#course").val();
    var alias1 = $("#alias1").val();
    var duration = $("#duration").val();
    var uni_course = $("#uni_course").val();
    var deadline = $("#deadline").val();
    var academic_requirement = $("#academic_requirement").val();
    var academic_details = $("#academic_details").val();
    var application_fee = $("#application_fee").val();
    var tuition = $("#tuition").val();
    var lor = $("#lor").val();
    var ilets = $("#ilets").val();
    var toefl = $("#toefl").val();
    var gre = $("#gre").val();
    var gmat = $("#gmat").val();
    var scholarship_details = $("#scholarship_details").val();
    if (!select_uni) {
      $("#select_uni").after(
        '<div class="error-class">Select university name.</div>'
      );
      evt.preventDefault();
    }
    if (!course) {
      $("#course").after('<div class="error-class">Select course name.</div>');
      evt.preventDefault();
    }
    if (!alias1) {
      $("#alias1").after(
        '<div class="error-class">Enter course alias name.</div>'
      );
      evt.preventDefault();
    }
    if (!duration) {
      $("#duration").after(
        '<div class="error-class">Enter course duration.</div>'
      );
      evt.preventDefault();
    }
    if (!uni_course) {
      $("#uni_course").after(
        '<div class="error-class">Select course level.</div>'
      );
      evt.preventDefault();
    }
    if (!deadline) {
      $("#deadline").after(
        '<div class="error-class">Select deadline date.</div>'
      );
      evt.preventDefault();
    }
    if (!academic_requirement) {
      $("#academic_requirement").after(
        '<div class="error-class">Enter academic requirement.</div>'
      );
      evt.preventDefault();
    }
    if (!academic_details) {
      $("#academic_details").after(
        '<div class="error-class">Enter academic details.</div>'
      );
      evt.preventDefault();
    }
    if (!application_fee) {
      $("#application_fee").after(
        '<div class="error-class">Enter application fee.</div>'
      );
      evt.preventDefault();
    }
    if (!tuition) {
      $("#tuition").after('<div class="error-class">Enter tuition fee.</div>');
      evt.preventDefault();
    }
    if (!lor) {
      $("#lor").after(
        '<div class="error-class">Enter LOR | SOP requirement.</div>'
      );
      evt.preventDefault();
    }
    if (!ilets) {
      $("#ilets").after('<div class="error-class">Enter ILETS score.</div>');
      evt.preventDefault();
    }
    if (!toefl) {
      $("#toefl").after('<div class="error-class">Enter TOEFL score.</div>');
      evt.preventDefault();
    }
    if (!gre) {
      $("#gre").after('<div class="error-class">Enter GRE score.</div>');
      evt.preventDefault();
    }
    if (!gmat) {
      $("#gmat").after('<div class="error-class">Enter GMAT score.</div>');
      evt.preventDefault();
    }
    if (!scholarship_details) {
      $("#scholarship_details").after(
        '<div class="error-class">Enter scholarship details.</div>'
      );
      evt.preventDefault();
    }
    return true;
  }
  render() {
    const countryList = this.state.countryList || [];
    const stateList = this.state.stateList || [];
    const cityList = this.state.cityList || [];

    return (
      <section className="content">
        <ToastContainer />
        <Modal show={this.state.show} onHide={() => this.handleModel()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add Country</h3>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(evt) => this.countryValidations(evt)}>
              <div class="box-body row">
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Country Name</label>
                    <input
                      type="text"
                      name="country_name"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.country_name}
                      class="form-control"
                      placeholder="Enter country name"
                      id="country_name"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Country Code</label>
                    <input
                      type="text"
                      name="code"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.code}
                      class="form-control number"
                      placeholder="Enter country code"
                      id="country_code"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Country Short Name</label>
                    <input
                      type="text"
                      name="country_short_name"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.country_short_name}
                      class="form-control "
                      placeholder="Enter country sort code"
                      id="country_sort_code"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Country Flag</label>
                    <input
                      type="file"
                      name="flag"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.flag}
                      class="form-control"
                      id="country_flag"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Featured banner for app</label>
                    <input
                      type="file"
                      name="feature_image"
                      class="form-control"
                      id="feature_image"
                      multiple
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label for="countryTextarea">About</label>
                    <textarea
                      id="countryTextarea"
                      class="form-control"
                      rows="3"
                      name="description"
                      onChange={(evt) => this.handleChange(evt)}
                      defaultValue={this.state.description}
                      placeholder="Enter about"
                    ></textarea>
                  </div>
                </div>
                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    "background-color": "rgb(235, 237, 239)",
                  }}
                >
                  <strong>Fees and Affordability</strong>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Scholarships</label>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <input
                      type="text"
                      name="country_scholarships"
                      id="country_scholarships"
                      class="form-control"
                      placeholder="Ex- Based on Merit/Need/Early Acceptances"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <input
                      type="text"
                      name="percent"
                      id="percent"
                      class="form-control"
                      placeholder="Ex- 5% - 40%*"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Accommodation</label>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <input
                      type="text"
                      name="accommodation"
                      id="accommodation"
                      class="form-control"
                      placeholder="Ex- Payable Towards Stay"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <input
                      type="text"
                      name="inr"
                      id="inr"
                      class="form-control"
                      placeholder="Ex- INR 2 - 4 Lakhs Per annum"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Exchange Rate</label>
                    <input
                      type="text"
                      name="exchange_rate"
                      id="exchange_rate"
                      class="form-control"
                      placeholder="Enter exchange rate"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Fee Affordability Exchange Rate Sub Title</label>
                    <input
                      type="text"
                      name="affordability_exchange_sub_title"
                      id="affordability_exchange_sub_title"
                      class="form-control"
                      placeholder="Enter fee affordability exchange rate sub title"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Fee Affordability Total One Year Cost</label>
                    <input
                      type="text"
                      name="affordability_total_year_cost"
                      id="affordability_total_year_cost"
                      class="form-control"
                      placeholder="Enter fee affordability"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Fee Affordability Tuition Fee UG</label>
                    <input
                      type="text"
                      name="affordability_tuition_fee_ug"
                      id="affordability_tuition_fee_ug"
                      class="form-control"
                      placeholder="Enter fee affordability tuition ug"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Fee Affordability Tuition Fee PG</label>
                    <input
                      type="text"
                      name="affordability_tuition_fee_pg"
                      id="affordability_tuition_fee_pg"
                      class="form-control"
                      placeholder="Enter fee affordability tuition fee pg"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Fee Affordability Total Cost UG</label>
                    <input
                      type="text"
                      name="affordability_total_cost_ug"
                      id="affordability_cost_ug"
                      class="form-control"
                      placeholder="Enter fee affordability total cost ug"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Fee Affordability Total Cost PG</label>
                    <input
                      type="text"
                      name="affordability_total_cost_pg"
                      id="affordability_cost_pg"
                      class="form-control"
                      placeholder="Enter fee affordability total cost pg"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Fee Affordability Avg Living Expense</label>
                    <input
                      type="text"
                      name="affordability_ang_living_expense"
                      id="affordability_ang_living_expense"
                      class="form-control"
                      placeholder="Enter fee affordability avg living expense"
                    />
                  </div>
                </div>
                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    "background-color": "rgb(235, 237, 239)",
                  }}
                >
                  <strong>Eligibility and Exam Score</strong>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Academic Requirements (in years)</label>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <input
                      type="text"
                      name="academic_requirements_ug"
                      id="academic_requirements_ug"
                      class="form-control"
                      placeholder="Ex- UG - 12"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <input
                      type="text"
                      name="academic_requirements_pg"
                      id="academic_requirements_pg"
                      class="form-control"
                      placeholder="Ex- PG - 16*"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Test Preparation Requirement (UG)</label>
                    <input
                      type="text"
                      name="test_preparation_ug"
                      id="test_prep_ug"
                      class="form-control"
                      placeholder="Enter requirement test"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Test Preparation Requirement (PG)</label>
                    <input
                      type="text"
                      name="test_preparation_pg"
                      id="test_prep_pg"
                      class="form-control"
                      placeholder="Enter requirement test"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>English Proficiency Requirement (TOEFL)</label>
                    <input
                      type="text"
                      name="english_proficiency_toefl"
                      id="english_proficiency_toefl"
                      class="form-control"
                      placeholder="Enter english proficiency in TOEFL"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>English Proficiency Requirement (IELTS)</label>
                    <input
                      type="text"
                      name="english_proficiency_ielts"
                      id="english_proficiency_ielts"
                      class="form-control"
                      placeholder="Enter english proficiency in IELTS"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>English Proficiency Requirement (PTE)</label>
                    <input
                      type="text"
                      name="english_proficiency_pte"
                      id="english_proficiency_pte"
                      class="form-control"
                      placeholder="Enter english proficiency in PTE"
                    />
                  </div>
                </div>
                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    "background-color": "rgb(235, 237, 239)",
                  }}
                >
                  <strong>Economic Overview</strong>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Part Time Circle</label>
                    <input
                      type="text"
                      name="economic_overview_part_time_circle[]"
                      id="economic_overview"
                      class="form-control"
                      placeholder="Enter economic overview part time circle"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Part Time Circle In</label>
                    <input
                      type="text"
                      name="economic_overview_part_time_circle_in[]"
                      id="economic_overview_in"
                      class="form-control"
                      placeholder="Enter economic overview part time circle In"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      name="overview_title[]"
                      id="overview_title"
                      class="form-control"
                      placeholder="Enter title"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Description</label>
                    <textarea
                      id="overview_de"
                      name="overview_description[]"
                      class="form-control"
                      placeholder="Enter description"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div
                  id="TextBoxContainer"
                  class="col-lg-12 col-sm-12 col-xs-12"
                ></div>
                <div class="col-lg-12 col-sm-12 col-xs-12 text-right">
                  <span
                    id="btnAdd"
                    class="fa fa-plus-square-o  mr-10"
                    value="Add"
                    style={{
                      "margin-bottom": "10px",
                      "margin-top": "10px",
                    }}
                    onClick={() => this.GetDynamicEconomicOverview()}
                  ></span>
                </div>

                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    "background-color": "rgb(235, 237, 239)",
                  }}
                >
                  <strong>Placement & Employment </strong>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      name="placement_title"
                      id="placement_title"
                      class="form-control"
                      placeholder="Enter placement & employment title"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Placement & Employment Text</label>
                    <input
                      type="text"
                      name="placement_employment_text"
                      id="placement_employment_text"
                      class="form-control"
                      placeholder="Enter placement & employment text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Placement & Employment Graph Max</label>
                    <input
                      type="text"
                      name="placement_employment_graph_max"
                      id="placement_employment_graph"
                      class="form-control"
                      placeholder="Enter placement & employment graph max"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Placement & Employment Graph Med</label>
                    <input
                      type="text"
                      name="placement_employment_graph_med"
                      id="placement_employment_graph_med"
                      class="form-control"
                      placeholder="Enter placement & employment graph med"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Placement & Employment Graph Low</label>
                    <input
                      type="text"
                      name="placement_employment_graph_low"
                      id="placement_employment_graph_low"
                      class="form-control"
                      placeholder="Enter placement & employment graph low"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Placement & Employment Graph Desc</label>
                    <input
                      type="text"
                      name="placement_employment_graph_desc"
                      id="placement_employment_graph_desc"
                      class="form-control"
                      placeholder="Enter placement & employment graph desc"
                    />
                  </div>
                </div>
                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    "background-color": "rgb(235, 237, 239)",
                  }}
                >
                  <strong>Student VISA </strong>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Visa Application Process</label>
                    <input
                      type="text"
                      name="visa_application_process"
                      id="visa_application"
                      class="form-control"
                      placeholder="Enter visa application process"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Visa Fee</label>
                    <input
                      type="text"
                      name="visa_fee"
                      id="visa_fee"
                      class="form-control"
                      placeholder="Enter visa feee"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Visa Document Required</label>
                    <input
                      type="text"
                      name="visa_document_required"
                      id="visa_doc"
                      class="form-control"
                      placeholder="Enter document required"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Visa Document Remark</label>
                    <input
                      type="text"
                      name="visa_document_remark"
                      id="visa_doc_remark"
                      class="form-control"
                      placeholder="Enter document remark"
                    />
                  </div>
                </div>
                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    "background-color": "rgb(235, 237, 239)",
                  }}
                >
                  <strong>Meta Tags Settings</strong>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Meta Title</label>
                    <input
                      type="text"
                      name="meta_title"
                      id="meta_title"
                      class="form-control"
                      placeholder="Enter meta title"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Meta Keywords</label>
                    <input
                      type="text"
                      name="meta_keyword"
                      id="meta_keywords"
                      class="form-control"
                      placeholder="Enter meta keywords"
                    />
                  </div>
                </div>

                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Meta Description</label>
                    <input
                      type="text"
                      name="meta_description"
                      id="meta_description"
                      class="form-control"
                      placeholder="Enter meta description"
                    />
                  </div>
                </div>
                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    "background-color": "rgb(235, 237, 239)",
                  }}
                >
                  <strong>Promotion Section</strong>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Background Banner</label>
                    <input
                      type="file"
                      name="background_banner"
                      id="banner"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Banner Line Image</label>
                    <input
                      type="text"
                      name="background_banner_line"
                      id="banner_line"
                      class="form-control"
                      placeholder="Enter banner line."
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Visa Text</label>
                    <input
                      type="text"
                      name="visa_text"
                      id="visa_text"
                      class="form-control"
                      placeholder="Enter visa text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Degree Text</label>
                    <input
                      type="text"
                      name="degree_text"
                      id="degree_text"
                      class="form-control"
                      placeholder="Enter degree text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Scholar Text</label>
                    <input
                      type="text"
                      name="scholar_text"
                      id="scholar_text"
                      class="form-control"
                      placeholder="Enter scholar text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Rank Text</label>
                    <input
                      type="text"
                      name="rank_text"
                      id="rank_text"
                      class="form-control"
                      placeholder="Enter rank text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Work Text</label>
                    <input
                      type="text"
                      name="work_text"
                      id="work_text"
                      class="form-control"
                      placeholder="Enter work text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Accommodation Text</label>
                    <input
                      type="text"
                      name="accommodation_text"
                      id="accommodation_text"
                      class="form-control"
                      placeholder="Enter accommodation text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Know More Back</label>
                    <input
                      type="file"
                      name="know_more"
                      id="know_more"
                      class="form-control"
                    />
                  </div>
                </div>
                <div
                  class="col-lg-12 col-sm-12 col-xs-12"
                  style={{
                    "background-color": "rgb(235, 237, 239)",
                  }}
                >
                  <strong>Other Details</strong>
                </div>

                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>&#160;</label>
                    <br />
                    <input type="checkbox" name="check_my_chance" /> Check My
                    Chance Top
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Map</label>
                    <input type="file" name="map" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Country Banner</label>
                    <input
                      type="file"
                      name="country_banner"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Country Footer Banner</label>
                    <input
                      type="file"
                      name="country_footer_banner"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>
                      Eligibility Exam Score Academic Requirement UG
                    </label>
                    <input
                      type="text"
                      name="eligibility_exam_score_academic_requirement_ug"
                      class="form-control"
                      placeholder="Enter eligibility exam score academic requirement ug"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>
                      Eligibility Exam Score Academic Requirement PG
                    </label>
                    <input
                      type="text"
                      name="eligibility_exam_score_academic_requirement_pg"
                      class="form-control"
                      placeholder="Enter eligibility exam score academic requirement pg"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>
                      Eligibility Exam Score Test Prep Requirement UG
                    </label>
                    <input
                      type="text"
                      name="eligibility_exam_score_prep_requirement_ug"
                      class="form-control"
                      placeholder="Enter eligibility exam score test prep requirement ug"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>
                      Eligibility Exam Score Test Prep Requirement PG
                    </label>
                    <input
                      type="text"
                      name="eligibility_exam_score_prep_requirement_pg"
                      class="form-control"
                      placeholder="Enter eligibility exam score test prep requirement pg"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Eligibility Exam Score One Year Cost</label>
                    <input
                      type="text"
                      name="eligibility_exam_score_year_cost"
                      class="form-control"
                      placeholder="Enter eligibility exam score one year cost"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Part Time Job Circle</label>
                    <input
                      type="text"
                      name="economic_overview_part_time_job_circle"
                      class="form-control"
                      placeholder="Enter economic overview part time job circle"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Part Time Job Circle in 1</label>
                    <input
                      type="text"
                      name="economic_overview_part_time_job_circle_in"
                      class="form-control"
                      placeholder="Enter economic overview part time job circle in 1"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Part Time Job Text</label>
                    <input
                      type="text"
                      name="economic_part_time_job_text"
                      class="form-control"
                      placeholder="Enter economic overview part time job text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Post Study Circle</label>
                    <input
                      type="text"
                      name="economic_overview_post_study_circle"
                      class="form-control"
                      placeholder="Enter economic overview post study circle"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Post Study Circle In</label>
                    <input
                      type="text"
                      name="economic_overview_post_study_circle_in"
                      class="form-control"
                      placeholder="Enter economic overview post study circle in"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Post Study Text</label>
                    <input
                      type="text"
                      name="economic_overview_post_study_text"
                      class="form-control"
                      placeholder="Enter economic overview post study text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Highest Paying Jobs Text</label>
                    <input
                      type="text"
                      name="economic_overview_highest_paying_job_text"
                      class="form-control"
                      placeholder="Enter economic overview highest paying jobs text"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Highest Paying Jobs Circle</label>
                    <input
                      type="text"
                      name="economic_overview_highest_paying_job_circle"
                      class="form-control"
                      placeholder="Enter economic overview highest paying jobs Circle"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>
                      Economic Overview Highest Paying Jobs Circle In
                    </label>
                    <input
                      type="text"
                      name="economic_overview_highest_paying_job_circle_in"
                      class="form-control"
                      placeholder="Enter economic overview highest paying jobs Circle in"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Min Wage Circle</label>
                    <input
                      type="text"
                      name="economic_overview_min_wage_circle"
                      class="form-control"
                      placeholder="Enter economic overview min wage circle"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Min Wage Circle In</label>
                    <input
                      type="text"
                      name="economic_overview_min_wage_circle_in"
                      class="form-control"
                      placeholder="Enter economic overview min wage circle in"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Economic Overview Min Wage Text</label>
                    <input
                      type="text"
                      name="economic_overview_min_wage_text"
                      class="form-control"
                      placeholder="Enter economic overview min wage text"
                    />
                  </div>
                </div>

                <div class="col-lg-12 col-sm-12 col-xs-12 text-center">
                  <button class="btn btn-warning" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            {/* <button
              class="btn btn-danger"
              type="submit"
              onClick={() => {
                this.handleModel();
              }}
              value="Close"
            >
              Close
            </button> */}
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.show3} onHide={() => this.handleModel3()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add University</h3>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(evt) => this.addUniValidations(evt)}>
              <div class="box-body row">
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>University Name</label>
                    <input
                      type="text"
                      name="university_name"
                      class="form-control"
                      placeholder="Enter university name"
                      id="university"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>University Cover Image</label>
                    <input
                      type="file"
                      name="university_cover_image"
                      class="form-control"
                      id="university_image"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>University Url</label>
                    <input
                      type="text"
                      name="university_url"
                      class="form-control"
                      placeholder="Enter university url"
                      id="university_url"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>University Logo</label>
                    <input
                      type="file"
                      name="university_logo"
                      class="form-control"
                      id="university_logo"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>University Code</label>
                    <input
                      type="text"
                      name="university_code"
                      class="form-control number"
                      placeholder="Enter university code"
                      id="uni_code"
                      maxLength="10"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>University Rating</label>
                    <input
                      type="text"
                      name="university_rating"
                      class="form-control number"
                      placeholder="Enter university rating"
                      id="uni_rate"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>University Ranking</label>
                    <input
                      type="text"
                      name="university_ranking"
                      class="form-control"
                      placeholder="Enter university ranking"
                      id="uni_rank"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Minimum Marks for Admission</label>
                    <input
                      type="text"
                      name="min_marks_for_admission"
                      class="form-control number"
                      placeholder="Enter Minimum marks for admission"
                      id="marks"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label for="aboutTextarea">About University</label>
                    <textarea
                      id="aboutTextarea"
                      class="form-control"
                      rows="3"
                      name="about_university"
                      placeholder="Enter about university"
                    ></textarea>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>University Type</label>
                    <select
                      class="form-control"
                      name="university_type"
                      id="uni_type"
                    >
                      <option value="">Select Type</option>
                      <option value="">Affiliated</option>
                      <option value="">Government</option>
                      <option value="">Deemed</option>
                      <option value="">Privet</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Student Population</label>
                    <input
                      type="text"
                      name="student_population"
                      class="form-control"
                      placeholder="Enter student population"
                      id="population"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>FAFSA Code</label>
                    <input
                      type="text"
                      name="fafsa_code"
                      class="form-control"
                      placeholder="Enter fafsa code"
                      id="fafsa_code"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Accreditation</label>
                    <input
                      type="text"
                      name="accreditation"
                      class="form-control"
                      placeholder="Enter accreditation"
                      id="accreditation"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Average Cost of Attendance</label>
                    <input
                      type="text"
                      name="average_attendance_cost"
                      class="form-control"
                      placeholder="Enter average cost of attendance"
                      id="attendance_cost"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Student : Faculty Ratio</label>
                    <input
                      type="text"
                      name="student_faculty_ratio"
                      class="form-control"
                      placeholder="Enter student faculty ration Ex. 24:1"
                      id="faculty_ratio"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Country</label>
                    <select
                      class="form-control"
                      name="university_county"
                      id="uni_country"
                    >
                      <option value="">Select Country</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>University State</label>
                    <select
                      class="form-control"
                      name="university_state"
                      id="uni_state"
                    >
                      <option value="">Select State</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>City</label>
                    <select
                      class="form-control"
                      name="university_city"
                      id="uni_city"
                    >
                      <option value="">Select City</option>
                    </select>
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
                      id="address"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Country Rank</label>
                    <input
                      type="text"
                      name="country_rank"
                      class="form-control number"
                      placeholder="Enter country rank"
                      id="country_rank"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Location</label>
                    <input
                      type="text"
                      name="location"
                      class="form-control"
                      placeholder="Enter location"
                      id="location"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Lifestyle</label>
                    <input
                      type="text"
                      name="lifestyle"
                      class="form-control"
                      id="lifestyle"
                      placeholder="Enter lifestyle"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Lifestyle Details</label>
                    <input
                      type="text"
                      name="lifestyle_details"
                      class="form-control"
                      id="lifestyle_details"
                      placeholder="Enter lifestyle details"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Living Cost</label>
                    <input
                      type="text"
                      name="living_cost"
                      class="form-control"
                      placeholder="Enter living cost"
                      id="living_cost"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Total Cost</label>
                    <input
                      type="text"
                      name="total_cost"
                      id="total_cost"
                      class="form-control"
                      placeholder="Enter total cost"
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Amenities</label>
                    <br />
                    <input
                      type="checkbox"
                      name="amenities[]"
                      id="bank"
                      class="mr-r"
                    />
                    <span class="mr-r">Bank</span>
                    <input
                      type="checkbox"
                      name="amenities[]"
                      id="food"
                      class="mr-r"
                    />
                    <span class="mr-r">Food</span>
                    <input
                      type="checkbox"
                      name="amenities[]"
                      id="health"
                      class="mr-r"
                    />
                    <span class="mr-r">Healthcare</span>
                    <input
                      type="checkbox"
                      name="amenities[]"
                      id="commute"
                      class="mr-r"
                    />
                    <span class="mr-r">Commute</span>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Accommodation Details</label>
                    <textarea
                      id="accommodation_details"
                      class="form-control"
                      rows="3"
                      name="accommodation_detail"
                      placeholder="Enter accommodation details"
                    ></textarea>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Accommodation Cost</label>
                    <input
                      type="text"
                      name="accommodation_cost"
                      id="accommodation_cost"
                      class="form-control"
                      placeholder="Enter accommodation cost"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Intake</label>
                    <input
                      type="text"
                      name="intake"
                      class="form-control"
                      id="intake"
                      placeholder="Enter intake"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Total No. of Students</label>
                    <input
                      type="text"
                      name="total_student"
                      id="total_student"
                      class="form-control"
                      placeholder="Enter total no. of students"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Legal Status</label>
                    <input
                      type="text"
                      name="legal_status"
                      class="form-control"
                      id="legal_status"
                      placeholder="Enter legal status"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Mobile Number</label>
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      class="form-control number"
                      placeholder="Enter mobile number"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Average Tuition Fee</label>
                    <input
                      type="text"
                      name="tuition_fee"
                      id="tuition_fee"
                      class="form-control"
                      placeholder="Enter average tuition fee"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Average Living Expense</label>
                    <input
                      type="text"
                      name="average_living_expense"
                      id="living_expense"
                      class="form-control"
                      placeholder="Enter average living expense"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Trending Points</label>
                    <input
                      type="text"
                      name="trending_point"
                      id="trending_points"
                      class="form-control"
                      placeholder="Enter trending points"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Analytic Points</label>
                    <input
                      type="text"
                      name="analytic_point"
                      id="analytic_points"
                      class="form-control"
                      placeholder="Enter analytic points"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Privacy</label>
                    <select class="form-control" name="privacy" id="privacy">
                      <option value="">Select Privacy</option>
                      <option value="Public">Public</option>
                      <option value="Private">Private</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Download Brochure</label>
                    <input
                      type="file"
                      name="brochure"
                      class="form-control"
                      id="brochure"
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
                  <strong>Meta Tags Settings</strong>
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
                      name="meta_description"
                      editor={ClassicEditor}
                      onInit={(editor) => {
                        //// this inializes our application
                      }}
                    />
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12 text-center">
                  <button class="btn btn-warning" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.show4} onHide={() => this.handleModel4()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add University Course</h3>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(evt) => this.addUniCourseValidations(evt)}>
              <div class="box-body row">
                <div class="col-md-12">
                  <div
                    class="col-lg-12 col-sm-12 col-xs-12"
                    style={{
                      "background-color": "rgb(235, 237, 239)",
                    }}
                  >
                    <strong>Basic Info</strong>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                      <div class="form-group">
                        <label>University</label>
                        <select
                          class="form-control"
                          name="university"
                          id="select_uni"
                        >
                          <option value="">Select University</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                      <div class="form-group">
                        <label>Course</label>
                        <select class="form-control" name="course" id="course">
                          <option value="">Select Course</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                      <div class="form-group">
                        <label>Course Name Alias</label>
                        <input
                          type="text"
                          name="course_alias_name"
                          id="alias1"
                          class="form-control"
                          placeholder="Enter course name alias"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                      <div class="form-group">
                        <label>Duration</label>
                        <input
                          type="text"
                          name="duration"
                          id="duration"
                          class="form-control"
                          placeholder="Enter duration"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                      <div class="form-group">
                        <label>Course Level</label>
                        <select
                          class="form-control"
                          name="course_level"
                          id="uni_course"
                        >
                          <option value="">Select Course Level</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                      <div class="form-group">
                        <label>Application Deadline</label>
                        <input
                          type="date"
                          id="application_deadline"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-lg-12 col-sm-12 col-xs-12"
                    style={{
                      "background-color": "rgb(235, 237, 239)",
                    }}
                  >
                    <strong>Academic Info</strong>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Academic Requirement</label>
                    <input
                      type="text"
                      name="academic_requirement"
                      id="academic_requirement"
                      class="form-control"
                      placeholder="Enter academic requirement"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Academic Details</label>
                    <input
                      type="text"
                      name="academic_detail"
                      id="academic_details"
                      class="form-control"
                      placeholder="Enter academic details"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Application Fee</label>
                    <input
                      type="text"
                      name="application_fee"
                      id="application_fee"
                      class="form-control "
                      placeholder="Enter application fee"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Tuition Fee</label>
                    <input
                      type="text"
                      name="tuition_fee"
                      id="tuition"
                      class="form-control"
                      placeholder="Enter tuition"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>LOR | SOP</label>
                    <input
                      type="text"
                      name="lor_sop"
                      id="lor"
                      class="form-control"
                      placeholder="Enter requirement"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>ILETS</label>
                    <input
                      type="text"
                      name="ilets"
                      id="ilets"
                      class="form-control"
                      placeholder="Enter ILETS score"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>TOEFL</label>
                    <input
                      type="text"
                      name="toefl"
                      id="toefl"
                      class="form-control"
                      placeholder="Enter TOEFL score"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>GRE</label>
                    <input
                      type="text"
                      name="gre"
                      id="gre"
                      class="form-control"
                      placeholder="Enter GRE score"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>GMAT</label>
                    <input
                      type="text"
                      name="gmat"
                      id="gmat"
                      class="form-control"
                      placeholder="Enter GMAT score"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Scholarships Details</label>
                    <input
                      type="text"
                      name="scholarship_detail"
                      id="scholarship_details"
                      class="form-control"
                      placeholder="Enter scholarship details"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>&#160; &nbsp;</label>
                    <br />
                    <input
                      type="checkbox"
                      name="scholarship"
                      class="mr-r"
                      id="scholarship_check"
                    />
                    <span class="mr-r">Scholarships</span>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>Internship co op Details</label>
                    <input
                      type="text"
                      name="internship_co_op_detail"
                      class="form-control"
                      placeholder="Enter internship co op details"
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12">
                  <div class="form-group">
                    <label>&#160; &nbsp;</label>
                    <br />
                    <input
                      type="checkbox"
                      name="internship_co_op"
                      class="mr-r"
                    />
                    <span class="mr-r">Internship co op</span>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label>Option Available</label>
                    <select class="form-control" name="available_option">
                      <option>Select</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12 text-center">
                  <button class="btn btn-warning" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.show5} onHide={() => this.handleModel5()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add State</h3>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(evt) => this.stateValidations(evt)}>
              <div class="box-body">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                      <div class="form-group">
                        <label>Country</label>
                        <select
                          class="form-control"
                          id="country"
                          name="country_id"
                          onChange={(evt) => this.handleChange(evt)}
                          defaultValue={this.state.country_id}
                        >
                          <option>Select Country</option>
                          {countryList &&
                            countryList.map((data) => {
                              return (
                                <option value={data.id} key={data.id}>
                                  {data.country_name}
                                </option>
                              );
                            })}
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                      <div class="form-group">
                        <label>State Name</label>
                        <input
                          type="text"
                          name="name"
                          onChange={(evt) => this.handleChange(evt)}
                          defaultValue={this.state.name}
                          id="state"
                          class="form-control"
                          placeholder="Enter state name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-sm-12 col-xs-12 text-center">
                    <button class="btn btn-warning" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.show6} onHide={() => this.handleModel6()}>
          <Modal.Header closeButton>
            <h3 class="box-title">Add City</h3>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(evt) => this.cityValidations(evt)}>
              <div class="box-body">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                      <div class="form-group">
                        <label>Country</label>
                        <select
                          class="form-control"
                          name="country_id"
                          onChange={(evt) => this.handleChange(evt)}
                          defaultValue={this.state.country_id}
                        >
                          <option>Select Country</option>
                          {countryList &&
                            countryList.map((data) => {
                              return (
                                <option value={data.id} key={data.id}>
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
                          defaultValue={this.state.state_id}
                        >
                          <option>Select State</option>
                          {stateList &&
                            stateList.map((data) => {
                              return (
                                <option value={data.id} key={data.id}>
                                  {data.name}
                                </option>
                              );
                            })}
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                      <div class="form-group">
                        <label>City Name</label>
                        <input
                          type="text"
                          name="name"
                          onChange={(evt) => this.handleChange(evt)}
                          defaultValue={this.state.name}
                          id="city"
                          class="form-control"
                          placeholder="Enter city name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12 text-center">
                  <button class="btn btn-warning" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>
        <div className="col-xs-12">
          <div className="box">
            <div className="box-body">
              <CCard>
                <CCardBody>
                  <CTabs>
                    <CNav variant="tabs">
                      <CNavItem>
                        <CNavLink>Country</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>State</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>City</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>University</CNavLink>
                      </CNavItem>
                      <CNavItem>
                        <CNavLink>University Course</CNavLink>
                      </CNavItem>
                    </CNav>
                    <CTabContent>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">Country List</h3>
                                <div
                                  class="dataTables_length"
                                  id="example1_length"
                                ></div>
                              </div>
                              <div class="box-body">
                                <div class="row">
                                  <div class="col-sm-2">
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <label>Status&#160;:</label>
                                      <select
                                        name="status"
                                        aria-controls="example1"
                                        value=""
                                        class="form-control input-sm"
                                        style={{ width: "100%" }}
                                      >
                                        <option value="-1">All Status</option>
                                        <option value="0">InActive</option>
                                        <option value="1">Active</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div class="col-sm-2">
                                    <label>&#160;</label>
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <button
                                        type="submit"
                                        name="filter"
                                        id="filter"
                                        class="btn btn-warning filter"
                                      >
                                        Filter
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col-sm-8">
                                    <div class="add-icon">
                                      <img
                                        src={"/admin/build/avatars/add.png"}
                                        onClick={() => {
                                          this.handleModel();
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <hr />
                                <div class="tab-content">
                                  <table
                                    id="example"
                                    class="table table-bordered "
                                  >
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>Name</th>
                                        <th>Flag</th>
                                        <th>About</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {countryList &&
                                        countryList.length > 0 &&
                                        countryList.map((data, key) => {
                                          return (
                                            <tr key={data.id}>
                                              <td>{++key}</td>
                                              <td>{data.country_name}</td>
                                              <td>{data.flag}</td>
                                              <td>{data.description}</td>
                                              <td>
                                                <a
                                                  href="javascript:void(0)"
                                                  onClick={(evt) =>
                                                    this.activeInactiveCountry(
                                                      evt,
                                                      data.status,
                                                      data.id
                                                    )
                                                  }
                                                >
                                                  {data.status == 1 ? (
                                                    <span class="label label-lg  label-light-success label-inline">
                                                      Active
                                                    </span>
                                                  ) : (
                                                    <span class="label label-lg  label-light-danger label-inline">
                                                      Inactive
                                                    </span>
                                                  )}
                                                </a>
                                              </td>
                                              <td>
                                                <Link
                                                  to={
                                                    "/admin/build/edit-country/" +
                                                    data.id
                                                  }
                                                  class="edit"
                                                >
                                                  <span class="fa fa-pencil-square-o"></span>
                                                </Link>
                                              </td>
                                            </tr>
                                          );
                                        })}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </CTabPane>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">State List</h3>
                                <div
                                  class="dataTables_length"
                                  id="example1_length"
                                ></div>
                              </div>
                              <div class="box-body">
                                <div class="row">
                                  <div class="col-sm-2">
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <label>Status&#160;:</label>
                                      <select
                                        name="status"
                                        aria-controls="example1"
                                        value=""
                                        class="form-control input-sm"
                                        style={{ width: "100%" }}
                                      >
                                        <option value="-1">All Status</option>
                                        <option value="0">InActive</option>
                                        <option value="1">Active</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div class="col-sm-2">
                                    <label>&#160;</label>
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <button
                                        type="submit"
                                        name="filter"
                                        id="filter"
                                        class="btn btn-warning filter"
                                      >
                                        Filter
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col-sm-8">
                                    <div class="add-icon">
                                      <img
                                        src={"/admin/build/avatars/add.png"}
                                        onClick={() => {
                                          this.handleModel5();
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <hr />
                                <div class="tab-content">
                                  <table
                                    id="example2"
                                    class="table table-bordered "
                                  >
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>State</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {stateList &&
                                        stateList.length > 0 &&
                                        stateList.map((data, key) => {
                                          return (
                                            <tr key={data.id}>
                                              <td>{++key}</td>
                                              <td>{data.name}</td>
                                              <td>
                                                <a
                                                  href="javascript:void(0)"
                                                  onClick={(evt) =>
                                                    this.activeInactiveState(
                                                      evt,
                                                      data.status,
                                                      data.id
                                                    )
                                                  }
                                                >
                                                  {data.status == 1 ? (
                                                    <span class="label label-lg  label-light-success label-inline">
                                                      Active
                                                    </span>
                                                  ) : (
                                                    <span class="label label-lg  label-light-danger label-inline">
                                                      Inactive
                                                    </span>
                                                  )}
                                                </a>
                                              </td>
                                              <td>
                                                <Link
                                                  to={
                                                    "/admin/build/edit-state/" +
                                                    data.id
                                                  }
                                                  class="edit"
                                                >
                                                  <span class="fa fa-pencil-square-o"></span>
                                                </Link>
                                              </td>
                                            </tr>
                                          );
                                        })}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </CTabPane>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">City List</h3>
                                <div
                                  class="dataTables_length"
                                  id="example1_length"
                                ></div>
                              </div>
                              <div class="box-body">
                                <div class="row">
                                  <div class="col-sm-2">
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <label>Status&#160;:</label>
                                      <select
                                        name="status"
                                        aria-controls="example1"
                                        value=""
                                        class="form-control input-sm"
                                        style={{ width: "100%" }}
                                      >
                                        <option value="-1">All Status</option>
                                        <option value="0">InActive</option>
                                        <option value="1">Active</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div class="col-sm-2">
                                    <label>&#160;</label>
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <button
                                        type="submit"
                                        name="filter"
                                        id="filter"
                                        class="btn btn-warning filter"
                                      >
                                        Filter
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col-sm-8">
                                    <div class="add-icon">
                                      <img
                                        src={"/admin/build/avatars/add.png"}
                                        onClick={() => {
                                          this.handleModel6();
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <hr />
                                <div class="tab-content">
                                  <table
                                    id="example1"
                                    class="table table-bordered "
                                  >
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>City</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {cityList &&
                                        cityList.length > 0 &&
                                        cityList.map((data, key) => {
                                          return (
                                            <tr key={data.city_id}>
                                              <td>{++key}</td>
                                              <td>{data.name}</td>
                                              <td>
                                                <a
                                                  href="javascript:void(0)"
                                                  onClick={(evt) =>
                                                    this.activeInactiveCity(
                                                      evt,
                                                      data.status,
                                                      data.city_id
                                                    )
                                                  }
                                                >
                                                  {data.status == 1 ? (
                                                    <span class="label label-lg  label-light-success label-inline">
                                                      Active
                                                    </span>
                                                  ) : (
                                                    <span class="label label-lg  label-light-danger label-inline">
                                                      Inactive
                                                    </span>
                                                  )}
                                                </a>
                                              </td>
                                              <td>
                                                <Link
                                                  to={
                                                    "/admin/build/edit-city/" +
                                                    data.city_id
                                                  }
                                                  class="edit"
                                                >
                                                  <span class="fa fa-pencil-square-o"></span>
                                                </Link>
                                              </td>
                                            </tr>
                                          );
                                        })}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </CTabPane>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">University List</h3>
                                <div
                                  class="dataTables_length"
                                  id="example1_length"
                                ></div>
                              </div>
                              <div class="box-body">
                                <div class="row">
                                  <div class="col-sm-2">
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <label>Status&#160;:</label>
                                      <select
                                        name="status"
                                        aria-controls="example1"
                                        value=""
                                        class="form-control input-sm"
                                        style={{ width: "100%" }}
                                      >
                                        <option value="-1">All Status</option>
                                        <option value="0">InActive</option>
                                        <option value="1">Active</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div class="col-sm-3">
                                    <label>&#160;</label>
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <button
                                        type="submit"
                                        name="filter"
                                        id="filter"
                                        class="btn btn-warning filter"
                                      >
                                        Filter
                                      </button>{" "}
                                      &nbsp; &nbsp;
                                      <button
                                        type="submit"
                                        name=""
                                        class="btn btn-secondary"
                                      >
                                        Export Excel
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col-sm-7">
                                    <div class="add-icon">
                                      <img
                                        src={"/admin/build/avatars/add.png"}
                                        onClick={() => {
                                          this.handleModel3();
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <hr />
                                <div class="tab-content">
                                  <table
                                    id="example"
                                    class="table table-bordered "
                                  >
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>university Name</th>
                                        <th>Country</th>
                                        <th>Address</th>
                                        <th>University Rating</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Argosy University, Tampa</td>
                                        <td>USA</td>
                                        <td>
                                          1403 N Howard Ave, Tampa, FL 33607,
                                          United States
                                        </td>
                                        <td>4</td>
                                        <td>
                                          <a href="#!">Active</a>
                                        </td>
                                        <td>
                                          <Link
                                            to={"/admin/build/edit-university"}
                                            class="edit"
                                          >
                                            <span class="fa fa-pencil-square-o"></span>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>
                                          Art Institute of Fort Lauderdale
                                        </td>
                                        <td>USA</td>
                                        <td>
                                          1799 SE 17th St, Fort Lauderdale, FL
                                          33316, United States
                                        </td>
                                        <td>3</td>
                                        <td>
                                          <a href="#!">Active</a>
                                        </td>
                                        <td>
                                          <Link
                                            to={"/admin/build/edit-university"}
                                            class="edit"
                                          >
                                            <span class="fa fa-pencil-square-o"></span>
                                          </Link>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </CTabPane>
                      <CTabPane>
                        <section class="content">
                          <div class="col-xs-12">
                            <div class="box">
                              <div class="box-header d-flexi">
                                <h3 class="box-title">
                                  University Course List
                                </h3>
                                <div
                                  class="dataTables_length"
                                  id="example1_length"
                                ></div>
                              </div>
                              <div class="box-body">
                                <div class="row">
                                  <div class="col-sm-2">
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <label>Status&#160;:</label>
                                      <select
                                        name="status"
                                        aria-controls="example1"
                                        value=""
                                        class="form-control input-sm"
                                        style={{ width: "100%" }}
                                      >
                                        <option value="-1">All Status</option>
                                        <option value="0">InActive</option>
                                        <option value="1">Active</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div class="col-sm-3">
                                    <label>&#160;</label>
                                    <div
                                      class="dataTables_length"
                                      id="example1_length"
                                    >
                                      <button
                                        type="submit"
                                        name="filter"
                                        id="filter"
                                        class="btn btn-warning filter"
                                      >
                                        Filter
                                      </button>{" "}
                                      &nbsp; &nbsp;
                                      <button
                                        type="submit"
                                        name=""
                                        class="btn btn-secondary"
                                      >
                                        Export Excel
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col-sm-7">
                                    <div class="add-icon">
                                      <img
                                        src={"/admin/build/avatars/add.png"}
                                        onClick={() => {
                                          this.handleModel4();
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <hr />
                                <div class="tab-content">
                                  <table
                                    id="example"
                                    class="table table-bordered "
                                  >
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>University Name</th>
                                        <th>Course</th>
                                        <th>Duration</th>
                                        <th>Type</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Loughborough University</td>
                                        <td>
                                          Advanced Manufacturing Engineering and
                                          Management
                                        </td>
                                        <td>12</td>
                                        <td></td>
                                        <td>
                                          <a href="#!">Active</a>
                                        </td>
                                        <td>
                                          <Link
                                            to={
                                              "/admin/build/edit-university-course"
                                            }
                                            class="edit"
                                          >
                                            <span class="fa fa-pencil-square-o"></span>
                                          </Link>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </CTabPane>
                    </CTabContent>
                  </CTabs>
                </CCardBody>
              </CCard>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default DataManagement;
