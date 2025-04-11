var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createObstacales(x, y, hitSize, damage, image, rotation, offsetX, offsetY, Xscale, Yscale) {
      var hitZoneSize = hitSize; //define the sixe of the hit zone an d assign to a variable
      var damageFromObstacle = damage; //defines the amount of damage obsticals cause
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates th eobstical hit zone using size and damage as parameters and assigns it to
      obstacleHitZone.x = x; //sets x coordinate of the saw blade
      obstacleHitZone.y = y; //sets the y coordinate of the obstacle
      game.addGameItem(obstacleHitZone); //adds the obstacle hitzone to the game
      var obstacleImage = draw.bitmap(image); //draw thwe image bitmap and store it in the obsiticle variable
      obstacleHitZone.addChild(obstacleImage); //attaches the image to the obstacle hit zone
      obstacleImage.x = offsetX; //position the Image on the hitzones x value by moving it up left pixels
      obstacleImage.y = offsetY; // position the Image on the hitzones y value by moving it up up pixels
      obstacleHitZone.rotationalVelocity = rotation;
      obstacleImage.scaleX = Xscale;
      obstacleImage.scaleY = Yscale;

    }


    function createEnemy(x, y, speed, health) {
    var enemy = game.createGameItem("enemy", 25);// creates your enemy game item and adds it to the game
    var redSquare = draw.rect(50, 50, "red"); //creates a red square and stores it in the variable red square
    redSquare.x = -25; // offsets the image from the hitzone by -25 pixels
    redSquare.y = -25; // offsets the image from the hitzone by -25 pixels
    enemy.addChild(redSquare);// adds the red square as a child to our enemy variable
    enemy.x = x; // x position  of enemy
    enemy.y = y; // y position of enemy
    game.addGameItem(enemy); // add enemy to the game
    enemy.velocityX -= speed;// controlling how fast the enemy moves on the x axis
    enemy.rotationalVelocity = 10;//sets the rotational volocity of the enemy
    enemy.onPlayerCollision = function () {
      game.changeIntegrity(-10)//subtracts 10 health from hallebots health
    };
    enemy.onProjectileCollision = function (){
      game.increaseScore(100);//increases your score when Halle shoots the enemy
      enemy.fadeOut();//enemy fades out when halle shoots enemy 
    //enemy.shrink()
    //enemy.flyTo(0,0)
      };
    }


  function createReward(x, y, speed, health) {
    var reward = game.createGameItem("reward", 25);// creates your reward game item and adds it to the game
    var blueSquare = draw.rect(50, 50, "blue"); //creates a blue square and stores it in the variable blue square
    blueSquare.x = -25; // offsets the image from the hitzone by -25 pixels
    blueSquare.y = -25; // offsets the image from the hitzone by -25 pixels
    reward.addChild(blueSquare);// adds the blue square as a child to our reward variable
    reward.x = x; // x position  of reward
    reward.y = y; // y position of reward
    game.addGameItem(reward); // add reward to the game
    reward.velocityX -= speed;// controlling how fast the reward moves on the x axis
    reward.rotationalVelocity = 10;//sets the rotational volocity of the reward
    reward.onPlayerCollision = function () {
      game.increaseScore(50);
      game.changeIntegrity(-10)//subtracts 10 health from hallebots health
      reward.shrink()
      };
    }



function createLevel(x, y, speed) {
  var level = game.createGameItem("level", 25);// creates your level game item and adds it to the game
  var yellowSquare = draw.rect(50, 50, "yellow"); //creates a yellow square and stores it in the variable blue square
  yellowSquare.x = -25; // offsets the image from the hitzone by -25 pixels
  yellowSquare.y = -25; // offsets the image from the hitzone by -25 pixels
  level.addChild(yellowSquare);// adds the yellow square as a child to our level variable
  level.x = x; // x position  of level
  level.y = y; // y position of level
  game.addGameItem(level); // add level to the game
  level.velocityX -= speed;// controlling how fast the level moves on the x axis
  level.rotationalVelocity = 10;//sets the rotational volocity of the level
  level.onPlayerCollision = function () {
    level.shrink()
    startLevel();
    };
  }


    function startLevel() {
      // TODO 13 goes below here


      var level = levelData[currentLevel];//fetches the current level from the data level and stores it i var level
      var levelObjects = level.gameItems// retreive the array of gameItems and stores it in levelObjects
     
      for(var i = 0; i < levelObjects.length; i++){ 
        var element = levelObjects[i];

        
        if(element.type === "SpaceShip"){//checks the type key: value of the gameItems objects to determine which objects to manifest
          createObstacales(element.x, element.y, element.hitSize, element.damage, element.image, element.rotation, element.offsetX, element.offsetY, element.Xscale, element.Yscale);//if the con dition is true it wil call the relavent function 
        }
        if(element.type === "Alien"){//checks the type key: value of the gameItems objects to determine which objects to manifest
          createObstacales(element.x, element.y, element.hitSize, element.damage, element.image, element.rotation, element.offsetX, element.offsetY, element.Xscale, element.Yscale);//if the con dition is true it wil call the relavent function
        }
        if(element.type === "Mars"){//checks the type key: value of the gameItems objects to determine which objects to manifest
          createObstacales(element.x, element.y, element.hitSize, element.damage, element.image, element.rotation, element.offsetX, element.offsetY, element.Xscale, element.Yscale);//if the con dition is true it wil call the relavent function
        }
        if(element.type === "Asteroid"){//checks the type key: value of the gameItems objects to determine which objects to manifest
          createObstacales(element.x, element.y, element.hitSize, element.damage, element.image, element.rotation, element.offsetX, element.offsetY, element.Xscale, element.Yscale);//if the con dition is true it wil call the relavent function 
        }

        if(element.type === "reward"){//checks the type key: value of the gameItems objects to determine which objects to manifest
          createReward(element.x, element.y, element.speed, element.health);//if the con dition is true it wil call the relavent function 
        }

        if(element.type === "level"){//checks the type key: value of the gameItems objects to determine which objects to manifest
          createLevel(element.x, element.y, element.speed);//if the con dition is true it wil call the relavent function 
        }
      }

      
      
      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}


