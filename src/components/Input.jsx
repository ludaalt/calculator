import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import DeleteButton from './DeleteButton';
import ContentEditable from 'react-contenteditable';
import { updateCalculateValueAction } from '../store/updateCalculateValue';
import { showError } from '../helpers/showError';

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
`;

const Bounce = keyframes`
    0% {
        transform: translateX(0px);
        timing-function: ease-in;
    }
    37% {
        transform: translateX(5px);
        timing-function: ease-out;
    }
    55% {
        transform: translateX(-5px);
        timing-function: ease-in;
    }
    73% {
        transform: translateX(4px);
        timing-function: ease-out;
    }
    82% {
        transform: translateX(-4px);
        timing-function: ease-in;
    }
    91% {
        transform: translateX(2px);
        timing-function: ease-out;
    }
    96% {
        transform: translateX(-2px);
        timing-function: ease-in;
    }
    100% {
        transform: translateX(0px);
        timing-function: ease-in;
    }  
`;

const Result = styled.div`
    color: red;
    font-size: 20px;
    animation: ${Bounce};
    animation-duration: 1s;
    animation-iteration-count: 3;    
`;

const Input = ({ currentValue }) => {
    const value = useSelector((state) => state.data.value);
    const result = useSelector((state) => state.data.result);
    const dispatch = useDispatch();

    const setValueHandler = (e) => {
        dispatch(updateCalculateValueAction(e.target.value))
    }

    const deleteCharHandler = () => {
        dispatch(updateCalculateValueAction(value.toString().slice(0, -1)))
    }

    const setCaretPosition = () => {
        const range = document.createRange();
        range.selectNodeContents(document.querySelector('#editable'));
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }

    useEffect(() => {
        setCaretPosition();
        showError(value);
    }, [value])

    return (
        <Area>
            <Result>{result}</Result>
            <ContentEditable 
                placeholder="0" 
                id="editable" 
                html={currentValue.toString()}
                onChange={e => setValueHandler(e)}

            />   
            <DeleteButton deleteCharHandler={deleteCharHandler} />
        </Area>
    )
}

export default Input