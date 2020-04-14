function generateMarkdown(data, response) {
    return ` 
    
  ## Questions
  
  <img src="${response.data.avatar_url}" height="250" width="250">,
    
  # ${data.title},

  ![](${data.badges}),

  ## Description 

  ${data.description},

  ## Installation

  ${data.installation},

  ## Usage

  ${data.usage},

  ## Credits

  ${data.credits},

  ## License

  ${data.license},

  ## Contributing

  ${data.contributing},

  ## Tests

  ${data.tests},
  
  `;
  }
  
  module.exports = generateMarkdown;