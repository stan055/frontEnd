
class Discount {
    
    constructor(value = 0) {
        this.value = value
    }

    get getValue () { return this.value }
    set setValue (val) { this.value = val }
}