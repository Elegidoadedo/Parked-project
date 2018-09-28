# Project's name
​PARKED!
APARCAO!
## Description
El juego consiste en aparcar tu flamante vehículo en el único sitio libre del parking. Cuidado no lo rayes! o te restarán puntos.
​
​The objetive of the game is to park your flamboyant car inside the only available free parking. Don't scratch the car or points will decreased.
## MVP (DOM - CANVAS)
CANVAS.
​
MVP- Create the stage with a "finish zone" to complete the stage. Make the vehícule moves and turns around yourself.
​
## Backlog
​-Implement images instead of geometric figures.
-Make a realistic direction changing of the car.
  -Using rotate method
  -Using trigonometry to define it.
-Do more stages.
​
## Data structure

PLAYER------------------------------------------------------------------------------------------------------------------------------------------

  -Object properties
    - x       -> horizontal position value.
    - y       -> vertical position value.
    - vel     -> Will receives negative/positive direction. (front/reverse gear).
    - ctx     -> Will contains canvas contexts 2d.
    - width   -> Contains the width 2.
    - heigth  -> contains the heigth of player's car, in this case 1.

  -updatePos()         -> Will clean/render the frames.
  -turnRight()         -> Triggers with rightArrow, applies a rotation movement of 22,5 degrees (turning right the car when moves).
  -turnLeft()          -> Triggers with leftArrow, applies a rotation movement of 22,5 degrees (turning left the car when moves).
  -checkParking()      -> Triggers if player position is inside the finish-zone position. (complete the stage)
  -checkCollision()    -> Checks player doesn't crash the fabolous car with map's obstacle.
  -moveFoward()        -> Makes the car moves fowards.
  -moveBackward()      -> Makes the car moves Backwards.
  -draw()              -> Draw the car element into canvas.
  -update()            -> Modify the position of our car.

OBSTACLE----------------------------------------------------------------------------------------------------------------------------------------

  -Object properties
    - x         -> horizontal position value.
    - y         -> vertical position value.
    - width     -> Simply the width of the object.
    - heigth    ->Contians the heigth of the object.
    - isParking -> boolean. Is true is the object is the finish zone.
    - ctx       -> Will contains canvas contexts 2d.
   
  - draw()    -> will draw the object.

Objects will be manually positioned, depending of the stage. ( It will not be randomized)


GAME---------------------------------------------------------------------------------------------------------------------------------------------
  
  -Properties
    - score             -> will set up at 1000 points ( will rest if player crashes and during time)
    - player            -> Will have the player object.
    - obstacle[]        ->Will have obstacle objects and finish zone.
    - gameOver callback ->contains the callback gameOver.
  
  - startLoop()          -> Will init the loop of player.
  - start()              -> Will startthe game.
  - destroy()            -> Will destroy game.
  - gameOver()           -> Will call destroy ( Triggers with scorer = 0 ) 
  - renderAll()          -> Will draw all items.
  - updateAll()          -> Will update all items positions.
  - clearAll()           -> Will erase the screen.
  - loop()               -> Will contains renderAll(), updateAll(), clearAll().


MAIN--------------------------------------------------------------------------------------------------------------------------------------------
​   -buildSplash()      -> Will create Splash screen.
   -destroySplash()    -> Will erase Splash screen.
   -buildGame()        -> Will create Game screen.
   -destroyGame()      -> Will erase Splash screen.
   -buildGameOver()    -> Will create Game Over screen.
   -destroyGameOver()  -> Will erase Game Over screeen.

​
## States y States Transitions
Definition of the different states and their transition (transition functions)
​
- splashScreen -> Tittle + Button to start game
       -buildSplash()      -> Will create Splash screen.
       -destroySplash()    -> Will erase Splash screen.
       -buildGame()        -> Will create Game screen.
- gameScreen -> Display the game ( + go to next stage?)

- gameoverScreen -> Display Game over tittle + score + restart

​
​
## Task
-
​
​
## Links
​
​
### Trello
[Link url] https://trello.com/b/dgkobbRf/parked-project
​
​
### Git
URls for the project repo and deploy
[Link Repo] https://github.com/Elegidoadedo/Parked-project
[Link Deploy](http://github.com)
​
​
### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
