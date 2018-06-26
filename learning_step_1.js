var toyota = {
	name: "Corola",
	max_speed: 360,
	current_speed: 0,
	run: function(){
			for (this.current_speed; this.current_speed <= this.max_speed; this.current_speed += 60){
				console.log("Current speed is", this.current_speed);
			}
	},
	print: function(t){
		console.log(t, this.name);
	}
};
//toyota.run();
//toyota.print("Hi");
//toyota.print("Hello");

var a = function(){
	console.log("I'm a");
};

var e = function(f){
	console.log(f);
}

var s = function(h, b, q){
	// h [1] = a (function)
	// b [2] = "I'm second"
	// q [3] = e (function)

	console.log("I'm s");
	h();  // a();
	q(b); // e(b); b == "I'm second"
};

s(a, "I'm second", e);
