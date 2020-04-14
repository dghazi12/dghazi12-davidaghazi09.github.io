const axios = require("axios");

  function api(username) {
    const queryURL = `https://api.github.com/users/${username}`;
    axios
    .get(queryURL)
    .then(response => {  
      console.log(response.data.avatar_url)
      console.log(response.data.email);

      return response
    })

    .catch(err => console.log("Please enter valid Githubg Username.", err))
    return
  };

module.exports = api;