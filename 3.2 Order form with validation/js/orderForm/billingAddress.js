;(function() {

const nameAddressInputs = document.querySelectorAll('#billingAddress .item')
const zipIput = document.querySelector('#billingAddress .zip')
const phoneIput = document.querySelector('#billingAddress .phone')
const billingState = document.querySelector("#billingAddress select[name='state']")


// Add options to select states
arrState.forEach((e) => billingState.innerHTML += `<option value = "${e}">${e}</option>`)

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

billingState.addEventListener('change', function(e) {    
    let fn = e.target.attributes.validate.value
    validateFunctions[fn](e)
})

})()
