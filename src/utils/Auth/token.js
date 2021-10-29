
const setToken = (access_token) => {
  localStorage.setItem("access_token", access_token);
  return true;
};

const getToken = () => {
  const token = localStorage.getItem("access_token");
  if (token) {
    return token;
  } else {
    return false;
  }
};

// const setUername = (username) => {
//     localStorage.setItem("username", username);
//     console.log("Token is ");
//     return true;
//   };
//   const getUsername = () => {
//     var username = localStorage.getItem("username");
//     if (username) {
//       return username;
//     } else {
//       return false;
//     }
//   };


 

module.exports = {
  setToken,
  getToken,
  // setUername,
  // getUsername,
 
};
