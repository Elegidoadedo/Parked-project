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
  self.obs1 = new Obstacle(self.canvasElement, 135, 52, false);
  self.obs2 = new Obstacle(self.canvasElement, 15, 118, false);
  self.obs3 = new Obstacle(self.canvasElement, 15, 80, false);
  self.obs4 = new Obstacle(self.canvasElement, 140 , 20, false);
  
  self.finishZone = new Obstacle(self.canvasElement, 240, 6, true);
  self.handleKeyDown = function (evt) {
    
    if (evt.key === "ArrowDown") {
      self.player.setDirection(0,1);
      self.player.setImpulse(2);
      self.player.width = 15;
      self.player.heigth = 30;
    }
    if (evt.key === "ArrowUp") {
      self.player.setDirection(0,-1);
      self.player.setImpulse(2);
      self.player.width = 15;
      self.player.heigth = 30;
    }
    if (evt.key === "ArrowLeft") {
      self.player.setDirection(-1,0);
      self.player.setImpulse(2);
      self.player.width = 30;
      self.player.heigth = 15;
    } 
    if (evt.key === "ArrowRight") {
      self.player.setDirection(1,0);
      self.player.setImpulse(2);
      self.player.width = 30;
      self.player.heigth = 15;
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
  self.obs2.grow();
}

Game.prototype._drawAll = function () {
  var self = this;

  self.obs1.draw();
  self.obs2.draw();
  self.obs3.draw();
  self.obs4.draw();
  self.finishZone.draw();
  self.player.draw();
}

