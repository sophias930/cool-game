var chatContainer;
$(document).ready(() => {
    chatContainer = $("#chatContainer");    
    populateMessage(true);
})



var populateMessage = function (isComputer) {
    var message = getNextMessage();
    // add way to tell if message is computer or not
    var messageBox = createMessage(true, message);
    console.log(message);
    chatContainer.append(messageBox);
    messageBox.fadeOut(0);
    messageBox.fadeIn(3000, function () {
        
        populateMessage(true);
    })
}