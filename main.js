const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f298df2330msha92c96cc950584fp158a42jsn4b7b26738ac7',
		'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
	}
}

const userInput = document.querySelector('input');
const btn = document.querySelector('button');

let search = ''
const callinfo = () => {
    foodname = document.getElementById('food').value
    
    fetch('https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=' + foodname , options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            

        })
        .catch(err => console.error(err));
    userInput.value = '';

}

btn.addEventListener('click', callinfo)





