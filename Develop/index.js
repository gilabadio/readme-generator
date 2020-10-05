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
                message: "Apache 2.0",
                key: "Apache 2.0",
                value:
                  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
              },
              {
                message: "MIT",
                key: "MIT",
                value:
                  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
              },
              {
                message: "ISC",
                key: "ISC",
                value:
                  "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
              },
              {
                message: "IBM Public license",
                key: "IBM Public license",
                value:
                  "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
              },
              {
                message: "Mozilla Public license",
                key: "Mozilla Public license",
                value:
                  "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
              },
              {
                message: "Artistic license 2.0",
                key: "Artistic license 2.0",
                value:
                  "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
              },
            ],
          },

      ]);
};


// function to write README file
function writeToFile(fileName, data) {
}


// function to initialize program
function init() {

}


// function call to initialize program
init();
