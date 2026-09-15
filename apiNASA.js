const URL_NASA_DATE = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-07-26&end_date=2019-07-26&api_key=zcVRbCU4HGMC0gT50D7dtT2u9DPh9YWbPXDn1yIj";
const URL_NASA_ASTEROID = "https://api.nasa.gov/neo/rest/v1/neo/50542542?api_key=zcVRbCU4HGMC0gT50D7dtT2u9DPh9YWbPXDn1yIj"


async function NasaDate(url){
    const answer = await fetch(url);
    const data = await answer.json();
    return data;
}

const data = await NasaDate(URL_NASA_DATE);

console.log("La velocidad a la que se desplazaba el 26/07/2019: ", data.near_earth_objects["2019-07-26"][0].close_approach_data[0].relative_velocity.kilometers_per_hour);

console.log("Distancia en kilometros de la Tierra el 26/07/2019: ", data.near_earth_objects["2019-07-26"][0].close_approach_data[0].miss_distance.kilometers);

async function Asteroid(url){
    const answer = await fetch(url);
    const data = await answer.json();
    return data;
}

const asteroidData = await Asteroid(URL_NASA_ASTEROID);

console.log("Tiempo en dar una vuelta al Sol: ", asteroidData.orbital_data.orbital_period);

