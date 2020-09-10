
const form = document.getElementById('formRegister')

// Button Register click 
form.addEventListener('submit', (e) => {
    event.preventDefault()

    // Get element Id 
    const userName = e.srcElement[0]
    const email = e.srcElement[1]
    const password = e.srcElement[2]
    const confirmPassword = e.srcElement[3]

    // Remove error class css for inputs
    for(let i of e.srcElement) i.className = ''

    // Check input
    if(userName.value === '') {
        userName.className = 'error'
    } else if(!isEmail(email.value)) {
        email.className = 'error'
    } else if(password.value === '') {
        password.className = 'error'
    } else if(confirmPassword.value != password.value) {
        confirmPassword.className = 'error'
    } 
    else {

        // Save loval storage
        localStorage.setItem('userName', userName.value)
        localStorage.setItem('email', email.value)
        localStorage.setItem('password', password.value)
        localStorage.setItem('confirmPassword', confirmPassword.value)

        alert(`Congratulation you are REGISTERED
            name: ${userName.value}
            email: ${email.value}
            password: ${password.value}
            congirmPassword: ${confirmPassword.value}
            `)
    }

})

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


