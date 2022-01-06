const index = require('./index.js')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    if (data.license === "MIT") {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (data.license === "ISC") {
        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    } else if (data.license === "Apache License 2.0") {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
}   

function renderLicenseLink(data) {
    if (data.license === "MIT") {
        return 'https://opensource.org/licenses/MIT'
    } else if (data.license === "ISC") {
        return 'https://opensource.org/licenses/ISC'
    } else if (data.license === "Apache License 2.0") {
        return 'https://opensource.org/licenses/Apache-2.0'
    }
}
function renderLicenseSection(data) {
    if (data.license === "MIT") {
        return `Copyright 2021 ${data.personName}

        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    } else if (data.license === "ISC") {
        return `Copyright 2021 ${data.personName}

        Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
        
        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`
    } else if (data.license === "Apache License 2.0") {
        return `Copyright 2021 ${data.personName}
        Licensed under the Apache License, Version 2.0 (the "License")
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
         http://www.apache.org/licenses/LICENSE-2.0
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.`
    }

}

function generateMarkdown(data) {
    const licenseSection = renderLicenseSection(data)
    const licenseLink = renderLicenseLink(data)
    const licenseBadge = renderLicenseBadge(data)
    return `# ${data.projectName} ${licenseBadge}

## Description
        - ${data.projectDescript}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license) -- ${licenseLink}

## Installation
        - ${data.installGuide}
## Usage
        - ${data.usage}
## Screenshot

## Credits

## License
        -  ${licenseSection}
## Badges
        - ${licenseBadge}
## Features

## How to Contribute
        - ${data.contributions}
## Tests
        - ${data.tested}
## Questions
        - Please direct questions to ${data.email}    
        - github.com/${data.gitUserName} 
`;
}

module.exports = generateMarkdown;