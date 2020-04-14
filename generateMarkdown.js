function generateMarkdown(data, response) {
    return ` 
    
  ## Questions
  
  ![image](${response.data.avatar_url}/icon48),
    
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