import Utils from "./Utils"
import Branch from "./Branch";
import "../src/index.css"

const copyButton = document.querySelector<HTMLButtonElement>('#copy')!
const inputField: HTMLInputElement = document.querySelector<HTMLInputElement>('#input-field')!
const issueButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll<HTMLButtonElement>('.issue-type.btn-flex button')

window.addEventListener("load", () => {
    Utils.setFieldFocus(inputField)
})

issueButtons.forEach((button) => {
    button.addEventListener('click', (event: MouseEvent): void => {
        const clickedbutton = <HTMLButtonElement>event.target
        const branchType = <string>clickedbutton.innerText
        const rawName = <string>inputField.value
        
        const generatedName = generateName(branchType, rawName)
        Utils.replaceValue(inputField, generatedName)
    })
})

copyButton.addEventListener("click", function () {
    Utils.copy(inputField)
    Utils.feedbackStyle(this, 'success', "Copiado!", "#ff7604")
})

function generateName(branchType: string, rawName: string): string {
    try {
        const branch = new Branch(branchType, rawName)
        return branch.getName()
    } catch (error) {
        Utils.errorFeedback(error as string, branchType.slice(0, -1))
    }

    return ""
}