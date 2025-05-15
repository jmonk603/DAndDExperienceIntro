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
  bg = loadImage('paperTexture.jpg');
  sword = loadImage('sword.png');
  storytext = loadStrings('storyoptions.txt');
  titletext = loadStrings('Titles.txt');
  choicestext = loadStrings('multiplechoices.txt');
  cor1 = loadImage('corner1.png');
  cor2 = loadImage('corner2.png');
  char1 = loadImage('bilston.png');
  char2 = loadImage('emlyn.png');
  char3 = loadImage('dammon.png');
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
    
    image(char1, (windowWidth/5)-110,200,200,260)
    image(char2, (windowWidth/2)-110,200,200,260)
    image(char3, (windowWidth/1.25)-120,200,200,260)
  }
  
}

function touchEnded(){
  if (storyCounter == 2){
    if (mouseX < windowWidth/5){
      charcounter = 1
      storyCounter = 3;
    }
    else if (mouseX > (windowWidth/1.25)-100){
      charcounter = 3
      storyCounter = 3;
    }
    else if (mouseX < (windowWidth/1.25)-100){
      if (mouseX > windowWidth/5){
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
      window.location.href = ('https://jmonk603.github.io/DAndDExperience/');
    }
    if (charcounter == 2){
      window.location.href = ('https://jmonk603.github.io/DAndDExperienceP1Wiz/');
    }
    if (charcounter == 3){
      window.location.href = ('https://jmonk603.github.io/DAndDExperienceP1Rng/');
    }
  }
}
