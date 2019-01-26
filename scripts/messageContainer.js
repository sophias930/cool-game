var buildMessagesContainer = function() {
    var chatContainer = $('<div id="chat"></div>');
    var optionAButton = $('<div id="optionAButton"></div>');
    var optionBButton = $('<div id="optionBButton"></div>');

    chatContainer.append(optionAButton);
    chatContainer.append(optionBButton);

    return chatContainer;
}

var createMessage = function(isComputer, message) {
    var messageLabel;
    if (isComputer === true){
        messageLabel =  $('<div class="messageCPU"></div>');
    } else {
        messageLabel = $('<div class="messageUSER"></div>');
    }

    messageLabel.append(message);
    return messageLabel;
}