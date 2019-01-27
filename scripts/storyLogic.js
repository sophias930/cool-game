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
    if (nextLink === null){
        storyJSON[0];
    }
    return ;
}

var isGirl = function(text) {
   if (text.match("^G: ")) {
       return text.slice(3,);
   }
}

var isAI = function(text) {
    if (text.match("^AI: ")) {
        return text.slice(4,);
    }
}

var isConsole = function(text) {
    if(text.match("^C: ") & text.match("*$")){
        return text.slice(1,);
    }
}