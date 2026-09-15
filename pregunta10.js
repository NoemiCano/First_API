const URL_METEO = "https://api.open-meteo.com/v1/forecast?latitude=59.9127&longitude=10.7461&hourly=wind_speed_10m&models=meteofrance_seamless&forecast_days=3";

async function humiditySidney(url){
    const answer = await fetch(url);
    const data = await answer.json();
    return data;
}

const data = await humiditySidney(URL_METEO);
console.log("Usando el modelo Meteo-France. Velocidad del viento en Oslo: ", data.hourly.wind_speed_10m[24 + 12], data.hourly_units.wind_speed_10m);