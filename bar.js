function Rectangle() {
    this.x = canvas.width - canvas.width / 2 - 100;
    this.y = canvas.height - 30;
    this.width = 250;
    this.height = 20;
    this.move = 80;
    this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }
}

//tao 1 hcn
let rectangle = new Rectangle();

window.addEventListener("keydown", function doKeyDown(a) {
    if (a.keyCode == 37) {
        if (rectangle.x >= 0)
            rectangle.x -= rectangle.move;
    } else if (a.keyCode == 39) {
        if (rectangle.x <= canvas.width - rectangle.width)
            rectangle.x += rectangle.move;
    }
});
