const countWordsWithPrefix = (dictionary: string[], prefix: string): number => {
    let counter = 0
    dictionary.map((word:string) => {
        if (word.includes(prefix)) {
            counter ++
        }
    })
    return counter
}