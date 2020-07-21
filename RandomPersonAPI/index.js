const btnGenerate = document.getElementById('btnGenerate')
const name = document.getElementById('name')
const emailCont = document.getElementById('email')
const countryCont = document.getElementById('country')
const imgCont = document.getElementById('api-img')

const generateAPI = () => {
    fetch('https://randomuser.me/api/')
    .then((res)=>res.json())
    .then((res)=>res.results[0])
    .then((res)=>{
        const {
            name: {first},
            name: {last},
            location: {country},
            email,
            picture: {large}
        } = res;
    name.innerHTML = `${first} ${last}`;
    emailCont.innerHTML = email;
    countryCont.innerHTML = country;
    imgCont.src = large;
    })
}

generateAPI();
btnGenerate.addEventListener('click', generateAPI);