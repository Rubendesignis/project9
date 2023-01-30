var seed = Math.random() * 1583;
var t;
var num, vNum;
var radius, mySize, margin;
var sizes = [];

let colors = [];


let colors13 = "D96690-F28DB2-F2C9E0-89C2D9-88E8F2".split("-").map((a) => "#" + a);
var color_setup1, color_setup2;
let color_bg;
let v_planet = [];

function setup() {
	randomSeed(seed);
	mySize = min(windowWidth, windowHeight);
	margin = mySize / 100;
	createCanvas(windowWidth, windowHeight, WEBGL);
	color_setup1 = colors13;
	color_setup2 = random([colors13]);
	color_bg = "#202020";
	background(color_bg);
	num = 1 * int(random(50, 100));
	radius = mySize * 1.0;
	for (let a = 0; a < TAU; a += TAU / num) {
		sizes.push(30 * random(0.2, 0.5))
	}
	t = 0;
}

function draw() {
  background(0)
	randomSeed(seed);

	for (let i = 3; i < num; i++) {
		let a = (TAU / num) * i;
		let x = radius * sin(a + t) / random(20,5) / 1.5;
		let y = radius * cos(a + t) / random(2,5) / 2;
		v_planet[i] = createVector(x, y);
	}

	push();
	for (let q = 0; q < 1 / 9; q += 5 * random(0.01, 0.02)) {
		for (let j = 0; j < 2; j++) {

			rotateX(random(TAU)*j + t / 10 + q / random(100, 150) / 20);
			rotateY(random(PI)*j - t / 10 - q / random(100, 200) / 30);
			rotateZ(random(PI / 7)*j - t / 10 + q / random(100, 150) / 20);
			noFill();

			for (let i = 9; i < num; i += 3) {
				let d = random(radius / 100, radius / 100);
				let x_plus = 2.5 * random(-d, d) ;
				let y_plus = 1.5 * random(-d, d) ;
				let z_plus = 1.5 * random(-d, d) ;
			  stroke(random(color_setup2));
				strokeWeight(sizes[i] * random(3,1));
				point(v_planet[i].x + x_plus, v_planet[i].y + y_plus, z_plus);
			}

		}
	}
	pop();

	t += random(5, 1) * random(0.01, 0.003);
}