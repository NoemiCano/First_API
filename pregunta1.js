// ¿Cuál será la velocidad del viento en km/h que habrá mañana en Tokio a las 19:00 horas y a 120 metros de altitud?
const URL_METEO = "https://api.open-meteo.com/v1/forecast?latitude=35.6762&longitude=139.6503&hourly=wind_speed_120m&forecast_days=2";

async function windTokio(url)
{
    const answer = await fetch(url);
    const data = await answer.json();
    return data;
}

const data = await windTokio(URL_METEO);
console.log("Pregunta 1: Velocidad viento de mañana en Tokio: ", data.hourly.wind_speed_120m[24 + 19]);
