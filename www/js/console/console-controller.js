/**
 * Created by Alec on 24/09/2016.
 */
(function(){
  'use strict';

  var app = angular.module('app.console');

  app.controller('consoleCtrl', function(){
    var vm = this;

    vm.view = {
      title: "Console"
    };

    vm.mockedArduino = {
      currentState: 'STOP',
      motorLeftPWM: 200,
      motorRightPWM: 280,
      options:{
        btn1: "Stop Motors",
        btn2: "Reset",
        btn3: "Other"
      }
    };
    var options = {
      zone: document.getElementById('joystick'),
      mode: 'static',
      position: {left: '50%', top: '50%'},
      color: 'red'
  };
    var joystick = nipplejs.create(options);
    console.log(joystick);

  });


}());
