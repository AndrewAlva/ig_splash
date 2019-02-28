// Trigger functions when the initial HTML document
// has been completely loaded and parsed,
// without waiting for stylesheets, images, and
// subframes to finish loading
document.addEventListener('DOMContentLoaded', function() {
    // Do something
});


// Trigger functions after page is completely loaded
window.onload = function() {
    // Do something, remove preloader perhaps
    console.log("Page fully loaded.");
    console.log("Initialize.js");

    var screen_console = document.getElementById('fulltilt');
	screen_console.innerHTML = "JS fine";

    // Create a new FULLTILT Promise for e.g. *compass*-based deviceorientation data
	  var promise = new FULLTILT.getDeviceOrientation({ 'type': 'world' });

	  // FULLTILT.DeviceOrientation instance placeholder
	  var deviceOrientation;

	  promise
	    .then(function(controller) {
	      // Store the returned FULLTILT.DeviceOrientation object
	      deviceOrientation = controller;
	    })
	    .catch(function(message) {
	      console.error(message);

	      // Optionally set up fallback controls...
	      // initManualControls();
	      screen_console.innerHTML = "E_rror";
	    });

	  (function draw() {

	    // If we have a valid FULLTILT.DeviceOrientation object then use it
	    if (deviceOrientation) {

	      // Obtain the *screen-adjusted* normalized device rotation
	      // as Quaternion, Rotation Matrix and Euler Angles objects
	      // from our FULLTILT.DeviceOrientation object
	      var quaternion = deviceOrientation.getScreenAdjustedQuaternion();
	      var matrix = deviceOrientation.getScreenAdjustedMatrix();
	      var euler = deviceOrientation.getScreenAdjustedEuler();

	      // Do something with our quaternion, matrix, euler objects...
	      console.debug(quaternion);
	      console.debug(matrix);
	      console.debug(euler);

	      screen_console.innerHTML = "Quaternion: " + quaternion + "<br>" + "matrix: " + matrix + "<br>" + "euler: " + euler + "<br>";

	    }

	    // Execute function on each browser animation frame
	    requestAnimationFrame(draw);

	  })();
}