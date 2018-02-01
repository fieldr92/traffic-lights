window.onload = function(){

  //UTILITY FUNCTIONS
  function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
  }

  function addClass(elem, className) {
      if (!hasClass(elem, className)) {
          elem.className += ' ' + className;
      }
  }

  function removeClass(elem, className) {
      var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
      if (hasClass(elem, className)) {
          while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
              newClass = newClass.replace(' ' + className + ' ', ' ');
          }
          elem.className = newClass.replace(/^\s+|\s+$/g, '');
      }
  }

  /* YOUR CODE GOES HERE */

  // ELEMENTS
  // BUTTONS

  var stopButton = document.getElementById('stopLightControl');
  var cautionButton = document.getElementById('cautionLightControl');
  var goButton = document.getElementById('goLightControl');
  var offButton = document.getElementById('offControl');

  var buttons = [
    stopButton,
    cautionButton,
    goButton,
    offButton
  ];

  // LIGHTS
  var lights = document.querySelectorAll(".light");

  var stopLight = document.getElementById("stopLight");
  var cautionLight = document.getElementById("cautionLight");
  var goLight = document.getElementById("goLight");


  // function turnAllOff(){
  //   for(var i = 0; i < lights.length; i++){
  //     offButton.addEventListener('click', function() {
  //       removeClass(lights[i], 'on');
  //     });
  //   }
  // }
  // turnAllOff();
  //
  // function turnAllOn () {
  //   for (var i = 0, i < lights.length, i++) {
  //     buttons[0].addEventListener('click', function() {
  //       addClass(lights[0], 'on');
  //     });
  //   }
  // }

  // function turnAllOn() {
  //   for (var i = 0; i < lights.length; i++){
  //     stopButton.addEventListener('click', function() {
  //       addClass(lights[0], 'on');
  //       removeClass(lights[1], 'on');
  //       removeClass(lights[2], 'on');
  //     });
  //     cautionButton.addEventListener('click', function() {
  //       addClass(lights[1], 'on');
  //       removeClass(lights[0], 'on');
  //       removeClass(lights[2], 'on');
  //     });
  //     goButton.addEventListener('click', function() {
  //       addClass(lights[2], 'on');
  //       removeClass(lights[1], 'on');
  //       removeClass(lights[0], 'on');
  //     });
  //     offButton.addEventListener('click', function() {
  //       console.log( i );
  //       removeClass(lights[i], 'on');
  //       removeClass(lights[1], 'on');
  //       removeClass(lights[2], 'on');
  //     });
  //   }
  // }
  // turnAllOn();

  function turnOffLights( ) {
    console.log( 'Lights off!' );
    for (var i = 0; i < lights.length; i++) {
      removeClass(lights[i], 'on');
    }
  }

  // EVENT BINDINGS
  stopButton.addEventListener('click', function(){
    turnOffLights();
    addClass(stopLight, 'on');
    console.log('Red light on!')
  });
  cautionButton.addEventListener('click', function(){
    turnOffLights();
    addClass(cautionLight, 'on');
    console.log('Amber light on!')
  });
  goButton.addEventListener('click', function(){
    turnOffLights();
    addClass(goLight, 'on');
    console.log('Green light on!')
  });
  offButton.addEventListener('click', function(){
    turnOffLights()
  });
};
