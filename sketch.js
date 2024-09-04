function setup() {
  createCanvas(400, 400);
  background("lightcyan");
}

function draw() {
  if(mouseIsPressed){
  stroke("darkred"); //cor da linha
  fill("red"); //cor do fundo
  rect(mouseX,mouseY,10,10); //criando o quadrado
  }
}
