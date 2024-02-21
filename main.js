
function calcularPrecio() {
    // Obtener el importe y la moneda seleccionada
    let cantidad = parseFloat(document.getElementById('cantidad').value);
    let moneda = document.getElementById('moneda').value;

    //  conversión moneda
    let conversionRates = {
        usd: 0.0012, 
        eur: 0.0011, 
        lib:  0.00095  
    };

    // Calcular el precio en la moneda seleccionada
    let convertedPrice = cantidad * conversionRates[moneda];

    // Mostrar el resultado
    document.getElementById('result').innerHTML = "Precio en " + moneda.toUpperCase() + ": " + convertedPrice.toFixed(2);
}