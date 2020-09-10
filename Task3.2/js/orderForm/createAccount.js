;(function() {

const accountInputs = document.querySelectorAll('#create-account input')

accountInputs.forEach(e => e.addEventListener('focusout', function(e) {
    let fn = e.target.attributes.validate.value
    validateFunctions[fn](e)
}))

})()



