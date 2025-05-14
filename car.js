class Car {

	constructor(x, y, lane){
		this.pos = createVector(x, y);
		this.lane = lane;

		this.col = colors[floor(random(0, colors.length))];
	}

	update(){

	}

	show(){
		push();

		noStroke();
		rectMode(CENTER);

		if (!day){
			// light cones
			fill(245, 244, 176, 12);
			triangle(this.pos.x - 20 ,this.pos.y - 62, this.pos.x - 60, this.pos.y - 150, this.pos.x + 20, this.pos.y - 150);
			triangle(this.pos.x + 20 ,this.pos.y - 62, this.pos.x - 20, this.pos.y - 150, this.pos.x + 60, this.pos.y - 150);
		}

		// wheels
		fill(31, 31, 31);
		rect(this.pos.x - 32, this.pos.y - 35, 4, 20);
		rect(this.pos.x + 32, this.pos.y - 35, 4, 20);
		rect(this.pos.x - 32, this.pos.y + 45, 4, 20);
		rect(this.pos.x + 32, this.pos.y + 45, 4, 20);

		// body
		fill(this.col);
		rect(this.pos.x, this.pos.y, 60, 140);

		// headlights
		fill(235, 230, 213);
		rect(this.pos.x - 20, this.pos.y - 68, 10, 4);
		rect(this.pos.x + 20, this.pos.y - 68, 10, 4);

		// brakelights
		fill(145, 29, 29);
		rect(this.pos.x - 18, this.pos.y + 68, 14, 4);
		rect(this.pos.x + 18, this.pos.y + 68, 14, 4);

		// glass
		fill(31, 31, 31);
		rect(this.pos.x, this.pos.y - 30, 50, 20);
		rect(this.pos.x, this.pos.y + 40, 50, 16);

		pop();
	}

}