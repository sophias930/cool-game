var currentPositionInStory = 0;

var getNextMessage = function (params){
    // TODO add how to pull next story element from the json
    currentPositionInStory++;
    return ("This is message number " + currentPositionInStory);
}