export default class Utils {

    static setFieldFocus(field: HTMLInputElement | null): void {
        field?.focus()
    }
    
    static copy(field: HTMLInputElement): void {
        if(field.value) {
            field.select()
            document.execCommand('copy')
            this.copyFeedback()
        }
    };
    
    static replaceValue(field: HTMLInputElement, newValue: string): void {
        field.value = newValue
    }

    private static copyFeedback(): void {

    }
}


// function copyFeedback() {
//     if(outputField.value) {
//         outputField.select();
//         document.execCommand('copy');
    
//         successAlert.classList.add('modalActive');
//         container.classList.add('modalActive');
//         setTimeout(() => {
//             modalfun();
//         }, 3500);
//     }
// };