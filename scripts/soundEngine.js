var playMessageSound = function (message) {
    console.log(message);
    if (message === "C: *phone ringing*") {
        console.log("audio about to play");
        var music = document.getElementById("phone_ringing");
    
        var promise = music.play();
        if (promise !== undefined) {
            promise.then(_ => {
                music.play();
            }).catch(error => {
                console.log(error.name + " " + error.message);
            });
        }   
    } else if (message === "C: *click*") {
        console.log("audio about to play");
        var music = document.getElementById("phone_pickedup");
    
        var promise = music.play();
        if (promise !== undefined) {
            promise.then(_ => {
                music.play();
            }).catch(error => {
                console.log(error.name + " " + error.message);
            });
        } 
    } else if (message === "C: *whizzing noise*") {
        console.log("audio about to play");
        var music = document.getElementById("power_whizzing");
    
        var promise = music.play();
        if (promise !== undefined) {
            promise.then(_ => {
                music.play();
            }).catch(error => {
                console.log(error.name + " " + error.message);
            });
        } 
    } else if (message === "C: *buzzing noise and door opening*") {
        console.log("audio about to play");
        var music = document.getElementById("door_buzz");
    
        var promise = music.play();
        if (promise !== undefined) {
            promise.then(_ => {
                music.play();
            }).catch(error => {
                console.log(error.name + " " + error.message);
            });
        } 
    } else if (message === "C: *loud whirring follow by a loud thud*") {
        console.log("audio about to play");
        var music = document.getElementById("barricade");
    
        var promise = music.play();
        if (promise !== undefined) {
            promise.then(_ => {
                music.play();
            }).catch(error => {
                console.log(error.name + " " + error.message);
            });
        } 
    } else if (message === "C: *phone line dead noise*") {
        console.log("audio about to play");
        var music = document.getElementById("dead_phone");
    
        var promise = music.play();
        if (promise !== undefined) {
            promise.then(_ => {
                music.play();
            }).catch(error => {
                console.log(error.name + " " + error.message);
            });
        } 
    } else if (message === "C: *wiping noise*") {
        console.log("audio about to play");
        var music = document.getElementById("wiping_mirror");
    
        var promise = music.play();
        if (promise !== undefined) {
            promise.then(_ => {
                music.play();
            }).catch(error => {
                console.log(error.name + " " + error.message);
            });
        } 
    } else if (message === "C: *door opening*") {
        console.log("audio about to play");
        var music = document.getElementById("door_opening");
    
        var promise = music.play();
        if (promise !== undefined) {
            promise.then(_ => {
                music.play();
            }).catch(error => {
                console.log(error.name + " " + error.message);
            });
        } 
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

