# Github Actions: Tech Test

In continuation of the Tech Test Project, this GitHub Actions project builds upon the foundations of automated testing and deployment to enhance the development pipeline for a dynamic quiz application. By incorporating GitHub Actions, this project automates key tasks such as running Cypress component tests on pull requests and deploying the application to Render upon merging to the main branch. These workflows ensure consistent code quality and a seamless deployment process.

The Tech Quiz App is a responsive and engaging web application where users can test their knowledge of various tech topics. The app demonstrates the practical application of CI/CD concepts in a real-world project.

## Table of Contents
- [Deployed Website](#deployed-website)
- [Features](#features)
- [Installation](#installation)
- [GitHub Actions Workflow](#github-actions-workflow)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## Deployed Website

Please follow this link to view the deployed Tech Test on Render: https://githubactions-bs6r.onrender.com 


## Features

- Quiz Functionality: Answer questions across multiple categories.
- CI/CD Pipeline: Automated testing and deployment using GitHub Actions.
- Cypress Testing: Integration and component tests to ensure functionality.
- Render Deployment: Seamless deployment to Render for hosting.


## Installation

1. Clone the repository:
```md
git clone https://github.com/omgxlori/githubactions.git
cd githubactions
```

2. Install dependencies and build:
```md
npm render-build
```

3. Set up .env file with the following:
```md
RENDER_API_KEY=your_api_key_here
MONGODB_URI=your_mongodb_uri
```

4. Run seed file:
```md
npm run seed
```

5. Start the application:
```md
npm run start
```

## Github Actions Workflow

- **Testing Workflow:** A workflow is triggered on pull requests to the develop branch, running all Cypress tests to ensure code quality.

- **Deployment Workflow:** On merging changes from develop to main, the app is automatically deployed to Render using the Deploy Hook.

## Contributing
Feel free to open issues or submit pull requests. Contributions are welcome!

## Support
If you need help using this project or encounter issues, please reach out via the following options:

GitHub Issues: Report bugs or request features by opening an issue in the GitHub repository.
Email: Contact me at lbelovin@gmail.com for any inquiries.
You can also find more of my work at [https://github.com/omgxlori](https://github.com/omgxlori)

## License
This project is licensed under the MIT License. See the LICENSE file for details.