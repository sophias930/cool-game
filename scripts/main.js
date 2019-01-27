var chatContainer;
$(document).ready(() => {
    chatContainer = $("#chatContainer");
    setTimeout(function () {
        populateMessage(true)
    }, 5000);
    loadStory();
})


var populateMessage = function (isComputer) {
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
    } else {
        messageBox = createMessage("Console", message);
    }
    chatContainer.append(messageBox);
    messageBox.fadeOut(0);
    messageBox.fadeIn(1500, function () {
        setTimeout(function () {
            populateMessage(true)
        }, 4000);
    });
}