// Text of Order items output to screen
;(function() {

const resultContainer = document.querySelector('main .container')
const resultText = localStorage.getItem('resultOrder')

if(resultText != null){
    resultContainer.innerHTML += `
    <p style="white-space: pre-line; font-size: 15px;" 
        class="resultText">
    </p>
    `    

const itemP = document.querySelector('main .resultText')
const resultParsed = JSON.parse(resultText)

resultParsed.forEach(element => {
    itemP.innerHTML += `<span>${element.closestHeader }</span> <span>${element.labelText }</span>
                        <span>""${element.itemValue }""</span>
                        <br>`
                    });
}

})()
