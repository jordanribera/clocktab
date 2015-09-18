(function(){

	var app = angular.module('clocktabApp', []);

	app.controller('TabController', function(){
		
		this.clocks = clocks;

	});

	app.controller('ClockController', ['$scope', function($scope){

		this.fruit = 'apples';

		$scope.init = function(ClockModel)
		{
			console.log('init called, data = ' + JSON.stringify(ClockModel));

			$scope.type = ClockModel.type;
			$scope.label = ClockModel.label;

		}

		$scope.getClasses = function()
		{

			classes = ['Clock'];
			if ($scope.type == 'digital') classes.push('DigitalClock');
			if ($scope.type == 'analog') classes.push('AnalogClock');

			return classes;
		}

	}]);

	clocks =
	[

		{
			type: 'digital',
			label: 'Home'
		},

		{
			type: 'analog',
			label: 'Office'
		}

	];

})();