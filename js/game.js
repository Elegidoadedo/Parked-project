function Game(parent) {
  var self = this;
  self.parentElement = parent;
  self.gameElement = null;
  self.gameOverCallback = null;
  self.isGameOver = false;
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

  self.canvasElement.setAttribute('width', self.width);
  self.canvasElement.setAttribute('height', self.height);
  self.ctx = self.canvasElement.getContext('2d');
}
//TIMER ERROR
//the first loop
Game.prototype._startLoop = function (){
  var self = this;
  self.cars= [];
  
  self.score = 500,
  self._timeDown();
  self.player = new Player(self.canvasElement);
  self.player.initialimg();
  self.obs1 = new Obstacle(self.canvasElement, self.ctx.canvas.width*0.4, self.ctx.canvas.height*0.35, false);
  self.cars.push(self.obs1);
  self.obs2 = new Obstacle(self.canvasElement, self.ctx.canvas.width*0.025, self.ctx.canvas.height*0.75, false);
  self.obs2 .carts = true;
  self.cars.push(self.obs2);
  self.obs5 = new Obstacle(self.canvasElement, self.ctx.canvas.width*0.42, self.ctx.canvas.height*0.15, false);
  self.cars.push(self.obs5);
  self.obs3 = new Obstacle(self.canvasElement, self.ctx.canvas.width*0.025, self.ctx.canvas.height*0.37, false);
  self.cars.push(self.obs3);
  self.obs4 = new Obstacle(self.canvasElement, self.ctx.canvas.width*0.025, self.ctx.canvas.height*0.55, false);
  self.cars.push(self.obs4);
  self.obs6 = new Obstacle(self.canvasElement, self.ctx.canvas.width*0.83, self.ctx.canvas.height*0.55, false);
  self.cars.push(self.obs6);
  self.finishZone = new Obstacle(self.canvasElement, self.ctx.canvas.width*0.8, self.ctx.canvas.height*0.055, true);
  
  //LINEAS DE LA FILA 1
  self.line1 = new Line(self.canvasElement, 0,  self.ctx.canvas.height*0.3, self.ctx.canvas.width*0.2,  self.ctx.canvas.height*0.009);
  self.line1b = new Line(self.canvasElement, self.ctx.canvas.width*0.2, self.ctx.canvas.height*0.3, self.ctx.canvas.height*0.009, self.ctx.canvas.height*0.032);
  self.line2 = new Line(self.canvasElement, 0, self.ctx.canvas.height*0.5, self.ctx.canvas.width*0.2,  self.ctx.canvas.height*0.009);
  self.line2b = new Line(self.canvasElement, self.ctx.canvas.width*0.2, self.ctx.canvas.height*0.477, self.ctx.canvas.width*0.005, self.ctx.canvas.height*0.05);
   self.line3 = new Line(self.canvasElement, 0, self.ctx.canvas.height*0.7, self.ctx.canvas.width*0.2,  self.ctx.canvas.height*0.009);
  self.line3b = new Line(self.canvasElement, self.ctx.canvas.width*0.2, self.ctx.canvas.height*0.68, self.ctx.canvas.width*0.005, self.ctx.canvas.height*0.05);
  self.line4 = new Line(self.canvasElement, 0, self.ctx.canvas.height*0.9, self.ctx.canvas.width*0.2,  self.ctx.canvas.height*0.009);
  self.line4b = new Line(self.canvasElement, self.ctx.canvas.width*0.2, self.ctx.canvas.height*0.885, self.ctx.canvas.width*0.005, self.ctx.canvas.height*0.024);
  // //LINEAS DE LA FILA 2
   self.line5 = new Line(self.canvasElement, self.ctx.canvas.width*0.4, self.ctx.canvas.height*0.1, self.ctx.canvas.width*0.2,  self.ctx.canvas.height*0.009);
  self.line5b = new Line(self.canvasElement, self.ctx.canvas.width*0.4, self.ctx.canvas.height*0.1, self.ctx.canvas.width*0.005, self.ctx.canvas.height*0.024);
  self.line5c = new Line(self.canvasElement, self.ctx.canvas.width*0.6, self.ctx.canvas.height*0.1, self.ctx.canvas.width*0.005, self.ctx.canvas.height*0.024);
   self.line6 = new Line(self.canvasElement, self.ctx.canvas.width*0.4, self.ctx.canvas.height*0.3, self.ctx.canvas.width*0.2,  self.ctx.canvas.height*0.009);
  self.line6b = new Line(self.canvasElement, self.ctx.canvas.width*0.4, self.ctx.canvas.height*0.277, self.ctx.canvas.width*0.005, self.ctx.canvas.height*0.05);
  self.line6c = new Line(self.canvasElement, self.ctx.canvas.width*0.6, self.ctx.canvas.height*0.277, self.ctx.canvas.width*0.005, self.ctx.canvas.height*0.05);
  self.line7 = new Line(self.canvasElement, self.ctx.canvas.width*0.4, self.ctx.canvas.height*0.5, self.ctx.canvas.width*0.2,  self.ctx.canvas.height*0.009);
  self.line7b = new Line(self.canvasElement, self.ctx.canvas.width*0.4, self.ctx.canvas.height*0.477, self.ctx.canvas.width*0.005, self.ctx.canvas.height*0.05);
  self.line7c = new Line(self.canvasElement, self.ctx.canvas.width*0.6, self.ctx.canvas.height*0.477, self.ctx.canvas.width*0.005, self.ctx.canvas.height*0.05);
  self.line8 = new Line(self.canvasElement, self.ctx.canvas.width*0.4, self.ctx.canvas.height*0.7, self.ctx.canvas.width*0.2,  self.ctx.canvas.height*0.009);
  self.line8b = new Line(self.canvasElement, self.ctx.canvas.width*0.4, self.ctx.canvas.height*0.677, self.ctx.canvas.width*0.005, self.ctx.canvas.height*0.024);
  self.line8c = new Line(self.canvasElement, self.ctx.canvas.width*0.6, self.ctx.canvas.height*0.677, self.ctx.canvas.width*0.005, self.ctx.canvas.height*0.032);
  // //LINEAS DE LA FILA 3
  self.line10 = new Line(self.canvasElement, self.ctx.canvas.width*0.8, self.ctx.canvas.height*0.04, self.ctx.canvas.width*0.2,  self.ctx.canvas.height*0.009);
  self.line10b = new Line(self.canvasElement, self.ctx.canvas.width*0.8, self.ctx.canvas.height*0.04, self.ctx.canvas.width*0.005, self.ctx.canvas.height*0.032);
  self.line11 = new Line(self.canvasElement, self.ctx.canvas.width*0.8, self.ctx.canvas.height*0.3, self.ctx.canvas.width*0.2,  self.ctx.canvas.height*0.009);
  self.line11b =  new Line(self.canvasElement, self.ctx.canvas.width*0.8, self.ctx.canvas.height*0.277, self.ctx.canvas.width*0.005, self.ctx.canvas.height*0.05);
  self.line12 = new Line(self.canvasElement, self.ctx.canvas.width*0.8, self.ctx.canvas.height*0.5, self.ctx.canvas.width*0.2,  self.ctx.canvas.height*0.009);
  self.line12b =   new Line(self.canvasElement, self.ctx.canvas.width*0.8, self.ctx.canvas.height*0.477, self.ctx.canvas.width*0.005, self.ctx.canvas.height*0.05)
  self.line13 = new Line(self.canvasElement, self.ctx.canvas.width*0.8, self.ctx.canvas.height*0.7, self.ctx.canvas.width*0.2,  self.ctx.canvas.height*0.009);
  self.line13b =   new Line(self.canvasElement, self.ctx.canvas.width*0.8, self.ctx.canvas.height*0.677, self.ctx.canvas.width*0.005, self.ctx.canvas.height*0.05)
  self.line14 = new Line(self.canvasElement, self.ctx.canvas.width*0.8, self.ctx.canvas.height*0.9, self.ctx.canvas.width*0.2,  self.ctx.canvas.height*0.009);
  self.line14b =   new Line(self.canvasElement, self.ctx.canvas.width*0.8, self.ctx.canvas.height*0.877, self.ctx.canvas.width*0.005, self.ctx.canvas.height*0.032);

  self.handleKeyDown = function (evt) {
    
    if (evt.key === "ArrowDown") {
      evt.preventDefault();
      self.player.setDirection(0,1);
      self.player.setImpulse(2.5);
      self.player.width = self.ctx.canvas.height*0.09;
      self.player.heigth = self.ctx.canvas.width*0.12;
      imgPlayer.src = src="img/player-down.png";
      soundPlayer.play();
    }
    if (evt.key === "ArrowUp") {
      evt.preventDefault();
      self.player.setDirection(0,-1);
      self.player.setImpulse(2.5);
      self.player.width = self.ctx.canvas.height*0.09;
      self.player.heigth = self.ctx.canvas.width*0.12;
      imgPlayer.src = src="img/player-up.png";
      soundPlayer.play();
    }
    if (evt.key === "ArrowLeft") {
      evt.preventDefault();
      self.player.setDirection(-1,0);
      self.player.setImpulse(2.5);
      self.player.width = self.ctx.canvas.width*0.12;
      self.player.heigth =  self.ctx.canvas.height*0.09;
      imgPlayer.src = src="img/player-left.png";
      soundPlayer.play();
    } 
    if (evt.key === "ArrowRight") {
      evt.preventDefault();
      self.player.setDirection(1,0);
      self.player.setImpulse(2.5);
      self.player.width = self.ctx.canvas.width*0.12;
      self.player.heigth = self.ctx.canvas.height*0.09;
      imgPlayer.src = src="img/player-rigth.png";
      soundPlayer.play();
    }
  }

  document.addEventListener('keydown', self.handleKeyDown);
  document.addEventListener('keyup', self.handleKeyUp);
  
 
  //principal loop
   function loop() {
     
    self._clearAll();
    self._updateAll();
    self._drawAll(); 

    if (!self.isGameOver) {
      requestAnimationFrame(loop);
    } else {
      self.gameOverCallback();
    }
   
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
  if(self.score <= 0 || self.player.finish(self.finishZone) === true){
    self.isGameOver = true;
  }
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
  self.obs5.draw();
  self.obs6.draw();
  self.finishZone.draw();
  self.player.draw();
}

Game.prototype.onOver = function (callback) {
  var self = this;

  self.gameOverCallback = callback;
}

Game.prototype.destroy = function () {
  var self = this;

  self.gameElement.remove();
}

