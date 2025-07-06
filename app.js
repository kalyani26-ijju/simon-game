let gameSeq=[];
let userSeq=[];

let btns=["orange","pink","skyblue","lightblue"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
    }

    levelUp();
});

function gameFlash(b2){
    b2.classList.add("flash");
    setTimeout(function(){
        b2.classList.remove("flash")
    },250);
}

function userFlash(b3){
    b3.classList.add("userflash");
    setTimeout(function(){
        b3.classList.remove("userflash")
    },250);
}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    //random btn choose
    let randIdx=Math.floor(Math.random()*3);//random index form 0 to 3
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level:",level);
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerText=`game over!Your Score was ${level-1} and press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
   console.log("button pressed");
    let b1=this;
    userFlash(b1);

    userColor=b1.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let albtns=document.querySelectorAll(".button");
for(b of albtns){
    b.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}