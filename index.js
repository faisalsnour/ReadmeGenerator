const fs = require('fs');
var inquirer = require('inquirer');
inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'enter the project description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'enter the installation instruction',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'enter the usage of project',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'enter the contribution guidelines',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'enter test instructions',
        name: 'test',
    },
    {
        type: 'list',
        message: 'choose license from the list',
        choices: ['BSD', 'MIT', 'ISC', 'MPL', 'Zlib'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'enter your github username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'enter your email address',
        name: 'email',
    },
  ]
  )
  .then(answers => {
      function badge(x){
        if (x.license == "MIT"){
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        }
        else if(x.license == "ISC"){
            return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
        }
        else if(x.license == "BSD"){
            return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
        }
        else if(x.license == "MPL"){
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        }
        else if(x.license == "Zlib"){
            return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
        }
      }
    fs.writeFile('generatedReadme.md',`${badge(answers)}\n# ${answers.title}\n## Table of Contents\n- [Description](#description)\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [License](#license)\n- [Questions](#questions)\n## Description\n${answers.description}\n## Installation\n${answers.installation}\n## Usage\n${answers.usage}\n## Contributing\n${answers.contribution}\n## Tests\n${answers.test}\n## License\n${answers.license}\n## Questions\n[${answers.github}](https://github.com/${answers.github})\n For more questions, send me a message at ${answers.email} `, (err) =>
     err ? console.error(err) : console.log('Success!')
);
   
  })