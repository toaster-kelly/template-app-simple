define([

    'lodash',
    'jquery',

    './pages/home_page'

], function(

    _,
    $,

    HomePage

) { 'use strict';

    var main = {


        BASE_WIDTH : 1440,

        $window    : null,
        $document  : null,
        $html      : null,
        $root      : null,

        mouseData  : null,
        windowData : null,

        pages      : null,


        start: function() {

            _.bindAll( this,
                'onResize',
                'onMouseMove',
                'onAnimFrame'
            );

            this.$window = $(window);
            this.$document = $(document);
            this.$html = $(document.documentElement);
            this.$root = $('.js-root');

            this.windowData = {
                width: 0,
                height: 0,
                ratio: 0,
                scale: 0
            };

            this.mouseData = {
                x: 0,
                y: 0,
                nX: 0,
                nY: 0
            };

            this.createPages();

            this.addEvents();

            this.onResize();

            // Start anim frame
            _.defer( function () { window.requestAnimationFrame( this.onAnimFrame ); }.bind( this ) );
        },

        createPages: function () {

            this.pages = {
                'home': _.create(HomePage)
            };

            this.pages.home.init({
                'windowData': this.windowData,
                'mouseData': this.mouseData,
                '$node': this.$root.find('.js-home')
            });
        },

        addEvents: function () {

            this.$window.on( 'resize', this.onResize );
            this.$document.on( 'mousemove', this.onMouseMove );
        },


        // HANDLERS -----------------------------------------------------

        onResize: function () {

            this.windowData.width = this.$window.width();
            this.windowData.height = this.$window.height();
            this.windowData.ratio = this.windowData.width / this.windowData.height;
            this.windowData.scale = this.windowData.width / this.BASE_WIDTH;

            this.$html[0].style.fontSize = 10 * this.windowData.scale + 'px';

            this.pages.home.resize();
        },

        onMouseMove: function (e) {

            this.mouseData.x = e.clientX;
            this.mouseData.y = e.clientY;

            this.mouseData.nX = ( this.mouseData.x / this.windowData.width ) * 2 - 1;
            this.mouseData.nY = ( this.mouseData.y / this.windowData.height ) * 2 - 1;

            this.pages.home.mouseMove();
        },

        onAnimFrame: function (t) {

            var time = Date.now();

            this.pages.home.animFrame( time );

            window.requestAnimationFrame( this.onAnimFrame );
        }

    };

    main.start();

});