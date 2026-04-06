function TemperatureInput({ label, temperature, onTemperatureChange }) {
  return (
    <div className="temp-field">
      <label>{label}</label>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
        placeholder={`Entrez ${label}`}
      />
    </div>
  );
}

export default TemperatureInput;