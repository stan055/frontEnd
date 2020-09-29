
const accountSectionOneInputs = document.querySelectorAll('.create-account .one input')
const accountCheckboxes = document.querySelectorAll('.create-account input[type="checkbox"]')
const accountButton = document.querySelector('.create-account button')
const accountForm = document.querySelector('.create-account form')
const profileDiv = document.querySelector('.container .profile')

// Input listeners
accountSectionOneInputs.forEach(e => {
    e.addEventListener('focusout', (e) => {
        const validate = e.target.attributes.validate.value
        validateFunctions[validate](e)
    })
})

// get Checked checkboxes  
function getChecked () {
    let arr = []
    accountCheckboxes.forEach(e => e.checked == true ? arr.push(e.value) : null)
    return arr
}

// Validation
function validateInputs () {
    validateVar = 0
    let account = {}
    accountSectionOneInputs.forEach(e => {
        const event = new Event('focusout');
        e.dispatchEvent(event);

        if (validateVar == 0) {
            account[`${e.name}`] = e.value
        }
    })
    
    return account
}

// Button listener
accountForm.addEventListener('submit', (e) => {
    event.preventDefault();

    const accountInfo = validateInputs()
    const arrLodgings = getChecked()

    if (validateVar == 0) {
        accountInfo['lodgings'] = arrLodgings
        localStorage.setItem('accountInfo', JSON.stringify(accountInfo))
        setProfileInfo()
    }

})


function setProfileInfo () {
    
    const accountInfoString = localStorage.getItem('accountInfo')

    if (accountInfoString) {
        const account = JSON.parse(accountInfoString)

        let profileHtml = `
        <h2>Profile</h2>
        <legend>Username</legend>
        <ul class="no-bullets">
            <li>${account.username}</li>
        </ul>
        
        <legend>Email address</legend>
        <ul class="no-bullets">
            <li>${account.usermail}</li>
        </ul>`
        
        let lodgingsHtml = ''
        account.lodgings.forEach(e => {
            lodgingsHtml += `<li>${e}</li>`
        }) 

        profileHtml += `<legend>Preferred Lodgings</legend>
        <ul class="no-bullets">
            ${lodgingsHtml}
        </ul>
        `

        profileDiv.innerHTML = profileHtml
    }
}

setProfileInfo()

