let np;

function setup() {
  createCanvas(windowWidth, windowHeight);
  np = new Particula(width / 2, height / 2);
  console.log("vector: " + np.vel);
  console.log("magnitud: " + np.vel.mag());
}

function draw() {
  background(120);
  np.display();
  np.update();
}
