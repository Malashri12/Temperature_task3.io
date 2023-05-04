let Celsius = document.getElementById("Celsius");
let Fahrenheit = document.getElementById("Fahrenheit");

function ceTofa()
{
    let output = (parseFloat(Celsius.value) * 9 / 5) + 32;
    Fahrenheit.value = parseFloat(output.toFixed(2));
    console.log(output);

}
function faToce()
{
    let output = (parseFloat(Fahrenheit.value) -32) * 5 / 9;
    Celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}