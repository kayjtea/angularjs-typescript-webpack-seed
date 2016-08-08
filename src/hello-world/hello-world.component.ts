var templateUrl = require('./hello-world.html');

export function init(module:angular.IModule) {

    console.log("initializing hello-world component... !!!!!!!!");

    module
        .component("helloWorld", {
            templateUrl: templateUrl
        });
}
