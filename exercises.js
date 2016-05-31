//Practice: Writing Functions
var greeting = function(name){
	alert("Hello, " + name);
}
greeting("Halle");

var subtract = function(num1, num2){
	alert(num1-num2);
}

subtract(7,3);

var multiplication = function(num1, num2){
	alert(num1 * num2);
}

multiplication(2,4);

var threeTimes = function(num1, num2, num3){
	alert(num1 * num2* num3);
}

threeTimes(2,4,5);

var divide = function(num1, num2){
	alert(num1/num2);
}

divide(8, 4);

var remainder = function(num1, num2){
	alert("The remainder is " + num1%num2);
}

remainder(9,2);

var age = prompt("Enter your age");
var name = prompt("Enter your name");
var favFood = prompt("What in your favorite food?");
var userInfo = function (age, name, favFood) {
	alert("Age: " + age + "; name: " + name + "; favorite food: " + favFood);

}

userInfo(age, name, favFood);
