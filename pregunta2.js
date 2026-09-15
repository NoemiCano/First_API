const URL_METEO = "https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&hourly=temperature_80m&forecast_days=3&temperature_unit=fahrenheit";

async function weatherNewYork(url){

    const answer = await fetch(url);
    const data = await answer.json();
    return (data);
}

const data = await weatherNewYork(URL_METEO);
console.log("Pregunta 2: Temperatura de pasado mañana en Nueva York: ", data.hourly.temperature_80m[48 + 14], data.hourly_units.temperature_80m);