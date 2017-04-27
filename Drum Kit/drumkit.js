window.addEventListener('keydown', function(e){
  var key = document.querySelector('.key[data-key="'+e.keyCode+'"]');
  if(!key) {return;}
  key.classList.add('playing');
  setTimeout(function(){
    key.classList.remove('playing');
  },1);
});
window.addEventListener('keyup', function(e){
  var keyCode = e.keyCode;
  var keys = document.getElementsByClassName('key');
  var audio = document.getElementsByTagName('audio');

  for(var i=0;i<audio.length;i++){
    var keyValue = audio[i].getAttribute('data-key');
    if(keyCode == keyValue){
      audio[i].play();
      break;
    }
  }
});

keys = document.querySelector('.key');
keys.for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener('transitionend', removeTransition);
}
