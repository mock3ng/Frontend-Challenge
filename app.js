const container = document.querySelector('.container');
const image = document.querySelector('#music-image');
const audio = document.querySelector('#audio');
const title = document.querySelector('.music-details .title');
const singer = document.querySelector('.music-details .singer');
const prev = document.querySelector('#prev');
const play = document.querySelector('#play');
const next = document.querySelector('#next');
const duration = document.querySelector("#duration");
const currentTime = document.querySelector("#current-time");
const progressBar = document.querySelector('#progress-bar');
const mute = document.querySelector('#mute');
const volumeBar = document.querySelector('#volume-bar');
const otherMusic = document.querySelector('.list-group');
const ul = document.querySelector('ul');


const player = new MusicPlayer(musicList);

window.addEventListener('load', () => {

    let music = player.getMusic();
    displayMusic(music);
    displayMusicList(musicList);


});

function displayMusic(music){

    image.src = "img/"+music.img;
    title.innerText = music.title;
    singer.innerText = music.singer;
    audio.src = "mp3/"+music.file;

}


play.addEventListener('click',function(event){

    const isMusicPlay = container.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();

});

function pauseMusic(){
    
    container.classList.remove("playing");
    play.querySelector("i").classList = "fa-solid fa-play";
    audio.pause();
}

function playMusic(){

    container.classList.add("playing");
    play.querySelector("i").classList = "fa-solid fa-pause";
    audio.play();

}

next.addEventListener("click",function(){

    player.next();
    displayMusic(player.getMusic());
    if(container.classList.contains("playing")){
        playMusic();
    }
    isPlayingNow();
})

prev.addEventListener("click",function(){

    player.prev();
    displayMusic(player.getMusic());
    if(container.classList.contains("playing")){
        playMusic();
    }
    isPlayingNow();

})

const calculateTime = (seconds) => {

    const minute = Math.floor(seconds / 60 );
    const second = Math.floor(seconds % 60 );
    const updateSecond = second < 10 ?  `0${second}` : `${second}`;
    const result = `${minute}:${updateSecond}`;
    return result
}

audio.addEventListener("loadedmetadata",() => {

    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor (audio.duration);

});

audio.addEventListener("timeupdate",() => {

    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value);
    console.log(progressBar.value,audio.duration);
    if(progressBar.value == Math.floor(audio.duration)){
        player.next();
        displayMusic(player.getMusic());
        playMusic();
    }
    isPlayingNow();
})



progressBar.addEventListener("input",() => {
    currentTime.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value;

});

let muteStation = "unmute";

mute.addEventListener('click',() => {

    if(muteStation==="unmute"){

        audio.muted = true;
        volumeBar.value=0;
        mute.classList = "fa-solid fa-volume-xmark"
        muteStation = "mute"

    }else{
        audio.muted = false;
        volumeBar.value=100;
        mute.classList = "fa-solid fa-volume-high"
        muteStation = "unmute"
    }


});

volumeBar.addEventListener('input', () => {

    const value = volumeBar.value;
    audio.volume = value / 100;
    if(value == 0 ){
        audio.muted = true;
        volumeBar.value=0;
        mute.classList = "fa-solid fa-volume-xmark"
        muteStation = "mute"

    }else{

        audio.muted = false;
        volumeBar.value=value ;
        mute.classList = "fa-solid fa-volume-high"
        muteStation = "unmute"
    }

});

const displayMusicList = (list) => {
    
    for(let i = 0 ; i<list.length ; i++){

        let tag = 
            `<li onclick="selectedMusic(this)" li-index='${i}' class="list-group-item d-flex justify-content-center align-items-center">
            <span>${list[i].getName()}</span>
            </li>`;
        
        otherMusic.insertAdjacentHTML("beforeend",tag);
    }
    isPlayingNow();
    

}


const selectedMusic = (li) => {
    player.index = li.getAttribute("li-index");
    displayMusic(player.getMusic());
    playMusic();
    isPlayingNow();
}

const isPlayingNow = () => {

    for(let li of ul.querySelectorAll("li")){

        if(li.classList.contains("playing")){
            li.classList.remove("playing");
        }

        if(li.getAttribute("li-index")== player.index){
            li.classList.add("playing");
        }

    }
}