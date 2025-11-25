let sp = [];
const MAX_PARTICULAS = 150;   // 🔥 Limite para evitar lag
const DIST_MAX = 150;         // Máxima distancia para conectar telarañas

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // ============================================================
  // 🕸️ TELARAÑAS — CONEXIONES ENTRE PARTÍCULAS CERCANAS
  // ============================================================
  drawingContext.shadowBlur = 0; // Más rápido

  for (let i = 0; i < sp.length; i++) {
    for (let j = i + 1; j < sp.length; j++) {
      let d = dist(sp[i].pos.x, sp[i].pos.y, sp[j].pos.x, sp[j].pos.y);

      if (d < DIST_MAX) {
        let x1 = sp[i].pos.x;
        let y1 = sp[i].pos.y;
        let x2 = sp[j].pos.x;
        let y2 = sp[j].pos.y;

        let grad = drawingContext.createLinearGradient(x1, y1, x2, y2);

        let neon = "rgba(0,255,150,1)";
        let neonFade = "rgba(0,255,150,0)";

        grad.addColorStop(0, neon);
        grad.addColorStop(1, neonFade);

        drawingContext.strokeStyle = grad;
        strokeWeight(1.8);
        line(x1, y1, x2, y2);
      }
    }
  }
  // ============================================================

  // Actualizar partículas
  for (let i = sp.length - 1; i >= 0; i--) {
    sp[i].update();
    sp[i].display();

    if (sp[i].estaMuerta) sp.splice(i, 1);
  }

  // Crear nuevas partículas pero con límite
  if (sp.length < MAX_PARTICULAS) {
    sp.push(new Particula(mouseX, mouseY));
  }
}

function mouseClicked() {
  if (sp.length < MAX_PARTICULAS) {
    sp.push(new Particula(mouseX, mouseY));
  }
}









  