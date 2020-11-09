let loc=document.getElementById("location");
let tempIcon=document.getElementById("temp-icon");
let tempValue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconFile;
window.addEventListener("load", () => {
	let long;
	let lat;

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition((position) => {
			long= position.coords.longitude;
			lat= position.coords.latitude;
			const proxy = "https://cors-anywhere.herokuapp.com/";
			const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f49b178aececdff9e38b880bb1363943`;
		    fetch(api)
		    .then((response) => {
             return response.json();
		    })
		    .then(data=> {
		    	const {name} = data;
		    	const {feels_like} = data.main;
		    	const {id, main} = data.weather[0];
		    	loc.textContent = name;
		    	climate.textContent = main;
		    	tempValue.textContent = Math.round(feels_like-273);
		    	if(id<250){
		    		tempIcon.src='http://openweathermap.org/img/wn/11d@2x.png';
		    	} 
		    	else if(id<350){
		    		tempIcon.src='http://openweathermap.org/img/wn/09d@2x.png';
		    	} 
		    	else if(id<550){
		    		tempIcon.src='http://openweathermap.org/img/wn/10d@2x.png';
		    	} 
		    	else if(id<650){
		    		tempIcon.src='http://openweathermap.org/img/wn/13d@2x.png';
		    	} 
		    	else if(id<800){
		    		tempIcon.src='http://openweathermap.org/img/wn/50d@2x.png';
		    	} 
		    	else if(id===800){
		    		tempIcon.src='http://openweathermap.org/img/wn/01d@2x.png';
		    	} 
		    	else if(id>800){
		    		tempIcon.src='http://openweathermap.org/img/wn/02d@2x.png';
		    	} 
		    	console.log(data);
		    })
		})
	}
})