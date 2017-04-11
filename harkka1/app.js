// A)
console.log("Hello World");

// B)
function greet() {
	console.log("Hello World greet()");
}
greet();

// C)
logGreeting(function() {
	console.log("Hello World logGreeting()");
});

// D)
function logGreeting(fn) {
	fn();
}
logGreeting(greet);

// E)

var greetMe = function() {

	console.log("Hello World greetMe");

}

greetMe();

// F)

require('./greet.js');
