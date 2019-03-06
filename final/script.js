
var matrix = [];
var i;
var price;

//src, horizontal, vertical, width, height, value
bulls = ["bulls.jpg", 950, 90, 97, 150, 200]
basketball = ["basketball.png", 950, 300, 50, 50, 10]
switc = ["switch.png", 1000, 250, 100, 100, 300]

function preload() {
for(var i=0; i<4; i++) {
    matrix[i] = new Array(6);
}

for(var i = 0; i < matrix.length; i++) {
  for(var j = 0; j <matrix[0].length; j++) {
    matrix[i][j] = bulls;
  }
}
 
price = createDiv(" ");
price.position(810, 510)
matrix[0][0] = basketball;
matrix[1][0] = switc;
}


function setup() {
  createCanvas(1270, 500);
  background(14, 82, 165);
  fill(255, 255, 255);
  let w = 600;
  let cutoff = 800
  let bottom_left_x = (cutoff - w) / 2;
  let top_left_y = 70;
  let h = 370
  let bottom_left_y = top_left_y + h;
  let bottom_right_x = bottom_left_x + w;
  let bottom_right_y = top_left_y + h;
  fill(33, 31, 31)
  //floor
  quad(0, 500, bottom_left_x, bottom_left_y, bottom_right_x, bottom_right_y, 800, 500);
  //main building
  fill(56, 53, 53)
  rect(bottom_left_x, top_left_y, w, h);
  //left building 
  quad(0, 0, bottom_left_x, top_left_y, bottom_left_x, bottom_left_y, 0, height)
  //right building
  quad(800, 0, bottom_right_x, top_left_y, bottom_right_x, bottom_right_y, 800, height)
  fill(0)
  let block = rect(800, 0, 470, 500)
  //window measurements
  let ww = 60
  let wh = 60
  //balcony measurements
  let bw = ww + 10
  let bh = 10
  //horizontal space between each window
  let s = 30
  //vertical space between each row
  let y = 20
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 6; i++) {
      temp = createDiv('');
      temp.position(bottom_left_x + (w - (ww * 6 + s * 5)) / 2 + (i * s) + (i * ww)+ 10, top_left_y + 10 + (wh*j) + (bh*j) + (y*j)+10);
      temp.size(ww, wh);
      temp.style("background-color", "black");
      temp.class('window');
      temp.mouseClicked(function() {displayRoom(j, i)})
      //temp.mouseOver(hover(matrix, j, i));
      //console.log(matrix)
      //matrix[j][i] = temp;

      /* 
      railing = createDiv()
      railing.position(bottom_left_x + (w - (ww * 6 + s * 5)) / 2 + (i * s) + (i * ww) - 5 + 10, top_left_y + 10 + wh + (wh*j) + (bh*j) + (y*j) + 10)
      temp.size(bw, bh);
      temp.style("background-color", "#a85d01");
      */

      /*
      fill(0)
      rect(bottom_left_x + (w - (ww * 6 + s * 5)) / 2 + (i * s) + (i * ww), top_left_y + 10 + (wh*j) + (bh*j) + (y*j), ww, wh)
      fill(168, 93, 1)
      rect(bottom_left_x + (w - (ww * 6 + s * 5)) / 2 + (i * s) + (i * ww) - 5, top_left_y + 10 + wh + (wh*j) + (bh*j) + (y*j), bw, bh)
      */
    }
  }
  intro = createDiv("Mirror, mirror, on the wall, who's the richest of them all?")   
  intro.size(400, 50)
}

function displayRoom(row, column) {
  //i.remove()
  fill(84, 76, 76)
  rect(800, 0, 470, 500)
  //door
  fill(33, 21, 15)
  rect(1170, 150, 75, 150)
  fill(0)
  circle(1180, 225, 5)
  //board
  fill(63, 48, 48)
  rect(850, 75, 220, 170)
  //mattress
  fill(255)
  rect(900, 350, 300, 80, 25)
  rect(870, 350, 30, 80, 25)
  console.log(matrix[row][column])
  console.log("clicked")
  // temp = createDiv(row + column);
  // temp.style('id', 'interior')
  // temp.size(100, 100)
  i = createImg(matrix[row][column][0]);
  //i.parent('interior')
  //temp.size(20, 20)
  i.position(matrix[row][column][1], matrix[row][column][2]);
  i.size(matrix[row][column][3], matrix[row][column][4]);
  i.mouseOver(function() {hover(row, column)});
  i.mouseOut(function() {clearValue()});
}

function hover(row, column) {
  console.log("hovered")
  price.html("$" + matrix[row][column][5]);
  console.log(temp.position)
}

function clearValue() {
  console.log("cleared")
  price.html("");
}

function draw() {}