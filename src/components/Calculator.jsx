import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ScoreBoard from './ScoreBoard';
import Input from './Input';
import UserPanel from './UserPanel';
import { updateCalculateValueAction, updateCalculateResultAction } from '../store/updateCalculateValue';
import { showError } from '../helpers/showError';
import { useEffect } from 'react';

const CalculatorContainer = styled.div`
    position: relative;
    width: 320px;
    height: 620px;
    border: 3px solid #fff;
    border-radius: 30px;
    padding: 10px 15px;
    background: linear-gradient(90deg, rgba(243, 231, 235, 255), rgba(227, 239, 255, 255));

    &::after {
        position: absolute;
        content: '';
        width: 120px;
        height: 5px;
        background-color: #fff;

        left: calc(50% - 60px);
        bottom: 10px;
        border-radius: 5px;
    } 
`;

const Calculator = () => {
    const currentValue = useSelector((state) => state.data.value);
    const dispatch = useDispatch();

    const displayValue = (value) => {
        dispatch(updateCalculateValueAction(currentValue === 0 ? value : currentValue.toString() + value.toString()))
    }

    useEffect(() => {
        dispatch(showError(currentValue))
    }, [currentValue])

    const displayOperation = (operation) => {
        if(operation === '+' || operation === '-' || operation === '*' || operation === '/' || operation === '.') {
            dispatch(updateCalculateValueAction(currentValue.toString() + operation.toString()))
        }

        if(operation === 'AC') {
            dispatch(updateCalculateValueAction(0))
            dispatch(updateCalculateResultAction(''))
        }

        if(operation === '=') {
            dispatch(updateCalculateValueAction(eval(currentValue)))
        } 
    }

    return (
        <CalculatorContainer>
            <UserPanel />
            <Input currentValue={currentValue} />
            <ScoreBoard displayValue={displayValue} displayOperation={displayOperation} />
        </CalculatorContainer>        
    )
}

export default Calculator