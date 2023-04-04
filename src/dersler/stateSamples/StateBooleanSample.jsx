import React, { useState } from 'react'

function StateBooleanSample() {

    const [onlineStatus, setOnlineStatus] = useState(true)

    return (<>
        {
            onlineStatus ? <h1>User Online</h1> : <h1>User Offline</h1>
        }
        <button onClick={() => setOnlineStatus(!onlineStatus)}>Change User Status</button>
        <hr></hr>
        <label>User Status  </label><input type='checkbox' checked={onlineStatus} onChange={() => setOnlineStatus(!onlineStatus)} />
    </>)
}

export default StateBooleanSample