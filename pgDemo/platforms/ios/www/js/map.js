$(document).ready(function() {

	$("#map").empty(); 

	document.addEventListener('deviceready', initializeMap, false);


	function initializeMap() {

		navigator.geolocation.getCurrentPosition(getSuccess, getError);

		// Geolocation
      	function getSuccess(location) {
          	

          	var myLatlng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
	      	var mapOptions = {
	        center: myLatlng,
	        zoom: 12,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    	}; 

		    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

		    var marker = new google.maps.Marker({
		    position: myLatlng,
		    map: map,
		    title:"Geo Example"
			});

			var element = document.getElementById('myLocation');
          	element.innerHTML = 'Latitude: ' + location.coords.latitude + '<br />' +
                              'Longitude: ' + location.coords.longitude + '<br />' +
                              'Altitude: ' + location.coords.altitude + '<br />';



      }


      // Error Callback receives a PositionError object
      function getError(e) {

          alert('code: ' + e.code + '\n' +
                'message: ' + e.message + '\n');
      }

		
	}

});