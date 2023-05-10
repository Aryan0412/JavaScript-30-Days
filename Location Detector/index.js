const button = document.querySelector('button');
const Location = document.querySelector('.loc');
const state = document.querySelector('.sta');
const country = document.querySelector('.cou');
const fetchh = document.querySelector(".fetch");

button.addEventListener('click', (position)=>{
    navigator.geolocation.getCurrentPosition(showPosition);
    fetchh.textContent = "fetching your location..."
    setTimeout(()=>{
        fetchh.textContent = "";
    },2000);

    

    

});

const showPosition = (position)=>{
    const longi = position.coords.longitude;
    const lati = position.coords.latitude;
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lati}&longitude=${longi}&localityLanguage=en`;

    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        Location.textContent = data.city;
        country.textContent = data.countryName;
        state.textContent = data.principalSubdivision;

    })

}