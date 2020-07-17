let cnv;

function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function setup() {
    cnv = createCanvas(1200, 720);
    centerCanvas();
    background(10);
    strokeWeight(2);
}

function draw() {
    if (mouseIsPressed) {
        stroke(210);
    } else {
        stroke(50, 0, 0);

    }
    square(mouseX - mouseX/2, mouseY, mouseX );
}
