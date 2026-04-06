import { useState } from 'react';
import TemperatureInput from './TemperatureInput';

function toFahrenheit(c) {
  return c !== '' ? ((parseFloat(c) * 9) / 5 + 32).toFixed(2) : '';
}

function toCelsius(f) {
  return f !== '' ? (((parseFloat(f) - 32) * 5) / 9).toFixed(2) : '';
}

function TemperatureConvertor() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (val) => {
    setCelsius(val);
    setFahrenheit(toFahrenheit(val));
  };

  const handleFahrenheitChange = (val) => {
    setFahrenheit(val);
    setCelsius(toCelsius(val));
  };

  return (
    <div className="temp-wrapper">
      <div className="temp-inputs">
        <TemperatureInput
          label="Celsius (°C)"
          temperature={celsius}
          onTemperatureChange={handleCelsiusChange}
        />
        <TemperatureInput
          label="Fahrenheit (°F)"
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange}
        />
      </div>

      <div className="temp-display">
        <span className="temp-icon">🌡️</span>
        {celsius ? (
          <p className="temp-display-text">
            <strong>{celsius} °C</strong> = <strong>{fahrenheit} °F</strong>
          </p>
        ) : (
          <p className="temp-display-text temp-empty">Entrez une température pour la convertir</p>
        )}
      </div>
    </div>
  );
}

export default TemperatureConvertor;