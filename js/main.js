//function to create screen with code as argument
function buildScreen(code){ 
  var div= document.createElement('div');
  div.innerHTML= code;
  return div.children[0];
}

function main(){
   var canvas = document.querySelector('.main');
   var startScreen;
//buildSplah wil creates the splash screen

   function buildSplash(){
     startScreen = buildScreen(
      `<div>
      <h1 class="h1-splash">PARKED!</h1>
        <h2 class="h2-splash">¡APARCAO!</h2>
        <button class="btn-start">Start Game</button>
       </div>`
       );
        canvas.appendChild(startScreen);
        var btnStart = document.querySelector(".btn-start");
        btnStart.addEventListener('click', )

   };
//buildGaneOver will creates Game Over Screen
   function buildGameOver(){
     gameOverScreen= buildScreen(
       `<div>
       <h1>Game Over!</h1>
       <h2>Your Score is XX.</h2>
       <button class="btn-restart>Restart Game</button>
       </div>`
     )

   }

buildSplash();


}

window.addEventListener('load', main);