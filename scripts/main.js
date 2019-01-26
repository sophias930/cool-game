var messagesContainer;
$(document).ready(() => {
    messagesContainer = $('#messagesContainer');
})

var buildMessagesContainer = function() {
    messagesContainer.append(buildMessagesContainer());
}