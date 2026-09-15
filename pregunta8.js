const URL_METEO = "https://api.open-meteo.com/v1/forecast?latitude=13.754&longitude=100.5014&daily=uv_index_max,uv_index_clear_sky_max&forecast_days=1";

async function uvBangkok(url){
    const answer = await fetch(url);
    const data = await answer.json();
    return data;
}

const data = await uvBangkok(URL_METEO);
console.log("El índice UV máximo de Bangkok: ", data.daily.uv_index_max, " En cielo despejado sería: ", data.daily.uv_index_clear_sky_max);