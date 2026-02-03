Welcome to My Portfolio

A modern, responsive portfolio website built with *React* to showcase my projects, skills, and experience.

Live Demo
You can view the live site here: [https://shillat.github.io/first-project/](https://shillat.github.io/first-project/)

Tech Stack
* **Frontend:** React.js, JavaScript (ES6+), CSS3
* **Deployment:** GitHub Actions (CI/CD)
* **Hosting:** GitHub Pages

Automated Deployment
This project uses a custom **GitHub Actions** workflow to automate the build and deployment process. 
* Whenever a push is made to the `main` branch, the workflow triggers.
* It navigates into the `/first-project` subfolder.
* It runs `npm install` and `npm run build`.
* The resulting production build is automatically deployed to GitHub Pages.

Project Structure
```text
.
├── .github/workflows/  # Automated deployment scripts
├── first-project/      # Root of the React Application
│   ├── src/            # Components, Hooks, and Styling
│   ├── public/         # Static assets
│   └── package.json    # Project dependencies
└── README.md           # Project documentation
