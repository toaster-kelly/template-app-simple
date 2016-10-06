import { _, $, BaseObject } from '../common';

import * as THREE from 'three';

export default Object.assign( Object.create( BaseObject ), {


    renderer    : null,
    scene       : null,
    camera      : null,

    origin      : null,

    material    : null,
    mesh        : null,


    setup: function () {

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize( this.windowData.width, this.windowData.height );
        this.renderer.setClearColor( 'rgb(37, 26, 48)', 1 );

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera( 75, this.windowData.width / this.windowData.height, 1, 1000 );
        this.camera.position.z = 100;

        this.node.append( this.renderer.domElement );

        this.setupActors();

        this.resize();
        this.render();
    },

    setupActors: function () {

        this.material = new THREE.MeshBasicMaterial(
        {
            'color': 0x00ff00,
            'wireframe': true
        });

        this.mesh = new THREE.Mesh( new THREE.SphereGeometry( 5, 32, 32 ), this.material );

        this.origin = new THREE.Object3D();

        this.origin.add( this.mesh );
        this.scene.add( this.origin );
    },

    resize: function () {

        this.camera.aspect = this.windowData.ratio;
        this.camera.updateProjectionMatrix();

        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( this.windowData.width, this.windowData.height );
    },

    mouseMove: function () {

    },

    onAnimFrame: function () {

        this.render();
    },

    render: function () {

        this.renderer.render( this.scene, this.camera );
    }

});