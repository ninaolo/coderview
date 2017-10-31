coderview.directive('algorithm', function () {
    return {
        scope: true, // Child scope inherits from parent
        restrict: 'AE',
        replace: 'true',
        template: 'algorithm-template.html'
    };
});