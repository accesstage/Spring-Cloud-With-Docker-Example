define([], function(require){
    var moduleName = 'example';
    angular
        .module(moduleName, [
            'ui.router'
        ]);
    return moduleName;
});
