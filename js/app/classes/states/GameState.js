define(['State','Assets']), function(State, Assets){

    var GameState = State.extend({
        init: function(_handler){
            this._super(_handler);
        }
    });
   
   var x = 0;
   var y = 0;

    GameState.prototype.tick = function(_dt){
        if(this.handler.getKeyManager().up){
            y-=20*_dt;  
        }
        if(this.handler.getKeyManager().down){
            y+=20*_dt;  
        }
        if(this.handler.getKeyManager().left){
            x-=20*_dt;  
        }
        if(this.handler.getKeyManager().right){
            x+=20*_dt;  
        }

        return Handler;

    };

    GameState.prototype.render = function(_g){
        _g.myDrawImage(Assets.getAssets("RomanSoldier").idle,x, y, Assets.getAssets("RomanSoldier").width, Assets.getAssets("RomanSoldier").height);
    };

    return GameState;

};