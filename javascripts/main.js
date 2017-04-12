$(document).ready(function(){
	
	$("#bigButton").click(function(e){
		console.log("event: ", e);
		console.log("event.target: ", e.target);
		console.log("event.target jQuery: ", $(e.target));
		console.log("this: ", $(this));
		console.log("this js: ", this); //e.target
	});
});
this.a = 37;
console.log(window.a); //should be 37

var fubar = "42";

function baz(){
	console.log("baz");
	bar();
}
function bar(){
	console.log("bar");
	foo();
}
function foo(){
	console.log("foo");
	var fubar = "13";
	console.log("this", this);
	console.log("fubar", this.fubar);
}

baz();





