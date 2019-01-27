var storyJSON;
var loadStory = function () {
    $.get("https://api.myjson.com/bins/14n2c0", function (data, textStatus, jqXHR) {
        storyJSON = data.passages;
        var string = data.passages[0].text;
        console.log(string);
        console.log(string.split("\n"));
    });
}

var getNextMessage = function (nextLink) {
    if (nextText === null){
        storyJSON[0];
    }
    return ;
}