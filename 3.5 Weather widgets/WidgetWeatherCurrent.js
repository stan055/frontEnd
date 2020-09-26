// api key : 6056bbd2d4e3573a4adf1ed1dba60646

class WidgetWeatherCurrent {

    constructor () {

        this.key = '6056bbd2d4e3573a4adf1ed1dba60646'
        this.weather = {
            temperature: '-',
            icon: '-',
            wind: '-',
            cloudiness: '-',
            pressure: '-',
            humidity: '-',
            sunrise: '-',
            sunset: '-',
            coords: {
                lat: '-',
                lon: '-'
            },
            country: '-',
            city: '-',
            description: '-',
            main: '-',
            time: '-:-',
            month: '-',
            date: '-'
        }

        this.containerDiv = document.createElement('div')
        this.containerDiv.innerHTML = this.style + this.html()
    }


    getWeather () {

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(this.setPosition, this.showError)
        } else {
            this.showError({message: 'Browser does`t Support Geolocation'})
        }

    }

    showError = (error) => { 
        console.log(error.message)
    }

    setPosition = (position) => { 
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        this.getingWeather(latitude, longitude)
    }


    getingWeather = (latitude, longitude) => {
        let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${this.key}`

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

                const dateNow = new Date()

                this.weather.temperature = Math.floor(data.main.temp)
                this.weather.description = data.weather[0].description
                this.weather.icon = data.weather[0].icon
                this.weather.city = data.name
                this.weather.country = data.sys.country
                this.weather.main = data.weather[0].main
                this.weather.time = dateNow.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })
                this.weather.month = dateNow.toLocaleString([], { month: "short" })
                this.weather.date = dateNow.getDate()
                this.weather.wind = `speed ${data.wind.speed} m/s <br> deg ${data.wind.deg}`
                this.weather.cloudiness = data.weather[0].description
                this.weather.pressure = data.main.pressure
                this.weather.humidity = data.main.humidity
                this.weather.sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], 
                    { hour12: false, hour: '2-digit', minute: '2-digit' }) 
                this.weather.sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], 
                    { hour12: false, hour: '2-digit', minute: '2-digit' })
                this.weather.coords.lon = data.coord.lon
                this.weather.coords.lat = data.coord.lat

                // Set weather
                this.containerDiv.innerHTML = this.style + this.html()
            })
    }
    

    html () {
        return `
        <div class="widget-current-weather">
            <h2 class="header-from">Weather in ${this.weather.city}, ${this.weather.country}</h2>
            <h1 class="header-temperature">
                <img src="http://openweathermap.org/img/wn/${this.weather.icon}.png">
                <span> ${this.weather.temperature} °C</span>
            </h1>
            <p>${ this.weather.main }</p>
            <p>
                <span>${this.weather.time} ${this.weather.month} ${this.weather.date}</span>&nbsp;
                <span class="color-coral">Wrong data?</span>
            </p>
            <table>
                <tr>
                    <td>Wind</td>
                    <td>${this.weather.wind}</td>
                </tr>
                <tr>
                    <td>Cloudiness</td>
                    <td>${this.weather.cloudiness}</td>
                </tr>
                <tr>
                    <td>Pressure</td>
                    <td>${this.weather.pressure} hpa</td>
                </tr>
                <tr>
                    <td>Humidity</td>
                    <td>${this.weather.humidity} %</td>
                </tr>
                <tr>
                    <td>Sunrise</td>
                    <td>${this.weather.sunrise}</td>
                </tr>
                <tr>
                    <td>Sunset</td>
                    <td>${this.weather.sunset}</td>
                </tr>
                <tr>
                    <td>Geo coords</td>
                    <td class="color-coral">[${this.weather.coords.lon}, ${this.weather.coords.lat}]</td>
                </tr>
            </table>
        </div>
        `
    }


    style = `
    <style>

        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap');

        .widget-current-weather {
            background: #fff; 
            width: 250px;
            color: #444
        }

        .widget-current-weather {
            font-family: 'Arial', sans-serif; 
            font-size: 14px;
        }

        .widget-current-weather p {
            text-align: center;
        }

        .header-from {
            font-family: 'Oswald', sans-serif; 
            font-weight: 500; 
            font-size: 25px;
            margin: 0;
        }

        .header-temperature {
            margin: 0; 
            display: flex;
            align-items: center; 
            margin-left: 50px;
            font-family: 'Oswald', sans-serif; 
            font-weight: 500;
        }

        .header-temperature > img {
            height: 60px;
        }

        .color-coral {
            color: coral;
        }

        .widget-current-weather table {
            border-collapse: collapse;
            width: 100%
        }

        .widget-current-weather td {
            border: 1px solid lightgrey;
            padding: 5px;
        }

        .widget-current-weather tr:nth-child(2n+1) {
            background-color: #f2f2f2;
        }

    </style>
    `

    get content () { return this.containerDiv }

}