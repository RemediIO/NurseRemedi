
export interface IRegisteredBusyBot{
    Name: string;
}

export interface IBusyBotsConfig {
    BotsRegistry: Array<IRegisteredBusyBot>;
}

export interface IRootScopeService extends angular.IRootScopeService{
    BB: IBusyBotsConfig
}

/** @ngInject */
export function runBlock(
    $location: any,
    $log: angular.ILogService,
    $rootScope: IRootScopeService
    ) {
    $log.debug('runBlock end' );

    $rootScope.BB = <any>{};

}
