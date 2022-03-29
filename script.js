const inputField = document.querySelector('#input-field');
let outputField = document.querySelector('#output-field');
const insertHotfixBtn = document.querySelector('#hotfix-btn');

const accentsMap = new Map([
    ["A", "Á|À|Ã|Â|Ä"],
    ["a", "á|à|ã|â|ä"],
    ["E", "É|È|Ê|Ë"],
    ["e", "é|è|ê|ë"],
    ["I", "Í|Ì|Î|Ï"],
    ["i", "í|ì|î|ï"],
    ["O", "Ó|Ò|Ô|Õ|Ö"],
    ["o", "ó|ò|ô|õ|ö"],
    ["U", "Ú|Ù|Û|Ü"],
    ["u", "ú|ù|û|ü"],
    ["C", "Ç"],
    ["c", "ç"],
    ["N", "Ñ"],
    ["n", "ñ"]
  ]);
  
const reducer = (acc, [key]) => {
    return acc.replace(new RegExp(accentsMap.get(key), "g"), key); 
};
const removeAccents = (text) => [...accentsMap].reduce(reducer, text);

function insert() {
    let input = inputField.value.split(' ');
    let processingString = input.join('-');
    let processedString = removeAccents(processingString);
    
    outputField.value = processedString;
}

insertHotfixBtn.addEventListener('click', insert)

// quando fazer imagens do tipo "webp" não permitir o uso da extensão!$

