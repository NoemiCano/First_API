const URL_METEO = "https://api.open-meteo.com/v1/forecast?latitude=-1.2833&longitude=36.8167&daily=sunrise,sunset&past_days=0&forecast_days=5";

async function humiditySidney(url){
    const answer = await fetch(url);
    const data = await answer.json();
    return data;
}

const data = await humiditySidney(URL_METEO);
console.log("En Nairobi, el amanecer será a las: ", data.daily.sunrise[4], " y el atardecer será a las: ", data.daily.sunset[4]);