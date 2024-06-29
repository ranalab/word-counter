class WordCounter {
    constructor(inputText) {
        this.inputText = inputText;
        this.inputText.addEventListener('input', () => {
            this.count();
        })
    }

    count() {
        let wordStat = this.getWordStat(this.inputText.value.trim());
        this.emitEvent(wordStat);
    }


    emitEvent(wordStat) {
        // Create count event
        let countEvent = new CustomEvent('count', {
            bubbles: true,
            cancelable: true,
            detail: { wordStat }
        });
        // dispatch the count event
        this.inputText.dispatchEvent(countEvent);
    }

    getWordStat(str) {
        const matches = str.match(/\S+/g);
        return {
            words: matches ? matches.length : 0,
            characters: str.length,
        }
    }
}