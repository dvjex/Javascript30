window.addEventListener('keyup', function(e){
  var keyCode = e.keyCode;
  var keys = document.getElementsByClassName('key');
  var audio = document.getElementsByTagName('audio');

  for(var i=0;i<keys.length;i++){
    var keyValue = keys[i].getAttribute('data-key');
    if(keyCode == keyValue){
      audio[i].play();
      break;
    }
  }
});
