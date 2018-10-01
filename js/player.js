function  Player(canvas){
  var self = this;
  self.ctx = canvas.getContext("2d");
  self.posX = 20;
  self.posY = 50;
  self.vel = 1;
  self.width = 30;
  self.heigth = 15;
}


Player.prototype.turnLeft = function(){
  var self = this;
  //PREGUNTAR, QUIZAS NO HACE FALTA SI SE BORRA TODO HACER EL CLEARRECT
  self.ctx.clearRect(0,0,self.width,self.heigth);
  //CAMBIAMOS EL PUNTO DE ANCLAJE Y ROTAMOS
  self.ctx.translate(-self.width, self.heigth);
  self.ctx.rotate((-Math.PI/4));
}

Player.prototype.turnRigth = function(){
  var self = this;
  //PREGUNTAR, QUIZAS NO HACE FALTA SI SE BORRA TODO HACER EL CLEARRECT
  //self.ctx.clearRect(0,0,self.width,self.heigth);
  //CAMBIAMOS EL PUNTO DE ANCLAJE Y ROTAMOS
  self.ctx.translate(self.width, self.heigth);
  self.ctx.rotate(Math.PI/4);
};

Player.prototype.moveFoward = function(){
  var self = this;
  self.posX+= self.vel;
  self.ctx.translate(self.posX,0)
};

Player.prototype.moveAward = function(){
  var self = this;
  self.posX -= self.vel;
  self.ctx.translate(-self.vel,0)
};

Player.prototype.draw = function(){
  var self = this;
  self.ctx.fillRect(self.vel,self.posY,self.width,self.heigth);
};

function update(){
};

function updatePos(){
};

function checkCollision(){
};
