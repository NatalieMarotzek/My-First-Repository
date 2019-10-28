var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//create player object
var player = {
    "pos_x": 250,
    "pos_y": 250,
    "color": "cyan",
    "unit_size": 5,
    "draw": function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this["pos_x"], this["pos_y"], this.unit_size, this.unit_size);
    },
    "update": function() {
        //we need to make sure the sprite can't leave the screen, or at least be returned to where it exited from
        //this formula will work for any sized canvas, so copy it!
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

//set interval for game update
setInterval(updateGameState, 1000 / 25);

//this clear the previous frame when you move the sprite, preventing afterimage
function updateGameState() {
    ctx.clearRect(0, 0, c.width, c.height);
    player.update();
    player.draw();
};

//set up event detection for pressing a key on the keyboard
document.addEventListener("keypress", function(event) {
console.log(event.keyCode);

//movement keys
//pressing G = return to middle
if (event.keyCode == 103) {
  //alert("this returns you to middle");
  player.pos_x = (c.width/2);
  player.pos_y = (c.height/2);
}

//pressing W = move up
if (event.keyCode == 119) {
  //alert("you pressed 'up'");
  player.pos_y -= player.unit_size;
}

//pressing S = move down
if (event.keyCode == 115) {
  //alert("you pressed 'down'");
  player.pos_y += player.unit_size;
}

//pressing A = move left    
if (event.keyCode == 97) {
  //alert("you pressed 'left'");
  player.pos_x -= player.unit_size;
}

//pressing D = move right
if (event.keyCode == 100) {
  //alert("you pressed 'right'");
  player.pos_x += player.unit_size;
}
});