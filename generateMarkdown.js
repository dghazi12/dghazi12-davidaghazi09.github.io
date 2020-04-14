function generateMarkdown(data) {
    return ` 
    
  ## Questions
  
  ![image](${data.avatar_url}),
    
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
  