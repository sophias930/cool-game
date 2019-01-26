

var createMessage = function(isComputer, message) {
    var messageLabel;
    if (isComputer === true){
        messageLabel =  $('<div class="message CPUmsg"></div>');
    } else {
        messageLabel = $('<div class="message USERmsg"></div>');
    }

    messageLabel.append(message);
    return messageLabel;
}