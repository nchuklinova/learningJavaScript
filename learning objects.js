var g = {};
var anna = {
	first_name: "Anna",
	last_name: "Mikhailova",
	age: 35,
	print: function(){
		console.log(this.first_name, this.last_name,"is", this.age);
	}
};
anna.print();

var a = 1;
while(a > 1){
	a = a + 1;
	if(a >= 7){
		break;}  
}
console.log("lsdkfjsdf");


var s = 3;
if(s > 0){
	console.log("S is more then zero");
} else {
	console.log("oops");
}

var d = 6;
if(d > 6){
	console.log("ggggg");
} else if(d < 6){
	console.log("ooooo");
} else if ( d = 6){
	console.log("!");
}