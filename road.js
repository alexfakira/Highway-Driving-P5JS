class Road {

	constructor(){
		this.lines = [];

		for (let i = -20; i < height + 20; i += 120){
			for (let j = 0; j < 2; j++){
				if (j == 0){
					this.lines.push(new Line(218, i));
				} else {
					this.lines.push(new Line(width - 218, i));
				}
			}
		}
	}

	update(){
		for (let line of this.lines){
			line.update();
			line.show();
		}
	}

	show(){
		push();

		noStroke();
		rectMode(CORNER);
		fill(78, 133, 46);
		rect(0, 0, 50, height);
		rect(width - 50, 0, 50, height);
		fill(255);
		rect(60, 0, 5, height);
		rect((width - 65), 0, 5, height);

		pop();
	}

}