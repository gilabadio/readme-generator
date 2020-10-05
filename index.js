const fs = require("fs");


const inquirer = require("inquirer");


const markDown = require("./Develop/utils/generateMarkdown.js");

// array of questions for user
const questions = () =>{
    return inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is your project title? (Required)',
          validate: nameInput => {
            if  (nameInput) {
              return true;
            } else {
              console.log("Please enter your title!");
              return false;
            }
          } 
        },
        {
          type: 'input',
          name: 'description',
          message: 'Enter your projects description (Required)',
          validate: nameInput => {
            if  (nameInput) {
              return true;
            } else {
              console.log("Please enter project description!");
              return false;
            }
          } 
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter your how you can install your project (Required)',
            validate: nameInput => {
              if  (nameInput) {
                return true;
              } else {
                console.log("Please provide instructions on how to install!");
                return false;
              }
            } 
          },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter your Usage (Required)',
            validate: nameInput => {
              if  (nameInput) {
                return true;
              } else {
                console.log("Please provide instructions and examples for use. !");
                return false;
              }
            } 
          },
          {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators',
            validate: nameInput => {
              if  (nameInput) {
                return true;
              } else {
                console.log("Please include your credits!");
                return false;
              }
            } 
          },
          {
            type: "checkbox",
            name: "license",
            message: "Please select a license from the list below.",
            choices: [
              {
                value:
                  "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
              },
              {
                value:
                  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
              },
              {
                value:
                  "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
              },
              {
                value:
                  "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
              },
              {
                value:
                  "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
              },
              {
                value:
                  "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
              },
            ],
          },
        {
            type: 'input',
            name: 'user',
            message: 'Type in your github username',
            validate: nameInput => {
              if  (nameInput) {
                return true;
              } else {
                console.log("Please typer in your github username !");
                return false;
              }
            }
        },
        
        {
                type: 'input',
                name: 'email',
                message: 'Type in your email address',
                validate: nameInput => {
                  if  (nameInput) {
                    return true;
                  } else {
                    console.log("Please typer in your email aaddress !");
                    return false;
                  }
                }
        }
      ]);
};
questions().then((answers) =>{
    console.log(answers);

    var template = markDown(answers);
    writeToFile("genrated.md", template);
});

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
          return console.log(err);
        }
        return console.log("success");
      });
}


// function to initialize program
function init() {

}


// function call to initialize program
init();
