angular.module('AeroD', ['AeroD.login', {
    files: [
        'modules/login/login.controller.js',
        'modules/login/login.factory.js',
        'common/directive/sweetalert.directive.js'
    ],
    cache: false
}])