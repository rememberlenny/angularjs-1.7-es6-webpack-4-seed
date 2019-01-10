const angular = require('angular');
import registerDirectives from './directives';

import style from './assets/scss/main.scss';

if ( ON_TEST ) {
    require('angular-mocks/angular-mocks');
}

const ngModule = angular.module('app', []);

registerDirectives(ngModule);
// require('./directives').default(ngModule);

export { ngModule };