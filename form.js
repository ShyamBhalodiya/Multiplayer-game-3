class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.title = createElement("h2");
        this.greeting = createElement("h1");
        this.restart = createButton("Restart");
    }
    display() {
        this.title.html("Car Racing Game");
        this.title.position(displayWidth / 2 - 50, 0);
        this.input.position(displayWidth / 2 - 40, displayHeight / 2 - 80);
        this.button.position(displayWidth / 2 + 30, displayHeight / 2);
        this.restart.position(displayWidth - 10, 20);
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playercount += 1;
            player.index = playercount;
            player.updateplayer();
            player.updatecount(playercount);
            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);
        })
        this.restart.mousePressed(() => {
            form.display();
            player.removePlayerNode();
            player.updatecount(0);
            game.updatestate(0);
            Player.updaterank(0);
        })
    }
    hide() {
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
        this.input.hide();
    }
}