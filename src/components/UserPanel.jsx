import { useState, useEffect } from 'react';

import styled from 'styled-components';
import { faBatteryFull, faWifi, faBroadcastTower } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Panel = styled.div`
border: 4px solid red;
min-height: 30px;
color: #000;
font-family: 'Roboto';
color: black;
font-size: 0.9em;
font-weight: 50;
display: flex;
justify-content: space-between;
align-items: center;

    // div:last-child {
    //     border: 3px solid green;
    // }

    svg {
        // display: inline-block;
        // height: 100%;
        // width: 50px;
        // height: 50px;
        // border: 3px solid yellow;
    }

    svg:not(:last-child) {
        margin: auto 10px auto 0;

    }
`

const Time = styled.div`

    font-weight: 800;

`

const UserPanel = () => {
    let [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString().slice(0, 5))
    useEffect(() => {
        setInterval(() => {setCurrentTime(new Date().toLocaleTimeString().slice(0, 5))}, 1000)
    }, [currentTime])

    return (
        <Panel>
            <Time>{currentTime}</Time>

            <div>
                {/* <FontAwesomeIcon icon={faBroadcastTower} /> */}
                <FontAwesomeIcon icon={faWifi} />
                <FontAwesomeIcon icon={faBatteryFull} />
            </div>

        </Panel>
    )
}

export default UserPanel