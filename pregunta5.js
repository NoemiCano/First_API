const URL_METEO = "https://api.open-meteo.com/v1/forecast?latitude=64.145981&longitude=-21.942237&daily=precipitation_sum&forecast_days=4";

async function humiditySidney(url){
    const answer = await fetch(url);
    const data = await answer.json();
    return data;
}

const data = await humiditySidney(URL_METEO);
console.log("Precipitación acumulada Reikiavik: ", data.daily.precipitation_sum[1]+data.daily.precipitation_sum[2]+data.daily.precipitation_sum[3], data.daily_units.precipitation_sum);