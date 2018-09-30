function Game(parent) {
  var self = this;
  self.parentElement = parent;
  self.gameElement = null
}

Game.prototype._init = function() {
  var self = this;

  self.fameElement = buildScreen(
   `<div>
   <header><p>"SCORE: "</p>score </header>
   <div class="game__canvas">
   <canvas class="canvas"></canvas>
   </div>
   </div> `
  )
}







score = 1000;
if(score <= 0){
  buildGameOver();
};