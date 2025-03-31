let navbar;
let banner;
let product;
let gnb;
let icon;
let gr;

let state = 0;

function preload(){
navbar = loadImage('01_NavBar.png');
banner = loadImage('02_AdBanner.png');
product = loadImage('03_Product.png');
gnb = loadImage('04_GNB.png');
icon = loadImage('05_ai_icon.png');
gr = loadImage('06_green.png');
}

function setup() {
  createCanvas(393, 852);
}

function draw() {
  background(255);
  if(state == 0){
  image(navbar, 0, 0, 393, 128);
  image(banner, 0, 128, 393, 284);
  image(product, 0, 412, 393, 440);
  image(gnb, 0, 764, 393, 88);
  image(icon, 320, 688, 60, 60);
  }
  else if(state == 1){
  image(navbar, 0, 0, 393, 128);
  image(banner, 0, 128, 393, 284);
  image(product, 0, 412, 393, 440);
  image(gr, 0, 612, 393, 440);
  image(gnb, 0, 764, 393, 88);
  image(icon, 320, 688, 60, 60);
  }
}

function mouseClicked(){
   if(mouseX >= 320 && mouseX <= 380){
     if(mouseY >= 688 && mouseY <= 748){
       if(state == 0){
         state = 1;
       }else if(state == 1){
         state = 0;
       }
     }
   }
}

