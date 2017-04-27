window.addEventListener('keydown', playSound);

function playSound{
  var keyCode = e.keyCode;
  var key = document.querySelector('.key[data-key="'+keyCode+'"]');
  if(!key) {return;}
  key.classList.add('playing');

  var audio = document.getElementsByTagName('audio');
  for(var i=0;i<audio.length;i++){
    var keyValue = audio[i].getAttribute('data-key');
    if(keyCode == keyValue){
      audio[i].currentTime=0;
      audio[i].play();
      break;
    }
  }
});
function removeTransition(e)
{
  if(e.propertyName != 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener('transitionend', removeTransition);
}
