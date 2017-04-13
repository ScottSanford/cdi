angular.module('myDirectives', [])

.directive('mainNavBar', function($location, $mdDialog, $stateParams){
	return {

		restrict: 'E', 
		replace: true, 
		transclude: true,
		templateUrl: 'common/tmpls/navbars/main-nav-bar.html', 
		link: function(scope, element, attrs) {

			scope.goToAllReports = function() {
				$location.url('allreports?id=' + $stateParams.subSlug);
			}

		}

	}
})

.directive('subNavBar', function($location, $mdDialog, $stateParams){
	return {

		restrict: 'E', 
		replace: true, 
		transclude: true,
		templateUrl: 'common/tmpls/navbars/sub-nav-bar.html', 
		link: function(scope, element, attrs) {
			
			scope.goToAllReports = function() {
				$location.url('allreports?id=' + $stateParams.subSlug);
			}

		}

	}
})

.directive('hoverBgChange', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, $el, attrs)
        {
            var defaultBg = $parse(attrs.defaultBg)(scope);
            var hoverBg = $parse(attrs.hoverBg)(scope);

            $el.css('background-image', 'url('+defaultBg+')');

            $el.on('mouseover', function ()
            {
                $el.css('background-image', 'url('+hoverBg+')');
            })
            .on('mouseout', function ()
            {
                $el.css('background-image', 'url('+defaultBg+')');
            });
        }
    }
});





