var messagesContainer;
var chatContainer;
$(document).ready(() => {
    messagesContainer = $('#messagesContainer');
    messagesContainer.append(buildMessagesContainer());
    
    populateMessage(true);
})



var populateMessage = function (isComputer) {
    var message = getNextMessage();
    // add way to tell if message is computer or not
    console.log("hello");
    var messageBox = createMessage(true, message);
    messagesContainer.append(messageBox);
    messageBox.fadeOut(0);
    messageBox.fadeIn(3000, function () {
        populateMessage(true);
    })
}