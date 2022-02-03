import styled from 'styled-components';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = styled.button`
    padding: 3px 9px 3px 2px;
    color: #fff;
    background: #b9b5fe;
    border: none;
    position: absolute;
    right: 12px;
    top: 12px;

    cursor: pointer;

    border-top-right-radius: 10px;
    border-bottom-right-radius: 5px;

    border-top-left-radius: 1px;
    border-bottom-left-radius: 1px;

    min-height: 15px;
    min-width: 22px;

    &::after {
        border: 10.6px solid transparent;	
        border-right: 14px solid #b9b5fe;
        content: '';
        position: absolute;
        left: -24.2px;
        top: 0px;
    }
`


const DeleteButton = ({ deleteCharHandler }) => {
    return (
        <Button onClick={deleteCharHandler}>
            <FontAwesomeIcon icon={faTimes} />
        </Button>
    )
}

export default DeleteButton