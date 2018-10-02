function Game(parent) {
  var self = this;
  self.parentElement = parent;
  self.gameElement = null
  self.score = 0;
  self._init();
  self._startLoop();  
}

Game.prototype._init = function() {
  var self = this;
  self.gameElement = buildScreen(
   ` <main class="game-container">
    <header class="game__header">
      <div class="score">
        <span class="label">Score:</span>
        <span class="value"></span>
      </div>
    </header>
    <div class="game__canvas">
      <canvas class="canvas" ></canvas>
    </div>
  </main>`
  )
  self.parentElement.appendChild(self.gameElement);
  self.canvasParentElement = document.querySelector('.game__canvas');
  self.canvasElement = document.querySelector('.canvas');
  self.scoreElement = self.gameElement.querySelector('.score .value');
  self.height = self.canvasParentElement.clientHeight;
  self.width = self.canvasParentElement.clientWidth;
  self.ctx = self.canvasElement.getContext('2d');
}

//the first loop
Game.prototype._startLoop = function (){
  var self = this;

  self.score = 1000;
  self.player = new Player(self.canvasElement);
  self.obs1 = new Obstacle(self.canvasElement, 135, 50, false)
  self.handleKeyDown = function (evt) {
    
    if (evt.key === "ArrowDown") {
      self.player.setDirection(0,1);
      self.player.setImpulse(2);
      self.player.width = 25;
      self.player.heigth = 50;
    }
    if (evt.key === "ArrowUp") {
      self.player.setDirection(0,-1);
      self.player.setImpulse(2);
      self.player.width = 25;
      self.player.heigth = 50;
    }
    if (evt.key === "ArrowLeft") {
      self.player.setDirection(-1,0);
      self.player.setImpulse(2);
      self.player.width = 50;
      self.player.heigth = 25;
    } 
    if (evt.key === "ArrowRight") {
      self.player.setDirection(1,0);
      self.player.setImpulse(2);
      self.player.width = 50;
      self.player.heigth = 25;
    }
  }

  document.addEventListener('keydown', self.handleKeyDown);
  document.addEventListener('keyup', self.handleKeyUp);
  
  //principal loop
   function loop() {
     
    self._clearAll();
    self._updateAll();
    self._drawAll(); 
    requestAnimationFrame(loop);
   
   }

  requestAnimationFrame(loop);
}

Game.prototype._clearAll = function () {
  var self = this;
  self.ctx.clearRect(0,0, self.width, self.height)
}

Game.prototype._updateAll = function () {
  var self = this;
  self.player.update();
  self.scoreElement.innerText= self.score;
  self.obs1.move();
}

Game.prototype._drawAll = function () {
  var self = this;

  self.player.draw();
  self.obs1.draw();
}

