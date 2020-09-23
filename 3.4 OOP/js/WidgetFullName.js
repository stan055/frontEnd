

class WidgetFullName extends FullName {

    constructor (container = document.querySelector('.widget-full-name'), 
        labelFirst = 'FirstName', labelLast = 'LastName', saveName = 'WidgetFullName') {

        super()
        
        const parrentContainer = document.createElement('div')
        const firstContainer = document.createElement('div')
        const lastContainer = document.createElement('div')

        const firstNameLabel = document.createElement('lebel')
        this.firstNameInput = document.createElement('input')
        const lastNameLabel = document.createElement('lebel')
        this.lastNameInput = document.createElement('input')

        firstNameLabel.textContent = labelFirst
        lastNameLabel.textContent = labelLast
        this.saveName = saveName

        container.append(parrentContainer)

        firstContainer.append(firstNameLabel)
        firstContainer.append(this.firstNameInput)

        lastContainer.append(lastNameLabel)
        lastContainer.append(this.lastNameInput)

        parrentContainer.append(firstContainer)
        parrentContainer.append(lastContainer)

        this.firstNameInput.classList.add('full-name-first')
        this.lastNameInput.classList.add('full-name-last')

        this.firstNameInput.addEventListener('input', (e) => {
            this.firstName = e.target.value
        })

        this.lastNameInput.addEventListener('input', (e) => {
            this.lastName = e.target.value
        })
    }

    saveLocalStorage (key = this.saveName) {
        localStorage.setItem(key, JSON.stringify(this.fullName))
    }
    getLocalStorage (key = this.saveName) {
        return JSON.parse(localStorage.getItem(key))
    }

    set firstInput (value) { this.firstNameInput.value = value }
    set lastInput (value) { this.lastNameInput.value = value }

    get firstInput () { return this.firstName.value }
    get lastInput () { return this.lastName.value }

}

