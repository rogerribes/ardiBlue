/**
 * Created by alec on 24/9/16.
 */
(function(){
  'use strict';


var app = angular.module('app.limits');

app.controller('limitsCtrl', function(){
  var vm = this;

  vm.view = {
    title: "Limits",
    firstOption: {
      title: "FWD / REV Power Control"
    },
    secondOption: {
      title: "On Turn Power Control"
    }
  };
  vm.limits = {
    forward: {
      min: 20,
      max: 240,
      selected: 80
    },
    onTurn: {
      min: 10,
      max: 100,
      selected: 30
    }
  }

});


}());
