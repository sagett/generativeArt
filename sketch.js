let cnv;
let easing = 0.05;
let x = 1;
let y = 1;

function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function randomColor() {
    var a = random(0, 255);
    var b = random(0, 255);
    var c = random(0, 255);
    background(a, b, c);
}

function setup() {
    cnv = createCanvas(1200, 720);
    centerCanvas();
    background(10);
    strokeWeight(2);
}

function draw() {
    var d = random(0, 255);
    var e = random(0, 255);
    var f = random(0, 255);
    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;

    if (mouseIsPressed) {
        randomColor()
        stroke(210);
    } else {
        stroke(50, 0, 0);
        fill(d,e,f);


    }
    square(x - mouseX/2, mouseY, mouseX );
}
