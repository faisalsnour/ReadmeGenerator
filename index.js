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
        choices: ['BSD', 'MIT', 'GPL'],
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
    }
  ])
  .then(answers => {
    // console.log(`the project name is`, answers.title);
    fs.writeFile('readme.md', `# ${answers.title}\n## Table of Contents\n- [Description](#description)\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [License](#license)\n- [Questions](#questions)\n## Description\n${answers.description}\n## Installation\n${answers.installation}\n## Usage\n${answers.usage}\n## Contributing\n${answers.contribution}\n## Tests\n${answers.test}\n## License\n${answers.license}\n## Questions\n[${answers.github}](https://github.com/${answers.github})\n For more questions, send me a message at ${answers.email} `, (err) =>
     err ? console.error(err) : console.log('Success!')
);
    // Use user feedback for... whatever!!
  })