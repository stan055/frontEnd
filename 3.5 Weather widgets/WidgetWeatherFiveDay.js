// api key : 6056bbd2d4e3573a4adf1ed1dba60646

class WidgetWeatherFiveDay {

    constructor () {
        this.key = '6056bbd2d4e3573a4adf1ed1dba60646'
        this.datesHtml = []

        this.containerDiv = document.createElement('div')
        this.containerDiv.classList.add('five-day-container')

        this.containerDiv.innerHTML = this.style
    }


    getWeather () {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(this.setPosition, this.showError)
        } else {
            this.showError({message: 'Browser does`t Support Geolocation'})
        }
    }


    setPosition = (position) => { 
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        this.getingWeather(latitude, longitude)
    }


    showError = (error) => { 
        console.log(error.message)
     }

     // Get weater
     getingWeather = (latitude, longitude) => {
        let api = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&APPID=${this.key}`

        fetch(api)
            .then((response) => {
                try {
                    if (response.status == 200) {
                        let data = response.json()
                        return data
                    }                    
                } catch(e) {
                    this.showError(e)                    
                }
            }).then((data) => {
                    this.containerDiv.innerHTML = this.style + this.html(data)  
            })
    }

    
    get content () { return this.containerDiv }

    // Create html
    html (data) {

        let html = `<h2>Hourly wether and forecasts in ${data.city.name}, ${data.city.country}</h2><table>`
        
        for (const item of data.list) {

            const date = new Date(item.dt * 1000)
            const time = date.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })
                
            if  (this.datesHtml.find(e => e == date.toLocaleDateString())) { // Find date
                
                let rowItem = this.rowItemHtml(item, time) // Create row html
                html += rowItem

            } else {
                 
                this.datesHtml.push(date.toLocaleDateString([], {}))  // Push date
                
                const today = new Date().toLocaleDateString() == date.toLocaleDateString() ? 'Today' : ''
                let rowHeader = `<tr class="row-header"> <th>${date.toDateString()} ${today}</th><th></th> </rt>`
                let rowItem = this.rowItemHtml(item, time) // Create row html
                html += rowHeader + rowItem
            }
        
        }

        html += `</table>`

        return html
    }
    
    rowItemHtml (item, time) {
        return `
        <tr> 
            <th>
                <span>${time}</span>   
                <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}.png">
            </th> 
            <th>
                <div class="row"> 
                    <div class="temperature">${Number.parseFloat(item.main.temp).toFixed(1)}°C</div> 
                    <i>${item.weather[0].description}</i> 
                </div> 
                <div class="row">${item.wind.speed}, m/s &nbsp clouds: ${item.clouds.all}%, ${item.main.pressure} hpa</div>
            </th> 
        </tr>`
    }

    style = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap');

            .five-day-container {
                width: 600px;
                height: 500px;
                background: #fff;
                color: #444;
                overflow-y: scroll;
            }

            .five-day-container h2 {
                font-family: 'Oswald', sans-serif; 
                font-weight: 400; 
                margin: 5px;
            }

            .five-day-container table {
                border-collapse: collapse;
                width: 100%;
                font-family: 'Arial', sans-serif;
                color: #444;
                font-size: 13px;
                text-align: left;
            }

            .five-day-container table .row-header {
                border: 1px solid lightgrey;
                background-color: #f2f2f2;
                font-size: 15px;
                width: 100%;
            }

            .five-day-container th {
                padding: 7px;
                border-bottom: 1px solid lightgrey;
            }

            .five-day-container th span {
                position: relative;
                bottom: 15px;
            }

            .row {
                display: flex;
            }

            .five-day-container .temperature {
                background: #888;
                color: white;
                padding: 2px 9px;
                border-radius: 10px;
                font-size: 11px;
                margin: 0 5px 4px 0;
            }
        </style>
    `

}