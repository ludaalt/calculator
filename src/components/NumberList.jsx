import styled from 'styled-components';

const Numbers = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(4, 25%);

    list-style: none;

    li {
        &:nth-child(10) {
            grid-column-start: 1;
            grid-column-end: 3;
        }

        button {
            width: 100%;
        }
    }

`

const NumberList = () => {
    const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    return (
        <Numbers>
            {numbersArr.map((item, index) => <li key={ index }>
                <button>{ item }</button>
            </li>)}
        </Numbers>
    )
}

export default NumberList