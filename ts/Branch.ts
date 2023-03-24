export default class Branch {
    constructor (
        private _issueType: string,
        private _name: string

    ) {}
}

// const regexCLI = /^[a-zA-Z]{3}[-][0-9]{4}/;

// function insert(param) {
//     const operation = param.target.id;
//     let input = inputField.value.substring(0, 55).trim();
    
//     if(regexCLI.test(input)) {
//         if(errorAlert.classList.contains('modalActive')) {
            
//             errorAlert.classList.toggle('modalActive');
//             container.classList.toggle('modalActive');
//         };

//         input = input.replace(/[a-zA-Z]{3}[-]/g, "");
//         input = input.replace(/[AÁÀÃÂÄáàãâä]/g, "a");
//         input = input.replace(/[EÉÈÊËéèêë]/g, "e");
//         input = input.replace(/[IÍÌÎÏíìîï]/g, "i");
//         input = input.replace(/[OÓÒÔÕÖóòôõö]/g, "o");
//         input = input.replace(/[UÚÙÛÜúùûü]/g, "u");
//         input = input.replace(/[ÇçC]/g, "c");
//         input = input.replace(/[!@#$%¨&*()+='"´`{}^~:;?|<,>._]/g, "");
//         input = input.replace(/[\[\]]/g, "");
//         input = input.replace(' - ', "-");
//         input = input.split(' ').join('-');
//         input = input.toLowerCase();
//         input = `${operation}/CLI-${input}`;

//         outputField.value = input;

//     } else {
//         if(!errorAlert.classList.contains('modalActive')) {
//             errorAlert.classList.toggle('modalActive');
//             container.classList.toggle('modalActive');
//         };
//     };


    
// }