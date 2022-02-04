import { useState, useEffect } from 'react';
import { getCurrentTime } from '../helpers/getCurrentTime';

import styled from 'styled-components';
import { faBatteryFull, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Panel = styled.div`
    min-height: 30px;
    color: #000;
    font-family: 'Roboto';
    color: black;
    font-size: 0.9em;
    font-weight: 50;
    display: flex;
    justify-content: space-between;
    align-items: center;

        svg:not(:last-child) {
            margin: auto 10px auto 0;
        }
`

const Time = styled.div`
    font-weight: 800;
`

const UserPanel = () => {
    let [currentTime, setCurrentTime] = useState(getCurrentTime())
    useEffect(() => {
        setInterval(() => {setCurrentTime(getCurrentTime())}, 1000)
    }, [currentTime])

    return (
        <Panel>
            <Time>{currentTime}</Time>
            <div>
                <FontAwesomeIcon icon={faWifi} />
                <FontAwesomeIcon icon={faBatteryFull} />
            </div>
        </Panel>
    )
}

export default UserPanel