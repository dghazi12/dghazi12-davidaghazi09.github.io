function generateMarkdown(data, response) {
    return `   
  # ${data.title}

  <img src="${data.badges}">

  ## Description 

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  <img src="${response.data.avatar_url}" height="200" width="200">
  
  `;
}

module.exports = generateMarkdown;