const axios = require("axios").default;
const urls = require("./urls");
const token = require("../utils/Auth/token");
const baseurl = require("./apiconfig");
const toast = require("react-toastify");


// const config = {
//     headers :{
//         Authorization :"Bearer "+ token.getToken( )
//     }
// }



module.exports.loginUser = async (user, history ) => {
  console.log(user);
  const url = baseurl.baseurl + urls.login
  try {
    var res = await axios.post(url, user);

    token.setToken(res?.data?.token);

    console.log(res?.data);

    if (res?.status) {
      console.log(res?.data);
      toast.toast(res?.data?.message,);
      history.push("/dashboard")
      return res?.data;
    }
    //     if (res.status == 200) {
    // // console.log(token.getToken());
    //      console.log(res.data);
    //         return res.data
    //   }
  } catch (error) {
    console.log("error while login---", error?.response?.data?.message);
    toast.toast(error?.response?.data?.message, { type: "error" });
  }
};




