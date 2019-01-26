var currentPositionInStory = 0;
var storyJSON
var loadStory = function () {
    $.get("https://api.myjson.com/bins/14n2c0", function (data, textStatus, jqXHR) {
        console.log(data);
    });
}

var getNextMessage = function (params) {
    // TODO add how to pull next story element from the json
    currentPositionInStory++;
    return ("This is message number " + currentPositionInStory);
}