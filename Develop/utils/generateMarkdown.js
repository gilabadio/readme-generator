// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##Description
  ${data.description}

  ##Installation
  ${data.install}

  ##Usage
  ${data.usage}

  ##Credits
  ${data.credits}

  ##License
  ${data.license}

  ##Questions
  [${date.user}](https://github.com/${data.user})
  ${data.email}

`;
}

module.exports = generateMarkdown;
