const inputField = document.querySelector('#input-field');
const outputField = document.querySelector('#output-field');
const hotfixBtn = document.querySelector('#hotfix');
const featureBtn = document.querySelector('#feature');
const errorAlert = document.querySelector('#error-alert');
const successAlert = document.querySelector('#success-alert');
const container = document.querySelector('.container');
const copyBtn = document.querySelector('#copy');

window.addEventListener('load', inputField.focus());

const regexCLI = /^[a-zA-Z]{3}[-][0-9]{4}/;

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
    ["c", "C"]
  ]);
  
const reducer = (acc, [key]) => acc.replace(new RegExp(accentsMap.get(key), "g"), key); 
const removeAccents = (text) => [...accentsMap].reduce(reducer, text);

function insert(param) {
    const operation = param.target.id;
    let input = removeAccents(inputField.value.substring(0, 55).trim());
    
    if(regexCLI.test(input)) {
        if(errorAlert.classList.contains('modalActive')) {
            
            errorAlert.classList.toggle('modalActive');
            container.classList.toggle('modalActive');
        };

        input = input.replace(/[a-zA-Z]{3}[-]/g, "");
        input = input.replace(/[CLI-]/g, "");
        input = input.split(' ').join('-');
        input = input.toLowerCase();
        input = `${operation}/CLI-${input}`;

        outputField.value = input;

    } else {
        if(!errorAlert.classList.contains('modalActive')) {
            errorAlert.classList.toggle('modalActive');
            container.classList.toggle('modalActive');
        };
    };


    
}

function copy() {
    if(outputField.value) {
        outputField.select();
        document.execCommand('copy');
    
        successAlert.classList.add('modalActive');
        container.classList.add('modalActive');
        setTimeout(() => {
            modalfun();
        }, 3500);
    }
};

function modalfun() {
    successAlert.classList.remove('modalActive');
    container.classList.remove('modalActive');
} 

hotfixBtn.addEventListener('click', insert)
featureBtn.addEventListener('click', insert)
copyBtn.addEventListener('click', copy)