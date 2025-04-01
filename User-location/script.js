const button = document.getElementById("get-location-button");

async function getdata(lat, long){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=b4ed3d90cba54c6da6014043250104&q=${lat},${long}&aqi=yes`);

    return await promise.json();
}

async function got(position){
   const result = await getdata(position.coords.latitude, position.coords.longitude);
   console.log(result);
}
function error(){
    console.log("There was some issue");
}


button.addEventListener('click', async() =>{
    const result = navigator.geolocation.getCurrentPosition(got,error);
})
