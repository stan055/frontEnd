
class WidgetPaymentMethod {

    container = document.querySelector('.widget-payment-method-container')
    selectCard = new PayCard()

    constructor (container = this.container) {

        this.inputDiv = document.createElement('div')
        this.triangleSpan = document.createElement('span')
        this.cardContainer = document.createElement('div') 
        this.listCards = document.createElement('div')

        this.cardContainer.classList.add('pay-card')
        this.inputDiv.classList.add('payment-input')
        this.triangleSpan.classList.add('triangle')
        this.triangleSpan.style.backgroundImage = 'url(https://code.jquery.com/ui/1.12.1/themes/base/images/ui-icons_444444_256x240.png)'
        this.listCards.classList.add('payment-list')


        this.cardContainer.style.float = 'left'

        this.inputDiv.style.display = 'block'
        this.inputDiv.style.height = '60px'
        this.inputDiv.style.width = '260px'
        this.inputDiv.style.borderRadius = '4px'
        this.inputDiv.style.border = '2px solid #f0f0f0'

        this.triangleSpan.style.margin = '20px 5px 0 0'
        this.triangleSpan.style.float = 'right'
        this.triangleSpan.style.backgroundPosition = '-65px -10px'
        this.triangleSpan.style.width = '16px'
        this.triangleSpan.style.height = '16px'

        this.listCards.style.position = 'absolute'
        this.listCards.style.width = '260px'
        this.listCards.style.height = '140px'
        this.listCards.style.overflowY = 'scroll'
        this.listCards.style.backgroundColor = 'white'
        this.listCards.style.border = '2px solid #ddd'
        this.listCards.style.zIndex = '1'
        this.listCards.style.display = 'none'


        this.inputDiv.append(this.cardContainer)
        this.inputDiv.append(this.triangleSpan)
        container.append(this.inputDiv)
        this.inputDiv.after(this.listCards)

        let i = 0
        this.payMethods.forEach(e => {
            
            const payCard = new PayCard(e.img, e.name, e.type, i++)
            payCard.card.classList.add('pay-option-item')
            this.listCards.append(payCard.card)

            payCard.card.addEventListener('click', e => {
                const index = e.target.value
                this.selectCard = new PayCard(this.payMethods[index].img, this.payMethods[index].name, 
                    this.payMethods[index].type, index)
                this.cardContainer.innerHTML = ''
                this.cardContainer.append(this.selectCard.card)
                this.close()
            })
            
        })

        this.inputDiv.addEventListener('click', e => {
            let display = this.listCards.style.display 

            this.listCards.style.display = display == 'none' ? 'block' : 'none'
        })
    }

    get selected () { return this.selectCard }

    close () { this.listCards.style.display = 'none' }

    payMethods = [
        {    
            name: "Visa",
            type: "Credit Card",
            img: "img/visa.svg"
        },
        {    
            name: "Alipay",
            type: "Wallets",
            img: "img/alipay.svg"
        },
        {    
            name: "Mastercard",
            type: "Credit Card",
            img: "img/mastercard.svg"
        },
        {    
            name: "American Express",
            type: "Credit Card",
            img: "img/amex.svg"
        },
        {    
            name: "IDEAL",
            type: "Online Banking",
            img: "img/ideal.svg"
        },
        {    
            name: "Sofort",
            type: "Online Banking",
            img: "img/sofort.svg"
        },
        {    
            name: "Apple Pay",
            type: "Mobile",
            img: "img/applepay.svg"
        },
        {    
            name: "UnionPay",
            type: "Credit Card",
            img: "img/union-pay.svg"
        },
        {    
            name: "Google Pay",
            type: "Wallets",
            img: "img/google.svg"
        },
        {    
            name: "Hipercard",
            type: "Credit Card",
            img: "img/hipercard.svg"
        },
        {    
            name: "Elo",
            type: "Credit Card",
            img: "img/elo.svg"
        },
        {    
            name: "Amazon Pay",
            type: "Wallets",
            img: "img/amazon-pay.svg"
        },
        {    
            name: "Boleto",
            type: "Cash",
            img: "img/boleto.svg"
        },
        {    
            name: "SEPA direct debit",
            type: "Direct Debit",
            img: "img/debit.svg"
        },
        {    
            name: "JCB",
            type: "Credit Card",
            img: "img/jcb.svg"
        },
        {    
            name: "Diners Club",
            type: "Credit Card",
            img: "img/diners-club.svg"
        },
        {    
            name: "Discover",
            type: "Credit Card",
            img: "img/discover.svg"
        },
        {    
            name: "PayPal",
            type: "Wallets",
            img: "img/paypal.svg"
        },
    ]
}

