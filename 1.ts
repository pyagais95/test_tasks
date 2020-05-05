const compareNumbers = (a, b) => {
    return a - b
}

const findSecondLowestValue = (arr: number[]) => {
    const sortedArray = arr.filter((item: number, idx: number) => {
        return arr.indexOf(item) === idx
    }).sort(compareNumbers)
    return sortedArray[1]
}
