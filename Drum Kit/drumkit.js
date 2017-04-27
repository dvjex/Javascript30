window.addEventListener('keyup', function(e){
  var keyCode = e.keyCode;
  var audio = document.getElementsByTagName('audio');

  for(var i=0;i<audio.length;i++){
    var keyValue = audio[i].getAttribute('data-key');
    if(keyCode == keyValue){
      audio[i].play();
      break;
    }
  }
});
