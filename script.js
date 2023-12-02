const calculateTemp = () => {
  const numberTemp = parseFloat(document.getElementById('temp').value);
  const fromUnit = document.getElementById('from_unit').value;
  const toUnit = document.getElementById('to_unit').value;

  const celToFah = (cel) => ((cel * 9) / 5) + 32;
  const fehToCel = (fehr) => ((fehr - 32) * 5) / 9;
  const celToKel = (cel) => cel + 273.15;
  const kelToCel = (kel) => kel - 273.15;
  
  let result;

  if (fromUnit === 'cel' && toUnit === 'fah') {
    result = celToFah(numberTemp);
    document.getElementById('result-container').innerHTML = `${result}°Fahrenheit`;
  } else if (fromUnit === 'fah' && toUnit === 'cel') {
    result = fehToCel(numberTemp);
    document.getElementById('result-container').innerHTML = `${result}°Celsius`;
  } else if (fromUnit === 'cel' && toUnit === 'kel') {
    result = celToKel(numberTemp);
    document.getElementById('result-container').innerHTML = `${result} Kelvin`;
  } else if (fromUnit === 'kel' && toUnit === 'cel') {
    result = kelToCel(numberTemp);
    document.getElementById('result-container').innerHTML = `${result}°Celsius`;
  } else {
    document.getElementById('result-container').innerHTML = "Invalid conversion.";
  }
}