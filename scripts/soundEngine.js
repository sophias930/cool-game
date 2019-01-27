var audio;
var playMessageSound = function (message){
    if (message === "*phone ringing*"){
        audio = new Audio("music/phone_ringing.mp3");
        audio.play();   
    };
}