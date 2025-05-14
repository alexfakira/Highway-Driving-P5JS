class Player extends Car {

	static speed = 10;
	static speedMult = 1;

	constructor(){
		super(width / 2, height - 100, 2);
	}

	update(){
		if (game != 2){
			return;
		}

		Player.speedMult = 1;

		if (keyIsDown(UP_ARROW)){
			Player.speedMult = 1.3;
		}

		if (keyIsDown(DOWN_ARROW)){
			Player.speedMult = 0.8;
		}
	}

	changeLane(dir){
		if (dir < 0){
			if (this.lane == 1){
				return;
			}

			this.pos.x -= 160;
			this.lane--;
		} else {
			if (this.lane === 3){
				return;
			}

			this.pos.x += 160;
			this.lane++;
		}
	}

}