let cnv;
let num = 3000;
let range = 8;

let ax = [];
let ay = [];

function centerCanvas() {
    let x = (windowWidth - width) / 2;
    let y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function setup() {
    cnv = createCanvas(750, 750);
    centerCanvas();
    for (let i = 0; i< num; i++ ) {
        ax[i] = width /2;
        ay[i] = height /2;
    }
    frameRate(25);
}

function draw() {
    background(50);
    // Shift all elements 1 place to the left
    for ( let i = 1; i < num; i++ ) {
        ax[i - 1] = ax[i];
        ay[i - 1] = ay[i];
    }

    // Put a new value at the end of the array
    ax[num - 1] += random(-range, range);
    ay[num - 1] += random(-range, range);

    // Constrain all points to the screen
    ax[num - 1] = constrain(ax[num - 1], 0, width);
    ay[num - 1] = constrain(ay[num - 1], 0, height);

    // Draw a line connecting the points
    for ( let j = 1; j < num; j++ ) {
        if (mousePressed) {
            let val = j / num * 204.0 + 51;
            stroke(val);
            triangle(ax[j - 1], ay[j - 1], ax[j], ay[j]);
        }
    }
}
function mousePressed() {

}

function windowResized() {
    centerCanvas();
}
