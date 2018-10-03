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
//TIMER ERROR
//the first loop
Game.prototype._startLoop = function (){
  var self = this;
  self.cars= [];
  
  self.score = 200,
  self._timeDown();
  self.player = new Player(self.canvasElement);
  self.obs1 = new Obstacle(self.canvasElement, 135, 52, false);
  self.cars.push(self.obs1);
  self.obs2 = new Obstacle(self.canvasElement, 11, 108, false);
  self.cars.push(self.obs2);
  self.obs3 = new Obstacle(self.canvasElement, 11, 80, false);
  self.cars.push(self.obs3);
  self.obs4 = new Obstacle(self.canvasElement, 140 , 20, false);
  self.cars.push(self.obs4);
  self.finishZone = new Obstacle(self.canvasElement, 240, 6, true);
  console.log(self.cars)
  //LINEAS DE LA FILA 1
  self.line1 = new Line(self.canvasElement, 0, 39, 60, 3);
  self.line1b = new Line(self.canvasElement, 60, 39, 3, 6);
  self.line2 = new Line(self.canvasElement, 0, 70, 60, 3);
  self.line2b = new Line(self.canvasElement, 58, 66, 3, 12);
  self.line3 = new Line(self.canvasElement, 0, 100, 60, 3);
  self.line3b = new Line(self.canvasElement, 58, 96, 3, 12);
  self.line4 = new Line(self.canvasElement, 0, 130, 60, 3);
  self.line4b = new Line(self.canvasElement, 58, 126, 3, 7);
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
  self.line8 = new Line(self.canvasElement, 128, 96, 60, 3);
  self.line8b = new Line(self.canvasElement, 128, 92, 3, 12);
  self.line8c = new Line(self.canvasElement, 188, 92, 3, 12);
  self.line9 = new Line(self.canvasElement, 128, 120, 60, 3);
  self.line9b = new Line(self.canvasElement, 128, 114, 3, 6);
  self.line9c = new Line(self.canvasElement, 188, 114, 3, 9);
  //LINEAS DE LA FILA 3
  self.line10 = new Line(self.canvasElement, 240, 5, 60, 3);
  self.line10b = new Line(self.canvasElement, 240, 5, 3, 6);
  self.line11 = new Line(self.canvasElement, 240, 40, 60, 3);
  self.line11b = new Line(self.canvasElement, 240, 36, 3, 12);
  self.line12 = new Line(self.canvasElement, 240, 70, 60, 3);
  self.line12b = new Line(self.canvasElement, 240, 66, 3, 12);
  self.line13 = new Line(self.canvasElement, 240, 100, 60, 3);
  self.line13b = new Line(self.canvasElement, 240, 96, 3, 12);
  self.line14 = new Line(self.canvasElement, 240, 130, 60, 3);
  self.line14b = new Line(self.canvasElement, 240, 126, 3, 6);

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

Game.prototype._timeDown = function (){
  var self = this;
  setInterval(function(){ self.score --}, 1000);
}
Game.prototype._checkAllCollision = function() {
  var self = this;
  self.cars.forEach(function(item, idx) {
    if(self.player.checkCollision(item)) {
    console.log("has chocado!")
    self.player.collided();
    self.score -=1 ;
    } else {
      return false; 
    }
  });
}

Game.prototype._finish = function() {
  var self = this;
 if( self.player.finish(finishZone)){
   destroyGame();
   buildGameOver()
 }
};


Game.prototype._clearAll = function () {
  var self = this;
  self.ctx.clearRect(0,0, self.width, self.height)
}

Game.prototype._updateAll = function () {
  var self = this;
  self.player.checkLimit();
  self._checkAllCollision();
  if( !self._checkAllCollision()){
  self.player.update();
  }
  self.scoreElement.innerText= self.score;
  self.obs1.move();
  self.obs2.grow();
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
  self.line8.draw();
  self.line8b.draw();
  self.line8c.draw();
  self.line9.draw();
  self.line9b.draw();
  self.line9c.draw();
  self.line10.draw();
  self.line10b.draw();
  self.line11.draw();
  self.line11b.draw();
  self.line12.draw();
  self.line12b.draw();
  self.line13.draw();
  self.line13b.draw();
  self.line14.draw();
  self.line14b.draw();
  self.obs1.draw();
  self.obs2.draw();
  self.obs3.draw();
  self.obs4.draw();
  self.finishZone.draw();
  self.player.draw();
}

