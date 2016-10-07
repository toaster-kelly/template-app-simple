import _ from 'lodash';
import $ from 'webpack-zepto';

export default {


    windowData: null,
    mouseData: null,

    time: null,

    node: null,


    init: function ( options ) {

        this.windowData = options.windowData;
        this.mouseData = options.mouseData;

        this.node = options.node;

        this.setup( options );
    },

    setup: function ( options ) {},

    createChild: function ( childObject, node = null, options = {} ) {

        var child = Object.create( childObject );

        child.init({

            'windowData': this.windowData,
            'mouseData': this.mouseData,
            'node': node,
            'config': options
        });

        return child;
    },

    resize: function () {},

    mouseMove: function () {},

    animFrame: function (t, options) {

        this.time = t;

        this.onAnimFrame(options);
    },

    onAnimFrame: function () {},

    applyCssTransform: function (element, transformString) {

        element.style.mozTransform = transformString;
        element.style.webkitTransform = transformString;
        element.style.transform = transformString;
    }

};