function Game(parent) {
  var self = this;
  self.parentElement = parent;
  self.gameElement = null
  self.score = 0;
  self._init();
  self.scoreElement.innerText = self.score;
  
}

Game.prototype._init = function() {
  var self = this;
  self.score = 1000;
  self.gameElement = buildScreen(
   ` <main class="game container">
    <header class="game__header">
      <div class="score">
        <span class="label">Score:</span>
        <span class="value"></span>
      </div>
    </header>
    <div class="game__canvas">
      <canvas class="canvas" width= 1000px height= 500px ></canvas>
    </div>
  </main>`
  )
  self.parentElement.appendChild(self.gameElement);
  self.canvasParentElement = document.querySelector('.game__canvas');
  self.canvasElement = document.querySelector('.canvas');
  self.scoreElement = self.gameElement.querySelector('.score .value');
  self.player = new Player(self.canvasElement);

  self.handleKeyDown = function (evt) {
    console.log(evt.key);
    if (evt.key === "ArrowDown") {
      console.log("arrowdown activado")
      self.player.moveAward();
    }
    if (evt.key === "ArrowUp") {
      console.log("arrowup activado")
      self.player.moveFoward(); 
    }
    if (evt.key === "ArrowLeft") {
      console.log("arrowleft activado")
      self.player.turnLeft();
    } 
    if (evt.key === "ArrowRight") {
      console.log("arrowright activado")
      self.player.turnRigth();
      
    }
    
  }

  self.startLoop();
}
//principal loop
Game.prototype.loop = function(){
 var self = this;
  if(self.score <= 0){
    buildGameOver();
  };
  //self.score--;
  self.scoreElement.innerText = self.score;
  document.addEventListener('keydown', self.KeyDown);
  self.player.draw();
  requestAnimationFrame(self.loop.bind(self));

}
//the first loop
Game.prototype.startLoop = function (){
  var self = this;
  self.player.draw();
//CREADOS LOS EVENTLISTENER CON LOS 4 CONTROLES

document.addEventListener('keydown', self.handleKeyDown);
  //requestAnimationFrame(self.loop);
  self.loop();
}

