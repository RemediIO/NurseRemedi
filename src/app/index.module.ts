/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';

import { malarkeyTags } from '../app/components/malarkey/malarkey.directive';
import { renderedParticles } from '../app/components/particles/particles.directive';

declare var malarkey: any;
declare var particlesJS: any;
declare var moment: moment.MomentStatic;

angular.module('NurseRemedi', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ngMaterial', 'toastr'])
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('particlesJS', particlesJS)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('MainController', MainController)
    .directive('malarkeyTags', malarkeyTags)
    .directive('renderedParticles', renderedParticles);
