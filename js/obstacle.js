function Obstacle(canvas, posX, posY, isParking ){
  var self = this;
  self.ctx = canvas.getContext("2d");
  self.posX = posX;
  self.posY = posY;
  self.width = self.ctx.canvas.width*0.15;
  self.heigth = self.ctx.canvas.height*0.12;
  self.direction= 1;
  self.isParking = isParking;
  self.initialPosX = posX;
  self.initialWidth = self.width; 
  self.growDir = 1;
  self.carts= false;
}
var imgFinish = new Image();
imgFinish.src = src="img/finish-line.png";
var imgObs = new Image();
imgObs.src = src="img/car1-hor.png";
var imgCarts= new Image();
imgCarts.src = src="img/carts.png";

Obstacle.prototype.draw = function(){
  var self = this;
  if( self.isParking === true){
    self.width = self.ctx.canvas.width*0.19;
    self.heigth = self.ctx.canvas.width*0.115;
    self.ctx.drawImage(imgFinish,self.posX ,self.posY,self.width,self.heigth);
  } else if(self.carts === true){
    self.ctx.drawImage(imgCarts,self.posX ,self.posY,self.width,self.heigth);
  }
   else{
  self.ctx.drawImage(imgObs,self.posX ,self.posY,self.width,self.heigth);
  }
};

Obstacle.prototype.move = function(){
  var self = this;
  self.posX += self.direction;
  if ( self.posX === (self.initialPosX +(self.ctx.canvas.width*0.15)) ){
   self.direction = -3;
  } else if( self.posX === self.initialPosX){
    self.direction = 2;
  }
}
Obstacle.prototype.grow = function(){
  var self = this;
  self.width += self.growDir;
  if ( self.width === self.initialWidth+(self.ctx.canvas.width*0.2) ){
   self.growDir = -3;
  } else if( Math.round(self.width) === Math.round(self.initialWidth)){
    self.growDir = 2;
  }
}