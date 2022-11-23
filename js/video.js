// Page load
let videoplayer = document.getElementById("videoplayer"); 
let play = document.getElementById("play"); 

videoplayer.load();
videoplayer.autoplay = false;
videoplayer.loop = false;


// Play/Pause
play.addEventListener("click", function() {
    if (videoplayer.paused) {
        videoplayer.play();
        play.innerHTML = 'Pause';
    } else {
        videoplayer.pause();
        play.innerHTML = 'Play';
        }
});


// progress timer
var progressBox = document.querySelector('.progress-box')
var progress = document.querySelector('.progress')
var progressTimer = null

// calculate duration
function parseTime(value){
    　if (!value) return ''　　　
    　let interval = Math.floor(value)
    　let minute = (Math.floor(interval / 60)).toString().padStart(2, '0')
    　let second = (interval % 60).toString().padStart(2, '0')
    　return `${minute}:${second}`
    }

// process timer
function changeProgress() {
    var timeStr = parseTime(videoplayer.currentTime) + '/' + parseTime(videoplayer.duration)
    document.querySelector('.ctrl-box .progress-time').innerText = timeStr
    var percent = videoplayer.currentTime / videoplayer.duration
    progress.style.width = percent * 100 + '%'
    }

// click any time of progress
progressBox.onclick = function (e) {
    clearInterval(progressTimer)
    var length = e.pageX - progressBox.offsetLeft
    var percent = length / progressBox.offsetWidth
    videoplayer.currentTime = percent * videoplayer.duration
    videoplayer.play()
    progressTimer = setInterval(changeProgress, 60)
    }