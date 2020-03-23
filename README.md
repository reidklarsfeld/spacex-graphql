## Reid's SpaceX Adventure Extravaganza

Have you ever wanted to learn more about advanced rocket and spacecraft launches? Then you've come to the right place! This application provides users with up-to-date information on SpaceX's previous and upcoming launches, including in-depth data such as mission names, launch dates, rocket names, video links, and much more. Created with a tech stack that includes TypeScript, React(Hooks), Apollo GraphQL, and Node.js, please feel free to fork and/or clone the codebase and test it out!

## Installation

To install, navigate to the project directory and run `npm install` in the command line.

Additionally, in the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits utilizing Hot Module Replacement.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

## Usage

Upon initial render, by default the page will show all launches in chronological order. Each launch item consists of the individual launch's Mission Name, Rocket Name, Launch Date, and Video Link. 


At the top of the page, click on the desired Launch Search parameter. Options include searching by Mission Name, Rocket Name, or Launch Year.


After clicking the parameter of choice, a drop down bar with all of the respective options will be available. Select an option and the Launch List will re-render with the updated query.


Additionally, upon clicking a launch within the Launch List, a Launch Profile will render on the right side of the application. This Launch profile will provide additional information regarding the selected launch, such as a desciption of the launch, the launch status, launch badge, photographs, and more.

## Tech Stack

**Built with**
- React(hooks)
- TypeScript
- GraphQL
- Apollo Client(Hooks)
- Node.js

## License

MIT © Reid Klarsfeld
