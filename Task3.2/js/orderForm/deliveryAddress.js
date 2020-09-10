;(function() {

// Add html content to "deliveryAddress" conteiner
document.querySelector('#deliveryAddress form').innerHTML += 
    document.querySelector('#billingAddress form').innerHTML + 
    `<div>
        <input type="checkbox" id="sameBilling">
        <label for="sameBilling">Same as billing address</label>
    </div>
    `

const nameAddressInputs = document.querySelectorAll('#deliveryAddress .item')
const zipIput = document.querySelector('#deliveryAddress .zip')
const phoneIput = document.querySelector('#deliveryAddress .phone')
const allItem = document.querySelectorAll('#deliveryAddress .check')
const deliveryState = document.querySelector("#deliveryAddress select[name='state']")

nameAddressInputs.forEach(e => e.addEventListener('focusout', function(e) {
    let fn = e.target.attributes.validate.value
    validateFunctions[fn](e)

}))

zipIput.addEventListener('focusout', function(e) {
    let fn = e.target.attributes.validate.value
    
    validateFunctions[fn](e, e.target.attributes.valLen.value, 
                             e.target.attributes.valMax.value, 
                             e.target.attributes.error.value)
})

phoneIput.addEventListener('focusout', function(e) {
    let fn = e.target.attributes.validate.value
    validateFunctions[fn](e)
})

deliveryState.addEventListener('change', function(e) {    
    let fn = e.target.attributes.validate.value
    validateFunctions[fn](e)
})


// Checkbox "Same us Billing Address" && listeners && behavior
let checkboxSameAs = document.querySelector("#sameBilling")
checkboxSameAs.addEventListener('change', function() {
    if(this.checked) {
        const billingAddressItems = document.querySelectorAll('#billingAddress .check')

        for(let i = 0; i < billingAddressItems.length; i++) {
            allItem[i].value = billingAddressItems[i].value
            
            let newEvent = new Event('focusout') // Create the event.
            allItem[i].dispatchEvent(newEvent)
            allItem[i].disabled = true
        }
    } else {
        allItem.forEach(e => {
            e.value = ''
            e.classList.remove('red-bottom', 'green-bottom')
            e.nextElementSibling.textContent = ''
            e.disabled = false
        })
        zipIput.placeholder = '35746'
        phoneIput.placeholder = '+380931234567'

    }
})

})()



