var squares = document.querySelectorAll(".square");
var goalColorDisplay = document.getElementById("color");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("#header");
var resetButton = document.querySelector("#reset");
var hardButton = document.querySelector("#hard");
var easyButton = document.querySelector("#easy");
var colors = generateRandomColors(6);
var goalColor = pickColor();
goalColorDisplay.innerHTML = goalColor;
var hardMode = true;


for (var i=0; i <squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
      if (this.style.backgroundColor === goalColor){
          gotCorrect();
      }  
      else {
          messageDisplay.textContent = "Try Again!"
          this.style.backgroundColor = "#232323";
      }
    });
}


function gotCorrect() {
    for (var i=0; i <squares.length; i++){
        messageDisplay.innerHTML = "Correct!";
        squares[i].style.backgroundColor = goalColor; 
    }
    resetButton.textContent = "PLAY AGAIN?";
    header.style.backgroundColor = goalColor; 
}

function pickColor(){
    var rtn = Math.floor(Math.random() * colors.length);
    return colors[rtn];
}

function generateRandomColors(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push(makeRandomColor());
    }
    return arr;

}

function makeRandomColor(){
 var red = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var randomColor = red + ", " + green + ", " + blue;
 return "rgb(" + randomColor + ")";
}

function reset(){
    if (hardMode ===true){
        colors = generateRandomColors(6);
    }
    else {
        colors = generateRandomColors(3);
    }
    goalColor = pickColor();
    goalColorDisplay.textContent = goalColor;
    setNewColors();
    messageDisplay.textContent = "";
    header.style.backgroundColor = "steelblue";
    resetButton.textContent = "NEW COLORS";
}

resetButton.addEventListener("click", function(){
    reset();
})

function setNewColors(){
    for (var i=0; i <squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
}


easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    colors = generateRandomColors(3);
    goalColor = pickColor();
    goalColorDisplay.textContent = goalColor;
    hardMode = false;
    header.style.backgroundColor = "steelblue";
    for (var i = 0; i < squares.length; i++){
        if(colors[i]) {
         squares[i].style.backgroundColor = colors[i];   
        }
        else {
            squares[i].style.display = "none";
        }
    }
})

hardButton.addEventListener("click", function(){
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    colors = generateRandomColors(6);
    goalColor = pickColor();
    goalColorDisplay.textContent = goalColor;
    hardMode = true;
    header.style.backgroundColor = "steelblue";
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];   
        squares[i].style.display = "block";
        }
    })

