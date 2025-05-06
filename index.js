var randomNum1=Math.random()*6;
rNum1=Math.floor(randomNum1+1);
var randomNum2=Math.random()*6;
rNum2=Math.floor(randomNum2+1);
selectImg();
selectWinner();
function selectImg(){
    if(rNum1===1)
    {
        document.getElementsByTagName("img")[0].setAttribute("src","Assets/dice1.png");
    }
    else if(rNum1===2)
        {
            document.getElementsByTagName("img")[0].setAttribute("src","Assets/dice2.png");
        }
    else if(rNum1===3)
        {
            document.getElementsByTagName("img")[0].setAttribute("src","Assets/dice3.png");
        }
    else if(rNum1===4)
        {
            document.getElementsByTagName("img")[0].setAttribute("src","Assets/dice4.png");
        }
    else if(rNum1===5)
        {
            document.getElementsByTagName("img")[0].setAttribute("src","Assets/dice5.png");
        }
    else if(rNum1===6)
        {
            document.getElementsByTagName("img")[0].setAttribute("src","Assets/dice6.png");
        }
    if(rNum2===1)
    {
        document.getElementsByTagName("img")[1].setAttribute("src","Assets/dice1.png");
    }
    else if(rNum2===2)
        {
            document.getElementsByTagName("img")[1].setAttribute("src","Assets/dice2.png");
        }
    else if(rNum2===3)
        {
            document.getElementsByTagName("img")[1].setAttribute("src","Assets/dice3.png");
        }
    else if(rNum2===4)
        {
            document.getElementsByTagName("img")[1].setAttribute("src","Assets/dice4.png");
        }
    else if(rNum2===5)
        {
            document.getElementsByTagName("img")[1].setAttribute("src","Assets/dice5.png");
        }
    else if(rNum2===6)
        {
            document.getElementsByTagName("img")[1].setAttribute("src","Assets/dice6.png");
        }

}
function selectWinner(){
    if(rNum1>rNum2)
    {
        document.querySelector("h1").innerText="PLAYER1 IS THE WINNER";
    }
    else if(rNum2>rNum1){
        document.querySelector("h1").innerText="PLAYER2 IS THE WINNER";
    }
    else{
        document.querySelector("h1").innerText="IT'S A DRAW";
    }
}
