function  Player(canvas){
  var self = this;
  self.ctx = canvas.getContext("2d");
  self.posX = 10;
  self.posY = 10;
  self.dx = 0;
  self.dy = 0;
  self.vel = 1.4;
  self.friction = 0.15;
  self.impulse = 1.3;
  self.width = 30;
  self.heigth = 15;
}

var imgPlayer = new Image
imgPlayer.src = src="img/player-rigth.png"


Player.prototype.setDirection = function (dx, dy) {
  var self = this;

  self.dx = dx;
  self.dy = dy;
}

Player.prototype.setImpulse = function (impulse) {
  var self = this;
  self.impulse = impulse;
}

Player.prototype.draw = function(){
  var self = this;
  self.ctx.fillStyle ="blue";
  self.ctx.drawImage(imgPlayer,self.posX,self.posY,self.width,self.heigth);
};

Player.prototype.update = function () {
  var self = this;

  self.posX += self.impulse * self.vel * self.dx;
  self.posY += self.impulse * self.vel * self.dy;

  if (self.impulse > 0) {
    self.impulse -= self.friction;
  } else {
    self.impulse = 0;
  }

}
Player.prototype.checkLimit= function() {
  var self = this;
  if(self.posX < 0 ){
    self.posX = 0;
  }else if(self.posY < 0){
    self.posY = 0;
  }else if((self.posX + self.width) > self.ctx.canvas.width){
    self.posX = (self.ctx.canvas.width - self.width);
  } else if((self.posY +  self.heigth ) > self.ctx.canvas.height){
    self.posY = self.ctx.canvas.height - self.heigth ;
  }
}

Player.prototype.checkCollision = function (obs) {
  var self = this;

  var crashRight = self.posX + self.width > obs.posX;
  var crashBottom = self.posY + self.heigth> obs.posY;
  var crashTop = self.posY < obs.posY + obs.heigth;
  var crashLeft = self.posX < obs.posX + obs.width;

  if (crashLeft && crashRight && crashTop && crashBottom) {
    return true;
  }
  }
  
Player.prototype.collided = function (obs){
  var self = this;
  self.posX += (self.impulse * self.vel)/4  -self.dx*2.5;
  self.posY += (self.impulse * self.vel)/4  -self.dy*2.5;
}
Player.prototype.finish = function (obs){
  var self = this;
  var leftSide = self.posX >= obs.posX;
  var rightSide = self.posX + self.width <= obs.posX + obs.width;
  var upSide = self.posY >= obs.posY;
  var downSide = self.posY + self.heigth >= obs.posY + obs.heigth;
  
  if (leftSide && rightSide && upSide && downSide) {
    return true;
  }
}

