// class Sprite {
//     constructor(animation, x, y, speed) {
//         this.x = x;
//         this.y = y;
//         this.animation = animation;
//         this.len = this.animation.length;
//         this.speed = speed;
//         this.index = 0;
//     }
//     show() {
//         let index = floor(this.index) % this.len;
//         image(this.animation[index], this.x, this.y);
//         // before this image function code --->
//         // image(this.animation[this.frameCount % this.length],xpos,ypos)
//     }

//     animate() {
//         this.index += this.speed;
//         this.x += this.speed * 10;
//         if (this.x > width) {
//             this.x = -this.animation[0].width;
//         }
//     }
// }

class Ram {
    constructor(animation, x, y, speed) {
        this.x = x;
        this.y = y;
        this.animation = animation;
        this.speed = speed;
    }
    show() {
        animation(this.animation, this.x, this.y);
    }
    animate(){
        this.animation += this.speed;
    }
}