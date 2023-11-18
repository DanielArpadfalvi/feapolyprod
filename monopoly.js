const canvas = document.getElementById('monopolyCanvas');
const ctx = canvas.getContext('2d');

function init() {
    const renderer = Renderer.getInstance(canvas);
    GameMechanic.init();
    document.body.appendChild(canvas);
    window.addEventListener('resize', () => renderer.resizeCanvas());
    renderer.resizeCanvas();
    renderer.draw();
    renderer.animate();
}

document.addEventListener("DOMContentLoaded", init);