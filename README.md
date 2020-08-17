# PsXtAssignment
Application link: `https://spacex-ps-xt.herokuapp.com/shuttle`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

This project makes use of Angular's HttpClient Module to make api calls and get the response. In order to set the query parameters for Launch Year/Successful Landing/Successful Launch, the httpParams class is used to set and append the parameters to given api URL.

App is divided into 4 components:
AppComponent: The component provided by angular where we have given router-outlet.

FilterComponent: This component is used to filter the launch data on UI and make the navigation of app based on the selected filter parameters.

ShuttleInfoComponent: This component shows the shuttle launch info. This is the child component of LaunchDataComponent.

LaunchDataComponent: This component is where the app defaults to. In this component the the FilterComponent and ShuttleInfoComponent are called. This component imports the LaunchDataService class to make api calls.

For visual improvements and to make application response flex-layout is used.

To deploy and run app on Heroku platform, express is used to provide the server for production environment.

## Local Setup

For setting up the application in local environment, clone the repository `git clone https://github.com/merishabhgupta/spacex-launch-history.git` and run `npm install` in the project root directory to install the npm dependencies.

Follow the below mentioned details for running/ developing/ testing the application.

## Running with SSR

Run `npm run build:ssr` for building the application. Then run `npm run serve:ssr` to run the application. Navigate to `http://localhost:4000/`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io)

## Running unit tests with code coverage
Run `ng test --codeCoverage=true` to execute the unit tests via [Karma](https://karma-runner.github.io)


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
