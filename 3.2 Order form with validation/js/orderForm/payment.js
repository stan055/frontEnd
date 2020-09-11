;(function() {

const paymentInputs = document.querySelectorAll('#payment .item')
const selectCreditCard = document.querySelector('#payment select.credit-card')

arrCreditCard.forEach(e => selectCreditCard.innerHTML += `<option value="${e}">${e}</option>`)

selectCreditCard.addEventListener('change', function(e) {    
    let fn = e.target.attributes.validate.value
    validateFunctions[fn](e)
})

selectCreditCard.addEventListener('focusout', function(e) {
    let fn = e.target.attributes.validate.value
    validateFunctions[fn](e)
})

paymentInputs.forEach(e => e.addEventListener('focusout', function(e) {
    let fn = e.target.attributes.validate.value
    
    validateFunctions[fn](e, e.target.attributes.valLen.value, 
                             e.target.attributes.valMax.value, 
                             e.target.attributes.error.value)
}))

})()