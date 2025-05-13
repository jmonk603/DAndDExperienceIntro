var bg;
var title = "a much longer title for test purposes"
var storyCounter = 0;
var charcounter = 0;
var sword
var cor1
var cor2
var char1
var char2
var char3

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = loadImage('js/paperTexture.jpg');
  sword = loadImage('js/sword.png');
  storytext = loadStrings('js/storyoptions.txt');
  titletext = loadStrings('js/Titles.txt');
  choicestext = loadStrings('js/multiplechoices.txt');
  cor1 = loadImage('js/corner1.png');
  cor2 = loadImage('js/corner2.png');
  char1 = loadImage('js/bilston.png');
  char2 = loadImage('js/emlyn.png');
  char3 = loadImage('js/dammon.png');
}

function draw() {
  background(bg);
  
  image(cor1,-3,250,250,350)
  image(cor2,windowWidth-240,-15,250,350)
  
  let title = titletext[storyCounter]
  let phrase = storytext[storyCounter]
  let choice1 = choicestext[storyCounter];
  let choice2 = choicestext[(storyCounter)+1];
  
  let phrases = split(phrase, "...")
  if (phrases.length < 5){
    if (phrases.length == 4){
      phrases[4] = " ";
    }
    if (phrases.length == 3){
      phrases[4] = " ";
      phrases[3] = " ";
    }
    if (phrases.length == 2){
      phrases[4] = " ";
      phrases[3] = " ";
      phrases[2] = " ";
    }
    if (phrases.length == 1){
      phrases[4] = " ";
      phrases[3] = " ";
      phrases[2] = " ";
      phrases[1] = " ";
    }
  }
  //works same as instagram stories where you go to different slides and choose your own adventure books
  
  textFont('Algerian');
  textSize(30)
  textAlign(CENTER)
  text(title, windowWidth/2, 50)
  
  textSize(20)
  textFont('Arial');
  text((phrases[0]+'\n'+phrases[1]+'\n'+phrases[2]+'\n'+phrases[3]+'\n'+phrases[4]), windowWidth/2, 130)
  
  if (storyCounter == 2){
    //text(choice1,windowWidth/4,400);
    //text(choice2,(windowWidth/4)+(windowWidth/2),400);
    
    //image(sword,(windowWidth/2)-135,250,250,350)
    
    image(char1, (windowWidth/3)-130,200,200,260)
    image(char2, (windowWidth/2)-130,200,200,260)
    image(char3, (windowWidth/3)+150,200,200,260)
  }
  
}

function touchEnded(){
  if (storyCounter == 2){
    if (mouseX < windowWidth/2.66){
      charcounter = 1
      storyCounter = 3;
    }
    else if (mouseX > windowWidth/1.78){
      charcounter = 3
      storyCounter = 3;
    }
    else if (mouseX < windowWidth/1.78){
      if (mouseX > windowWidth/2.66){
        charcounter = 2
        storyCounter = 3;
      }
    }
  }
  else{
    storyCounter += 1;
  }
  if (storyCounter == 5){
    openLink();
  }
  if (storyCounter == 3){
    openLink();
  }
  console.log(storyCounter)
}

function openLink(){
  if (storyCounter == 3){
    console.log(charcounter)
    if (charcounter == 1){
      window.location.href = ('https://uk.fender.com/products/player-ii-mustang-bass-pj');
    }
    if (charcounter == 2){
      window.location.href = ('https://www.google.com/search?q=ebay+sony+hi8+handycam&sca_esv=3029ffce05bf8594&sxsrf=ADLYWIIh-mfxs1TnAcyThD1gQqSeykqqFw%3A1733063542604&ei=dnNMZ97FJIOBhbIPpNWAkQo&ved=0ahUKEwje2NHm5IaKAxWDQEEAHaQqIKIQ4dUDCA8&uact=5&oq=ebay+sony+hi8+handycam&gs_lp=Egxnd3Mtd2l6LXNlcnAiFmViYXkgc29ueSBoaTggaGFuZHljYW0yBhAAGAgYHjIGEAAYCBgeMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogRI4OPxAVDK3PEBWN_h8QFwAngBkAEAmAFioAG8AqoBATS4AQPIAQD4AQGYAgWgAusBwgIKEAAYsAMY1gQYR8ICChAjGIAEGCcYigXCAgQQABgewgIIEAAYBxgIGB6YAwCIBgGQBgiSBwE1oAfGGA&sclient=gws-wiz-serp');
    }
    if (charcounter == 3){
      window.location.href = ('https://www2.hm.com/en_gb/productpage.1273693002.html');
    }
  }
}
