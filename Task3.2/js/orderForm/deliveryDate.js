
;(function() {

    const yearsElement = document.querySelector('.date-picker .years')
    const monthsElement = document.querySelector('.date-picker .months')
    const daysElement = document.querySelector('.date-picker .days')
    const selectedDateElement = document.querySelector('.date-picker .selected-date')
    const allItems = document.querySelectorAll('.date-picker select')

    const YEARS_QUANTITY = 10
    
    let dateNow = new Date()
    let selectedDate = new Date(dateNow)
    
    function createYears (yearsQuantity) {
    
        for (let i = 0; i < yearsQuantity; i++) {
        
            let yearOption = document.createElement('option')
            yearOption.textContent = dateNow.getFullYear() + i
            yearOption.setAttribute('value', dateNow.getFullYear() + i)
        
            if (dateNow.getFullYear() + i == dateNow.getFullYear()) {
                yearOption.setAttribute('selected', 'selected')
            }
        
            yearsElement.appendChild(yearOption)
        }
        createMonths()
    }
    
    
    function createMonths () {
        monthsElement.innerHTML = ''
    
        for (let month = 0; month < 12; month++) {
            let monthOption = document.createElement('option')
            monthOption.textContent = month +1
            monthOption.setAttribute('value', month)
    
            
            let varMonth = new Date(selectedDate.getFullYear(), month, dateNow.getDate(), 
                dateNow.getHours(), dateNow.getMinutes(), dateNow.getSeconds(), dateNow.getMilliseconds())
    
                if (varMonth.getTime() < dateNow.getTime()) {
                monthOption.disabled = true
            }
    
            monthsElement.appendChild(monthOption)
        }
    
        selectedDate.setMonth(monthsElement.value)
        createDays()
    }
    
    
    function createDays () {
        daysElement.innerHTML = ''
    
        let amounthDays = selectedDate.daysInMonth()
    
        for (let day = 1; day <= amounthDays; day++) {
    
            let dayOption = document.createElement('option')
            dayOption.textContent = day
            dayOption.setAttribute('value', day)
            
            let varDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day, 
                dateNow.getHours(), dateNow.getMinutes(), dateNow.getSeconds(), dateNow.getMilliseconds())
            
                if (varDay.getTime() < dateNow.getTime()) {
                    dayOption.disabled = true
                }
    
            daysElement.appendChild(dayOption)
        }
    
        selectedDate.setDate(daysElement.value)
        selectedDatePrint()
    }
    
    yearsElement.addEventListener('change', function(e) {
        let fn = e.target.attributes.validate.value
        validateFunctions[fn](e)
        selectedDate.setFullYear(e.target.value)

        createMonths()
    })
    
    monthsElement.addEventListener('change', function(e) {
        let fn = e.target.attributes.validate.value
        validateFunctions[fn](e)
        selectedDate.setMonth(e.target.value, 1)
    
        createDays()
    })
    
    daysElement.addEventListener('change', function(e) {
        let fn = e.target.attributes.validate.value
        validateFunctions[fn](e)
        selectedDate.setDate(e.target.value)
    
        selectedDatePrint()
    })
    
        
    // Listen && Validate inputs
    allItems.forEach(e => e.addEventListener('focusout', function(e) {
        let fn = e.target.attributes.validate.value
        validateFunctions[fn](e)
    }))
    
        
    function selectedDatePrint () {
        selectedDateElement.textContent =    `${selectedDate.getDate()} 
                                            / ${selectedDate.getMonth() +1} 
                                            / ${selectedDate.getFullYear()} `
    }
    
    // Create calendar
    createYears(YEARS_QUANTITY)

})()
