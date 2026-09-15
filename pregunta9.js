const URL_METEO = "https://api.open-meteo.com/v1/forecast?latitude=43.7064&longitude=-79.3986&hourly=soil_temperature_18cm&forecast_days=1";

async function humiditySidney(url){
    const answer = await fetch(url);
    const data = await answer.json();
    return data;
}

const data = await humiditySidney(URL_METEO);
console.log("La temperatura del suelo en Toronto: ", data.hourly.soil_temperature_18cm[3], data.hourly_units.soil_temperature_18cm);