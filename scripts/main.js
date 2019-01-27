var chatContainer;
$(document).ready(() => {
    chatContainer = $("#chatContainer");
    setTimeout(function () {
        populateMessage(true)
    }, 5000);
    loadStory();
})


var populateMessage = function () {
    var message = getNextMessage();
    var messageBox;
    if (isAI(message)) {
        message = isAI(message);
        messageBox = createMessage("AI", message);
    } else if (isGirl(message)) {
        message = isGirl(message);
        messageBox = createMessage("G", message);
    } else if (isBranch(message)){
        beginBranch();
        return;
    } else {
        messageBox = createMessage("Console", message);
    }
    chatContainer.append(messageBox);
    messageBox.fadeOut(0);
    messageBox.fadeIn(500, function () {
        setTimeout(function () {
            populateMessage(true)
        }, 200);
    });
}

var beginBranch = function () {
    var buttonOptionA = $("#optionA");
    var buttonOptionB = $("#optionB");

    var optionA = storyJSON[chapterIndex].links[0];
    var optionB = storyJSON[chapterIndex].links[1];

    
    buttonOptionA.html(optionA.name);
    buttonOptionB.html(optionB.name);

    buttonOptionA.click(function() {
        branchSelected(optionA.PID);
    });

    buttonOptionB.click(function() {
        branchSelected(optionB.PID);
    });
}

var branchSelected = function(PID) {
    var i;
    for(i = 0; i < storyJSON.length; i++){
        if (storyJSON[i].PID === PID){
            chapterIndex = i;
            lineIndex = 0;
        }
    }
    populateMessage();
}