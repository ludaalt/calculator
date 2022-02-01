import styled from 'styled-components';

const NumberButton = styled.button`
    width: 30px;
    height: 20px;
    border: 5px solid red;
`

const Number = ({ value }) => {
    return <NumberButton>{ value }</NumberButton>
}

export default Number