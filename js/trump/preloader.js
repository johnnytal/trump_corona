var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
    	progressTxt = this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 30, '0%',{
             font: '25px', fill: 'black', fontWeight: 'normal', align: 'center'
        });
        this.progress.anchor.setTo(0.5, 0.5);
        this.game.load.onFileComplete.add(this.fileComplete, this);
  
        loadingTxt = this.add.text(this.game.world.centerX - 100,  this.game.world.centerY - 150, "Getting Trump ready...", {
            font: '32px', fill: 'darkblue', fontWeight: 'normal', align: 'center'
        });
        
        this.game.load.audio('music1', 'assets/trump/audio/music1.ogg');
        this.game.load.audio('music2', 'assets/trump/audio/music2.ogg');
        this.game.load.audio('music3', 'assets/trump/audio/music3.ogg');
        
        this.game.load.audio('trump1', 'assets/trump/audio/control.ogg');
        this.game.load.audio('trump2', 'assets/trump/audio/control2.ogg');
        this.game.load.audio('trump3', 'assets/trump/audio/doctor.ogg');
        this.game.load.audio('trump4', 'assets/trump/audio/flu.ogg');
        this.game.load.audio('trump5', 'assets/trump/audio/germ.ogg');
        this.game.load.audio('trump6', 'assets/trump/audio/hydraxy.ogg');
        this.game.load.audio('trump7', 'assets/trump/audio/if.ogg');
        this.game.load.audio('trump8', 'assets/trump/audio/lose.ogg');
        this.game.load.audio('trump9', 'assets/trump/audio/try_it.ogg');
        this.game.load.audio('trump10', 'assets/trump/audio/what_happans.ogg');
        this.game.load.audio('trump11', 'assets/trump/audio/wins.ogg');
        this.game.load.audio('trump12', 'assets/trump/audio/work.ogg');
        
        this.game.load.image("bg", "assets/trump/images/trump.png");
        this.game.load.spritesheet("button", "assets/trump/images/button4.png", 486/2, 185);
        this.game.load.image("gear", "assets/trump/images/gearBtn2.png");
        this.game.load.image("ok", "assets/trump/images/ok.png");
        this.game.load.image("musicBtn", "assets/trump/images/musicBtn.png");
        this.game.load.image("panel", "assets/trump/images/panel.png");  
    },
    
    create: function(){
        this.game.state.start("Game");  
    }
};

preloader.prototype.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
    this.progress.text = progress+"%";
};