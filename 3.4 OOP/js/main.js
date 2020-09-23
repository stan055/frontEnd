
const dateBuyInput = document.querySelector('.date-buy .input')
const dateBuyCalendarImg = document.querySelector('.date-buy img')
const submitAddData = document.querySelector('.date-buy button') 
const payTableColumns = document.querySelectorAll('.payment-table div')

// Create widgets
const widgetFullName = new WidgetFullName()
const widgetCalendar = new WidgetCalendar(new Date)
const widgetPaymentMethod = new WidgetPaymentMethod()
const customerData = new CustomerData()

// Listener calendar
document.addEventListener('WidgetCalendarSelectedDay', e => {    
    const date = new Date(e.detail)
    widgetCalendar.displayOff()
    dateBuyInput.textContent = date.toDateString() // Selected date display
})

// Button "calendarImg" listener
dateBuyCalendarImg.addEventListener('click', () => {
    widgetCalendar.isDisplay == 'block' ? 
        widgetCalendar.displayOff() : widgetCalendar.displayOn()
})

// dateBuyInput listener
dateBuyInput.addEventListener('click', () => {
    widgetCalendar.isDisplay == 'block' ? 
        widgetCalendar.displayOff() : widgetCalendar.displayOn()
})


// Button "addData" to data class "CustomerData"
submitAddData.addEventListener('click', (e) => {

    // Create Obj
    let fullName = new FullName(widgetFullName.firstName, widgetFullName.lastName)
    let discount = new Discount(customerData.length() > 0 ? 5 : 0)
    let date = new Date(widgetCalendar.date.getTime())
    let payMethod = widgetPaymentMethod.selected.card.outerHTML

    customerData.fullName = fullName

    customerData.add(date.toDateString(), payMethod, discount)
    populateDataInTable()
})

// Display data
function populateDataInTable() {
    payTableColumns.forEach(e => e.innerHTML = '')
    customerData.data.forEach(e => {
        payTableColumns[0].innerHTML += `<div class="column-date-item">${e.date}</div>` 
        payTableColumns[1].innerHTML += `<div class="column-date-item"> ${e.payMethod}</div>`
        payTableColumns[2].innerHTML += `<div class="column-date-item"> ${e.discount.getValue}%</div>`
    })
    console.log(customerData.fullName, customerData.data)
}
    