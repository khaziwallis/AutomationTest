exports.disableAnimations = () => {    
    angular.module('ngAnimate').run(['$animate', function ($animate) {
        $animate.enabled(false);
    }]);
};
