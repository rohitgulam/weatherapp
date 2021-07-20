class Weather {
    constructor(city, country){
        this.apiKey = config.api_key;
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);
        // https://api.openweathermap.org/data/2.5/weather?q=Dar%20es%20salaam,TZ&appid=9e2a3e3a2a19387a8a0b6c37c596fda9

        const responseData = await response.json();

        return responseData; 
    }


    // Change location

    changeLocation(city, country){
        this.city = city;
        this.country = country;
    }

}