const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


const currentYear = new Date().getFullYear();
const newYearTime = new Date(`March 25 ${currentYear} 00:00:00`)

function updateCountdowntime(){
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24) ;
    const h = Math.floor(diff / 1000/ 60 / 60) % 24;
    const m = Math.floor(diff / 1000/ 60 ) % 60;
    const s = Math.floor(diff / 1000 ) % 60;

    days.innerHTML = '0' + d;
    hours.innerHTML = h < 10 ? '0'  + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;




  
}
setInterval(updateCountdowntime, 1000);
