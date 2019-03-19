# ProzessM

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Install node_modules

run npm install @angular/cdk --save
npm install @ngx-translate/core --save
npm install --save @angular/material @angular/cdk @angular/animations
npm install --save hammerjs -> import in main.ts 

after 

npm install --save


## @angular/core - failure


This problem apparently was being caused by the CDK and material modules of angular. I don't exactly know how it happend but I fixed it.

I fixed it by following an answer in this github issue: https://github.com/angular/material2/issues/8306

Solution

To fix this issue you have to run the following commands:

npm install --save @angular/material @angular/cdk
rm -rf node_modules
npm install

