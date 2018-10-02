function Obstacle(canvas, posX, posY, isParking ){
  var self = this;
  self.ctx = canvas.getContext("2d");
  self.posX = posX;
  self.posY = posY;
  self.width = 30;
  self.heigth = 15;
  self.direction= 1;
  self.isParking = isParking;
  self.initialPosX = posX;
  self.initialWidth = self.width; 
  self.growDir = 1;
}
Obstacle.prototype.draw = function(){
  var self = this;
  if( self.isParking === true){
    self.ctx.fillStyle= "green";
    self.width = 80;
    self.heigth = 36;
    self.ctx.fillRect(self.posX ,self.posY,self.width,self.heigth);
  } else{
  self.ctx.fillStyle= "red";
  self.ctx.fillRect(self.posX ,self.posY,self.width,self.heigth);
  }
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
Obstacle.prototype.grow = function(){
  var self = this;
  self.width += self.growDir;
  if ( self.width === (self.initialWidth +60) ){
   self.growDir = -1;
  } else if( self.width === self.initialWidth){
    self.growDir = 1;
  }
}