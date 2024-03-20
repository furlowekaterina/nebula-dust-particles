import * as THREE from 'three';
import { TweenMax, Power3 } from 'gsap';

class NebulaDustParticles {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error('Container element not found');
      return;
    }

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer();
    this.particles = [];

    this.init();
  }

  init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);
    this.camera.position.z = 5;

    this.addParticles();
    this.animate();
  }

  addParticles() {
    const particleGeometry = new THREE.SphereGeometry(0.05, 32, 32);
    const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < 100; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      particle.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
      this.scene.add(particle);
      this.particles.push(particle);
    }
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    this.particles.forEach(particle => {
      // Simple animation for demonstration purposes
      TweenMax.to(particle.position, 2, {
        x: "+=0.5",
        ease: Power3.easeInOut,
        repeat: -1,
        yoyo: true
      });
    });

    this.renderer.render(this.scene, this.camera);
  }
}

export default NebulaDustParticles;
