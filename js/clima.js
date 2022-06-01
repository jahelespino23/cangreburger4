window.addEventListener('load', ()=> {
    
    let ubicacion = document.getElementById('ubicacion')  
    let temperaturaValor = document.getElementById('temperatura-valor')  

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion => {
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude
            // lon = -33.472181 
            // lat = -70.610138

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a3aff85da9bd1ac6ce7864e5d3d95eb7&units=metric`

            fetch(url)
            .then( response => { return response.json()})
            .then( data => {

                let temp = Math.round(data.main.temp)
                
                ubicacion.textContent = data.name
                temperaturaValor.textContent = `${temp} ° C`

            })
            .catch( error => {
                console.log(error)
            })
        })
    }
})