function Obstacle(canvas){
  var self = this;
  self.ctx = canvas.getContext("2d");
  self.posX = 0;
  self.posY = 0;
  self.vel = 5;
  self.width = 0;
  self.heigth = 0;
}