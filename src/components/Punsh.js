import React from 'react';

function Punsh(params){
    return(
        <div>
            <p className="punchLine">
                {params.punsh}
            </p>
            <p className="punchSoft">
                {params.soft}
            </p>
        </div>
    )
}

export default Punsh;
