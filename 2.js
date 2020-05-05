var countWordsWithPrefix = function (dictionary, prefix) {
    var counter = 0;
    dictionary.map(function (word) {
        if (word.includes(prefix)) {
            counter++;
        }
    });
    return counter;
};
