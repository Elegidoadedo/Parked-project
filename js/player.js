function  Player(canvas){
  var self = this;
  self.ctx = canvas.getContext("2d");
  self.posX = self.ctx.canvas.width*0.1;
  self.posY = self.ctx.canvas.height*0.1;
  self.dx = 0;
  self.dy = 0;
  self.vel = 4.5;
  self.friction = 0.1;
  self.impulse = 3;
  self.width = self.ctx.canvas.width*0.12;
  self.heigth = self.ctx.canvas.height*0.09;
  self.imgPlayer = null;
  
}
Player.prototype.initialimg = function (){
  var self = this;
  imgPlayer = new Image;
  imgPlayer.src = src="img/player-rigth.png";
}
var soundPlayer = new Audio;
soundPlayer.src= src=('snd/ruum.mp3');
var soundHorn = new Audio;
soundHorn.src = src=('snd/horn.mp3');

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


// Player.prototype.collided = function (obs){
//   var self = this;
//   if(imgPlayer.src = src="img/player-rigth.png"){
//     self.posX -= self.impulse+20 ;
//   } else if(imgPlayer.src = src="img/player-left.png"){
//     self.posX += self.impulse*20 ;
//  } else if(imgPlayer.src = src="img/player-up.png"){
//     self.posY += (self.impulse * self.vel)/2 + (self.dy * -1);
//   } else if( imgPlayer.src = src="img/player-up.png"){
//     self.posY += (self.impulse * self.vel)/2 + (self.dy * -1);
//   }
// }

Player.prototype.finish = function (obs){
  var self = this;
  var leftSide = self.posX >= obs.posX;
  var rightSide = self.posX + self.width <= obs.posX + obs.width;
  var upSide = self.posY >= obs.posY;
  var downSide = self.posY + self.heigth <= obs.posY + obs.heigth;
  
  if (leftSide && rightSide && upSide && downSide) {
    return true;
  }
}

