var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "None";
		}
	}
});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length;i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});

colorDisplay.textContent=pickedColor;

squareColorChange();

resetButton.addEventListener("click", function(){
	//remove messageDisplay
	messageDisplay.textContent="";
	//generate all new colors
	colors = generateRandomColors(6);
	// pick a new random color from array
	pickedColor = pickColor();
	//change display text
	resetButton.textContent = "New Colors";
	//change display target color
	colorDisplay.textContent=pickedColor;
	//change colors of square
	squareColorChange();

	h1.style.backgroundColor="#232323";

})

function squareColorChange(){

	for(var i = 0; i <squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		//compare colors
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent="Play Again?";
		} else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

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