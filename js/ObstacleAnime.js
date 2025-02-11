import Obstacle from "./Obstacle.js";

export default class ObstacleAnime extends Obstacle {
    constructor(x, y, w, h, couleur, vitesseX, vitesseY) {
        super(x, y, w, h, couleur);
        this.vitesseX = vitesseX;
        this.vitesseY = vitesseY;
    }

    move() {
        this.x += this.vitesseX;
        this.y += this.vitesseY;

        // Si l'obstacle atteint un bord, on inverse sa direction
        if (this.x <= 0 || this.x + this.w >= 800) {
            this.vitesseX = -this.vitesseX;
        } else if (this.y <= 0 || this.y + this.h >= 800) {
            this.vitesseY = -this.vitesseY;
        }
    }

    draw(ctx) {
        super.draw(ctx);
        this.move();
    }
}