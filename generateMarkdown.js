function generateMarkdown(data) {
    return `# ${data.title},

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
  