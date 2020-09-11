
;(function() {

// Text-area for default
const areaModels = document.getElementById('area-models')
const selectModels = document.getElementById('sel-models')

// Add models to select-models
for(let i in dictBikesModel) {
    selectModels.innerHTML += `<option value = "${i}">${i}</option>`
}

// Listen selected models && text-area content change
selectModels.addEventListener('change', function(e) {
    areaModels.textContent = dictBikesModel[e.target.value]
    
    let fn = e.target.attributes.validate.value
    validateFunctions[fn](e)
})

selectModels.addEventListener('focusout', function(e) {
    let fn = e.target.attributes.validate.value
    validateFunctions[fn](e)
})

})()
