//function to create screen with code as argument
function buildScreen(code){ 
  var div= document.createElement('div');
  div.innerHTML= code;
  return div.children[0];
}

function main(){
   var canvas = document.querySelector('.main');
   var startScreen = null;
   var gameOverScreen = null;
   var btnStart = null;
   var btnRestart = null;
   var score = null;

//DESTROY FUNCTIONS

   function destroySplash(){
   
//PREGUNTAR POR QUE HAY QUE QUITAR EL EVENT SI NO HAY BOTÓN ****
  btnStart.removeEventListener('click',clickStart);
  startScreen.remove();
};

function destroyGameOver(){
  btnRestart.removeEventListener('click', clickRestart)
  gameOverScreen.remove();
}
//CREATE THINGS FUNCTIONS

function buildGame(){
  console.log("holaaa! juego llamado!");
  var game = new Game(canvas);
  }

//destruye splash y crea game screen

function clickStart(){
  destroySplash();
  buildGame();
}

function clickRestart(){
  destroyGameOver();
  buildGame();
}
//buildSplash wil creates the splash screen

   function buildSplash(){
     startScreen = buildScreen(
      `<div class="back-splash">
      <h1 class="h1-splash">PARKED!</h1>
        <h2 class="h2-splash">¡APARCAO!</h2>
        <button class="btn-start">Start Game</button>
       </div>`
       );
        canvas.appendChild(startScreen);
        btnStart = document.querySelector(".btn-start");
        btnStart.addEventListener('click', clickStart )

   };
//buildGaneOver will creates Game Over Screen
   function buildGameOver(){
     gameOverScreen= buildScreen(
       `<div class="back-gameOver">
       <h1>Game Over!</h1>
       <h2>Your Score is </h2>
       <span class="value"></span>
       <button class="btn-restart">Restart Game</button>
       </div>`
       );
       canvas.appendChild(gameOverScreen);
       btnRestart = document.querySelector(".btn-restart");
       btnRestart.addEventListener('click', clickRestart);
   };
//
buildSplash();


}

window.addEventListener('load', main);