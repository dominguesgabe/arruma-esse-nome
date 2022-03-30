const inputField = document.querySelector('#input-field');
const outputField = document.querySelector('#output-field');
const hotfixBtn = document.querySelector('#hotfix');
const featureBtn = document.querySelector('#feature');
const errorAlert = document.querySelector('#error-alert');
const successAlert = document.querySelector('#success-alert');
const container = document.querySelector('.container');
const copyBtn = document.querySelector('#copy');

const regexCLI = /^[A-Z]{3}[-][0-9]{4}[-]/;

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
    const caller = param.target.id;
    let input = removeAccents(inputField.value);
    
    if(regexCLI.test(input)) {
        if(errorAlert.classList.contains('modalActive')) {
            errorAlert.classList.toggle('modalActive');
            container.classList.toggle('modalActive');
        };

        input = input.replace(/[^a-zA-Z0-9 -]/g, "");
        input = input.split(' ');
        input = input.join('-');
        input = `${caller}/${input}` 

        outputField.value = input;
    } else {
        if(!errorAlert.classList.contains('modalActive')) {
            errorAlert.classList.toggle('modalActive');
            container.classList.toggle('modalActive');
        };
    };


    
}

function copy() {
    outputField.select();
    document.execCommand('copy');

    if(!successAlert.classList.contains('modalActive')) {
        successAlert.classList.toggle('modalActive');
        container.classList.toggle('modalActive');
    };
}

hotfixBtn.addEventListener('click', insert)
featureBtn.addEventListener('click', insert)
copyBtn.addEventListener('click', copy)

// cLi-1233 quando fazer imagens do tipo "webp" não pe!rmitir o uso da extensão$

