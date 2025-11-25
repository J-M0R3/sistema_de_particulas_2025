class Particula {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);

    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(0.5, 2));

    this.tVida = int(random(100, 300));
    this.tVidaInicial = this.tVida;
    this.estaMuerta = false;
    this.diam = random(-0.1, 0.5);

    console.log('Hola, estoy viviendo');
  }

  update() {
    if (!this.estaMuerta) {
      this.pos.add(this.vel);
      this.vel.rotate(this.velAngula);
      this.tVida-= 1;
      }
    }
    if (this.tVida <= 0 && !this.estaMuerta) {
        console.log('Adiós, he muerto');
        this.estaMuerta = true;
     }
     
     display() {
     fill(255);
     noStrocke();
     Circle(this.pos.x, this.pos.y, 20);
  }
}
