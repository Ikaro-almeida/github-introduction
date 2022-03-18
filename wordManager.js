let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

function countAndFilter(word) {

    arrayWord = word.split("")

    let arrayVowels = []
    let countVowels = 0

    let arrayConsonants = []
    let countConsonants = 0

    arrayWord.forEach(e => {
        if (e != " ") {
            if (vowels.includes(e) && !arrayVowels.includes(e.toLowerCase()) && !arrayVowels.includes(e.toUpperCase())) {
                arrayVowels.push(e)
                countVowels++
            }
            else if (!vowels.includes(e) && !arrayConsonants.includes(e.toLowerCase()) && !arrayConsonants.includes(e.toUpperCase())){
                arrayConsonants.push(e)
                countConsonants++
            }
        }
    })

    console.log(`The word ${word} has length ${word.split(" ").join("").length}, ${countVowels} vowels (${arrayVowels}), and ${countConsonants} consonants (${arrayConsonants})`)
}

countAndFilter("IRIDiUM")
console.log()
countAndFilter("Pi System")
