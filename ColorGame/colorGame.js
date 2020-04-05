var colors = [
	"rgb(255, 0, 0)",
	"rgb(0, 234, 123)",
	"rgb(0, 255, 255)",
	"rgb(123, 111, 189)",
	"rgb(65, 34, 244)",
	"rgb(250, 230, 220)"]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent=pickedColor;

for(var i = 0; i <squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		//compare colors
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(pickedColor);
		} else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

function changeColors(color){
	//loop through all squares and change color
	squares.forEach((i)=>{
		i.style.backgroundColor=color;
	})
}

function pickColor(){

	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}