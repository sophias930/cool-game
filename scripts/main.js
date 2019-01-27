var chatContainer;
$(document).ready(() => {
    chatContainer = $("#chatContainer");
    setTimeout(function() {populateMessage(true)},5000);
    loadStory();
})


var populateMessage = function (isComputer) {
    var message = getNextMessage();
    // add way to tell if message is computer or not
    var messageBox = createMessage("AI", message);
    chatContainer.append(messageBox);
    messageBox.fadeOut(0);
    messageBox.fadeIn(1500, function () {
        setTimeout(function() { 
            populateMessage(true) 
        }, 4000);
    });
}

var branch = function () {

}