const URL_METEO = "https://api.open-meteo.com/v1/forecast?latitude=30.044444&longitude=31.235833&hourly=precipitation_probability&forecast_days=2";

async function precipitationElCairo(url) {
    const answer = await fetch(url);
    const data = answer.json();
    return data;
}

const data = await precipitationElCairo(URL_METEO);
console.log("Probabilidad de precipitación en el Cairo", data.hourly.precipitation_probability[24 + 9], data.hourly_units.precipitation_probability);