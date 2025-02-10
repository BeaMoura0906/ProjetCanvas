import ObjectGraphique from "./ObjectGraphique.js";
import { drawCircleImmediat } from "./utils.js";   

export default class Player extends ObjectGraphique {
    constructor(x, y) {
        super(x, y, 100, 100);
        this.vitesseX = 0;
        this.vitesseY = 0;
        this.couleur = "purple";
        this.angle = 0;
    }

    draw(ctx) {
        // Ici on dessine un monstre
        ctx.save();

        // on déplace le systeme de coordonnées pour placer
        // le monstre en x, y.Tous les ordres de dessin
        // dans cette fonction seront par rapport à ce repère
        // translaté
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        // on recentre le monstre. Par défaut le centre de rotation est dans le coin en haut à gauche
        // du rectangle, on décale de la demi largeur et de la demi hauteur pour 
        // que le centre de rotation soit au centre du rectangle.
        // Les coordonnées x, y du monstre sont donc au centre du rectangle....
        ctx.translate(-this.w / 2, -this.h / 2);
        //this.ctx.scale(0.5, 0.5);

        // tete du monstre
        ctx.fillStyle = this.couleur;
        ctx.fillRect(0, 0, this.w, this.h);
        
        // yeux
        drawCircleImmediat(ctx, 30, 30, 10, "white");
        drawCircleImmediat(ctx, 70, 30, 10, "white");
        drawCircleImmediat(ctx, 30, 30, 5, "black");
        drawCircleImmediat(ctx, 70, 30, 5, "black");

        // bouche 
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(50, 60, 20, 0, Math.PI, false);
        ctx.stroke();

        // chapeau
        ctx.fillStyle = "green";
        ctx.fillRect(10, -10, 80, 10);
        ctx.fillRect(20, -30, 60, 20);

        // bras
        ctx.fillStyle = "black";
        ctx.fillRect(-20, 30, 20, 10);
        ctx.fillRect(100, 30, 20, 10);

        // jambes
        ctx.fillRect(20, 100, 10, 20);
        ctx.fillRect(70, 100, 10, 20);

        // restore
        ctx.restore();

        // super.draw() dessine une croix à la position x, y
        // pour debug
        super.draw(ctx);
    }

    move() {
        this.x += this.vitesseX;
        this.y += this.vitesseY;
    }
}