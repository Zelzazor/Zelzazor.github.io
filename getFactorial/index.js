const input = document.querySelector('#numberInput');
const result = document.querySelector('#result');

input.addEventListener('input', () => {
    if(input.value !== '' && input.value !== '0'){
        const num = factorial(parseInt(input.value));
        if(num === Infinity){
            result.innerHTML = `No podemos determinar el resultado. El número es demasiado grande. Introduzca un número entero entre 1 y 170.`
        }
        else{
            result.innerHTML = `El resultado es: ${num}`;
        }
        

    }
    else{
        result.innerHTML = `El resultado es:`
    }
    
});

const factorial = (number) =>{

    if(number === 1){
        return 1;
    }
    else{
        return number * factorial(number - 1);
    }
}