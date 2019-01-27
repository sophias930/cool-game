var playMessageSound = function (message) {
    console.log(message);
    if (message === "C: *phone ringing* ") {
        /*
        audio = new Audio("music/phone_ringing.mp3");
        audio.play();   
        */
        console.log("audio about to play");
        var music = document.getElementById("phone_ringing");

        
        var promise = music.play();
        if (promise !== undefined) {
            promise.then(_ => {
                console.log("no error");
                music.play();
            }).catch(error => {
                console.log(error);
            });
        }
        
        //playMusic(music);

    };
}

async function playMusic(music) {
    try {
        console.log("about to play!");
        await music.play();
        console.log("playing...");
      } catch(err) {
        console.log(err);
      }
}


// *phone ringing* --> phone_ringing.mp3
// *click* --> phone_pickedup.mp3
// *whizzing noise* --> power_whizzing.mp3
// *buzzing noise and door opening* --> door_buzz.mp3
// *loud whirring followed by a loud thud* --> barricade_thudding.mp3
// *phone line dead noise* --> dead_phone.mp3
// *wiping noise* --> wiping_mirror.mp3
// *door opening* --> door_opening.mp3
/*
    console.log(message);
    if (message === "C: *phone ringing* "){

    }
    */

