function  Player(canvas){
  var self = this;
  self.ctx = canvas.getContext("2d");
  self.posX = 10;
  self.posY = 10;
  self.dx = 0;
  self.dy = 0;
  self.vel = 5;
  self.friction = 0.01;
  self.impulse = 2;
  self.width = 20;
  self.heigth = 10;
}


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
  self.ctx.fillRect(self.posX,self.posY,self.width,self.heigth);
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

function update(){
};

function updatePos(){
};

function checkCollision(){
};
