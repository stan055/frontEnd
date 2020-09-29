
const validateFunctions = {
    isNotEmpty (e) { 
        e.target.value.trim().length == 0 ? this.display(e, 'Required') : this.display(e, '') 
    },

    confirmPassword (e) {
        const password = e.target.form.querySelector('.create-account input[name="password"]')
        this.isNotEmpty(e)
        e.target.value != password.value ? this.display(e, 'Error value') : null
    },

    withLengthValueString (e, length, value, stringError) {
        e.target.value.length != length || e.target.value > value ? this.display(e, stringError): this.display(e, '') 
        e.target.value.length == 0 ? this.display(e, 'Required') : null
    },

    phone (e) {
        this.isValidPhone(e.target.value) == false ? this.display(e, 'Invalid phone number') : this.display(e, '')
        e.target.value.length == 0 ? this.display(e, 'Required') : null  
    },

    email (e) {
        this.validateEmail(e.target.value) == false ? this.display(e, 'Invalid email') : this.display(e, '')
        e.target.value.length == 0 ? this.display(e, 'Required') : null 
    },

    display (e , stringErr) {
        e.target.classList.remove(stringErr === '' ? 'red-bottom' : 'green-bottom')
        e.target.classList += (stringErr === '' ? ' green-bottom' : ' red-bottom')
        e.target.parentElement.querySelector('small').innerText = stringErr
        stringErr === '' ? null : validateVar++
    },

    isValidPhone (phone) { 
        return /^(?:\+3)?8?(0\d{9})$/.test(phone); 
    },

    validateEmail (email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

  }