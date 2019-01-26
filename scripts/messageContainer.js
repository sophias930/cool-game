var buildMessagesContainer = function() {
    var chatContainer = $('<div id="chat"></div>');

    chatContainer.append(optionAButton);
    chatContainer.append(optionBButton);

    return chatContainer;
}

var appendButtons = function(container){
    var optionAButton = $('<button id="optionAButton">Option A</button>');
    var optionBButton = $('<button id="optionBButton">Option B</button>');

    container.append(optionAButton);
    container.append(optionBButton);

    return container;
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