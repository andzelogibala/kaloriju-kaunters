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
            

            document.getElementById('name').innerHTML = str2 + ' has a total of ' + response[0].calories + ' Kcal per ' + response[0].serving_size_g + ' g of product'

            document.getElementById('virsraksts3').innerHTML = 'Serving size per ' + response[0].serving_size_g + ' g'
            document.getElementById('protein').innerHTML = 'Protein : ' + response[0].protein_g + ' g'
            document.getElementById('carb').innerHTML = 'Carbohydrates : ' + response[0].carbohydrates_total_g + ' g'
            document.getElementById('fat').innerHTML = 'Fat : ' + response[0].fat_total_g + ' g'
            document.getElementById('potassium').innerHTML = 'Potassium : ' + response[0].potassium_mg + ' mg'
            document.getElementById('sodium').innerHTML = 'Sodium : ' + response[0].sodium_mg  + ' mg'
            document.getElementById('sugar').innerHTML = 'Sugar : ' + response[0].sugar_g + ' g'

            

            document.getElementById('virsraksts1').innerHTML = 'To burn ' + response[0].calories + 'kcal / ' + response[0].serving_size_g + 'g product, you will need to : '
            document.getElementById('walking').innerHTML = 'Walk for ' + Walking(response[0].calories).toFixed(2) + ' km'
            document.getElementById('running').innerHTML = 'Run for ' + Running(response[0].calories).toFixed(2) + ' km'
            document.getElementById('cycling').innerHTML = 'Cycle for ' + Cycling(response[0].calories).toFixed(2)  + ' km'
            document.getElementById('swimming').innerHTML = 'Swim for ' + Swimming(response[0].calories).toFixed(2) + ' km'
            show()

        })
        .catch(err => console.error(err));
    userInput.value = '';

}

function show() {
    document.getElementById('hide1').style.display = "block";
    document.getElementById('hide2').style.display = "block";

    document.getElementById('kopa').style.backgroundColor = "gray";
}

function refreshPage(){
    window.location.reload();
} 




btn.addEventListener('click', callinfo)





