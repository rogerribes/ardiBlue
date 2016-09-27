(function(){
    'use strict';

    angular.module('joystickDirective').directive('joystickLayout', joystick);

    function joystick(){
        return {
            restrict: 'E', // Only Matches Element
            scope: {
                joystick: '='
            },
            template: ['<div id="joystick"></div>'],
            link: controller
        };
    }

    function controller(scope){
        var options = {
            zone: document.getElementById('joystick'),
            mode: 'static',
            position: {left: '50%', top: '40%'},
            color: 'black',
            size: 150
        };
        var joystick = nipplejs.create(options);
        // end move Listeners
        joystick.on('move end', function (evt, data) {
            scope.joystick = data;
            updateData(data);
        });
        var staticPosition = {
            x: joystick.get().position.x,
            y: joystick.get().position.y
        };

        console.log('Base position', staticPosition);
        function updateData(data){
            scope.joystick = {
                x: data.position.x - staticPosition.x,
                y: data.position.y - staticPosition.y
            };
            scope.$evalAsync();
        }

    }
}());