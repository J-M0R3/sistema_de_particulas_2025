class Particula {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);

    // Velocidad normal (no tan suave, no tan rápida)
    this.vel = p5.Vector.random2D().setMag(random(0.8, 1.8));

    this.tVida = int(random(80, 200));
    this.tVidaInicial = this.tVida;
    this.estaMuerta = false;

    this.diam = random(8, 22);

    // Caída normal
    this.gravedad = createVector(0, 0.12);

    // Rotación leve
    this.velAngula = random(-0.03, 0.03);
  }

  update() {
    if (!this.estaMuerta) {

      // Caída con peso normal
      this.vel.add(this.gravedad);

      // Rotación leve
      this.vel.rotate(this.velAngula);

      // Movimiento final
      this.pos.add(this.vel);

      this.tVida--;
      if (this.tVida <= 0) this.estaMuerta = true;
    }
  }

  display() {
    push();
    noStroke();

    // Glow blanco
    if (this.diam > 4) {
      drawingContext.shadowBlur = 25;
      drawingContext.shadowColor = "white";
    } else {
      drawingContext.shadowBlur = 0;
    }

    let diamFinal = map(this.tVida, this.tVidaInicial, 0, this.diam, 0);

    fill(255);
    circle(this.pos.x, this.pos.y, diamFinal);
    pop();
  }
}

