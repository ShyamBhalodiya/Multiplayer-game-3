class Player {
    constructor() {
        this.index = null;
        this.name = null;
        this.distance = 0;
        this.rank = 0;
    }
    getcarscount() {
        database.ref("carsatend").on("value", (data) => {
            this.rank = data.val();
        });
    }
    static updaterank(count){
        database.ref("/").update({
            carsatend : count
        })
    } 
    getcount() {
        var pcountref = database.ref("playercount");
        pcountref.on("value", (data) => {
            playercount = data.val();
        });

    }
    updatecount(count) {
        database.ref("/").update({
            playercount: count
        })
    }
    static getplayer() {
        var playerref = database.ref("players");
        playerref.on("value", (data) => {
            allplayer = data.val();
        })
    }
    updateplayer() {
        var playerindex = "players/player" + this.index;
        database.ref(playerindex).set({
            name: this.name,
            distance: this.distance,
        })
    }
    removePlayerNode() {
        var Playernode = database.ref("/");
        Playernode.child("players").remove();
    }
}