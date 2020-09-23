

class WidgetCalendar {
    
    container = document.querySelector('.widget-calendar')
    daysDiv = document.createElement('div')
    parrentDiv = document.createElement('div')
    datesDiv = document.createElement('div')
    monthsDiv = document.createElement('div')
    arrowPrevDiv = document.createElement('div')
    mthDiv = document.createElement('div')
    arrowNextDiv = document.createElement('div')
    display = 'none'
    currentDate = new Date
    selectedDate = new Date
    eventName = 'WidgetCalendarSelectedDay' // Event name in document

    constructor (date = this.currentDate, container = this.container, eventName = this.eventName) {

        this.selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())
        this.currentDate = date
        this.eventName = eventName

        // Append elements
        container.append(this.parrentDiv)
        this.parrentDiv.append(this.datesDiv)
        this.datesDiv.append(this.monthsDiv)
        this.monthsDiv.append(this.arrowPrevDiv)
        this.monthsDiv.append(this.mthDiv)
        this.monthsDiv.append(this.arrowNextDiv)
        this.datesDiv.append(this.daysDiv)

        this.arrowPrevDiv.textContent = '<'
        this.arrowNextDiv.textContent = '>'

        // Add styles
        this.datesDiv.classList.add('widget-calendar-dates')
        this.monthsDiv.classList.add('widget-calendar-month')
        this.arrowPrevDiv.classList.add('widget-calendar-arrows')
        this.arrowNextDiv.classList.add('widget-calendar-arrows')
        this.daysDiv.classList.add('widget-calendar-days')
        

        this.datesDiv.style.display = 'none' 
        this.datesDiv.style.position = 'absolute'
        this.datesDiv.style.borderRadius = '2px'
        this.datesDiv.style.padding = '3px'
        this.datesDiv.style.backgroundColor = '#fff'
        this.datesDiv.style.cursor = 'pointer'

        this.monthsDiv.style.display = 'flex'
        this.monthsDiv.style.justifyContent = 'space-between'
        this.monthsDiv.style.alignItems = 'center'
        this.monthsDiv.style.borderBottom = ' 2px solid #eee'

        this.arrowPrevDiv.style.width = '35px'
        this.arrowPrevDiv.style.height = '35px'
        this.arrowPrevDiv.style.display = 'flex'
        this.arrowPrevDiv.style.justifyContent = 'center'
        this.arrowPrevDiv.style.alignItems = 'center'
        this.arrowPrevDiv.style.color = '#313131'
        this.arrowPrevDiv.style.fontSize = '20px'
        
        this.arrowNextDiv.style.width = '35px'
        this.arrowNextDiv.style.height = '35px'
        this.arrowNextDiv.style.display = 'flex'
        this.arrowNextDiv.style.justifyContent = 'center'
        this.arrowNextDiv.style.alignItems = 'center'
        this.arrowNextDiv.style.color = '#313131'
        this.arrowNextDiv.style.fontSize = '20px'

        this.daysDiv.style.display = 'grid'  
        this.daysDiv.style.gridTemplateColumns = 'repeat(7, 1fr'
        this.daysDiv.style.height = '180px'
        this.daysDiv.style.width = '220px'
        this.daysDiv.style.padding = '5px 8px'

                
        // Arrow listeners
        this.arrowPrevDiv.addEventListener('click', e => {
            this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() -1)
            this.populateDates(this.currentDate)
        })
        this.arrowNextDiv.addEventListener('click', e => {
            this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() +1)
            this.populateDates(this.currentDate)
        })

        // Display days
        this.populateDates(this.currentDate)
}


populateDates (date) {

    let month = date.getMonth()
    let year = date.getFullYear()

    let selectedDay = this.selectedDate.getDate()
    let selectedMonth = this.selectedDate.getMonth()
    let selectedYear = this.selectedDate.getFullYear()


    this.daysDiv.innerHTML = ''

    for (let i = 1; i <= this.daysInMonth(date) ; i++) {

        const dayElement = document.createElement('div')
        dayElement.classList.add('widget-calendar-day')
        dayElement.style.display = 'flex'
        dayElement.style.justifyContent = 'center'
        dayElement.style.padding = '2pt 2pt'
        dayElement.style.alignItems = 'center'
        dayElement.style.color = '#313131'

        dayElement.textContent = i

        if (selectedDay == i && selectedYear == year && selectedMonth == month) {
            dayElement.classList.add('widget-calendar-selected')
            dayElement.style.borderRadius = '3px'
            dayElement.style.boxShadow = '0 0 0 1pt #00CA85'
        }

        dayElement.addEventListener('click', e => {
            this.selectedDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), i)
            
            // Make Event in document
            const event = new CustomEvent(this.eventName, { detail: this.selectedDate.toDateString() })
            document.dispatchEvent(event)

            this.populateDates(this.selectedDate)
        });

        this.daysDiv.appendChild(dayElement)
    }

    this.populateMonth(date)
}

populateMonth (date) {
    this.mthDiv.textContent = date.getFullYear() +' '+  date.toLocaleDateString('en-us', { month: "short" })
}

daysInMonth (date) {
    return 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
}

displayOn () { 
    this.display = 'block'
    this.datesDiv.style.display = 'block'
}

displayOff () {
    this.display = 'none'
    this.datesDiv.style.display = 'none'
}

displayRefresh () { this.populateDates(this.selectedDate) }

get isDisplay () { return this.display }
get date () { return this.selectedDate }
set date (date) { this.selectedDate = date }

}

