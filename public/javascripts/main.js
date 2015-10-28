angular.module('wineApp', ['leaflet-directive'])

angular.module('wineApp')
	.controller('wineTroller', ['$scope', '$http', function($scope, $http){

		console.log('Hello')

		L.mapbox.accessToken = 'pk.eyJ1IjoidGxvc3RlbnNvbiIsImEiOiJjaWdheWlseXMxbjJ4d25rbzk2MGppMTZxIn0.HHjHSOxre0no93YdRrVjPA';
		L.mapbox.map('map-one', 'mapbox.streets');
		

	}])