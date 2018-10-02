function Line(canvas, posX, posY, width,heigth){
  var self = this;
  self.ctx = canvas.getContext("2d");
  self.posX = posX;
  self.posY = posY;
  self.width = width;
  self.heigth = heigth;
}


Line.prototype.draw= function(){
  var self = this;
  self.ctx.fillStyle= "white";
  self.ctx.fillRect(self.posX ,self.posY,self.width,self.heigth); 
}