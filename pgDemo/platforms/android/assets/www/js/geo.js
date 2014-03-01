$(document).ready(function() {

	
      // Load API Library
      document.addEventListener("deviceready", onDeviceReady, false);

      // device APIs are available
      function onDeviceReady() {
          navigator.geolocation.getCurrentPosition(getSuccess, getError);
      }

      // Geolocation
      function getSuccess(location) {
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

});