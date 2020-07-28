const btnGenerate = document.getElementById('btnGenerate');
const name = document.getElementById('name');
const emailCont = document.getElementById('email');
const countryCont = document.getElementById('country');
const imgCont = document.getElementById('api-img');

const generateAPI = async () => {
    const response = await fetch('https://randomuser.me/apo/');
    const json = await response.json();
    const result = await json.results[0];
    const {name: {first}, name: {last}, location: {country}, email, picture: {large}} = result;
    name.innerHTML = `${first} ${last}`;
    emailCont.innerHTML = email;
    countryCont.innerHTML = country;
    imgCont.src = large;
}

generateAPI().catch((error)=>{
    console.log("There was an error!");
    console.error(error);
});


btnGenerate.addEventListener('click', generateAPI);