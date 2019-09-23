let canvas=document.getElementById("canvas");
canvas.width=900;
canvas.height=700;
let ctx=canvas.getContext("2d");
let score = 0;

let id;

function gameOver() {
    if (rectangle.y- rectangle.height / 2 <= circle.y) {
        cancelAnimationFrame(id);
        ctx.beginPath();
        ctx.font = "30px Arial";
        ctx.fillStyle = "purple";
        ctx.fillText(/*playerName +" " +*/"\t\tGame Over ", canvas.width/2-200, canvas.height/2);
        ctx.fill();

    }
}
function animate() {
    id = requestAnimationFrame(animate);
    //xoa tan anh
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.font = "25px Verdana";
    ctx.fillText("Score: " + score, 10, 30);
    score++;
    if (circle.y + circle.radius > rectangle.y - rectangle.height && circle.x > rectangle.x && circle.x < rectangle.x + rectangle.width) {
        circle.dy+=3;
        circle.dx+=3;
        circle.dy = -circle.dy;
    }
rectangle.draw();
    //rectangle.update();
    circle.update1();
    gameOver();
}
animate();
