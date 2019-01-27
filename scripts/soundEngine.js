var audio;
var playMessageSound = function (message){
    if (message === "*phone ringing* "){
        /*
        audio = new Audio("music/phone_ringing.mp3");
        audio.play();   
        */
       console.log("audio about to play");
       var x = document.getElementById("phone_ringing");
       x.play();
    };
}

// *phone ringing* --> phone_ringing.mp3
// *click* --> phone_pickedup.mp3
// *whizzing noise* --> power_whizzing.mp3
// *buzzing noise and door opening* --> door_buzz.mp3
// *loud whirring followed by a loud thud* --> barricade_thudding.mp3
// *phone line dead noise* --> dead_phone.mp3
// *wiping noise* --> wiping_mirror.mp3
// *door opening* --> door_opening.mp3