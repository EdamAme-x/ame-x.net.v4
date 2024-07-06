"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function Rocket() {
	const canvasRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!canvasRef.current) return;
		if (canvasRef.current.children.length > 0) return;

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true
		});
		renderer.setClearColor(0x000000, 0);
		renderer.setSize(window.innerWidth / 2, window.innerHeight);
		canvasRef.current.appendChild(renderer.domElement);

		const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
		scene.add(ambientLight);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
		directionalLight.position.set(0, 5, 5);
		scene.add(directionalLight);

		let model: THREE.Group<THREE.Object3DEventMap> | null;

		const loader = new GLTFLoader();
		loader.load("/data/rocket/scene.gltf", function (gltf) {
			model = gltf.scene;
			const scale = 1.75;
			model.scale.set(4 * scale, 4 * scale, 4 * scale);
			model.rotateY(-1.5);
			model.rotateZ(0.5);
			model.rotateX(-0.75);
			scene.add(model);
		});

		// const controls = new OrbitControls(camera, renderer.domElement);
		// controls.enableDamping = true;
		// controls.dampingFactor = 0.25;
		// controls.enableZoom = true;

		camera.position.set(0, 0, 10);

		function animate() {
			requestAnimationFrame(animate);
			if (model) {
				model.rotation.x += 0.05;
				model.rotation.y -= 0.05;
			}
			renderer.render(scene, camera);
		}
		animate();

		window.addEventListener("resize", function () {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth / 2, window.innerHeight);
		});

		return () => {
			canvasRef.current?.removeChild(renderer.domElement);
		};
	});

	return <div ref={canvasRef}></div>;
}
