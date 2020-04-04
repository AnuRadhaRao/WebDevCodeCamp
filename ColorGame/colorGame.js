var colors = [
	"rgb(255, 0, 0)",
	"rgb(0, 234, 123)",
	"rgb(0, 255, 255)",
	"rgb(123, 111, 189)",
	"rgb(65, 34, 244)",
	"rgb(250, 230, 220)"]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent=pickedColor;

for(var i = 0; i <squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		//compare colors
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			alert("Correct!");
		} else{
			alert("Wrong!");
		}
	});
}