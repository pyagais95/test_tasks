var compareNumbers = function (a, b) {
    return a - b;
};
var findSecondLowestValue = function (arr) {
    var sortedArray = arr.filter(function (item, idx) {
        console.log(item, idx, arr.indexOf(item), arr.indexOf(item) === idx);
        return arr.indexOf(item) === idx;
    }).sort(compareNumbers);
    return sortedArray[1];
};
findSecondLowestValue([9, 14, 0, 334, 19, 19, 9, 0]);
