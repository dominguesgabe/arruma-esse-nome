export default class Utils {

    public setFieldFocus(field: HTMLInputElement | null): void {
        field?.focus()
    }
    // public copy(copyField) {
    //     if(copyField.value) {
    //         copyField.select();
    //         document.execCommand('copy');
        
    //         successAlert.classList.add('modalActive');
    //         container.classList.add('modalActive');
    //         setTimeout(() => {
    //             modalfun();
    //         }, 3500);
    //     }
    // };
    
    // function modalfun() {
    //     successAlert.classList.remove('modalActive');
    //     container.classList.remove('modalActive');
    // } 
}