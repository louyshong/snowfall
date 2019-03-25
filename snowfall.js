var drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(0);
  for(var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}
