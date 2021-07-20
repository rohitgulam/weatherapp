
// init storage
const storage = new Storage();

// get stored location data
const weatherLocation = storage.getLocationData();


// Initialize weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Init UI
const ui = new UI();

// get eather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    weather.changeLocation(city, country);

    // set loation to LS
    storage.setLocationData(city, country)

    // call get weather

    getWeather();

    // Closemodal
    $('#locModal').modal('hide')
});



function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results);
        console.log(results)
        
    })
    .catch(err => console.log(err))
};