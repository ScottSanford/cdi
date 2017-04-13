angular.module('cdiApp')

.controller('AllReportsCtrl', function($scope, Mfly, $location, $stateParams){
	
	$scope.goToPreviousPage = function() {
		console.log($stateParams.id);
		if ($stateParams.id == 'undefined') {
			$location.url('home');
		} else {
			$location.url('sub/' + $stateParams.id);
		}
	};

	Mfly.search('@NeuroQuantReport').then(function(data){
		console.log("All Reports: ", data);
		$scope.images = data;
	});

	$scope.slickConfig = {
		prevArrow: '<div class="class-to-style"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
		nextArrow: '<div class="class-to-style"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>'
	};

	$scope.goToItem = function(id) {
		mflyCommands.openItem(id);
	};


});


