function  Player(canvas){
  var self = this;
  self.ctx = canvas.getContext("2d");
  self.posX = 5;
  self.posY = 5;
  self.vel = 5;
  self.width = 50;
  self.heigth = 25;
}

function updatePos(){
};
Player.prototype.turnLeft = function(){
  var self = this;
  //PREGUNTAR, QUIZAS NO HACE FALTA SI SE BORRA TODO HACER EL CLEARRECT
  self.ctx.clearRect(0,0,self.width,self.heigth);
  //CAMBIAMOS EL PUNTO DE ANCLAJE Y ROTAMOS
  self.ctx.translate(rectWidth, rectHeight);
  self.ctx.rotate((Math.PI/4)*-1);
}

Player.prototype.turnRigth = function(){
  var self = this;
  //PREGUNTAR, QUIZAS NO HACE FALTA SI SE BORRA TODO HACER EL CLEARRECT
  self.ctx.clearRect(0,0,self.width,self.heigth);
  //CAMBIAMOS EL PUNTO DE ANCLAJE Y ROTAMOS
  self.ctx.translate(rectWidth, rectHeight);
  self.ctx.rotate(Math.PI/4);
};

function checkCollision(){
};

Player.prototype.moveFoward = function(){
  var self = this;
  self.x+= vel;
};

Player.prototype.moveAward = function(){
  var self = this;
  self.x -= vel;
};

Player.prototype.draw = function(){
  var self = this;
  self.ctx.fillRect(self.posX,self.posY,self.width,self.heigth);
};

function update(){
};