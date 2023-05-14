/*
Justin Park
Card Stacking scrolling game
This was editted from my rocket patrol where I changed assets and turned enemies into scrolling cards that players pick based on the given card type.
I am proud of getting to find a way to implement cards, since card games are my life and I'm happy with the card assets I created, and the sound effects I was able to make.
I am also happy with how the game turned out, where instead of the goal being to avoid obstacles, its about decision making and choosing the correct option
like a multiple choice test but speedy. 
I also had to deal with the technical issue of limitting the speed of rockets on a 165 hz monitor, which I did slow down so the game is only difficult and not purely impossible
(I code/test on a 60 hz laptop and use a 165 desktop for other stuff)
*/
let config={
    type: Phaser.CANVAS,
    width: 640,
    height: 640,
    scene: [Menu,Play]
    }
let game= new Phaser.Game(config);

let borderUISize=game.config.height/15;
let borderPadding=borderUISize/3;
let mouse,keyF,keyR,keyLEFT,keyRIGHT, bar;
