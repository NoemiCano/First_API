const URL_METEO = "https://api.open-meteo.com/v1/forecast?latitude=40.2842&longitude=-84.1555&hourly=relative_humidity_850hPa&forecast_days=1";

async function humiditySidney(url){
    const answer = await fetch(url);
    const data = await answer.json();
    return data;
}

const data = await humiditySidney(URL_METEO);
console.log("Humedad relativa de Sidney: ", data.hourly.relative_humidity_850hPa[9]);