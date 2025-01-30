let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let start=false;
let level=0;
let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
    levelUp();
    }
});

function btnflash(btn){

    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },100);
}

function userflash(btn){

    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },100);
}

function levelUp(){
    userSeq=[];
level++;
h2.innerText=`Level ${level}`;
let randidx=Math.floor(Math.random()*3);
let randColor=btns[randidx];
let randbtn=document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
btnflash(randbtn);
}

function check(idx){
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
       h2.innerHTML=`Game Over ! Your score was <b>${level}</b>  Press any key to start`;
        start=false;
        gameSeq=[];
        userSeq=[];
        level=0;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);

    }
}

function btnpress(){
    let btn=this;
    userflash(btn);
    let usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    check(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");

for(b of allbtns){
    b.addEventListener("click",btnpress);
}

