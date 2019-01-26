

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