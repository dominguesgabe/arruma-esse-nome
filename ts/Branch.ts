export default class Branch {
    constructor (
        private _issueType: string,
        private _name: string
    ) {
        this._name = this.stringTrim(this._name)
        this.stringTestCLI(this._name)
        this._name = this.stringToLowerCase(this._name)
        this._name = this.cliToUpperCase(this._name)
        this._name = this.stringFixLength(this._name)
        this._name = this.removeAccents(this._name)
        this._name = this.removeSpecialChars(this._name)
        this._name = this.joinDashes(this._name)
    }

    public getName(): string {
        return this._issueType + this._name
    }

    private stringTestCLI(name: string): void {
        const mustContainRegEx = /^[a-zA-Z]{3}[-][0-9]{4}/
        
        if (!mustContainRegEx.test(name)) {
            throw "Nome sem CLI"
        }
    }

    private stringToLowerCase(name: string): string {
        return name.toLowerCase()
    }

    private cliToUpperCase(name: string): string {
        const brokenString = name.split('-')
        const upperString = [brokenString[0].toUpperCase(), brokenString[1]]

        return upperString.join('-') + brokenString[2]
    }

    private stringTrim(name: string): string {
        return name.trim()
    }

    private stringFixLength(name: string): string {
        return name.substring(0, 55)
    }

    private removeAccents(name: string): string {
        const normalizedString = name.normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")

        return normalizedString
    }

    private removeSpecialChars(name: string): string {
        const normalizedString = name
            .replace(/[!@#$%¨&*()+='"´`{}^~:;?|<,>._]/g, "")
            .replace(/[\[\]]/g, "")

        return normalizedString
    }

    private joinDashes(name: string): string {
        const brokenString = name.split(" ")
        const stringWithoutWhitespaces = brokenString.filter(index => (index != "") ?? true)

        return stringWithoutWhitespaces.join("-")
    }
}