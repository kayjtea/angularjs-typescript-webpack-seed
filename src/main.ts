
require('angular');

import * as helloWorldComponent from "./hello-world/hello-world.component";

let app = angular.module("app",[]);

helloWorldComponent.init(app);

console.log("angular app initialized... !!!!!!!!!!");