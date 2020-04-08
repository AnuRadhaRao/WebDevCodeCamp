var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

for(var i = 0; i <modeButton.length;i++){
	modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "EASY" ? numberOfSquares = 3 : numberOfSquares = 6;
		console.log("Squares" +numberOfSquares);
		reset();
	});
}

function reset(){
	//remove messageDisplay
	messageDisplay.textContent="";
	//generate all new colors
	colors = generateRandomColors(numberOfSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	colorDisplay.textContent=pickedColor;									
	resetButton.textContent = "New Colors";
	//change colors of square
	for(var i = 0; i <squares.length; i++){
		if(colors[i]){
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			}else{
				squares[i].style.display = "none";
			}

	}

	h1.style.backgroundColor="steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

colorDisplay.textContent=pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
				
	squares[i].style.background = colors[i];		 
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
										 
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
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