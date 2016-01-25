'use strict';

angular.module('jhp4App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


