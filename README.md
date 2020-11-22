# Snake2D
My version of classic snake game using my game engine
* The best way to showcase the game engine and its features is by building *my versions* of the famous game ***Snake***

![alt text](https://github.com/ssudher/Snake2D/blob/main/Snake2D/Snake2D.PNG)

## You want to try that game yourself?
* Just download this repository - [Snake2D](https://github.com/ssudher/Snake2D)
* Download the entire repo and then Click on the **Snake2D.exe** in the folder and start playing

## Rules, features, gameplay and controls:
*'A' - Move left, 'D' - Move right, 'W' - Move up, 'S' - Move down*
* The snake moves using the keys ‘W’, ‘A’, ‘S’, ‘D’. You cannot move in such a way that the snake’s head goes through the body, which means when you are already moving towards the right, left key (‘A’) will not trigger any movement.
* Food pellets are worth 1 point and the bigger one is worth 5 points.
* Collect the pellets to grow in size and try to hit your maximum point. 
* When the side walls or the head meets its own body, the game is simply reset, and you can view your score in the console.
* ‘G’ activates the GODMODE, which when switched on the snake can pass through itself and not die.
* ‘UP’ arrow and ‘DOWN’ arrow controls the speed/difficulty of the game.


## What's under the hood?
* The boundaries of the game were just death-zones. Colliding with the death zone simply kills you.
* Every movement and death/spawn is an event in the game engine.
* Food pellets are just circles (character object) whose position is decided at random based on the height and width of the screen.
* The challenge was to build the snake itself. Let us break down the snake. It is not a single object, because the snake is not rigid, it needs to move in such a way that at a point the front of the snake can be moving up and the back of the snake might be moving right side.
* The snake is made up of bunch of individual character circles. Each of the circle has its own properties. Each of the circle derives its properties from the game object model.
* The idea I went with is to add a new character circle at the end of the snake’s body each time a food pellet is consumed.
* So, I need to keep track of the last body part, to do this I maintained a pointer which kept track of the last added body part.
* Important point here is that the head of the snake is not the same as the rest of the body. The head of the snake’s movement is controlled by the user.
* Rest of the body in my design follows the one before it.
* I used a simple algorithm where in each loop, the I’s position is updated using the head and the rest of it updated using the predecessor.
* This was we have a good snake movement.
* With the good collision detection module of the game engine, it was very easy to extend it to work for the head colliding with one of the body objects.
* The snake’s head position and the body’s position is updated to the server in every loop.


***Interested in knowing how the game-engine is designed?, take a look "under" the hood of [my game engine](https://github.com/ssudher/CSC591)***
