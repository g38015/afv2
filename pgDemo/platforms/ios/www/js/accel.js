$(document).ready(function() {

	// Wait for device API libraries to load
      //
      document.addEventListener("deviceready", onDeviceReady, false);

      // device APIs are available
      //
      function onDeviceReady() {
          navigator.accelerometer.getCurrentAcceleration(getSuccess, getError);
      }

      // onSuccess: Get a snapshot of the current acceleration
      //
      function getSuccess(a) {

          var changehtml = document.getElementById('myAcceleration');
          changehtml.innerHTML = 'Accel X: ' + a.x + '<br />' +
                              'Accel Y: ' + a.y + '<br />' +
                              'Accel Z: ' + a.z + '<br />';
      }

      // onError: Failed to get the acceleration
      //
      function getError() {
          alert('Error!');
      }


});