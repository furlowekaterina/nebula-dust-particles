# nebula-dust-particles

`nebula-dust-particles` is a JavaScript library for creating and animating dust particles using THREE.js and GSAP, designed to be easily integrated into web projects to add a captivating visual effect. Perfect for adding a touch of cosmic or magical ambiance to your web applications.

## Installation

Install `nebula-dust-particles` via npm:

```bash
npm install nebula-dust-particles
```

Or via yarn:

```bash
yarn add nebula-dust-particles
```

## Usage

First, ensure you have THREE.js and GSAP installed in your project, as `nebula-dust-particles` depends on these libraries.

```bash
npm install three gsap
```

Then, import and use `nebula-dust-particles` in your JavaScript or TypeScript project:

```javascript
import NebulaDustParticles from 'nebula-dust-particles';

// Assuming you have a div with id='particle-container' in your HTML
const particles = new NebulaDustParticles('particle-container');
```

## API Reference

### `NebulaDustParticles(containerId)`

Constructor creates and initializes the particles within the specified container.

- **containerId**: `string` - The ID of the
