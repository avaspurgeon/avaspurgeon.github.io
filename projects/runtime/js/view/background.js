var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
      var tree;
      var buildings = [];
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'black'); // draws rectangle and stores in variable 
            background.addChild(backgroundFill);// adding background fill variable 
            
            for(var i = 0; i < 100; i++){
                var circle = draw.circle(3, "white", "LightGray", 2);
                circle.x = canvasWidth * Math.random();
                circle.y = groundY * Math.random();
                background.addChild(circle);
            }
           




            // TODO 2: - Add a moon and starfield
            var Jupiter = draw.bitmap("img/Jupiter.png"); //creates a bitmap object using this moon
            Jupiter.x = canvas.width - 500;//sets the moons x position
            Jupiter.y = groundY - 400;// sets the moons y position 
            Jupiter.scaleX = 0.5;//sets the moons width
            Jupiter.scaleY = 0.5;//sets the moons height
            background.addChild(Jupiter);// add the moon to the background container
            
           

            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 5; i++) {
                var buildingColors = ["red", "purple", "yellow", "orange", "pink"]
                var buildingHeight = 300 * Math.random();// assighnn 300 to the buildingHeight variable
                var building = draw.rect(75, buildingHeight, buildingColors[i], "Black", 1);//draw rect 
                building.x = 200 * i;// multipy 200 byt the current i value and store it as the x position for the building 
                building.y = groundY - buildingHeight;// takes the ground Y, subtracts the building 
                background.addChild(building);//add our bulding to the background container 
                buildings.push(building);// add our buildings tot he building array for further mani
              }
            
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png");//creates a bitmap for the tree image and stores it 
            tree.x = canvasWidth - 300;//places the tree off-screen to the right
            tree.y = groundY - 225;//place the tree above the ground(adjust for tree height)
            background.addChild(tree);//add the tree to the ground
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x -=3;// moves the tree to the left by subtracting 3 from its current x position
            if(tree.x < -200 ){
                tree.x = canvasWidth - 100// background loop
            }
            // TODO 4: Part 2 - Parallax
            
            for(var i = 0; i < buildings.length; i++){
                var building = buildings[i];// the in dividual index of the buildings array stored in a variable
                building.x -= 1;// subtracts 1 from the buildingsx position; animate to the left 
                if(building.x < -100) {//checks if the x position of the building is less
                    building.x = canvasWidth;//
                }
            }



        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
