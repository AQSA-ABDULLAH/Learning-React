import React, { useState } from 'react';

export default function GetInputValue() {
    const [data, setData] = useState(null);
    const [fatherData, updateData] = useState(null);
    const [printData, setPrint] = useState(false);

    function getName(event) {
        setData(event.target.value);
    }

    function getFatherName(event) {
        updateData(event.target.value);
        setPrint(false);
    }

    function handlePrint() {
        setPrint(true);
    }

    return (
        <div>
            <h3>Get Input Box Value Using Function</h3>
            <input type='text' placeholder='Enter your Name' onChange={getName} />
            <h3>{data}</h3>

            <input type='text' placeholder='Enter your father name' onChange={getFatherName} />
            <button onClick={handlePrint}>Print</button>
            {
                printData ?
                    <h3>{fatherData}</h3>
                    : null
            }
        </div>
    );
}


