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

  self.score = 100000;
  self.player = new Player(self.canvasElement);
  self.obs1 = new Obstacle(self.canvasElement, 135, 52, false);
  self.obs2 = new Obstacle(self.canvasElement, 11, 108, false);
  self.obs3 = new Obstacle(self.canvasElement, 11, 80, false);
  self.obs4 = new Obstacle(self.canvasElement, 140 , 20, false);
  self.finishZone = new Obstacle(self.canvasElement, 240, 6, true);
  //LINEAS DE LA FILA 1
  self.line1 = new Line(self.canvasElement, 0, 39, 60, 3);
  self.line1b = new Line(self.canvasElement, 60, 39, 3, 6);
  self.line2 = new Line(self.canvasElement, 0, 70, 60, 3);
  self.line2b = new Line(self.canvasElement, 58, 66, 3, 12);
  self.line3 = new Line(self.canvasElement, 0, 100, 60, 3);
  self.line3b = new Line(self.canvasElement, 58, 96, 3, 12);
  self.line4 = new Line(self.canvasElement, 0, 130, 60, 3);
  self.line4b = new Line(self.canvasElement, 58, 126, 3, 12);
  //LINEAS DE LA FILA 2
  self.line5 = new Line(self.canvasElement, 128, 10, 60, 3);
  self.line5b = new Line(self.canvasElement, 128, 10, 3, 6);
  self.line5c = new Line(self.canvasElement, 188, 10, 3, 6);
  self.line6 = new Line(self.canvasElement, 128, 36, 60, 3);
  self.line6b = new Line(self.canvasElement, 128, 32, 3, 12);
  self.line6c = new Line(self.canvasElement, 188, 32, 3, 12);
  self.line7 = new Line(self.canvasElement, 128, 66, 60, 3);
  self.line7b = new Line(self.canvasElement, 128, 62, 3, 12);
  self.line7c = new Line(self.canvasElement, 188, 62, 3, 12);




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
  self.score --;
}

Game.prototype._drawAll = function () {
  var self = this;
  self.line1.draw();
  self.line1b.draw();
  self.line2.draw();
  self.line2b.draw();
  self.line3.draw();
  self.line3b.draw();
  self.line4.draw();
  self.line4b.draw();
  self.line5.draw();
  self.line5b.draw();
  self.line5c.draw();
  self.line6.draw();
  self.line6b.draw();
  self.line6c.draw();
  self.line7.draw();
  self.line7b.draw();
  self.line7c.draw();
  self.obs1.draw();
  self.obs2.draw();
  self.obs3.draw();
  self.obs4.draw();
  self.finishZone.draw();
  self.player.draw();
}

