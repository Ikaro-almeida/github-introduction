let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

function countAndFilterVowels(word) {

    arrayWord = word.split("")

    let arrayVowels = []
    let countVowels = 0
    arrayWord.forEach(e => {
        if (vowels.includes(e) && !arrayVowels.includes(e)) {
            arrayVowels.push(e)
            countVowels++
        }
    })

    console.log(`The word ${word} has ${countVowels} vowels: ${arrayVowels}`)
}

countAndFilterVowels("IRIDIUM")