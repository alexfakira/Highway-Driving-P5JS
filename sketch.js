var game = 1;
var alive = true;
var score = 0;
var highscore = 0;
var day;

var colors = [];
var drivers = [];

var road;
var player;

function setup(){
	createCanvas(600, 800);

	colors = [
		color(232, 232, 232),	// white
		color(77, 77, 77),		// grey
		color(18, 18, 18),		// black
		color(85, 189, 25),		// green
		color(25, 71, 189), 	// blue
		color(189, 115, 25), 	// orange
		color(189, 30, 25), 	// red
		color(121, 25, 189) 	// purple
	];

	setTime();

	road = new Road();
	player = new Player();
}

function draw(){
	background(51);

	road.update();
	road.show();

	if (game == 2){
		spawnTraffic();
	}

	for (let driver of drivers){
		driver.update();
		driver.show();
	}

	player.update();
	player.show();

	if (!day){
		push();
		rectMode(CORNER);
		fill(13, 54, 120, 100);
		rect(0, 0, width, height);
		pop();
	}

	if (game != 2){
		push();
		fill(0, 125);
		noStroke();
		rectMode(CORNER);
		rect(0, 0, width, height);
		pop();
	}

	push();

	textFont('Impact');
	textAlign(CENTER, CENTER);
	fill(255);

	if (game == 1){
		textSize(86);
		text('HIGHWAY', width / 2, 100);
		text('DRIVING', width / 2, 180);

		textSize(52);
		text('PRESS SPACE TO PLAY', width / 2, height / 2);

		textAlign(LEFT, CENTER);
		textSize(24);
		text(`HIGH SCORE: ${highscore}`, 20, height - 50);
	} else if (game == 3){
		textSize(86);
		text('YOU', width / 2, 100);
		text('CRASHED', width / 2, 180);

		textSize(64);
		text(`SCORE: ${score}`, width / 2, height / 2 - 30);
		text(`HIGH SCORE: ${highscore}`, width / 2, height / 2 + 30);

		textSize(52);
		text('PRESS SPACE', width / 2, height - 130);
		text('TO PLAY AGAIN', width / 2, height - 60);
	} else {
		textAlign(LEFT, CENTER);
		textSize(24);
		text(`SCORE: ${score}`, 20, height - 50);
	}

	pop();
}

function keyPressed(){
	if (keyCode === LEFT_ARROW){
		if (game == 2){
			player.changeLane(-1);
		}
	} else if (keyCode === RIGHT_ARROW){
		if (game == 2){
			player.changeLane(1);
		}
	} else if (keyCode === 32){
		if (game == 1){
			score = 0;
			game = 2;
		} else if (game == 3){
			loop();
			restart();
		}
	}
}

function spawnTraffic(){
	let ran = random(0, 1);
	let lane = floor(random(1, 4))

	for (let driver of drivers){
		if (driver.lane === lane){
			return;
		}
	}

	if (ran < 0.9){
		if (drivers.length < 3){
			if (drivers.length == 2){
				for (let driver of drivers){
					if (driver.pos.y > height / 2 + 200){
						drivers.push(new Driver(lane));
						return;
					}
				}
			} else {
				drivers.push(new Driver(lane));
			}
		}
	}
}

function restart(){
	game = 1;
	player.pos.x = width / 2;
	player.lane = 2;
	drivers.splice(0, 3);
	alive = true;
	Player.speed = 10;
	setTime();
}

function dead(){
	game = 3;
	alive = false;
	noLoop();
}

function setTime(){
	let ran = random(0, 1);

	if (ran < 0.5){
		day = true;
	} else {
		day = false;
	}
}