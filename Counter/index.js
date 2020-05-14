const minus = document.getElementById("btnMinus");
const plus = document.getElementById("btnPlus");
const input = document.getElementById("numInput");



minus.addEventListener("click", () => {
    let value = parseInt(input.value);
    value-=1;
    input.value = value;
});

plus.addEventListener("click", () => {
    let value = parseInt(input.value);
    value+=1;
    input.value = value;
} );

