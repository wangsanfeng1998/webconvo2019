
var matrix = [];
var props = new Array(5);
var price;
var windows = [];
var count = 0;
var toilet;
var items = [];
var ppl = []

//src, horizontal, vertical, width, height, value, description
bulls = ["bulls.jpg", 900, 25, 82, 120, 20, "Chicago Bulls poster - 1996"]
jordans = ["jordans.png", 1030, 340, 100, 60, 180, "Air Jordan 1's - super worn out"]
basketball = ["basketball.png", 950, 300, 50, 50, 10, "Basketball - worn out and used often"]
backpack = ["backpack.png", 1050, 220, 100, 100, 50, "Backpack - light and empty"]

cooking = ["cooking.png", 900, 50, 111.11, 58.5, 80, "Cooking utensils - freshly bought"]
mickey = ["mickey.png", 1070, 255, 60, 60, 30, "Mickey Mouse backpack - full of toys"]
crayons = ["crayons.png", 950, 340, 19.3, 26.5, 20, "Crayons - have they been chewed on?"]
teddy = ["teddybear.png", 1030, 360, 60, 70, 15, "Teddy Bear - all wet"]

budweiser = ["budweiser.png", 880, 480, 32, 24, 5, "Crushed Budweiser -  still half full"]
pack1 = ["budlight.png", 830, 260, 117, 90, 25, "Pack of Bud Light - almost expired"]
pack2 = ["budlight.png", 960, 260, 117, 90, 25, "Pack of Bud Light - that's a lotta beer"]
doritos = ["doritos.png", 1070, 370, 33.4, 48.3, 15, "Doritos bag - super greasy"]

treadmill = ["treadmill.png", 850, 200, 200, 200, 800, "Treadmill - seriously?"]
makeup = ["makeup.png", 1010, 170, 48, 30, 400, "Makeup - can't even recognize any of these brands"]
mirror = ["mirror.png", 1030, 135, 50, 50, 35, "Mirror - this person is very proud of themselves"]
lv = ["lv.png", 960, 160, 24.5, 18.2, 8000, "Louis Vuitton bag - looks fake tbh"]
heels = ["heels.png", 1080, 250, 52.52, 55.76, 60, "High heels - must go out a lot"]

hanger1 = ["hanger.png", 960, 20, 50, 27, 5, "Coat hanger - not much to look at"]
hanger2 = ["hanger.png", 1030, 20, 50, 27, 5, "Coat hanger - not much to look at"]
jeans = ["jeans.png", 1010, 25, 178.5 * .5, 273 * .5, 25, "Jeans - stained with dirt and grease"]
stained = ["stained.png", 940, 25, 134 * .5, 118 * .5, 10, "Strained shirt - I hope that's just dirt"]
framed = ["framed.jpg", 1000, 270, 50, 60, 20, "Framed picture - mom or wife?"]

dumbells = ["dumbells.png", 820, 70, 60, 60, 50, "70 pound weights - this is a big boy"]
gym = ["gym.png", 820, 70, 60, 60, 50, "Gym bench - tattered"]
bar = []
protein = []
shake = []

naruto = ["naruto.png", 900, 25, 82, 120, 25, "Naruto poster - must have been a fan"]
kirby = ["kirby.png", 1030, 390, 60, 60, 25, "Kirby plushie - likes getting eaten?"]
dbz = ["dbz.png", 850, 300, 43, 60.3, 45, "Dragonball Z DVD collection - likes to watch filler"]
luffy = ["luffy.png", 860, 440, 60, 60, 30, "One Piece pillow - probably sleeps with this"]
gundam = ["gundam.png", 1000, 240, 107, 120, 115, "Gundam figurine - collector's edition"]

switc = ["switch.png", 1000, 250, 100, 100, 300, "Nintendo Switch - freshly bought"]
bowser = ["bowser.png", 850, 320, 64, 48, 40, "Bowser Amiibo - still covered in plastic"]

lohan = ["lohan.jpg", 900, 25, 130 * .5, 160 * .5, 15, "Lindsay Lohan poster - circa Mean Girls"]
kleenex = ["kleenex.png", 850, 300, 43, 60.3, 45, "Kleenex - do NOT want to know what this is used for"]
alienware = ["alienware.png", 1000, 270, 100, 100, 300, "Alienware laptop - probably watches porn on this"]
margot = ["margot.png", 1030, 25, 178.5 * .3, 273 * .3, 25, "Margot Robbie poster - new Lohan?"]

tweezers = ["tweezers.png", 850, 310, 25, 25, "Tweezers - please tell me they're for nose hairs"]
knife1 = ["knife.png", 1000, 400, 25, 25, 30, "Cutting knife - bloody?!?"]
cuttingtable = ["cuttingtable.png", 850, 200, 365 * .65, 328 * .65, 25, "Cutting table - is that human blood?"]
rope = ["rope.png", 1030, 370, 851 * .1, 646 * .1, 15, "Rope - what could this be used for..."]
handcuffs = ["handcuffs.png", 1030, 380, 20, 20, 45, "Handcuffs - hope this guy is just kinky"]

mousetrap1 = ["mousetrap.png", 880, 480, 50, 28, 30, "Mousetraps - must get a lot of pests"]
mousetrap2 = ["mousetrap.png", 920, 480, 50, 28, 30, "Mousetraps - wouldn't want to eat the food cooked here"]
foodcart = ["foodcart.png", 850, 200, 200, 200, 50, "Food cart - probably a street vendor"]
spatula = ["spatula.png", 870, 190, 20, 20, 20, "Spatula - needs to be cleaned more"]

mao = ["mao.png", 900, 25, 82, 120, 35, "Mao poster - there may or may not be a camera installed"]
marx = ["marx.png", 1040, 25, 178.5 * .5, 273 * .5, 55, "Marx drawing - epitome of art"]
red = ["red.png", 850, 300, 37, 50, 35, "Mao's red book - required bedtime reading"]
redribbon = ["redribbon.png", 930, 300, 40, 43.5, 15, "PRC red ribbon - awarded in 1st grade"]
cigarettes = ["cigarettes.png", 1010, 170, 30, 30, 25, "Cigarettes - classic mainland"]

laptop = ["mousetrap.png", 880, 480, 50, 28, 30, "Mousetraps - must get a lot of pests"]
spinner = ["mousetrap.png", 880, 480, 50, 28, 30, "Mousetraps - must get a lot of pests"]
ctci = ["mousetrap.png", 880, 480, 50, 28, 30, "Mousetraps - must get a lot of pests"]
soylent1 = ["mousetrap.png", 880, 480, 50, 28, 30, "Mousetraps - must get a lot of pests"]
soylent2 = ["mousetrap.png", 880, 480, 50, 28, 30, "Mousetraps - must get a lot of pests"]

airpods = ["airpods.png", 1030, 370, 30, 30, 280, "Airpods - this is the only thing this person owns"]

knife2 = ["knife.png", 1000, 400, 25, 25, 30, "Knife - could be used for robbery and assault"]
flashlight = ["flashlight.png", 1030, 360, 35, 35, 30, "Flashlight - good for snooping around"]

/*
bulbasaur = 
charmander = 
squirtle = 
pikachu = 
fatpika = 

xbox = 
ps4 = 
surprised = 
fortnite = 


//10


fridge = 
umbrella = 
handbag = 
flowers = 

lotr = 
harry = 
sherlock = 
glasses = 
lamp = 

knife2 = 
flashlight = 

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
    windows[i] = new Array(6);
    ppl[i] = new Array(6);
}



for(var i = 0; i < matrix.length; i++) {
  for(var j = 0; j <matrix[0].length; j++) {
    matrix[i][j] = [bulls, basketball, backpack, jordans, empty];
    ppl[i][j] = ["young athlete", 260]
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

matrix[0][0] = [bulls, basketball, backpack, jordans, empty];
ppl[0][0] = ["young athlete", 260]
matrix[0][1] = [cooking, mickey, crayons, teddy, empty];
ppl[0][1] = ["young mother and her child", 145]
matrix[0][2] = [budweiser, pack1, pack2, doritos, empty];
ppl[0][2] = ["eumployed loser", 70]
matrix[0][3] = [treadmill, mirror, makeup, lv, heels];
ppl[0][3] = ["socialite", 9235]
matrix[0][4] = [hanger1, hanger2, stained, jeans, framed];
ppl[0][4] = ["construction worker", 45]
matrix[0][5] = [naruto, kirby, dbz, luffy, gundam];
//fix prices
ppl[0][5] = ["anime fanatic", 260]


matrix[1][0] = [switc, bowser, empty, empty, empty];
ppl[1][0] = ["Nintendo fan", 340]
matrix[1][1] = [lohan, kleenex, margot, alienware, empty];
ppl[1][1] = ["incel", 210]

matrix[1][2] = [knife1, tweezers, handcuffs, rope, cuttingtable];
ppl[1][2] = ["serial killer", 105]
matrix[1][3] = [spatula, mousetrap2, mousetrap1, foodcart, cooking]
ppl[1][3] = ["dubious food cart owner", 65]
matrix[1][4] = [mao, marx, cigarettes, empty, empty]
ppl[1][4] = ["honorable PRC citizen", 85]
matrix[1][5] = [spinner, soylent2, soylent1, laptop, ctci]
ppl[1][5] = ["EECS intern", 245]

matrix[2][4] = [flashlight, knife2, empty, empty, empty]
matrix[3][4] = [airpods, empty, empty, empty, empty]
ppl[3][4] = ["rich boy", 245]
/*
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
        displayRoom(ppl, j, i, props)}
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

function displayRoom(ppl, row, column, images) {
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
  //button.position(1000, 600);
  button.id("finish")
  button.mouseClicked(function() {
        console.log("button" + temp.id)
        end(ppl, row, column)});
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

function end(ppl, row, column) {

    var divs = document.getElementsByTagName("div"), index;
    //var imgs = document.getElementsByTagName("img"), index;

    //var elem = document.getElementById('finish');
    var elems = document.getElementsByTagName('button'), index;
    for (index = elems .length - 1; index >= 0; index--) {
        elems [index].parentNode.removeChild(elems [index]);
        //imgs[index].parentNode.removeChild(imgs[index]);
    }

    for (index = divs.length - 1; index >= 0; index--) {
        divs[index].parentNode.removeChild(divs[index]);
        //imgs[index].parentNode.removeChild(imgs[index]);
    }

    for (var i= document.images.length; i-->0;) {
      document.images[i].parentNode.removeChild(document.images[i]);
    }


    if (row == 2 && column == 4) {
      resizeCanvas(0, 0);
      let end = createElement('h1', 'You decide to not rob anyone and go back home');
      end.class('final')
    } else {
      resizeCanvas(0, 0);
      let end = createElement('h1', 'You kill the ' + ppl[row][column][0] + ' as they come home.')
      let sold = createElement('h1', 'You sell their possesions for $' + ppl[row][column][1] + '.');
      end.class('final')
      sold.class('final')
    }
    console.log("end")
}
function draw() {}