let dora;
let diego;// Declare variable 'img'.
let clippy
var r;
var b;
var g;
var x;
var y;
var up;
var count;
var stop = false;
let fontsize = 60;
let sun;

/*
george = map(mouseX, 0, width, 0, TWO_PT)
translate(width/2, height/2)
rotate(george)
scale(george)
rect(mouseX, 0, 100, 300)
*/
function preload() {
	dora = loadImage('dora.png'); // Load the image
	diego = loadImage('diego.png');
	clippy = loadImage('clippy.png');
	sun = loadImage('sun.png');
}


function setup() {
  createCanvas(600, 400);
  background(135, 206, 250);
  rectMode(CENTER)
  noStroke()
  fill('#eddfa1')
  rect(300, 200, 600, 250);
  fill('#9fed89')
  rectMode(CORNER)
  rect(0, 325, 600, 75)
  r = 255;
  g = 255;
  b = 255;
  var ourc = color(r, g, b); //color that we can change
  up = false;
  x = width / 2;
  y = height / 2;
  fill(ourc)
  count = 0;
  var us = rect(x, y, 15, 10, 15, 15, 15, 0)
  image(dora, 550, 330, dora.width / 25, dora.height / 25);
  image(diego, 5, 330, diego.width / 30, diego.height / 30);
  image(clippy, 525, 5, clippy.width / 5, clippy.height / 5);
	image(sun, 5, 5, sun.width/12, sun.height/12);
  //fill(0);
  //textSize(fontsize);
  // text("TEST", LEFT, 80);

}

function draw() {
  if (!stop) {
    c = color((random(0, 255)), (random(0, 255)), (random(0, 255)))
    rx = random(10, width - 10);
    //rx = randomGaussian(width/2, 30);
    ry = random(75 + 15, 325 - 15);
    //ry = randomGaussian(height/2, 30);
    //console.log(c)
    shape = random(['rect', 'circle', 'ellipse', 'line', 'curve'])
    if (keyIsDown(65)) {
      if (up) {
        if (r < 256) {
          r++;
        }
      } else {
        if (r > -1) {
          r--;
        }
      }
    }
    if (keyIsDown(83)) {
      if (up) {
        if (g < 256) {
          g++;
        }
      } else {
        if (g > -1) {
          g--;
        }
      }
    }
    if (keyIsDown(68)) {
      if (up) {
        if (b < 256) {
          b++;
        }
      } else {
        if (b > -1) {
          b--;
        }
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      if (x < width - 15) {
        x++;
      }
    } else if (keyIsDown(LEFT_ARROW)) {
      if (x >= 0) {
        x--;
      }
    }
    if (keyIsDown(UP_ARROW)) {
      if (y > 75) {
        y--;
      }
    } else if (keyIsDown(DOWN_ARROW)) {
      if (y < 315) {
        y++;
      }
    }
    fill(c)
    if (count % 12 == 0 && count <= 6000) {
      rect(rx, ry, 11, 11, 20, 15, 10, 5)
    }
    count++;
    ourc = color(r, g, b);
    fill(ourc)
    rect(x, y, 15, 10, 25, 5, 25, 5)
  }
	textSize(16);
	textAlign(CENTER)
	text("Help us draw a mural!", 60, 30, 200, 50)
  text("Use the arrow keys to move around!", 350, 15, 200, 50)
	text("Use the a, s, and d keys to play with the RBG values!", 70, 340, 200, 50)
	text("Use the f key to switch between darker and ligher!", 340, 340, 200, 50)
}

function keyPressed() {
  if (keyCode == 70) {
    up = !up;
  }
  if (keyCode == 32) {
    stop = true;
  }
}