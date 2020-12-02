var val1 = Math.ceil(6*Math.random());

var val2 = Math.ceil(6*Math.random());

document.querySelector(".img1").src = "images/dice"+val1+".png";

document.querySelector(".img2").src = "images/dice"+val2+".png";

if(val1>val2)
{
    document.querySelector("h1").innerHTML = "⛳ Player 1 Wins!";
}

else if(val1==val2)
{
    document.querySelector("h1").innerHTML = "⛳ Both Win!";
}

else
{
    document.querySelector("h1").innerHTML = "⛳ Player 2 Wins!";
}