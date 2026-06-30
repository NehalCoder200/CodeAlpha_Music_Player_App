let songName = document.getElementById('song-name')
let songImg = document.querySelector('.song-img')
let playPause = document.getElementById('play-pause')
let newIcons = `<i class="fa-solid fa-pause"></i>`
let volumeRange = document.getElementById('volume-range')
let volSvg = document.getElementById('vol-svg')
let songDura = document.getElementById('song-duration')
let index = 0;
let palyingSong = false;
let audioEl = document.createElement('audio')
let songs = [
    {
        name: 'Go',
        path: 'MusicSongs/firstsong-Go! - NEFFEX.mp3',
        image: 'Images/1.jpg'
    },
    {
        name: 'Snake On The Beach',
        path: 'MusicSongs/secondsong-Snake On The Beach - Nico Staf.mp3',
        image: 'Images/2.jpg'
    },
    {
        name: 'Kurt',
        path: 'MusicSongs/three-Kurt - Cheel.mp3',
        image: 'Images/3.jpg'
    },
    {
        name: 'Simple Rock',
        path: 'MusicSongs/foursong-Simple Rock.mp3',
        image: 'Images/4.jpg'
    },
]

function loadAudio(index) {
    audioEl.src = songs[index].path;
    songName.innerHTML = songs[index].name
    songImg.style = `background-image: url('${songs[index].image}');`

    volume()
    duration()
    setInterval(() => {
        songDura.max = audioEl.duration
        songDura.value = audioEl.currentTime
    }, 1000)
    // audioEl.load()
}

loadAudio(index)

function playPauseFn() {
    if (palyingSong == false) {
        playSong()
    }
    else {
        pauseSong()
    }
}


function playSong() {
    audioEl.play()
    palyingSong = true;
    playPause.src = 'pause.svg'
}

function pauseSong() {
    audioEl.pause()
    palyingSong = false;
    playPause.src = 'play.svg'
}

function nextSong() {
    if (index < songs.length - 1) {
        index++
        loadAudio(index)
        playSong()
    } else {
        index = 0;
        loadAudio(index)
        playSong()
    }
}

function previousSong() {
    if (index > 0) {

        index--;
        loadAudio(index);
        playSong();
    }
    else {
        index = songs.length - 1
        loadAudio(index)
        playSong()
    }
}

function volume() {
    audioEl.volume = volumeRange.value / 100
    if (volumeRange.value == 0) {
        volSvg.src = 'mute.svg'
    } else {
        volSvg.src = 'volume.svg'
    }
}

function duration() {
    audioEl.currentTime = songDura.value
}