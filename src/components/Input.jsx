import { useState, useEffect } from 'react';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';


const Area = styled.div`
    position: relative;
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
    text-align: end;

    div {
        min-height: 20px;
        outline: none;
        overflow: hidden;

        &[contenteditable][placeholder]:empty:before {
            content: attr(placeholder);
            color: gray;
            background-color: transparent;
        }
    }
`

const Input = ({ currentValue }) => {
    const [value, setValue] = useState('');

    const setValueHandler = (e) => {
        setValue(value => value = e.target.textContent)
    }

    const deleteCharHandler = () => {
        setValue(value => value.slice(0, -1))
    }



    function setCaretPosition() {
        const range = document.createRange();
        range.selectNodeContents(document.querySelector('#editable'));
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }

    useEffect(() => {
        setCaretPosition()
    }, [value])

    return (
        <Area>
            <div placeholder="0" id="editable" contentEditable suppressContentEditableWarning={true} onInput={setValueHandler}>{value}</div>
            <DeleteButton deleteCharHandler={deleteCharHandler} />
        </Area>

    )
}

export default Input