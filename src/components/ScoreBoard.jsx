import NumberList from './NumberList';

import styled from 'styled-components';

const ScoreBoardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);

    button:first-child {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    button:last-of-type {
        grid-row-start: 5;
        grid-row-end: 6;
        grid-column-start: 3;
        grid-column-end: 4;
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
        background: none;
        border: none;
        cursor: pointer;
        padding: 20px 0;
        border: 3px solid black;
    }
`


const ScoreBoard = () => {
    const toolkit = ['AC', '/', 'x', '-', '+', '=', '.']
    return (
        <ScoreBoardContainer>
            {toolkit.map((item, index) => <button key={index}>{item}</button>)}            
            <NumberList />
        </ScoreBoardContainer>
    )

}

export default ScoreBoard