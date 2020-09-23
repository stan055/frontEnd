
class CustomerData {
    
    fullName
    arrData = []

    constructor () { }
    
    add (date, payMethod, discount) {

        const objData = {
            'date': date,
            'payMethod': payMethod,
            'discount': discount
        }

        this.arrData.push(objData)
    }

    length = () => { return this.arrData.length }

    clear () { 
        this.fullName = null
        this.arrData.clear()
    }

    
    set fullName (fullName) { this.fullName = fullName}

    get data () { return this.arrData }

    get fullName () { return this.fullName }


}