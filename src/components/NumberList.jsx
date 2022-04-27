import Number from './Number';

import styled from 'styled-components';

const Numbers = styled.ul`
    display: grid;
    grid-gap: 3px 10px;
    justify-items: stretch;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(4, 25%);

    list-style: none;

    li {
        &:nth-child(10) {
            grid-column-start: 1;
            grid-column-end: 3;
        }

        button {
            background-color: rgba(241, 241, 249, 255);
            color: rgba(185, 182, 248, 255);
            border: 2px solid #fff;
            border-radius: 10px;

            font-size: 1.5em;

            /* border: 3px solid red; */
            height: calc(100% - 8px);
            width: calc(100%);  
        }
    }

`

const NumberList = ({ displayValue }) => {
    const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.']
    return (
        <Numbers>
            {numbersArr.map((value, index) => <li key={ index }>
                <Number value={value} displayValue={displayValue}></Number>
            </li>)}
        </Numbers>
    )
}

export default NumberList