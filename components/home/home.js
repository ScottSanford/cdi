angular.module('cdiApp')

.controller('HomeCtrl', function($scope, $location, Mfly, Text){

	var bullets = [
		{text: 'Standard Brain MRI + 3D volumetirc post-processing software'},
		{text: 'Objective, quantitative measurements of brain structure'},
		{text: 'View results over time to monitor for change - longitudial evaluations'},
		{text: 'Patients compared to a gender and age-appropriate normative database - enriched and tested over 10 years'}
	];

	$scope.bullets = bullets;


	Mfly.search('@neuroquant').then(function(data){
		var parentFolderId = data[0].id;

		Mfly.getFolder(parentFolderId).then(function(response){

			response.forEach(function(res){
				Text.forEach(function(text){
					if (res.name === text.name) {
						res['navStatic'] = text.navStatic;
						res['navHover'] = text.navHover;
					};
				})
			})
			$scope.navs = response;
		})
	})

	$scope.goToSub = function(subSlug) {
		$location.url('sub/' + subSlug);
	};

	$scope.closeInteractive = function() {
		mflyCommands.close();
	};

});


