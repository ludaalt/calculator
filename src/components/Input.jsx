import { useState } from 'react';
import styled from 'styled-components';

const InputDisplay = styled.input`
    width: 100%;
    background: transparent;

`

const Input = () => {
    const [value, setValue] = useState(0);

    const setValueHandler = (e) => {
        setValue(e.target.value)
    }
    return (
        <InputDisplay placeholder="place" value={value} onChange={(e) => setValueHandler(e)} />
    )

}

export default Input