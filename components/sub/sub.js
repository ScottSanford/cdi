angular.module('cdiApp')

.controller('SubCtrl', function($scope, $location, Mfly, $stateParams, Text, ItemIcons){

	var cdiIcons = ItemIcons.cdiIcons();
	$scope.slug = $stateParams.subSlug;

	// TOP NAVIGATION 
	for (var i = 0; i < Text.length; i++) {
		if (Text[i].id === $stateParams.subSlug) {
			$scope.item = Text[i];
		}
	}

	$scope.navs = Text;

	$scope.goToSubFolder = function(id) {
		$location.url('sub/' + id);
	};

	
	// RELATED CONTENT
	Mfly.getFolder($scope.slug).then(function(data){

		// dynamically attach CDI's icons to each item 
		// given back in the response. 
		data.forEach(function(_item){
                
            cdiIcons.forEach(function(icon){
                if (_item.type == icon.type) {
                    _item['icon'] = icon.icon;
                }
            });

        });
		console.log('data', data);
        $scope.items = data;
	});
	
	$scope.goToItem = function(id) {
		mflyCommands.open(id);
	};

});