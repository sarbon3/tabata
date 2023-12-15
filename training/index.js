 const readyTimerBlock = document.querySelector("#ready");
const workTimerBlock = document.querySelector("#timer");
const rounds = document.querySelector("#roundNumber");

const btnStart = document.querySelector("#start");
const btnPause = document.querySelector("#pause");
const btnContinue = document.querySelector("#continue");
const btnStop = document.querySelector("#stop");


let round = 1;

let timerReadiness;
let timerWork;

let readyTime = 10;
let workTime = 20;

btnStart.addEventListener("click",startTabata);

function startTabata(){
    document.querySelector("#player").play();
    rounds.innerHTML = `${round}`;
    timerReadiness = setInterval(() => {
        readyTimerBlock.textContent = `00 : ${readyTime}`;
        if(readyTime < 10){
            readyTimerBlock.innerHTML = "00 : 0" + readyTime;
        }
        readyTime--;
        if(readyTime < 0){
            readyTime = 10;
            clearInterval(timerReadiness)
            startWorkTimer();
        }
    },900)
}
function startWorkTimer(){
    timerWork = setInterval(() => {
        workTimerBlock.textContent = `00 : ${workTime}`;
        if (workTime < 10 ){
            workTimerBlock.textContent = "00 : 0" + workTime;
        }
        workTime--;
        if(workTime < 0){
            workTime = 20;
            clearInterval(timerWork);
            rounds.textContent = `${round+=1}`;
            if(round < 9){
                startTabata();
            }
            else{
                reload();
            }
        }
    }, 900)
}
function reload(){
    location.reload();
}
btnPause.addEventListener("click", () => {
    document.querySelector("#player").pause();
    clearInterval(timerWork);
});
btnContinue.addEventListener("click", () =>{
    startWorkTimer();
    document.querySelector("#player").play();
})
btnStop.addEventListener("click", () =>{
    location.reload();
})


