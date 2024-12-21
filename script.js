var timer=60;
var score=0;
var hitrn = 0;
function bubblemaker(){

    var clutter="";
    for(var i=1; i<=80 ; i++)
    {
        var rn = Math.floor(Math.random()*10)
         clutter += `<div class="bubble">${rn}</div>`
    }
    
    document.querySelector("#panelbottom").innerHTML = clutter;
}
bubblemaker();

function runtimer()
{
    var timerint = setInterval(function(){
        if(timer>0)
        {
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else
        {
            clearInterval(timerint);
            document.querySelector("#panelbottom").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
}
runtimer();

function getnewhit()
{
    hitrn= Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hitrn;
}
getnewhit()

function increasescore(){
    score+=1;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#panelbottom").addEventListener("click",function(dets){
    var clicknumber = Number(dets.target.textContent)
    if(clicknumber===hitrn)
    {
        increasescore();
        bubblemaker();
        getnewhit();
    }
})