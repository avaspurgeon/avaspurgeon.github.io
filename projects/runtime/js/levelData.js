var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [


          { type: "Asteroid", x: 600, y: groundY - 125, hitSize: 25, damage: 20,  image:"img/Asteroid.png",rotation: 0, offsetX: -70, offsetY: -70, Xscale: .5, Yscale: .5},

          { type: "Mars", x: 800, y: groundY, hitSize: 25, damage: 30,  image:"img/Mars.png", rotation: 0, offsetX: -20, offsetY: -25, Xscale: .06, Yscale: .06},

          { type: "SpaceShip", x: 400, y: groundY, hitSize: 25, damage: 30,  image:"img/SpaceShip.png", rotation: 0, offsetX: -90, offsetY: -50, Xscale: 0.5, Yscale: 0.5},

          { type: "Alien", x: 1000, y: groundY, hitSize: 25, damage: 20,  image:"img/Ailen.png", rotation: 0, offsetX: -50, offsetY: -50, Xscale: 0.2, Yscale: 0.2},

       
          { type: "reward", x: 500, y: groundY, hitSize: 25, health: 20,  image:"img/Walkie Talkie.png", rotation: 0, offsetX: -50, offsetY: -50, Xscale: 0.2, Yscale: 0.2},


          { type: "level", x: 1700, y: groundY - 50, speed: 3,offsetX: -50, offsetY: -50, Xscale: 0.2, Yscale: 0.2},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
         
          { type: "SpaceShip", x: 1200, y: groundY, hitSize: 25, damage: 30,  image:"img/SpaceShip.png", rotation: 0, offsetX: -90, offsetY: -50, Xscale: 0.5, Yscale: 0.5},

          { type: "Alien", x: 900, y: groundY, hitSize: 25, damage: 20,  image:"img/Ailen.png", rotation: 0, offsetX: -50, offsetY: -50, Xscale: 0.2, Yscale: 0.2},
          { type: "Alien", x: 1600, y: groundY, hitSize: 25, damage: 20,  image:"img/Ailen.png", rotation: 0, offsetX: -50, offsetY: -50, Xscale: 0.2, Yscale: 0.2},

          { type: "Mars", x: 500, y: groundY, hitSize: 25, damage: 20,  image:"img/Mars.png", rotation: 0, offsetX: -30, offsetY: -30, Xscale: 0.06, Yscale: 0.06},
          { type: "Mars", x: 1800, y: groundY, hitSize: 25, damage: 20,  image:"img/Mars.png", rotation: 0, offsetX: -30, offsetY: -30, Xscale: 0.06, Yscale: 0.06},

          { type: "Asteroid", x: 1500, y: groundY - 125, hitSize: 25, damage: 20,  image:"img/Asteroid.png",rotation: 0, offsetX: -70, offsetY: -70, Xscale: .5, Yscale: .5},




        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
