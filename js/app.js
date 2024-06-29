

const input = document.querySelector('#input');
const output = document.querySelector('#output');

new WordCounter(input);


let render = (event) => {
    output.innerHTML = `
      <p>
        You've written
        <span class="highlight">${event.detail.wordStat.words}</span> words 
        and 
        <span class="highlight">${event.detail.wordStat.characters}</span> characters.
      </p>
    `;
}

input.addEventListener('count', render);
