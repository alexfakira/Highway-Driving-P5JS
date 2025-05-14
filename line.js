class Line {
	
	constructor(x, y){
		this.pos = createVector(x, y);
	}

	update(){
		this.pos.y += (Player.speed * Player.speedMult);

		if (this.pos.y > height + 20){
			this.pos.y = -20;
		}
	}

	show(){
		push();

		noStroke();
		fill(255);
		rectMode(CENTER);
		rect(this.pos.x, this.pos.y, 5, 55);

		pop();
	}

}