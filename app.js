(function (app) {
	app = angular.module('ParallaxScrolling', []);

	app.controller('ParallaxCtrl', function ParallaxCtrl ($scope) {
		$scope.animation = {};

		window.addEventListener('scroll', function (e) { 
			var miles = window.scrollY;

			$scope.animation.speed1 = {'-webkit-transform': 'translate3d(' + miles / 20 +'px,' + miles * 1.1 +'px,0)'};
			$scope.animation.speed2 = {'-webkit-transform': 'translate3d(' + miles / 30 +'px,' + miles * 1.05 +'px,0)'};

			$scope.$digest('animation');
		})
	});
}(window));