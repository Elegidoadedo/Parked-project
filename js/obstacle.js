function Obstacle(canvas, posX, posY, isParking ){
  var self = this;
  self.ctx = canvas.getContext("2d");
  self.posX = posX;
  self.posY = posY;
  self.width = 40;
  self.heigth = 20;
  self.direction= 1;
  self.isParking = isParking;
  self.initialPosX= posX;
}
Obstacle.prototype.draw = function(){
  var self = this;
  self.ctx.fillStyle= "red";
  self.ctx.fillRect(self.posX ,self.posY,self.width,self.heigth);
};

Obstacle.prototype.move = function(){
  var self = this;
  self.posX += self.direction;
  if ( self.posX === (self.initialPosX +60) ){
   self.direction = -1;
  } else if( self.posX === self.initialPosX){
    self.direction = 0.5;
  }
}
  