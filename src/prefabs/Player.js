// Rocket prefab
class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this);
      this.isFiring=false;
      this.moveSpeed=2;
      this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
      this.load.audio('error', './assets/Cut error.wav');
    }
    //Player is a moving card stack, and it collects cards 1 # higher than it. 
    create(){
        mouse=this.input.mousePointer;
    }
    update(){
    this.y=game.input.mousePointer.y;
    if(this.y<50){
      this.y=50;
      this.sound.play('error');
  }
  if(this.y>480){
this.y=480;
this.sound.play('error');
  }

    }
    reset(){
        this.y=0;
    }
    
  }