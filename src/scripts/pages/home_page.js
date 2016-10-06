import { _, $, BaseObject } from '../common';

import example from '../modules/_example-three';

export default Object.assign( Object.create( BaseObject ), {


    //

    test: null,


    setup: function () {

        this.test = this.createChild( example, $('.js-example') );
    },

    resize: function () {

        this.test.resize();
    },

    mouseMove: function () {

        this.test.mouseMove();
    },

    onAnimFrame: function () {

        this.test.animFrame( this.time );
    }

});