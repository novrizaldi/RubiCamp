function stringManipulation(word) {
    var vocal = ['a', 'i', 'u', 'e', 'o']
    for (let i = 0; i <= vocal.length; i++) {
        while (word.startsWith(vocal[i])) {
            console.log(word)
            return word
        } 
    }
    console.log(word.slice(1) + word.slice(0, 1) + 'nyo')
}
stringManipulation("bebek");
stringManipulation("ayam");
