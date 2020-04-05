var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent=pickedColor;

for(var i = 0; i <squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		//compare colors
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
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

function generateRandomColors(num){

	var arr = []
	//make an array
	// add "num" random colors to array
	for(var i = 0; i <num; i++){
		//get random color and push into arr
		arr.push(randomColor());

	}

	return arr;
}

function randomColor(){
	//Pick combination of red,green,blue
	//Pick a "red","green" and "blue" from 0 to 255
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	//rgb(r,g,b)

	return "rgb("+r+", "+g+", "+b+")";
}