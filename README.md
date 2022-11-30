# Angular Example using Guards and Permissions with Roles

Example of a footer component in a shared module in an Ionic project using Angular.

This way you can share the same footer in all ionic pages. With this solution you just have to include the following lines in every page where you want your footer after the ion-content element:

```
<ion-footer>
  <app-footer></app-footer>
</ion-footer>
```

## Getting Started

After cloning this project don't forget to:

```
npm install
```

After that:

```
cd ionic-angular-footer
ionic serve
```

Enjoy!!!

### Prerequisites

You need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [Node.js](https://nodejs.org) - Install node.js from https://nodejs.org/es/download/. It's advisable to install the LTS version.
* [Angular](https://angular.io/) - Getting started with Angular

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Angular](https://angular.io/) - Getting started with Angular

## Acknowledgments

* https://github.com/coderkan/ng-guard-sample. how to implement role-based access control using Angular.
* https://github.com/AlexKhymenko/ngx-permissions. Permission and roles based access control for your angular(angular 2,4,5,6,7,8+) applications.
* https://javascript.plainenglish.io/how-to-add-route-guard-for-angular-applications-309f3b0ca845. How to Add Route Guard for Angular Applications
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.