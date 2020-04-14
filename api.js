const axios = require("axios");

// const api = {
//     getUser(username) {
  
//     }
//   };
  
//   module.exports = api;

  
  const queryUrl = `https://api.github.com/users/${response.username}`; 
  
      axios
          .get(queryUrl)
          .then((res)=>{
              console.log(res.data)
              console.log(res.data.avatar_url)
              console.log(res.data.email)
              // picture = res.data.avatar_url;
              // email = res.data.email
          }),
          
          function (err) {
            if (err) {
              throw err;
            }
        };
