function  Player(canvas){
  var self = this;
  self.ctx = canvas.getContext("2d");
  self.posX = 0;
  self.posY = 0;
  self.vel = 5;
  self.width = 20;
  self.heigth = 10;
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

  //PREGUNTAR, QUIZAS NO HACE FALTA SI SE BORRA TODO HACER EL CLEARRECT
  self.ctx.clearRect(0,0,self.width,self.heigth);
  //CAMBIAMOS EL PUNTO DE ANCLAJE Y ROTAMOS
  self.ctx.translate(rectWidth, rectHeight);
  self.ctx.rotate(Math.PI/4);
};

function checkCollision(){
};

Player.prototype.moveFoward = function(){
  self.x+= vel;
};

Player.prototype.moveAward = function(){
  self.x -= vel;
};

function draw(){
  self.ctx.fillRect(self.x,self.y,rectWidth,rectHeight);
};
function update(){
};