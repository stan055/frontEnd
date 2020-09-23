
class PayCard {

    element

    constructor (imgSrc = '', title = '', text = '', value = '') {

        this.container = document.createElement('div')
        this.imgDiv = document.createElement('div')
        this.img = document.createElement('img')
        this.textDiv = document.createElement('div')
        this.title = document.createElement('b')
        this.br = document.createElement('br')
        this.text = document.createElement('span')

        this.container.append(this.imgDiv)
        this.container.append(this.textDiv)
        this.imgDiv.append(this.img)
        this.textDiv.append(this.title)
        this.textDiv.append(this.br)
        this.textDiv.append(this.text)

        this.img.src = imgSrc
        this.title.textContent = title
        this.text.textContent = text

        this.container.value = value
        this.img.value = value
        this.title.value = value
        this.text.value = value
        this.textDiv.value = value
        this.imgDiv.value = value
        this.br.value = value

        this.container.classList.add('pay-option')
        this.img.classList.add('pay-img')
        this.textDiv.classList.add('pay-text-div')

        this.container.style.padding = '8px'
        this.container.style.display = 'flex'
        this.container.style.cursor = 'context-menu'
        this.img.style.borderRadius = '5px'
        this.textDiv.style.paddingLeft = '10px'

        
        this.element = this.container
    }

    get card () { return this.element }
    get data () { return {
        img: this.img.src,
        title: this.title.textContent,
        text: this.text.textContent,
        value: this.container.value
    } }
}
          