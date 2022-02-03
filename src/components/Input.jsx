import { useState } from 'react';
import styled from 'styled-components';

const Area = styled.div`
    margin: 20px 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    border-radius: 30px;

    height: 200px;
    background: white;
    font-size: 40px;
    font-family: 'Roboto';
    color: gray;
    text-align: end;

    div {
        min-height: 20px;
        outline: none;
        overflow: hidden;

        border: 3px solid red;
    }

`

const Input = ({ currentValue }) => {
    const [value, setValue] = useState(currentValue);

    const setValueHandler = (e) => {
        setValue(e.target.textContent)
        console.log(value)
    }

    return (
        <Area>
            <div contentEditable value={value} onInput={setValueHandler}></div>
        </Area>

    )
}

export default Input