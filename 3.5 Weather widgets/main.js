

const widgetWeatherCurrentContainer = document.querySelector('.widget-weather-current-container')
const widgetWeatherFiveDayContainer = document.querySelector('.widget-weather-five-day-container')

// Current weather widget
const widgetWeatherCurrent = new WidgetWeatherCurrent()
widgetWeatherCurrentContainer.append(widgetWeatherCurrent.content)
widgetWeatherCurrent.getWeather()


// Five day weather widget
const widgetWeatherFiveDay = new WidgetWeatherFiveDay()
widgetWeatherFiveDayContainer.append(widgetWeatherFiveDay.content)
widgetWeatherFiveDay.getWeather()


