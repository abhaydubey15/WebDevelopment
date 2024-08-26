let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","grren"];
 
let started=false;
let level= 0;

let h2=document.querySelector("h2");


document.addEventListener("keypress", function()
{
    // console.log("Game start");
    if(started==false)
    {
        console.log("game is started");
        started=true;

        levelup();
        
    }
    
});
function gameflash(btn)
{ 
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    },250);

}

function userflash(btn)
{ 
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");

    },250);

}



function levelup()
{
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    // random button
    let randInx=Math.floor(Math.random()*3);
        let randcolor=btns[randInx];
        let randBtn=document.querySelector(`.${randcolor}`);
        // console.log(randInx);
        // console.log(randcolor);
        // console.log(randBtn);
        
        
        
     gameSeq.push(randcolor);
     console.log(gameSeq); 
     
    gameflash(randBtn);
 

}

function checkans(idx)
{
    // console.log("curr level",level);
   

    if(userSeq[idx]===gameSeq[idx])
    {
       
        if(userSeq.length===gameSeq.length)
        {
           setTimeout(levelup,1000)
        }
    }
    else{
        h2.innerHTML=`Game Over! your score is  <b>${level}</b> <br> Press nay key to start the game`;

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function()
    {
        document.querySelector("body").style.backgroundColor="white"; 
    },150)
        reset();
    }
    
}
   
function btnpress()
{
    // console.log(this);
    
    // console.log(this);
    let btn=this;
    userflash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkans(userSeq.length-1);

    
}

let allbtns=document.querySelectorAll(".btn");

for(btn of allbtns)
{
    btn.addEventListener("click", btnpress);
} 



function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}