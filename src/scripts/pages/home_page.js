import { _, $, BaseObject } from '../common';

import example from '../modules/_example';

export default Object.assign( Object.create( BaseObject ), {


    example: null,


    setup: function () {

        this.example = this.createChild( example, $('.js-example') );
    },

    resize: function () {

        this.example.resize();
    },

    mouseMove: function () {

        this.example.mouseMove();
    },

    onAnimFrame: function () {

        this.example.animFrame( this.time );
    }

});