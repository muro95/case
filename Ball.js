let color = ['#C50023', '#F1AF00', '#5BBD2B', '#00B2BF', '#A2007C', '222222', '111111', '000000', 'FF0000', 'EE0000', 'DD0000'];
//tao bong
function Circle(x,y,dx,dy,radius) {
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.color=color[Math.floor(Math.random()*10)];
    console.log(this.color)
    this.draw1=function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();

    }
    //xu li tinh huong bong
    this.update1 = function () {

        if (this.x + this.radius > 900 || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y - this.radius < 0||this.y > 700 - this.radius) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw1();
    }

};
//tao 1 circle
let circle=new Circle(300,150,5,5,40);