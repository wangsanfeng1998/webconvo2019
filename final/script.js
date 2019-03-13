
var matrix = [];
var props = new Array(5);
var price;
var windows = [];
var count = 0;
var toilet;
var items = [];


//src, horizontal, vertical, width, height, value, description
bulls = ["bulls.jpg", 900, 25, 82, 120, 40, "Chicago Bulls poster - 1996"]
jordans = ["jordans.png", 1030, 340, 100, 60, 180, "Air Jordan 1's - super worn out"]
basketball = ["basketball.png", 950, 300, 50, 50, 10, "Basketball - worn out and used often"]
backpack = ["backpack.png", 1050, 220, 100, 100, 60, "Backpack - light and empty"]

cooking = ["cooking.png", 900, 50, 111.11, 58.5, 100, "Cooking utensils - freshly bought"]
mickey = ["mickey.png", 1050, 220, 60, 60, 40, "Mickey Mouse backpack - full of toys"]
crayons = ["crayons.png", 950, 300, 19.3, 26.5, 20, "Crayons - have they been chewed on?"]
teddy = ["teddybear.png", 1030, 340, 60, 70, 30, "Teddy Bear - all wet"]

budweiser = ["budweiser.png", 820, 500, 32, 24, 5, "Crushed Budweiser -  still half full"]
pack1 = ["budlight.png", 830, 260, 130, 100, 36, "Pack of Bud Light - almost expired"]
pack2 = ["budlight.png", 960, 260, 130, 100, 36, "Pack of Bud Light - that's a lotta beer"]
doritos = ["doritos.png", 960, 260, 33.4, 48.3, 11, "Doritos bag - super greasy"]

treadmill = ["treadmill.png", 850, 200, 200, 200, 4000, "Treadmill - seriously?"]
makeup = ["makeup.png", 850, 200, 16, 10, 700, "Makeup - can't even recognize any of these brands"]
mirror = ["makeup.png", 850, 200, 30, 30, 35, "Mirror - this person is proud of themselves"]
lv = ["lv.png", 960, 260, 33.4, 48.3, 8000, "Louis Vuitton bag - looks fake tbh"]

hanger1 = ["hanger.png", 800, 20, 50, 27, 5, "Coat hanger - not much to look at"]
hanger2 = ["hanger.png", 830, 20, 50, 27, 5, "Coat hanger - not much to look at"]
jeans = ["jeans.png", 830, 25, 178.5, 273, 40, "Jeans - stained with dirt and grease"]
stained = ["stained.png", 800, 25, 134, 118, 20, "Strained shirt - I hope that's just dirt"]

dumbells = ["dumbells.png", 820, 70, 60, 60, 50, "70 pound weights - this is a big boy"]
gym = ["gym.png", 820, 70, 60, 60, 50, "Gym bench - tattered"]
/*
bar = []
protein
shake

naruto = 
kirby = 
dbz = 
luffy = 
gundam = 

bulbasaur = 
charmander = 
squirtle = 
pikachu = 
fatpika = 

xbox = 
ps4 = 
surprised = 
fortnite = 

lohan = 
kleenex = 
alienware = 
margot = 

switc = ["switch.png", 1000, 250, 100, 100, 300, "Nintendo Switch - freshly bought"]
bowser = 

//10

laptop = 
spinner = 
ctci = 
soylent1 = 
soylent2 = 


fridge = 
umbrella = 
heels = 
handbag = 
flowers = 

framed = ["framed.jpg", 1000, 270, 50, 50, 20, "Framed picture - mom or wife?"]

tweezers = 
knife1 = ["knife.png", 1000, 400, 25, 25, 30, "Cutting knife - bloody?!?"]
cuttingtable =  
rope = 
handcuffs = 

mousetrap1 = 
mousetrap2 = 
foodcart = 
spatula = 

lotr = 
harry = 
sherlock = 
glasses = 
lamp = 

knife2 = 
flashlight = 

mao = 
marx = 
red = 
redribbon = 
cigarettes = 

chinalamp = 
china = 
tea = 

infinity = 
hulkbuster = 
spiderman = 
shield = 
nerf = 

yeezy = 
bred = 
supreme = 
alien = 

katana = 
headband = 
kaneki = 
greninja = 

drone = 
camera = 
binoculars = 

airpods = 
*/

empty = ["empty.png", 0, 0, 0, 0, 0, ""]



function preload() {

for(var i=0; i<4; i++) {
    items[i] = new Array(6);
    matrix[i] = new Array(6);
    windows[i] = new Array(6)
}



for(var i = 0; i < matrix.length; i++) {
  for(var j = 0; j <matrix[0].length; j++) {
    matrix[i][j] = [bulls, basketball, backpack, jordans, empty];
  }
}


for (let index = 0; index < props.length; index++) {
  prop = createImg('', "error", function(err,res) {
    if (err) {
      console.log("checking for error in callback")
      console.error(err);
    }
    else {
      console.log(res)
    }
  });
  //console.log("printing i at line 23 ", i.src);
  prop.position(0, 700)
  props[index] = prop;
}
//i.src = "";
 
price = createDiv(" ");
price.id('description')
//price.position(810, 510)
/*
matrix[0][0] = [bulls, basketball, backpack, jordans, empty];
matrix[0][1] = [cooking, mickey, crayons, teddy, empty];
matrix[0][2] = [budweiser, pack1, pack2, doritos, empty];
matrix[0][3] = [treadmill, mirror, makeup, lv, heels];
matrix[0][4] = [hanger1, hanger2, stained, jeans, framed];
matrix[0][5] = [naruto, kirby, dbz, luffy, gundam];

matrix[1][0] = [switc, bowser, empty, empty, empty];
matrix[1][1] = [lohan, kleenex, margot, alienware, empty];
matrix[1][2] = [knife1, tweezers, handcuffs, rope, cuttingtable];
matrix[1][3] = [spatula, mousetrap2, mousetrap1, foodcart, cooking]
matrix[1][4] = [mao, marx, cigarettes, red, redribbon]
matrix[1][5] = [spinner, soylent2, soylent1, laptop, ctci]

matrix[2][0] = [dumbells, protein, gym, bar, shake]
matrix[2][1] = [china, chinalamp, tea, empty, empty] 
matrix[2][2] = [lamp, lotr, sherlock, harry, glasses]
matrix[2][3] = [jordans, fortnite, ps4, surprised, xbox]
matrix[2][4] = [flashlight, knife2, empty, empty, empty]
matrix[2][5] = [flowers, fridge, heels, umbrella, handbag]

matrix[3][0] = [infinity, nerf, hulkbuster, shield, spiderman]
matrix[3][1] = [yeezy, bred, alien, supreme, empty]
matrix[3][2] = [greninja, kaneki, katana, headband, empty]
matrix[3][3] = [binoculars, camera, gundam, drone, nerf]
matrix[3][4] = [airpods, empty, empty, empty, empty]
matrix[3][5] = [bulbasaur, charmander, squirtle, pikachu, fatpika]
*/
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
      temp.class('window');
      windows[j][i] = temp;
      temp.mouseClicked(function() {
        console.log("clicked" + temp.id)
        displayRoom(j, i, props)}
      )
      //temp.mouseOver(hover(matrix, j, i));
      //console.log(matrix)
      //matrix[j][i] = temp;

      
      railing = createDiv()
      railing.position(bottom_left_x + (w - (ww * 6 + s * 5)) / 2 + (i * s) + (i * ww) - 5 + 10, top_left_y + 10 + wh + (wh*j) + (bh*j) + (y*j) + 10)
      railing.size(bw, bh);
      railing.style("background-color", "#a85d01");
      

      /*
      fill(0)
      rect(bottom_left_x + (w - (ww * 6 + s * 5)) / 2 + (i * s) + (i * ww), top_left_y + 10 + (wh*j) + (bh*j) + (y*j), ww, wh)
      fill(168, 93, 1)
      rect(bottom_left_x + (w - (ww * 6 + s * 5)) / 2 + (i * s) + (i * ww) - 5, top_left_y + 10 + wh + (wh*j) + (bh*j) + (y*j), bw, bh)
      */
    }
  }
  intro = createDiv("Mirror, mirror, on the wall, who's the richest of them all?")   
  intro.id('intro')
  intro.size(480, 50)
}

function displayRoom(row, column, images) {
  if (count > 0) {
  var prev = document.getElementById('current').id = ""
}
  
  toilet = createImg('toilet.png')
  toilet.position(1025, 210);
  toilet.size(375, 375);

  sink = createImg('sink.png')
  sink.position(820, 134);
  sink.size(251, 176.3);

  bulb = createImg('lightbulb.png')
  bulb.position(1206, 25);
  bulb.size(35, 35);
  bulb.id('bulb')

  windows[row][column].id('current')
  fill(84, 76, 76)
  rect(800, 0, 470, 500)
  //door
  fill(33, 21, 15)
  rect(1170, 100, 95, 200)
  fill(0)
  circle(1180, 225, 5)
  //board
  fill(63, 48, 48)
  rect(810, 10, 350, 160)
  //mattress
  fill(255)
  rect(840, 390, 300, 80, 25)
  rect(810, 390, 30, 80, 25)

  for(let index = 0; index < matrix[row][column].length; index++) {
    console.log(matrix[row][column][index][0])
    let currImage = matrix[row][column][index];
    images[index].attribute('src', currImage[0]);
    images[index].position(currImage[1], currImage[2]);
    images[index].size(currImage[3], currImage[4]);
    images[index].mouseOver(function() {hover(currImage)});
    images[index].mouseOut(function() {clearValue()});
    images[index].class('prop')

  }
  // temp = createDiv(row + column);
  // temp.style('id', 'interior')
  // temp.size(100, 100)
  //image = createImg(matrix[row][column][0])
  //image.src = matrix[row][column][0];
  /*
  image.attribute('src', matrix[row][column][0])
  image.position(matrix[row][column][1], matrix[row][column][2]);
  image.size(matrix[row][column][3], matrix[row][column][4]);
  image.mouseOver(function() {hover(row, column)});
  image.mouseOut(function() {clearValue()});
  */
  count++;
  button = createButton("They're the richest!");
  button.position(1000, 600);
  button.mousePressed(end(row, column));
}

function hover(currImage) {
  console.log("hovered")
  price.html("$" + currImage[5] + " : " + currImage[6]);
  console.log(temp.position)
}

// function hover(row, column) {
//   console.log("hovered")
//   price.html("$" + matrix[row][column][5]);
//   console.log(temp.position)
// }

function clearValue() {
  console.log("cleared")
  price.html("");
}

function end(row, column) {
  console.log(mouseX + " " + mouseY)
  if (mouseX > 1000 && mouseY > 600) {
    // var divs = document.getElementsByTagName("div"), index;
    // var imgs = document.getElementsByTagName("img"), index;

    // for (index = divs.length - 1; index >= 0; index--) {
    //     divs[index].parentNode.removeChild(divs[index]);
    //     //imgs[index].parentNode.removeChild(imgs[index]);
    // }
    // if (row == 2 && column == 4) {
    //   resizeCanvas(0, 0);
    //   let end = createElement('h1', 'You decide to not rob anyone and go back home');
    //   end.class('final')
    // } else {
    //   resizeCanvas(0, 0);
    //   let end = createElement('h1', 'You killed and sold their possesions for $0');
    //   end.class('final')
    // }
    console.log("end")
  }
}
function draw() {}