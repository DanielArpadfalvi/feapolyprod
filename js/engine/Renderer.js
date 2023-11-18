class Renderer {
    static instance = null;
    static getInstance(canvas) {
        return this.instance || new Renderer(canvas);
    }

    elements = [];
    canvas = null;
    ctx = null;

    constructor(canvas) {
        if (!Renderer.instance) {
            Renderer.instance = this;
        } else {
            return Renderer.instance;
        }
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.animate();
    }

    addElement(element) {
        this.elements.push(element);
    }

    getElementById(id) {
        this.elements.forEach(element => {
            if(element.id && element.id === id) {
                return element;
            }
        });
        return undefined;
    }

    removeElement(filter) {
        this.elements = this.elements.filter(filter);
    }

    resizeCanvas() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const aspectRatio = 2200 / 1200;

        if (width / height > aspectRatio) {
            this.canvas.width = height * aspectRatio;
            this.canvas.height = height;
        } else {
            this.canvas.width = width;
            this.canvas.height = width / aspectRatio;
        }
    }

    draw() {
        this.ctx.fillStyle = "#ccc";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        for (const element of this.elements) {
            element.render(this.ctx);
        }
    }

    animate() {
        for (const element of this.elements) {
            element.move();
        }

        this.draw(canvas);

        requestAnimationFrame(() => {
            this.animate(canvas);
        });
    }
}