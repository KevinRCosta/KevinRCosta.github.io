function acabarJogo(){
  if(placar > 9){
    background(0,0,0)
    textSize(50)
    fill(255)
    text("Vaca Venceu!", 100, 200)
    frameRate(0)
  }
  
  if(placar2 > 9){
    background(0,0,0)
    textSize(50)
    fill(255)
    text("Capivara Venceu!", 50, 200)
    frameRate(0)
  }
}