class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
        //I need a commit for my code to run
    }
    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.audio('children','./assets/children.wav');
        this.load.audio('boom','./assets/boom.wav');
        this.load.audio('ahhhh','./assets/ahhhh.wav');
        this.load.audio('pew','./assets/pew.wav');
        
      }
      create() {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
              
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Card Stack', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Move cursor up and down using mouse. ', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2+borderUISize+borderPadding, 'Hover the correct card symbol ', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + (borderUISize + borderPadding)*2, 'Press spacebar to play!', menuConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        bar=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    update() {
        
        if (Phaser.Input.Keyboard.JustDown(bar)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 2,
            NewshipSpeed: 12,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
      }
}