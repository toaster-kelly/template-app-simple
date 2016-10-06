import { _, $, BaseObject } from '../common';

import TweenMax from 'gsap';
import matrixMath from '../utils/matrix_math';

export default Object.assign( Object.create( BaseObject ), {


    active: false,


    setup: function (options) {

        this.activate();
    },

    activate: function () {

        if ( this.active ) { return; }
        this.active = true;

        //
    },

    deactivate: function () {

        if ( !this.active ) { return; }
        this.active = false;

        //
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

        var rotateZMatrix = matrixMath.getRotationZMatrix( rotateZ );
        var resultMatrix = matrixMath.getResultMatrix([ rotateZMatrix ]);

        var matrixString = matrixMath.getTransform3dString( resultMatrix );

        this.applyCssTransform( this.$node, matrixString );
    }

});