const Number = ({ value, displayValue }) => {
  return (
    <button className="number" onClick={() => displayValue(value)}>
      {value}
    </button>
  );
};

export default Number;
