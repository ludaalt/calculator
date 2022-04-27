import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';

import ContentEditable from 'react-contenteditable';

import { updateCalculateValueAction } from '../store/updateCalculateValue';


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
    const value = useSelector((state) => state.value.value);
    const dispatch = useDispatch();

    const setValueHandler = (e) => {
        dispatch(updateCalculateValueAction(e.target.value))
    }

    const deleteCharHandler = () => {
        dispatch(updateCalculateValueAction(value.toString().slice(0, -1)))
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
        setCaretPosition();
    }, [value])

    return (
        <Area>
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