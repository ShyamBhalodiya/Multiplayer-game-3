var playercount, database, form, player, game, allplayer, canvas, car1, car2, car3, car4, cars;
var car1img, car2img, car3img, car4img, trackimg;
var distance = 0;
var gamestate = 0;

function preload() {
    car1img = loadImage("car1.png");
    car2img = loadImage("car2.png");
    car3img = loadImage("car3.png");
    car4img = loadImage("car4.png");
    trackimg = loadImage("track.jpg");
}

function setup() {
    canvas = createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();
    game = new Game();
    game.getstate();
    game.start();
}

function draw() {
    if (playercount === 4) {
        game.updatestate(1);
    }
    if (gamestate === 1) {
        clear();
        game.play();
    }
    if(gamestate == 2){
        game.end();
    }
}
