const current_Time = document.getElementById('current-time');
const inputTime = document.getElementById('input-time');
const submitButton = document.getElementById('submit-button');
const alarmTime = document.getElementById('alaram-time');

 let newTime =null;
function showTime(){
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    current_Time.innerText = time;
    if (newTime && time === newTime) {
        alert("Good! Your time has reached.");
        targetTime = null; // Reset alarm after triggering
    }
}

const interval = setInterval(showTime,1000);

submitButton.addEventListener('click', () => {
    let timeparts = inputTime.value.split(":");

    let [inputhrs, inputmins, inputsecs] = timeparts.map(num => parseInt(num, 10));
    let now = new Date();

    now.setHours(now.getHours() + inputhrs);
    now.setMinutes(now.getMinutes() + inputmins);
    now.setSeconds(now.getSeconds() + inputsecs);

    newTime = now.toLocaleTimeString('en-GB', { hour12: false });
    console.log("Target Time:", newTime);
    alarmTime.innerText = "Alarm Set For: " + newTime;
})




