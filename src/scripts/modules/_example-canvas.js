import { _, $, BaseObject } from '../common';

export default Object.assign( Object.create( BaseObject ), {


    canvas      : null,
    ctx         : null,

    pixelRatio  : 1,

    invalidated : false,


    setup: function () {

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.node.append( this.canvas );

        this.resize();
        this.invalidated = true;
    },

    resize: function () {

        this.pixelRatio = window.devicePixelRatio || 1;

        this.canvas.width = this.windowData.width * this.pixelRatio;
        this.canvas.height = this.windowData.height * this.pixelRatio;

        this.canvas.style.width = this.windowData.width + 'px';
        this.canvas.style.height = this.windowData.height + 'px';

        this.ctx.scale( this.pixelRatio, this.pixelRatio );
    },

    mouseMove: function () {

    },

    onAnimFrame: function () {

        this.draw();
    },

    draw: function () {

        if ( !this.invalidated ) { return; }

        this.ctx.fillStyle = "rgb(12, 227, 185)";
        this.ctx.fillRect(
            this.mouseData.x - 5,
            this.mouseData.y - 5,
            10,
            10
        );
    }

});