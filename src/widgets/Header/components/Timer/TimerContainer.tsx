import React, { FC, useEffect, useState } from 'react'
import { Timer } from './Timer'
import { trainingSessionId } from '../../../../constants/training-session-id'
import { api } from '../../../../api';
import { contestTimeLeft } from '../../../../utils/contestTimeLeft';
import { useCountdown } from '../../../../hooks/useCountdown';
import { convertMsToTime } from '../../../../utils/converMsToTime';

export const TimerContainer = () => {
    const [contestStatus, setContestStatus] = useState('');
    const [contestDateCreated, setContestDateCreated] = useState('');
    const [contestDurationInSec, setContestDurationInSec] = useState<number>(null);

    const { secondsLeft, setSecondsLeft } = useCountdown(contestDurationInSec);

    const contestid = '51004';

    useEffect((()=>{
        api.getContestStatusAndDate(trainingSessionId)
            .then(({dt_created, status})=>{
                setContestStatus(status)
                setContestDateCreated(dt_created)
            })
            .catch(console.log)
        api.getContestInfo(contestid)
            .then(({duration})=>{
                setSecondsLeft(duration)
            })
            .catch(console.log)
    }), [contestDurationInSec])

    const secondsLeftString = convertMsToTime(secondsLeft)
    return <Timer secondsLeftString={secondsLeftString}/>
    
}


