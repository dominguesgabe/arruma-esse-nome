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

function insert(param) {
    const operation = param.target.id;
    let input = inputField.value.substring(0, 55).trim();
    
    if(regexCLI.test(input)) {
        if(errorAlert.classList.contains('modalActive')) {
            
            errorAlert.classList.toggle('modalActive');
            container.classList.toggle('modalActive');
        };

        input = input.replace(/[a-zA-Z]{3}[-]/g, "");
        input = input.replace(/[AÁÀÃÂÄáàãâä]/g, "a");
        input = input.replace(/[EÉÈÊËéèêë]/g, "e");
        input = input.replace(/[IÍÌÎÏíìîï]/g, "i");
        input = input.replace(/[OÓÒÔÕÖóòôõö]/g, "o");
        input = input.replace(/[UÚÙÛÜúùûü]/g, "u");
        input = input.replace(/[ÇçC]/g, "c");
        input = input.replace(/[!@#$%¨&*()+='"´`{}^~:;?|<,>._]/g, "");
        input = input.replace(/[\[\]]/g, "");
        input = input.replace(' - ', "-");
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
