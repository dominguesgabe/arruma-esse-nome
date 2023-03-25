import statusIcons from "./Enums"

export default class Utils {

    static setFieldFocus(field: HTMLInputElement): void {
        field.focus()
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

    public static errorFeedback(error: string, button: string): void {
        const targetButton = this.selectButton(button)

        this.feedbackStyle(targetButton, 'fail', error, "#D11717") //make color call css class instead
    }

    private static copyFeedback(): void { //TODO implement

    }

    private static selectButton(button: string): HTMLButtonElement {
        return document.querySelector<HTMLButtonElement>(`#${button}`)!
    }

    public static feedbackStyle(button: HTMLButtonElement, feedbackType: string, message: string, color: string): void {
        const initialHTML = button.innerText
        const initialColor = button.style.backgroundColor

        const htmlIcon = feedbackType === "success" ? statusIcons.success : statusIcons.fail
        button.innerHTML = message + htmlIcon
        button.style.backgroundColor = color

        setTimeout(restoreInitialStyle, 1500)

        function restoreInitialStyle(): void {
            button.innerHTML = initialHTML
            button.style.backgroundColor = initialColor
        }
    }
}