const Number = ({ value, displayValue }) => {
    return <button onClick={() => displayValue(value)}>{ value }</button>
}

export default Number;