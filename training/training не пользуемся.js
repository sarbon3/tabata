const  readyBlock = document.querySelector("#ready");
const  timerBlock = document.querySelector("#timer");
const  roundNumberBlock = document.querySelector("#roundNumber");
const  btnPause = document.querySelector("#pause");
const btnStop = document.querySelector("#stop");
const continueTraining = document.querySelector("#continue");


let timerId;
let miliseconds = 0;
let seconds = 10;

if(seconds < 10){
    seconds  = "0" + seconds;
}
function areYouReady(){
    seconds--;
    if(seconds < 0){
        stopTime();
        seconds = 0;
        secondTimerId= setInterval(startTraining,1000);
    }
    function stopTime(){
        clearInterval(timerId);
    }
    readyBlock.textContent = `${miliseconds} : ${seconds}`;
}
timerId = setInterval(areYouReady,1000);

let secondTimerId;
let twentySeconds = 20;
let rounds =0;
rounds++;

function startTraining(){
    roundNumberBlock.textContent = rounds;
    twentySeconds--;
    if(twentySeconds < 0){
        stopSecondTime()
        twentySeconds = 0;
        thirdTimerId = setInterval(relaxTime,1000);
    }
    function stopSecondTime(){
        clearInterval(secondTimerId);
    }
    timerBlock.textContent = `${miliseconds} : ${twentySeconds}`;
}

let thirdTimerId;
secondsForRest = 10;
function relaxTime(){
    secondsForRest--;
    if(secondsForRest < 0){
        stopRestingTime();
        secondsForRest = 0;
    }
    function stopRestingTime(){
        clearInterval(thirdTimerId);
    }
    timerRestBlock.textContent = `${miliseconds} : ${secondsForRest}`;
}

function repeatAll(){
    
}
btnPause.addEventListener("click", () => {
    clearInterval(secondTimerId);
});

continueTraining.addEventListener("click", () =>{
    secondTimerId= setInterval(startTraining,1000);
})

btnBack.addEventListener("click",() =>{
    history.back();
})