var rectangulo, cuadrado;

function setup() {
  createCanvas(800,400);
  rectangulo = createSprite(200, 200, 80, 30);
  cuadrado = createSprite(400, 200, 50, 50);

  rectangulo.shapeColor = "green";
  cuadrado.shapeColor = "green";
}

function draw() {
  background(0);
  rectangulo.x = World.mouseX;
  rectangulo.y = World.mouseY;

  if(rectangulo.x - cuadrado.x < rectangulo.width/2 + cuadrado.width/2 
    && cuadrado.x - rectangulo.x < cuadrado.width/2 + rectangulo.width/2 
    && rectangulo.y - cuadrado.y < rectangulo.height/2 + cuadrado.height/2 
    && cuadrado.y - rectangulo.y < cuadrado.height/2 + rectangulo.height/2){
  rectangulo.shapeColor = "red";
  cuadrado.shapeColor = "red";
  }else{
    rectangulo.shapeColor = "green";
    cuadrado.shapeColor = "green";
  }

  drawSprites();
}