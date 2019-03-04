var arr = [];
var c = "255,0,0";

function setup() {
  createCanvas(800, 500);
  background(14, 82, 165);
  fill(255, 255, 255);
  let w = 600;
  let bottom_left_x = (width - w) / 2;
  let top_left_y = 70;
  let h = 370
  let bottom_left_y = top_left_y + h;
  let bottom_right_x = bottom_left_x + w;
  let bottom_right_y = top_left_y + h;
  //floor
  quad(0, 500, bottom_left_x, bottom_left_y, bottom_right_x, bottom_right_y, 800, 500);
  //main building
  rect(bottom_left_x, top_left_y, w, h);
  //left building 
  quad(0, 0, bottom_left_x, top_left_y, bottom_left_x, bottom_left_y, 0, height)
  //right building
  quad(800, 0, bottom_right_x, top_left_y, bottom_right_x, bottom_right_y, 800, height)
  fill(0)
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
      fill(0)
      rect(bottom_left_x + (w - (ww * 6 + s * 5)) / 2 + (i * s) + (i * ww), top_left_y + 10 + (wh*j) + (bh*j) + (y*j), ww, wh)
      fill(168, 93, 1)
      rect(bottom_left_x + (w - (ww * 6 + s * 5)) / 2 + (i * s) + (i * ww) - 5, top_left_y + 10 + wh + (wh*j) + (bh*j) + (y*j), bw, bh)
    }
  }
	myDiv = createDiv('hi');
	myDiv.position(400, 300);
	myDiv.style("background-color", "blue");
	myDiv.class('window');                                                
}

function draw() {}