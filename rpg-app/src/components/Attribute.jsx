function Attribute({ label, value, onChange, optionalImage }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
      <label htmlFor={label.toLowerCase()} style={{ marginBottom: '5px' }}>{label}:</label>
      <input
        style={{ fontSize: "16px", width: '50px' , alignSelf:"center"}}
        type="number"
        id={label.toLowerCase()}
        name={label.toLowerCase()}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Attribute;