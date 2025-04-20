console.log("Welome to spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgrssBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: "Salam-e-Ishq1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ish2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Salam-e-Ish3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Salam-e-Ish4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Salam-e-Ish5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Salam-e-Ish6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Salam-e-Ish7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Salam-e-Ish8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Salam-e-Ish9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Salam-e-Ishq10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText  =songs[i].songName;
});

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }

    
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgrssBar.value = progress;

});

myProgrssBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgrssBar.value * audioElement.duration/100 ;
});

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songsItemPlay')).forEach((element)=>{
        e.target.classList.add('fa-circle-pause'); 
        
    })
}

document.getElementsByClassName('songItemPlay').forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        console.log(e.target.classList.remove('fa-circle-play'));
        console.log(e.target.classList.add('fa-circle-pause'));
    })
});