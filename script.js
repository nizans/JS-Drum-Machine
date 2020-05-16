window.addEventListener ('keydown',  function(e) {



const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const DrumBox = document.querySelector(`.DrumBox[data-key="${e.keyCode}"]`)

if (!audio) {
  return;}
  audio.currentTime = 0;
audio.play();
DrumBox.classList.add('active')
})

const allDrums = document.querySelectorAll('.DrumBox');
allDrums.forEach(drum => drum.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
  if (e.propertyName !== 'transform') {
return ;
  }
this.classList.remove('active')
}
