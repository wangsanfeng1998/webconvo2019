var r;
var b;
var g;
var x;
var y;
var up;
var count;
var stop = false;
let fontsize = 60;
var up_arr = false;
var down_arr = false;
var left_arr = false;
var right_arr = false;

/*
george = map(mouseX, 0, width, 0, TWO_PT)
translate(width/2, height/2)
rotate(george)
scale(george)
rect(mouseX, 0, 100, 300)
*/


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
  //fill(0);
  //textSize(fontsize);
  // text("TEST", LEFT, 80);

}

function draw() {
  up_arr = false;
  down_arr = false;
  left_arr = false;
  right_arr = false;
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
        right_arr = true;
      }
    } else if (keyIsDown(LEFT_ARROW)) {
      if (x >= 0) {
        x--;
        left_arr = true;
      }
    }
    if (keyIsDown(UP_ARROW)) {
      if (y > 75) {
        y--;
        up_arr = true;
      }
    } else if (keyIsDown(DOWN_ARROW)) {
      if (y < 315) {
        y++;
        down_arr = true;
      }
    }
    fill(c)
    if (count % 60 == 0 && count <= 6000) {
      rect(rx, ry, random(100), random(325-ry), random(60), random(60), random(60), random(60))
    }
    count++;
    ourc = color(r, g, b);
    fill(ourc)
    rect(x, y, 15, 10, 25, 5, 25, 5)
  }
  textSize(48);
  textAlign(CENTER)
  fill(r, 255, 255)
  text("a", 40, 375)
  fill(255, g, 255)
  text("s", 100, 375)
  fill(255, 255, b)
  text("d", 160, 375)
  if (up) { //black
    fill(255,255, 255)
  } else {
    fill(0,0,0)
  }
  text("f", 300, 375)
  textSize(36)
  if (up_arr) { 
    fill(0,0, 0)
  } else {
    fill(255, 255,255)
  }
  text("^", 500, 365)
  textSize(30)
  if (left_arr) { 
    fill(0,0, 0)
  } else {
    fill(255, 255,255)
  }
  text("<", 480, 375)
  if (right_arr) { 
    fill(0,0, 0)
  } else {
    fill(255, 255,255)
  }
  text(">", 520, 375)
  if (down_arr) { 
    fill(0,0, 0)
  } else {
    fill(255, 255,255)
  }
  text("v", 500, 395)
}

function keyPressed() {
  if (keyCode == 70) {
    up = !up;
  }
  if (keyCode == 32) {
    stop = true;
  }
}