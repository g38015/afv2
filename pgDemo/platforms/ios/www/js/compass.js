$(document).ready(function() {

	// Wait for device API libraries to load
      //
      document.addEventListener("deviceready", onDeviceReady, false);

      // device APIs are available
      //
      function onDeviceReady() {
          navigator.compass.getCurrentHeading(onSuccess, onError);
      }

      // onSuccess: Get the current heading
      //
      function onSuccess(h) {
          //alert('Heading: ' + heading.magneticHeading);

          var changehtml = document.getElementById('heading');
          changehtml.innerHTML = 'Heading: ' + h.magneticHeading + '<br />';
      }

      // onError: Failed to get the heading
      //
      function onError(compassError) {
          alert('Compass Error: ' + compassError.code);
      }


});