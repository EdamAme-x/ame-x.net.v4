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
            model.position.set(0, 0, 0);
			scene.add(model);
		});

		// const controls = new OrbitControls(camera, renderer.domElement);
		// controls.enableDamping = true;
		// controls.dampingFactor = 0.25;
		// controls.enableZoom = true;

		camera.position.set(0, 0, 10);
		camera.rotation.z += THREE.MathUtils.degToRad(45);

		let frameManager = 0;

		class ShootingStar {
			mesh: THREE.Mesh<
				THREE.BufferGeometry<THREE.NormalBufferAttributes>,
				THREE.Material | THREE.Material[],
				THREE.Object3DEventMap
			>;
			hev = 1;

			constructor(baseColor: number | number[] = [0xabdbe3, 0x9e76B4, 0xaaffaa], geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(0.25, 1)) {
				this.mesh = new THREE.Mesh(
					geometry,
					new THREE.PointsMaterial({
						color: Array.isArray(baseColor) ? baseColor[Math.floor(Math.random() * baseColor.length)] : baseColor,
					})
				);
				this.mesh.position.set(0, 0, 0);
				this.updateRandom();
                this.updateHev();
				scene.add(this.mesh);
			}

			update() {
				this.mesh.position.y -= 0.125 * this.hev;
				if (this.mesh.position.y < -10) {
					this.updateRandom();
					this.updateHev();
				}
			}

			updateRandom() {
				this.mesh.position.x = this.absNegaRandom(
					Math.random() * (2 + Math.random()) + 2
				);
				this.mesh.position.y = 10;
				this.mesh.position.z = this.absNegaRandom(
					Math.random() * (2 + Math.random()) + 2
				);
			}

			updateHev() {
				this.hev = (1 + Math.random()) ** 2;
			}

			absNegaRandom(number: number) {
				return Math.random() > 0.5 ? number : -number;
			}
		}

        class RocketBubble extends ShootingStar {
            constructor() {
                super(0xffffff, new THREE.DodecahedronGeometry(0.25, 0));
            }

            update() {
				this.mesh.position.y -= 0.1 * this.hev;
				if (this.mesh.position.y < -5.5) {
					this.updateRandom();
					this.updateHev();
				}
			}

            updateRandom() {
				this.mesh.position.x = this.absNegaRandom(
					Math.random() ** 2 - 0.1
				);
				this.mesh.position.y = -4;
				this.mesh.position.z = this.absNegaRandom(
					Math.random() ** 2
				);
                const scale = 0.5 + Math.random();
                this.mesh.scale.set(scale, scale, scale);
			}
        }

		const shootingStars = [
			new ShootingStar(),
			new ShootingStar(),
			new ShootingStar(),
			new ShootingStar(),
			new ShootingStar(),
			new ShootingStar(),
			new ShootingStar(),
			new ShootingStar(),
		];

        const rocketBubbles = [
            new RocketBubble(),
            new RocketBubble(),
            new RocketBubble(),
            new RocketBubble(),
            new RocketBubble(),
            new RocketBubble(),
            new RocketBubble(),
            new RocketBubble(),
            new RocketBubble(),
        ]

		const everyUpdater = (shootingStars: ShootingStar[]) => {
			const cachedShootingStarsLength = shootingStars.length;
			for (let i = 0; i < cachedShootingStarsLength; i++) {
				shootingStars[i].update();
			}
		};

		function animate() {
			requestAnimationFrame(animate);
			if (model) {
				if (frameManager % 3 === 0) {
					model.rotation.y += 0.005;
					frameManager = 0;
				}
				model.rotation.y += 0.025;
				everyUpdater(shootingStars);
                everyUpdater(rocketBubbles);
				frameManager++;
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
			// eslint-disable-next-line react-hooks/exhaustive-deps
			canvasRef.current?.removeChild(renderer.domElement);
		};
	});

	return <div ref={canvasRef}></div>;
}
