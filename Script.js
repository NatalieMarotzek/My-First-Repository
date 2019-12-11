var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//create player object (remember to use American spelling)
//this a test sprite until the actual player sprite is created
var player = {
    "pos_x": (c.height/2),
    "pos_y": (c.width/2),
    "color": "cyan",
    "unit_size": 15,
    "draw": function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this["pos_x"], this["pos_y"], this.unit_size, this.unit_size);
    },
    "update": function() {
        //we need to make sure the sprite can't leave the screen, or at least be returned to where it exited from
        //this formula will work for any sized canvas, so copy it into your player script under the 'Draw' function!
        //checking up
        if (player.pos_y < 0) {
            player.pos_y = 0;
        }
        //checking down
        if (player.pos_y > (c.height - this.unit_size)) {
            player.pos_y = (c.height - this.unit_size);
        }
        //checking left
        if (player.pos_x < 0) {
            player.pos_x = 0;
        }
        //checking right
        if (player.pos_x > (c.width - this.unit_size)) {
            player.pos_x = (c.width - this.unit_size);
        }
    },
};

//set up a class for background sprites
class backgroundSprite {
  "pos_x" = 0;
  "pos_y" = 0;
  "width" = 20;
  "height" = 20;
  "image" = "#";
  "draw" = function(){
      var pat = ctx.createPattern(this.image, "repeat");
      ctx.fillStyle = pat;
      ctx.fill();
      ctx.fillRect(this.pos_x, this.pos_y, this.width, this.height);
  }
};

//make an array of backgroundSprites
var bgSprites = [];

//make a function for adding background sprites
function addBGSprite(imagepath = '',pos_x = 0,pos_y = 0,width = 20, height = 20) {
  var bgs = new backgroundSprite();
  bgs.pos_x = pos_x;
  bgs.pos_y = pos_y;
  bgs.width = width;
  bgs.height = height;bgs.image = document.getElementById(imagepath);
  bgSprites.push(bgs);
}

addBGSprite("Cave", 0, 0, c.height, c.width);


console.log(bgSprites);
//set interval for game update
setInterval(updateGameState, 1000 / 25);

//this clears the previous frame when you move the sprite, preventing afterimage
function updateGameState() {
    ctx.clearRect(0, 0, c.width, c.height);
    //draw background
    for (var i = 0; i < bgSprites.length; i++) {
      bgSprites[i].draw();
    }
    //do player
    player.update();
    player.draw();
};

//set up event detection for pressing a key on the keyboard
//this was made on the Google Chrome, just so it is known.  I don't know if it effects the numerical value of the keys at all
document.addEventListener("keypress", function(event) {
console.log(event.keyCode);

//movement keys
//pressing G = action button
if (event.keyCode == 103 && true) {
  //this is where you put the code to pick up the item
  //picks up what you are standing in front of
}

//pressing W = move up
if (event.keyCode == 119) {
  //insert sprite frames here!
  player.pos_y -= player.unit_size;
}

//pressing S = move down
if (event.keyCode == 115) {
  //insert sprite frames here!
  player.pos_y += player.unit_size;
}

//pressing A = move left    
if (event.keyCode == 97) {
  //insert sprite frames here!
  player.pos_x -= player.unit_size;
}

//pressing D = move right
if (event.keyCode == 100) {
  //insert sprite frames here!
  player.pos_x += player.unit_size;
}
});