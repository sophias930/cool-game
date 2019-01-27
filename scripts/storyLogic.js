var storyJSON;
var chapterIndex = 0;
var lineIndex = 0;

var loadStory = function () {
    $.get("https://api.myjson.com/bins/14n2c0", function (data, textStatus, jqXHR) {
        storyJSON = data.passages;
        var string = data.passages[0].text;
        console.log(string);
        console.log(string.split("\n"));
    });
}

var getNextMessage = function () {
    var chapter = storyJSON[chapterIndex].text.split("\n");
    var text = chapter[lineIndex];
    lineIndex++;
    return text;
}

var isGirl = function (text) {
    if (text.match("^G: ")) {
        return text.slice(3, );
    }
}

var isAI = function (text) {
    if (text.match("^AI: ")) {
        return text.slice(4, );
    }
}

var isBranch = function (text) {
    if (text.startsWith("[[", 0)) {
        return text.slice(2, text.length - 2);
    }
}

var isConsole = function (text) {
    if (text.match("^C: ")) {
        return text.slice(1, );
    }
}

