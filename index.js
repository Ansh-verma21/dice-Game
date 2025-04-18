const randomNumber1=Math.ceil(Math.random()*6);
const randomNumber2=Math.ceil(Math.random()*6);
console.log(randomNumber1);
console.log(randomNumber2);

const imgsrc="images/dice"+randomNumber1+".png"
const imgsrc2="images/dice"+randomNumber2+".png"

const image1=document.querySelectorAll("img")[0];
const image2=document.querySelectorAll("img")[1];

image1.setAttribute("src",imgsrc);
image2.setAttribute("src",imgsrc2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins! 🚩";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}