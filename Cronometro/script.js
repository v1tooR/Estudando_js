"use strict";

let hour = 0;
let min = 0;
let sec = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.start.onclick = () => pause();
document.form_main.start.onclick = () => reset();

/*criando as funções*/

function start(){
    pause();
    cron = setInterval(() => {timer();},10);
}

function pause(){
    clearInterval(cron);
}

function reset(){
    hour=0;
    min=0;
    sec=0;

    document.getElementById('hour').innerText("00");
    document.getElementById('min').innerText("00");
    document.getElementById("sec").innerText("00");
}

function returnData(){
    return input > 10 ? input: `0${input}`
}

function timer(){
    if(second == 60){
        second=0;
        minute++;
    }
    if(min == 60){
        min=0;
        hour++;
    }

    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('min').innerText = returnData(min);
    document.getElementById('sec').innetText = returnData(sec);
}