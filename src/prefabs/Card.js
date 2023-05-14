class Card extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture,frame,pointValue){
        super(scene,x,y,texture,frame);
        scene.add.existing(this);
        this.points=pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed;
    }
    update(){
        this.moveSpeed = game.settings.spaceshipSpeed;
        this.x-=this.moveSpeed;
        if(this.x<0){
            this.reset();
        }
    }
    reset(){
        //this.x=500;
        this.x=game.config.width;
    }
}