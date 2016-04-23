
import {IRootScopeService } from '../index.run';

export class MainController {

    /* @ngInject */
    constructor(
        public $scope: any,
        public $mdSidenav: any,
        public $http: angular.IHttpService,
        public $log: angular.ILogService,
        public $rootScope: IRootScopeService,
        public $timeout: angular.ITimeoutService,
        public toastr: any) {

      

    }
    
    public isOpenRight = () => {
        return this.$mdSidenav('right').isOpen();
    };


    public toggleSidenav = () => {
        this.$mdSidenav('right')
            .toggle()
            .then(() => {
                this.$log.debug("right is done");
            });
    }

}
