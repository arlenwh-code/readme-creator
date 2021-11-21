const inq = require('inquirer');
const fs = require('fs');
//const arg1 = process.argv[2];

inq.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please provide a description of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select an open-source license.',
        choices: [
            'MIT',
            'ISC',
            'BSD',
            'Apache-2.0'
        ]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project'
    },
    {
        type: 'input',
        name: 'usageIn',
        message: 'What is the usage information for your project.'
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your github username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email.'
    },
    {
        type: 'input',
        name: 'contributionGuide',
        message: 'What is the contribution information for your project.'
    },
    {
        type: 'input',
        name: 'testIn',
        message: 'What are the testing instructions for your project.'
    }
]).then(resp => {
    console.log(resp);
    const title = resp.title;
    const description = resp.Description;
    const installation = resp.installation;
    const usage = resp.usageIn;
    const contribution = resp.contributionGuide;
    const test = resp.testIn;
    const username = resp.githubUsername;
    const email = resp.email;
    const license = resp.license;
    let badge = "#";
    let licenseInfo = "#";

    if (license === "MIT") {
        badge = "https://img.shields.io/badge/MIT-License-red";
        licenseInfo = `Copyright (c) <year> <copyright holders>

        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.`
        console.log("MIT");
    } else if (license === "ISC") {
        badge = "https://img.shields.io/badge/ISC-License-brightgreen";
        licenseInfo = `ISC License

        Copyright <YEAR> <OWNER>
        
        Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
        
        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`
        console.log("ISC");
    } else if (license === "BSD") {
        badge = "https://img.shields.io/badge/BSD-License-orange";
        licenseInfo = `Copyright (C) [year] by [copyright holder] <[email]>

        Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted.
        
        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.[19]`
        console.log("BSD");
    } else {
        badge = "https://img.shields.io/badge/Apache2.0-License-blue";
        licenseInfo = `The Apache License is permissive; unlike copyleft licenses, it does not require a derivative work of the software, or modifications to the original, to be distributed using the same license. It still requires application of the same license to all unmodified parts. In every licensed file, original copyright, patent, trademark, and attribution notices must be preserved (excluding notices that do not pertain to any part of the derivative works). In every licensed file changed, a notification must be added stating that changes have been made to that file.

        If a NOTICE text file is included as part of the distribution of the original work, then derivative works must include a readable copy of these notices within a NOTICE text file distributed as part of the derivative works, within the source form or documentation, or within a display generated by the derivative works (wherever such third-party notices normally appear).
        
        The contents of the NOTICE file do not modify the license, as they are for informational purposes only, and adding more attribution notices as addenda to the NOTICE text is permissible, provided that these notices cannot be understood as modifying the license. Modifications may have appropriate copyright notices, and may provide different license terms for the modifications.
        
        Unless explicitly stated otherwise, any contributions submitted by a licensee to a licensor will be under the terms of the license without any terms and conditions, but this does not preclude any separate agreements with the licensor regarding these contributions.
        
        The Apache License 2.0 makes sure that the user does not have to worry about infringing any patents by using the software. The user is granted a license to any patent that covers the software. This license is terminated if the user sues anyone over patent infringement related to this software. This condition is added in order to prevent patent litigations.`
        console.log("Apache-2.0");
    };


    fs.writeFile('README.md', `#Title: \n${title}\n`, (err) => err ? console.error(err) : console.log("Success!"));
    fs.appendFile('README.md', `\n\n## Description: \n${description}`, (err) => err ? console.error(err) : console.log("Success!"));
    fs.appendFile('README.md', `\n\n## Badge: \n${badge}`, (err) => err ? console.error(err) : console.log("Success!"));
    fs.appendFile('README.md', `\n\n## Table Of Contents: \n[Description] (#Description) \n[Installation] (#Installation)\n[Usage] (#Usage)\n[Contribution] (#Contribution)\n[Testing] (#Testing)`, (err) => err ? console.error(err) : console.log("Success!"));
    fs.appendFile('README.md', `\n\n## Installation: \n${installation}`, (err) => err ? console.error(err) : console.log("Success!"));
    fs.appendFile('README.md', `\n\n## Usage: \n${usage}`, (err) => err ? console.error(err) : console.log("Success!"));
    fs.appendFile('README.md', `\n\n## Contribution: \n${contribution}`, (err) => err ? console.error(err) : console.log("Success!"));
    fs.appendFile('README.md', `\n\n## Testing: \n${test}`, (err) => err ? console.error(err) : console.log("Success!"));
    fs.appendFile('README.md', `\n\n## Questions: \nGithub Profile Link\nhttps://github.com/${username}/\nFor further questions please send me an email at the following email address.\nEmail:\n${email}`, (err) => err ? console.error(err) : console.log("Success!"));
    fs.appendFile('README.md', `\n\n## License: \n${license}\n${licenseInfo}`, (err) => err ? console.error(err) : console.log("Success!"));
});

/*
fs.writeFile('README.md', arg1, (err) => err ? console.error(err) : console.log("Success!")
);

console.log(arg1);
*/