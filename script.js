
function playsound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(audio);
    if(!audio)return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')
}

function remmoveTransition(e){
    if(e.propertyName!=='transform')return;
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key=> key.addEventListener('transitionend', remmoveTransition))
window.addEventListener('keydown', playsound)