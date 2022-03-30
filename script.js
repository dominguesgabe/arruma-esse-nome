const inputField = document.querySelector('#input-field');
const outputField = document.querySelector('#output-field');
const hotfixBtn = document.querySelector('#hotfix');
const featureBtn = document.querySelector('#feature');

const accentsMap = new Map([
    ["a", "Á|À|Ã|Â|Ä"],
    ["a", "á|à|ã|â|ä"],
    ["e", "É|È|Ê|Ë"],
    ["e", "é|è|ê|ë"],
    ["i", "Í|Ì|Î|Ï"],
    ["i", "í|ì|î|ï"],
    ["o", "Ó|Ò|Ô|Õ|Ö"],
    ["o", "ó|ò|ô|õ|ö"],
    ["u", "Ú|Ù|Û|Ü"],
    ["u", "ú|ù|û|ü"],
    ["c", "Ç"],
    ["c", "ç"],
    ["n", "Ñ"],
    ["n", "ñ"]
  ]);
  
const reducer = (acc, [key]) => acc.replace(new RegExp(accentsMap.get(key), "g"), key); 
const removeAccents = (text) => [...accentsMap].reduce(reducer, text);

function insert(param) {
    let input = removeAccents(inputField.value);
     input = input.replace(/[^a-zA-Z ]/g, "");
     input = input.split(' ');
     input = input.join('-');

    outputField.value = input;
    console.log(param.target.id)
}

hotfixBtn.addEventListener('click', insert)
featureBtn.addEventListener('click', insert)

// quando fazer imagens do tipo "webp" não permitir o uso da extensão!$

