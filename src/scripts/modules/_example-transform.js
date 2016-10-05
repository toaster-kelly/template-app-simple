define([

    'lodash',
    'jquery',
    'TweenMax',
    '_animation',
    '_baseObject'

], function(

    _,
    $,
    TweenMax,
    Animation,
    BaseObject

) { 'use strict';

    return _.assign( _.create( BaseObject ), {


        active: false,


        setup: function (options) {

            this.activate();
        },

        activate: function () {

            if ( !this.active ) {

                this.active = true;
            }
        },

        deactivate: function () {

            if ( this.active ) {

                this.active = false;
            }
        },

        resize: function () {

        },

        mouseMove: function () {

        },

        onAnimFrame: function () {

            if ( !this.active ) { return; }

            this.draw();
        },

        draw: function () {

            var time = this.time;

            var rotateZ = Math.sin( time * 0.00015 );

            var rotateZMatrix = Animation.getRotationZMatrix( rotateZ );
            var resultMatrix = Animation.getResultMatrix([ rotateZMatrix ]);

            var matrixString = Animation.getTransform3dString( resultMatrix );

            this.applyCssTransform( this.$node, matrixString );
        }

    });

});