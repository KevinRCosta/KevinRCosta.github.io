//Variáveis

let yAtor2 = 364;
let xAtor2 = 400;
let placar2 = 0;

function mostraAtor2(){
  image(imagemDoAtor2,xAtor2, yAtor2, 35, 35);
}

function movimentaAtor2(){
  if (keyIsDown(UP_ARROW)) {
    //Se a seta para cima for pressionada
    //E o yAtor maior que 5, então sobe.
    if(yAtor2 > 5)
      yAtor2 -= 3;
  }  
  if (keyIsDown(DOWN_ARROW)) {
    if(yAtor2 < 366)
      yAtor2 += 3;
  }
}

function verificaColisao2(){
//.collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let j=0; j < imagensCarros.length; j++){
   colidiu2 = collideRectCircle(xCarros[j], yCarros[j], comprimentoCarros[j], altura, xAtor2, yAtor2,15);
  if(colidiu2){
  console.log("Colidiu")
    voltaAtor2ParaPosicaoInicial();
    somColidiu.play();
    if(placar2 > 0){placar2 -= 1;}
  }
  
  }
}

function voltaAtor2ParaPosicaoInicial(){
  yAtor2 = 364;
}

function mostraPlacar2(){
  if(yAtor2 < 15){
     placar2 += 1
    voltaAtor2ParaPosicaoInicial()
    somPonto.play();
     }
  
  textSize(25);
  text(placar2, 350, 30)
}