const button = document.getElementById("stop-button");
const startButton = document.getElementById("start-button");

function showTime(){
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    document.getElementById('time').innerText = time;
    
}

let interval = setInterval(showTime, 1000);

button.addEventListener('click', () => {
    clearInterval(interval);
})


startButton.addEventListener('click', () => {
    setInterval(showTime, 1000);
})