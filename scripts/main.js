var chatContainer;
$(document).ready(() => {
    chatContainer = $("#chatContainer");
    $("#buttonContainer").slideUp(0);
    setTimeout(function () {
        populateMessage(true)
    }, 5000);
    loadStory();
})


var populateMessage = function () {
    var message = getNextMessage();
    playMessageSound(message);
    var messageBox;
    if (isAI(message)) {
        message = isAI(message);
        messageBox = createMessage("AI", message);
    } else if (isGirl(message)) {
        message = isGirl(message);
        messageBox = createMessage("G", message);
    } else if (isBranch(message)) {
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
        $("#chatContainer").scrollTop(9999);
    });
    
};

var beginBranch = function () {

    var buttonOptionA = $("#optionA");
    var buttonOptionB = $("#optionB");
    var buttonContainer = $("#buttonContainer");

    buttonContainer.slideDown(1000);

    if (storyJSON[chapterIndex].links.length === 1) {
        finalBranch(storyJSON[0].links[0].pid);
        return;
    }

    var optionA = storyJSON[chapterIndex].links[0];
    var optionB = storyJSON[chapterIndex].links[1];


    buttonOptionA.html(optionA.name);
    buttonOptionB.html(optionB.name);
    
    buttonOptionA.off();
    buttonOptionB.off();

    buttonOptionA.click({
        param1: optionA.pid
    }, branchSelected);
    buttonOptionB.click({
        param1: optionB.pid
    }, branchSelected);
};

function branchSelected(event) {
    console.log(event);
    var PID = event.data.param1;
    var i;
    for (i = 0; i < storyJSON.length; i++) {
        if (storyJSON[i].pid === PID) {
            chapterIndex = i;
            lineIndex = 0;
        }
    }

    var chapter = storyJSON[chapterIndex].text.split("\n");
    var text = chapter[0];
    isGoodOrBad(text);

    populateMessage();
    $("#buttonContainer").slideUp(1000);
};

function finalBranch(pid) {
    var buttonOptionA = $("#optionA");
    var buttonOptionB = $("#optionB");

    var chapter = storyJSON[chapterIndex].text.split("\n");
    var text = chapter[lineIndex];


    for (i = 0; i < storyJSON.length; i++) { // maybe hardcode the final branch here
        if (storyJSON[i].pid === pid) {
            chapterIndex = i;
            lineIndex = 0;
        }
    }

    populateMessage();
}