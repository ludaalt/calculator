import ScoreBoard from './ScoreBoard';
import Input from './Input';

import styled from 'styled-components';

const CalculatorContainer = styled.div`
    width: 40%;
    background: black;
`

const Calculator = () => {
    return (
        <CalculatorContainer>
            <Input />
            <ScoreBoard />
        </CalculatorContainer>
        
    )
}

export default Calculator