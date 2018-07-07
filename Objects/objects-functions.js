let tempConverter = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5/9).toFixed(2);
  let kelvin = ((fahrenheit + 459.67) * 5/9).toFixed(2);

  return {
    temp: `Fahrenheit: ${fahrenheit}, Celsius: ${celsius}, Kelvin: ${kelvin}`
  }
}

console.log(tempConverter(35).temp)