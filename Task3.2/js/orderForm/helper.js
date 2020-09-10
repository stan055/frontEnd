
// Helper functions
const validateFunctions = {
    isNotEmpty (e) { 
        e.target.value.trim().length == 0 ? this.display(e, 'Required') : this.display(e, '') 
    },

    confirmPassword (e) {
        const password = e.target.form.querySelectorAll('#create-account input[name="password"]')
        
        this.isNotEmpty(e)
        e.target.value != password[0].value ? this.display(e, 'Error confirm value') : null
    },

    withLengthValueString (e, length, value, stringError) {
        e.target.value.length != length || e.target.value > value ? this.display(e, stringError): this.display(e, '') 
        e.target.value.length == 0 ? this.display(e, 'Required') : null
    },

    phone (e) {
        this.isValidPhone(e.target.value) == false ? this.display(e, 'Invalid phone number') : this.display(e, '')
        e.target.value.length == 0 ? this.display(e, 'Required') : null  
    },

    display (e , stringErr) {
        e.target.classList.remove(stringErr === '' ? 'red-bottom' : 'green-bottom')
        e.target.classList += (stringErr === '' ? ' green-bottom ' : ' red-bottom ')
        e.target.parentElement.querySelector('small').innerText = stringErr
        stringErr === '' ? null : validateVar++
    },

    isValidPhone (phone) { 
        return /^(?:\+3)?8?(0\d{9})$/.test(phone); 
    }

  }

// Array state or region
const arrState = [
    'Cherkasy','Crimea','Chernihiv','Chernivtsi','Dnipropetrovsk',
    'Donetsk','Ivano-Frankivsk','Kharkiv','Kherson','Khmelnytsk',
    'Kirovohrad','Kyiv','Luhansk','Lviv','Mykolaiv','Odesa','Poltava',
    'Rivne','Sumy','Vinnytsia','Volyn','Zakarpattia','Zaporizhzhia',
    'Zhytomyr'
]

// Bikes model dictionary
const dictBikesModel = {
    Scott: "Chasing Trail has always been about sending our athletes to dream-worthy, exotic locations to shoot content that would make us want to dream." ,
    Merida: "In these current times, however, that isn't possible." ,    
    Trek: "So we said, \"wait a second!\" All around the world, riders have been falling back in love with their locals, appreciating the ability to pedal from home and go for a rip.",
    Cannondale: "One of those very people is World Cup Downhill star Brendan Fairclough." , 
    Kellys: "Living in the illustrious Surrey Hills in England, Brendan has access to some of the world's best trails (if you ask him.)" ,
    Bergamont: "So, we wanted to challenge the dog to do something special- take all of his favorite bikes, don't go far from home, and make us the best edit the Surrey Hills have ever seen." ,
}

// Credit card array
const arrCreditCard = [ 
    'visa', 'mastercard', 'american-express', 'diners-club', 'discover', 
    'jcb', 'unionpay', 'maestro', 'mir', 'elo', 'hiper', 'hipercard' 
]

let validateVar
function allValidate () {
    validateVar = 0
    let result = []

    const allItems = document.querySelectorAll('form input, form select')
    allItems.forEach(e => {
        
        e.dispatchEvent(new Event('focusout')) // Create the event.

        
        let closestHeader = e.closest('.container').querySelector('h2').textContent
        let labelText = e.parentElement.getElementsByTagName('label')[0].outerText
        let itemValue = e.value

        result.push({
            closestHeader, 
            labelText,
            itemValue
        })
    })
    
    if(validateVar == 0) {
        localStorage.setItem('resultOrder', JSON.stringify(result))
        window.location.assign('result.html')
    }

}

// Return day in month
Date.prototype.daysInMonth = function() {
    return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
};