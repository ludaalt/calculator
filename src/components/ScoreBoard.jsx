import NumberList from './NumberList';
import styled from 'styled-components';

const ScoreBoardContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    height: 50%;

    button:first-child {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    button:nth-last-child(3) {
        grid-row-start: 4;
        grid-row-end: 6;
    }

    ul {
        grid-row-start: 2;
        grid-row-end: 6;
        grid-column-start: 1;
        grid-column-end: 4;
    }

    button {
        position: relative;
        cursor: pointer;
        border: none;
        font-size: 1.5em;
        border-radius: 10px;  
        
        color: #fff;
        background-color: rgba(255, 191, 191, 255);

        &:hover {            
            background: transparent;
            box-shadow: inset 0 0 0 3px rgba(255, 191, 191, 255);
            color: rgba(255, 191, 191, 255);
        } 
    }
`;


const ScoreBoard = ({ displayValue, displayOperation }) => {
    const toolkit = ['AC', '/', '*', '+', '=', '-',]
    return (
        <ScoreBoardContainer>
            {toolkit.map((item) => <button id={item} key={item} onClick={() => displayOperation(item)}>{item}</button>)}         
            <NumberList displayValue={displayValue} />
        </ScoreBoardContainer>
    )
}

export default ScoreBoard