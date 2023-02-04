// let spritesheet;
// let spritedata;
// let animation = [];
// let horses = [];


// function preload() {
//     spritedata = loadJSON('assets/boat.json');
//     spritesheet = loadImage('assets/boat.png');
// }

// function setup() {
//     createCanvas(1200, 800);

//     //accesing spritedata frames ok
//     let frames = spritedata.frames;
//     for (let i = 0; i < frames.length; i++) {
//         let pos = frames[i].position;
//         //GET() IS A FUNCTION THAT USE FOR GET IMAGE LIKE EITHER IN 1PIXEL OR COMPLETE
//         let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
//         //pusing the images into animation array;
//         animation.push(img);
//     }

//     for (let i = 0; i < 2; i++) {
//         //horses[i] = new Sprite(animation ,xposition,yposition,random speed) ok
//         horses[i] = new Sprite(animation, i * 200, i * 300, random(0.1, 1));
//     }
// }

// function draw() {
//     background(0);
//     //this is for show the images in vertically position by for of loop
//     for (let horse of horses) {
//         horse.show();
//         horse.animate();
//     }
// }

let fan, fan01, fan02, fan03, fan04, fan05;
let ram;
function preload() {
    fans = loadAnimation('assets/fan01.png', 'assets/fan02.png', 'assets/fan03.png',
        'assets/fan04.png', 'assets/fan05.png');
}

function setup() {
    createCanvas(600, 600)
    // fan = createSprite(300, 300);
    // fan.addAnimation('fan', fans);
    ram = new Ram(fans,300,300,60);
}

function draw() {
    background(0);
   // animation(fans, 300, 300);
   // drawSprites();
   ram.show();
  // ram.animate();
}