var video = document.querySelector('#video');
var play = document.querySelector('#play');
var pause = document.querySelector('#pause');
var backward = document.querySelector('#backward');
var forward = document.querySelector('#forward');

play.addEventListener('click', handlePlay);

function handlePlay() {
    video.play();
    play.hidden = true;
    pause.hidden = false;
}

pause.addEventListener('click', handlePause);

function handlePause() {
    video.pause();
    pause.hidden = true;
    play.hidden = false;
}