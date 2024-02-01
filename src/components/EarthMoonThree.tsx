import {useEffect} from "react";
import * as THREE from 'three';
import {Link} from "react-router-dom";
import './ThreeJSPages.css';

function EarthMoonThree() {

    useEffect(() => {
        if (document.getElementById('main-canvas') !== null) {
            return;
        }

        // three.js code
        const scene = new THREE.Scene();

        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        const aspectRatio = window.innerWidth / window.innerHeight;

        // camera
        const camera = new THREE.PerspectiveCamera(
            aspectRatio < 1.5 ? 50 : 25, aspectRatio, 0.1, 1000
        );
        camera.position.set(0, 0, 200);
        camera.lookAt(0, 0, 0);

        // ambient light
        const light_amb = new THREE.AmbientLight(0x8080ff, 0.1);
        scene.add(light_amb);

        // directional light to planet
        const light = new THREE.DirectionalLight(0xFFFFFF, 2.5);
        light.position.set(-30, 0, 10);
        light.target.position.set(0, 0, 0);
        light.castShadow = true;

        light.shadow.camera.left = -20;
        light.shadow.camera.right = 20;
        light.shadow.camera.top = 20;
        light.shadow.camera.bottom = -20;

        scene.add(light);

        const lightPivot = new THREE.Object3D();
        lightPivot.add(light);

        scene.add(lightPivot);

        // planet earth simulation
        let geometry = new THREE.SphereGeometry(20, 60, 60);
        let material = new THREE.MeshStandardMaterial
        ({color: 0xffffff, metalness: 0.1, roughness: 0.9});

        let earthMesh = new THREE.Mesh(geometry, material);
        earthMesh.rotation.y = Math.PI * 1.5;
        earthMesh.castShadow = true;
        earthMesh.receiveShadow = true;
        scene.add(earthMesh);

        let geometryMoon = new THREE.SphereGeometry(20 / 3.7, 60, 60);
        let materialMoon = new THREE.MeshStandardMaterial
        ({color: 0xffffff, metalness: 0.1, roughness: 0.9});

        let moonMesh = new THREE.Mesh(geometryMoon, materialMoon);
        moonMesh.position.x = -50;
        moonMesh.castShadow = true;
        moonMesh.receiveShadow = true;
        scene.add(moonMesh);

        let moonPivot = new THREE.Object3D();

        moonPivot.add(moonMesh);
        scene.add(moonPivot);

        // rotation around earth
        function animateMoon() {
            moonMesh.rotation.y += 0.0021;
            // rotate diagonally
            moonPivot.rotation.y += 0.0021;
        }

        function setupMoonTextures() {
            // main texture
            const texture = new THREE.TextureLoader()
                .load('src/images/earth-moon/moonmap1k.jpg');
            materialMoon.map = texture;

            // bump map
            const textureBump = new THREE.TextureLoader()
                .load('src/images/earth-moon/moonbump1k.jpg');
            materialMoon.bumpMap = textureBump;
            materialMoon.bumpScale = 1.3;
        }

        setupMoonTextures();


        function setupEarthTextures() {
            // main texture
            const texture = new THREE.TextureLoader()
                .load('earth-moon/earthmap1k.jpg');
            material.map = texture;

            // bump map
            const textureBump = new THREE.TextureLoader()
                .load('src/images/earth-moon/earthbump1k.jpg');
            material.bumpMap = textureBump;
            material.bumpScale = 1.5;
        }

        setupEarthTextures();

        // alpha texture for cloud mapping
        let geometryCloud = new THREE.SphereGeometry(20.2, 41, 41);
        const textureClouds = new THREE.TextureLoader()
            .load('src/images/earth-moon/earthcloudmap.jpg');
        let materialCloud = new THREE.MeshStandardMaterial({
            color: 0xffffff, emissive: 0x010101,
            metalness: 0.1, roughness: 0.7,
            side: THREE.DoubleSide,
            opacity: 0.55, transparent: true,
            alphaMap: textureClouds
        });

        let cloudMesh = new THREE.Mesh(geometryCloud, materialCloud);

        earthMesh.add(cloudMesh);

        function updateAspectRatio() {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.fov = camera.aspect < 1.5 ? 75 : 25;
            camera.updateProjectionMatrix();
        }

        window.addEventListener('resize', updateAspectRatio);


        const appContainer = document.getElementById('app');

        renderer.domElement.id = 'main-canvas';

        if (appContainer) {
            appContainer.appendChild(renderer.domElement);
        }

        function animate() {
            requestAnimationFrame(animate);

            cloudMesh.rotation.y += 0.001;
            earthMesh.rotation.y += 0.0021;
            animateMoon();
            renderer.render(scene, camera);
        }

        animate();

        // Clean up Three.js resources on component unmount
        return () => {
            renderer.dispose();
        };
    }, []);

    useEffect(() => {
        const navbar = document.getElementById("navbar");

        const footer = document.getElementById("Social");

        const backToStartButton = document.getElementById("back-to-start");

        if(navbar)
            navbar.classList.add('not-to-show');

        if(footer)
            footer.classList.add('not-to-show');

        if(backToStartButton)
            backToStartButton.classList.add('not-to-show');

        return () => {
            if(navbar)
                navbar.classList.remove('not-to-show');

            if(footer)
                footer.classList.remove('not-to-show');

            if(backToStartButton)
                backToStartButton.classList.remove('not-to-show');
        };
    });

    return (
        <div id="app">
            <h1 className="animation-title">Earth and Moon</h1>

            <Link to="/three-js-demos" className="back-to-home-button">Return</Link>
        </div>
    );
}

export default EarthMoonThree;