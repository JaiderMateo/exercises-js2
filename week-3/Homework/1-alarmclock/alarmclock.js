



function setAlarm() {
  const time = document.querySelector('#alarmSet');
  let countDown = document.querySelector('#timeRemaining');
  countDown.innerText = `Time Remaining: 00:${time.value}`;
  var decreasingTime = setInterval(oneSecond, 1000);
  function oneSecond(){
    if(time.value == 0){
      playAlarm()
      clearInterval(decreasingTime);
    }else{
      time.value -= 1;
      countDown.innerText = `Time Remaining: 00:${time.value}`;
    }}}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
