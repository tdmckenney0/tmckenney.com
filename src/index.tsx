import './style/main.scss'
import * as React from 'react';
import { render } from 'react-dom';
import * as THREE from 'three';
import App from './ui/App';

/**
 * Sizes
 */
const sizes = { width: 0, height: 0 }
sizes.width = window.innerWidth
sizes.height = window.innerHeight

window.addEventListener('resize', () => {
	// Save sizes
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight

	// Update camera
	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()

	// Update renderer
	renderer.setSize(sizes.width, sizes.height)
})

/**
 * Environments
 */
// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)

camera.position.z = 20;
camera.position.x = 0;
camera.rotation.x = 0;

scene.add(camera);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
scene.add(directionalLight);

const light = new THREE.AmbientLight(0xffffff, 2.0); // soft white light
scene.add(light);

const skyGeo = new THREE.SphereGeometry(50, 25, 25);

// Renderer
const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('.webgl')
});

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(sizes.width, sizes.height)

interface Tasks {
	[key: string]: CallableFunction
}

const tasks: Tasks = {};

const addTask = (task: CallableFunction, id: string) => {
	tasks[id] = task;
};

const removeTask = (id: string) => {
	delete tasks[id];
};

/**
 * Loop
 */
const loop = () => {
	for (const task in tasks) {
		tasks[task]();
	}

	// Render
	renderer.render(scene, camera)

	// Keep looping
	window.requestAnimationFrame(loop)
}

loop();

// Rotate the Sky geometry
addTask(() => {
	skyGeo.rotateY(0.00025);
}, "rotateBackground");

const background = new THREE.TextureLoader().load("backgrounds/interchange_nebula.png");
// background.wrapS = THREE.RepeatWrapping;
// background.wrapT = THREE.RepeatWrapping;
// background.repeat.set( 4, 4 );

const material = new THREE.MeshPhongMaterial({
	map: background,
});

const sky = new THREE.Mesh(skyGeo, material);

sky.material.side = THREE.BackSide;

scene.add(sky);

render(<App />, document.getElementById('app'));
