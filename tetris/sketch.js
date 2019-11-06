var paused;
var game;

var scl = 20;
var w = 300;
var h = 500;

let alturaPlacar = 50;
let larguraPlacar = 300;
let placar = 0;

var shapes = {0: [[1,1,0],
                  [0,1,1],
                  [0,0,0]],
              1: [[0,1,1],
                  [1,1,0],
                  [0,0,0]],
              2: [[1,0,0],
                  [1,1,1],
                  [0,0,0]],
              3: [[0,0,1],
                  [1,1,1],
                  [0,0,0]],
              4: [[0,1,0],
                  [1,1,1],
                  [0,0,0]],
              5: [[1,1],
                  [1,1]],
              6: [[1,1,1,1],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0]]};

var colours = {0: [0,100,0],
               1: [255,0,0],
               2: [0,0,255],
               3: [255,140,0],
               4: [139,0,139],
               5: [255,255,0],
               6: [0,255,255]
              }

function fimDeJogoVencendo(){
  if(placar > 9){
    frameRate(0);
    mensagemVitoria();
  }
}

function fimDeJogoPerdendo(){
  if(paused){
    fill(0,0,0);
    rect(0,0,300,500);
    fill(255,255,255);
    textSize(25);
    text("Você Perdeu!!!", 150, 250);
    text(";-;", 150, 300);
   }
  
}

function setup(){
  createCanvas(w, h);
  frameRate(5);
  game = new Game();
  paused = false;
}

function draw(){
  if(frameCount < 50){
  telaInicial();
  }else{
  jogo();
  }
  //console.log(frameCount);
}

function texto(){
  textAlign(CENTER);
  text("SENAI - Serviço Nacional de Aprendizagem Industrial", 150, 200);
  text("CURSO - Aprendizagem Industrial em ", 150, 225);
  text("Programador de Computador ", 150, 250);
  text("UCr - Linguagem de Programação ", 150, 275);
  text("PROF. - Tarcísio Nunes ", 150, 300);
  text("DESENVOLVIDO POR - André Luis Dalabeneta ", 150, 325);
  text(" - Cintia Suelem ", 190, 350);
  text(" - Diogo dos Anjos ", 200, 375);
  text(" - Kevin Reimundi Costa ", 215, 400);
}

function telaInicial(){
  fill(0,0,0);
  rect(0, 0, 300, 500);
  fill(255,255,255);
  texto();
}

function jogo(){
  background(200);
  game.update();
  game.checkRow();
  game.show();
  controls();
  fimDeJogoVencendo();
  mostraPlacar();
  marcarPonto();
  fimDeJogoPerdendo();
}

function mensagemVitoria(){
  fill(0,0,0);
  textSize(25);
  text("Você Venceu!!!", 150, 250);
}

function marcarPonto(){
  fill(255,255,255);
  textSize(20);
  text("Pontuação = ", 65, 30);
  fill(255,255,255);
  textSize(25);
  text(placar, 130, 30);
}

function mostraPlacar(){
  fill(0,0,0);
  rect(0, 0, larguraPlacar, alturaPlacar);
}

function controls(){
  if(keyIsDown(LEFT_ARROW)){
    game.shape.update(-1, 0, game.board);
  }else if(keyIsDown(RIGHT_ARROW)){
    game.shape.update(1, 0, game.board);    
  }else if(keyIsDown(DOWN_ARROW)){
    game.shape.update(0, 1, game.board);
  }
}

function keyPressed(){
  //if(key == ' '){
    //if(paused){
      //paused = false;
      //loop();
    //}else{
      //paused = true;
      //noLoop();
    //}
  if(keyCode == 38){
    game.shape.rotate();
  }
}