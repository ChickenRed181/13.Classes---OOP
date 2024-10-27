class Dictionary {
    constructor(name) {
        this.name = name
        this.words = {}
    }

    add(word, description) {
        if (!this.words[word]) {
            this.words[word] = {
                word: word,
                description: description
            }
        }
    }

    remove(word) {
        if (this.words[word]) {
            delete this.words[word]
        }
    }

    get(word) {
        return this.words[word]
    }

    showAllWords() {
        for (let word in this.words) {
            console.log(`${this.words[word].word} - ${this.words[word].description}`)
        }
    }
}
const dictionary = new Dictionary('Толковый словарь')
dictionary.add('JavaScript', 'популярный язык программирования')
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие')

dictionary.remove('JavaScript')
dictionary.showAllWords()

