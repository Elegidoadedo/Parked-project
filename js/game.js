function Game(parent) {
  var self = this;
  self.parentElement = parent;
  self.gameElement = null
  self.score = 1000;
  self._init();
  self.scoreElement.innerText = self.score;
  
}

Game.prototype._init = function() {
  var self = this;
  score = 1000;
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
  //self.canvasElement.appendChild(self.player); 
  self.player.draw();
  
}

//Game.prototype.startloop =





score = 1000;
if(score <= 0){
  buildGameOver();
};