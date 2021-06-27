class Player{
    constructor(){
        this.name=null;
        this.distance=0;
        this.index=null;
    }
    getPlayer(){
        var  getPlayerRef = database.ref('playerCount') 
        getPlayerRef.on("value",(data)=>{
        playerCount=data.val();
        });
    }
    updateplayer(count)
    {
        database.ref('/').update({
            playerCount : count
        });
    }
}