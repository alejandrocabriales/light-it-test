# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** Make sure you have Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).

- **Yarn:** We use Yarn as the package manager. If you don't have Yarn installed, you can install it by following the instructions at [https://classic.yarnpkg.com/en/docs/install/](https://classic.yarnpkg.com/en/docs/install/).

### Installation

1. Clone the repository to your local machine using this command:
   git clone https://github.com/alejandrocabriales/light-it-test.git

2. Navigate to the project directory:

3. Install the project dependencies using Yarn:
   yarn install

### Running the Application

Once you have installed the dependencies, you can run the application with the following command:

This will start the development server, and you can access the application in your web browser at [http://localhost:3000](http://localhost:3000).

## Brief documentation

### Material Ui

In terms of UI design, I opted for Material-UI. The main reason behind this choice was its simplicity and the availability of a comprehensive set of pre-designed components. Since there were no specific design guidelines to follow, Material-UI's components made it easy to use and saved a lot of time as I could readily use components like buttons, cards, and modals to create a cohesive and responsive UI.

### Prettier:

To maintain consistent code formatting, I integrated Prettier into the project. Prettier automatically enforces code style rules, which not only ensures readability but also reduces potential formatting-related issues.

### ESLint:

For code quality and standards enforcement, I used ESLint. ESLint helped catch errors and encouraged best practices throughout the development process.

### SWR and State Management :

For data fetching, SWR (Stale-While-Revalidate) was my choice. SWR simplified the management of API requests(Online one request was necesary)
Regarding state management, I decided to stick with React's built-in state management capabilities(Context)

### Summary

With React, Material-UI, Prettier, ESLint, and SWR , In my oponion those technologies fit the requieres of the project to made
