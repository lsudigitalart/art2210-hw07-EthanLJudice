let soundFile;
let soundPlayed = false;
let startTime;
let imgBackdrop;
let imgBackdrop2;
let imgJoke;

function preload() {
    soundFile = loadSound('song.mp3');
    imgBackdrop = loadImage("Mariah.png");
    imgBackdrop2 = loadImage("Backdrop2.webp");
    imgJoke = loadImage("theJoke.gif");
}

function setup() {
    createCanvas(400, 400);
}

function mousePressed() {
  if (!soundFile.isPlaying()) {
    soundFile.play();
  }
  startTime = millis();
  imgBackdrop = imgJoke;
}

function draw() {
    background(220);
    image(imgBackdrop2, 0, 0, 400, 400);
    image(imgBackdrop, 0, 0, 400, 400);
}
