$(document).ready(function() {

	
      // Wait for device API libraries to load
      //
      document.addEventListener("deviceready", onDeviceReady, false);

      // device APIs are available
      //
      function onDeviceReady() {
          // Empty
      }

      // alert dialog dismissed
          function alertDismissed() {
              // do something
          }

      // Show a custom alertDismissed
      //
      function showAlert() {
          navigator.notification.alert(
              'Still trying to figure this one out',  // message
              alertDismissed,         // callback
              'I have one more week',            // title
              'Dismiss'                  // buttonName
          );
      }

});