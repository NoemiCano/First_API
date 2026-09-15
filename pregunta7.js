const URL_METEO = "https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&daily=wind_gusts_10m_max&forecast_days=3";

async function humiditySidney(url){
    const answer = await fetch(url);
    const data = await answer.json();
    return data;
}

const data = await humiditySidney(URL_METEO);
console.log("La rafaga máxima de viendo en Buenos Aires: ", data.daily.wind_gusts_10m_max[1], data.daily_units.wind_gusts_10m_max);