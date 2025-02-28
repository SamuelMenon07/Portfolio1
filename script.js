// Smooth scrolling for section navigation

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', event => {
      const targetId = button.getAttribute('href').substring(1); // Get the target ID
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  console.log("Body section loaded with animations.");



// Animated Background
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

let particlesArray = [];
const numberOfParticles = 100;

// Set canvas size to match window
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

// Particle object
class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  // Draw particle
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  // Update particle position
  update() {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}

// start particles
function init() {
  particlesArray = [];
  for (let i = 0; i < numberOfParticles; i++) {
    let size = Math.random() * 3 + 1;
    let x = Math.random() * (canvas.width - size * 2) + size;
    let y = Math.random() * (canvas.height - size * 2) + size;
    let directionX = (Math.random() * 2 - 1) * 0.5;
    let directionY = (Math.random() * 2 - 1) * 0.5;
    let color = "rgba(0, 119, 255, 0.6)";

    particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
  }
}

// Animate particles
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
}

// Resize canvas and  particles on window resize
window.addEventListener("resize", () => {
  resizeCanvas();
  init();
});

// Start animation
init();
animate();
