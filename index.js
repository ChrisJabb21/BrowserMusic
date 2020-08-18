window.addEventListener('keydown', function (e) {
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return;
    console.log(e.keyCode);// stop fcn from running all together.
    audio.currentTime = 0; //rewind to zero
    audio.play();
    
    key.classList.toggle('playing');
});