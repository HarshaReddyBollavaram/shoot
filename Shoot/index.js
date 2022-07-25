//Random numbers between 1 to 6 are generated
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
//Selecting the image using DOM
var img1=document.querySelectorAll("img")[0];
var img2=document.querySelectorAll("img")[1];
//Generating random image using random number for dice 1
var randomImage1="dice"+randomNumber1+".png";
var randomImageSource1 = "images/"+randomImage1;
//Replacing dice 1 image
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
//Generating random image using random number for dice 2
var randomImage2="dice"+randomNumber2+".png";
var randomImageSource2 = "images/"+randomImage2;
//Replacing dice 1 image
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
//Displaying the Winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("footer").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("footer").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("footer").innerHTML = "Draw!";
  }