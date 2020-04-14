function generateMarkdown(data, response) {
    return ` 
    
  ## Questions
  
  ![image](${response.data.avatar_url} =200x200),
    
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