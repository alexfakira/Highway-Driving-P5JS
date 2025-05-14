class Driver extends Car {

	constructor(lane){
		let x = 0;
		let y = -100

		switch(lane){
			case 1:
				x = width / 2 - 160;
				break;
			case 2:
				x = width / 2;
				break;
			case 3:
				x = width / 2 + 160;
				break;
		}

		super(x, y, lane);
		this.speed = random(5, 9);
	}

	update(){
		this.pos.y -= this.speed;
		this.pos.y += Player.speed * Player.speedMult;

		this.checkCollisions();

		if (this.pos.y > height + 150 || this.pos.y < -120){
			let index = drivers.indexOf(this);
			drivers.splice(index, 1);
			score++;
			Player.speed *= 1.01;
		}
	}

	checkCollisions(){
		let x1 = this.pos.x - 30;
		let y1 = this.pos.y - 70;
		let x2 = this.pos.x + 30;
		let y2 = this.pos.y + 70;

		let x3 = player.pos.x - 30;
		let y3 = player.pos.y - 70;
		let x4 = player.pos.x + 30;
		let y4 = player.pos.y + 70;

		if (y1 < y4 && y2 > y3){
			if (this.lane == player.lane){
				if (alive){
					if (score > highscore){
						highscore = score;
					}

					dead();
				}
			}
		}
	}

}