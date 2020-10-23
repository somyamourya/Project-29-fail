var ground;

function setup() {
  createCanvas(800,400); 
  
  ground=new Ground(600,390,800,20);
}

function draw() {
  background(84,63,63);  
  drawSprites();
}