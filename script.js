const centimeter = document.querySelector("#cm"),
inch = document.querySelector("#in");
window.addEventListener("load" , () => centimeter.focus()); //Set Focus to reload page 
centimeter.addEventListener("input", () => {
    inch.value = (centimeter.value * 0.3937).toFixed(4); //formula cm to inch
    if(!centimeter.value) inch.value= ""; //if !value set input none
});
inch.addEventListener("input", () => {
    centimeter.value = (inch.value * 2.54).toFixed(2); //formula inch to cm
    if(!inch.value) centimeter.value=""; //if !value set input none
});