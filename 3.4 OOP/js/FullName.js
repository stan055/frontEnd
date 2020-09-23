
class FullName {

    constructor (firstName = '', lastName = '') {
        
        this.firstName = firstName
        this.lastName = lastName

    }

    get fullName () {
        return {
            firstName: this.firstName,
            lastName:  this.lastName
        }
    }

}