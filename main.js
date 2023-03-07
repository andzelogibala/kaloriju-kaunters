// atsauces :
// https://flexiple.com/javascript/javascript-capitalize-first-letter/
// https://www.w3schools.com/jsref/jsref_tofixed.asp


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f298df2330msha92c96cc950584fp158a42jsn4b7b26738ac7',
		'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
	}
}

const userInput = document.querySelector('input');
const btn = document.querySelector('button');

function Walking(calories) {
    return (calories * 2.4) / 100
}
function Running(calories) {
    return (calories * 1.6) / 100
}
function Cycling(calories) {
    return (calories * 3.2) / 100
}
function Swimming(calories) {
    return (calories * 0.39) / 100
}

let search = ''
function callinfo (){
    foodname = document.getElementById('food').value
    
    
    fetch('https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=' + foodname , options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            const str = response[0].name
            const str2 = str.charAt(0).toUpperCase() + str.slice(1)
            
            document.getElementById('name').innerHTML = str2
            document.getElementById('kcal').innerHTML = 'Calories : ' + response[0].calories + 'kcal per ' + response[0].serving_size_g + 'g product'
            document.getElementById('protein').innerHTML = 'Protein : ' + response[0].protein_g + 'g per ' + response[0].serving_size_g + 'g product'

            document.getElementById('virsraksts1').innerHTML = 'To burn ' + response[0].calories + 'kcal / ' + response[0].serving_size_g + 'g product, you will need to : '
            document.getElementById('walking').innerHTML = 'Walk for ' + Walking(response[0].calories).toFixed(2) + 'km'
            document.getElementById('running').innerHTML = 'Run for ' + Running(response[0].calories).toFixed(2) + 'km'
            document.getElementById('cycling').innerHTML = 'Cycle for ' + Cycling(response[0].calories).toFixed(2)  + 'km'
            document.getElementById('swimming').innerHTML = 'Swim for ' + Swimming(response[0].calories).toFixed(2) + 'km'
            

        })
        .catch(err => console.error(err));
    userInput.value = '';

}







btn.addEventListener('click', callinfo)





